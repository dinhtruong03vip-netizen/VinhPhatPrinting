const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const source = fs.readFileSync(path.join(__dirname, '../quote-email.js'), 'utf8');

function setup(fetch, config = { serviceId: 'service_test', templateId: 'template_test', publicKey: 'public_test' }) {
  const window = { EMAILJS_CONFIG: config, location: { origin: 'https://example.com', pathname: '/quote' } };
  vm.runInNewContext(source, { window, fetch, TypeError });
  let handler;
  const form = {
    valid: true, resets: 0,
    addEventListener: (_, listener) => { handler = listener; },
    reportValidity() { return this.valid; },
    setAttribute() {}, removeAttribute() {},
    reset() { this.resets++; },
  };
  const fields = [{ name: 'fullName', label: 'Họ tên' }, { name: 'email', label: 'Email' }, { name: 'product', label: 'Sản phẩm' }];
  const controls = new Map([
    ['fullName', { value: ' Nguyễn Văn A ', disabled: false }],
    ['email', { value: 'customer@example.com', disabled: false }],
    ['product', { value: '<h1>Hộp giấy</h1>', disabled: false }],
  ]);
  const submit = { innerHTML: '<span>Gửi</span>', disabled: false };
  const status = { hidden: true, dataset: {} };
  window.QuoteEmail.bind({ form, fields, controls, submit, status, email: { subject: 'Báo giá', introduction: 'Yêu cầu mới', emptyValue: 'Chưa cung cấp' } });
  return { form, controls, submit, status, trigger: () => handler({ preventDefault() {} }) };
}

test('sends correct EmailJS payload and resets only after confirmation', async () => {
  let request;
  const fixture = setup(async (url, options) => { request = { url, ...options }; return { ok: true }; });
  await fixture.trigger();
  const payload = JSON.parse(request.body);
  assert.equal(request.url, 'https://api.emailjs.com/api/v1.0/email/send');
  assert.equal(payload.service_id, 'service_test');
  assert.equal(payload.template_id, 'template_test');
  assert.equal(payload.user_id, 'public_test');
  assert.equal(payload.template_params.reply_to, 'customer@example.com');
  assert.equal(payload.template_params.fullName, 'Nguyễn Văn A');
  assert.equal(payload.template_params.product, '<h1>Hộp giấy</h1>');
  assert.match(payload.template_params.message, /Họ tên: Nguyễn Văn A/);
  assert.equal(fixture.status.dataset.state, 'success');
  assert.equal(fixture.form.resets, 1);
  assert.equal(fixture.submit.innerHTML, '<span>Gửi</span>');
  assert.equal(fixture.submit.disabled, false);
});

test('ignores repeated submission while request is pending', async () => {
  let resolve, calls = 0;
  const fixture = setup(() => { calls++; return new Promise(done => { resolve = done; }); });
  const pending = fixture.trigger();
  assert.equal(fixture.submit.disabled, true);
  assert.equal(fixture.controls.get('email').disabled, true);
  assert.equal(fixture.status.dataset.state, 'pending');
  await fixture.trigger();
  assert.equal(calls, 1);
  assert.equal(fixture.form.resets, 0);
  resolve({ ok: true });
  await pending;
  assert.equal(fixture.controls.get('email').disabled, false);
});

test('preserves data and allows retry after EmailJS rejection', async () => {
  let calls = 0;
  const fixture = setup(async () => ({ ok: ++calls > 1, status: 422 }));
  await fixture.trigger();
  assert.equal(fixture.status.dataset.state, 'error');
  assert.equal(fixture.form.resets, 0);
  assert.equal(fixture.controls.get('fullName').value, ' Nguyễn Văn A ');
  assert.equal(fixture.submit.disabled, false);
  await fixture.trigger();
  assert.equal(fixture.status.dataset.state, 'success');
});

test('network failure and rate limiting show an error without clearing data', async () => {
  for (const fetch of [async () => { throw new TypeError('Network failure'); }, async () => ({ ok: false, status: 429 })]) {
    const fixture = setup(fetch);
    await fixture.trigger();
    assert.equal(fixture.status.dataset.state, 'error');
    assert.equal(fixture.form.resets, 0);
    assert.equal(fixture.submit.disabled, false);
  }
});

test('missing configuration does not send or report success', async () => {
  let calls = 0;
  const fixture = setup(async () => { calls++; return { ok: true }; }, {});
  await fixture.trigger();
  assert.equal(calls, 0);
  assert.equal(fixture.status.dataset.state, 'error');
  assert.equal(fixture.form.resets, 0);
});

test('invalid form does not send', async () => {
  let calls = 0;
  const fixture = setup(async () => { calls++; return { ok: true }; });
  fixture.form.valid = false;
  await fixture.trigger();
  assert.equal(calls, 0);
  assert.equal(fixture.status.hidden, true);
});
