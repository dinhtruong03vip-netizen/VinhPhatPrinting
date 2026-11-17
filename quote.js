'use strict';

(() => {
  const data = window.QUOTE_DATA;
  const contact = window.SITE_DATA?.contact;
  if (!data || !contact) return;
  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const icons = {
    phone: '<path d="M6 3H3a1 1 0 0 0-1 1c0 9 7 16 16 16a1 1 0 0 0 1-1v-3l-4-2-2 2a14 14 0 0 1-7-7l2-2z"/>',
    email: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/>',
    address: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/>'
  };
  const dialog = element('dialog', 'quote-modal');
  dialog.id = 'quote-modal';
  dialog.setAttribute('aria-labelledby', 'quote-title');
  dialog.setAttribute('aria-describedby', 'quote-description');
  const close = element('button', 'quote-close', '×');
  close.type = 'button';
  close.setAttribute('aria-label', data.closeLabel);
  const layout = element('div', 'quote-layout');
  const sidebar = element('aside', 'quote-sidebar');
  const title = element('h2', '', data.title);
  title.id = 'quote-title';
  const description = element('p', 'quote-description', data.description);
  description.id = 'quote-description';
  sidebar.append(title, description);
  const contacts = element('div', 'quote-contacts');
  data.contacts.forEach(item => {
    const row = element('div', 'quote-contact');
    const icon = element('span', 'quote-contact-icon');
    icon.setAttribute('aria-hidden', 'true');
    icon.innerHTML = `<svg viewBox="0 0 24 24">${icons[item.source] || icons.address}</svg>`;
    const details = element('div');
    details.append(element('span', 'quote-contact-label', item.label));
    const value = item.value || (item.source === 'phone' ? contact.phoneDisplay : contact[item.source]) || '';
    const info = element(['phone','email'].includes(item.source) ? 'a' : 'span', 'quote-contact-value', value);
    if (item.source === 'phone') info.href = `tel:${item.value || contact.phone}`;
    if (item.source === 'email') info.href = `mailto:${value}`;
    details.append(info);
    row.append(icon, details);
    contacts.append(row);
  });
  sidebar.append(contacts);
  const main = element('div', 'quote-main');
  const form = element('form', 'quote-form');
  form.setAttribute('aria-label', data.title);
  const controls = new Map();
  data.fields.forEach(field => {
    const wrapper = element('div', `quote-field${field.width === 'full' ? ' quote-field-full' : ''}`);
    const label = element('label', '', `${field.label}${field.required ? '*' : ''}`);
    const input = element(field.type === 'select' ? 'select' : 'input');
    input.id = `quote-${field.name}`;
    input.name = field.name;
    input.required = Boolean(field.required);
    label.htmlFor = input.id;
    if (field.type === 'select') {
      (field.options || []).forEach(value => input.append(new Option(value, value)));
    } else {
      input.type = ['text','tel','email','number'].includes(field.type) ? field.type : 'text';
      input.placeholder = field.placeholder || '';
      if (field.autocomplete) input.autocomplete = field.autocomplete;
      if (field.pattern) input.pattern = field.pattern;
      if (field.min !== undefined) input.min = field.min;
      if (field.step !== undefined) input.step = field.step;
      if (field.type === 'number') input.inputMode = Number(field.step) === 1 ? 'numeric' : 'decimal';
    }
    if (field.value !== undefined) input.value = field.value;
    wrapper.append(label, input);
    form.append(wrapper);
    controls.set(field.name, input);
  });
  const submit = element('button', 'quote-submit', data.submitLabel);
  submit.type = 'submit';
  const status = element('p', 'quote-status');
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');
  status.hidden = true;
  form.append(submit, status);
  main.append(form);
  layout.append(sidebar, main);
  dialog.append(close, layout);
  document.body.append(dialog);

  let opener;
  document.addEventListener('click', event => {
    const trigger = event.target.closest('[data-quote-open], a[href="#bao-gia"]');
    if (!trigger) return;
    event.preventDefault();
    if (dialog.open) return;
    opener = trigger;
    if (trigger.dataset.quoteService && controls.has('product')) {
      controls.get('product').value = trigger.dataset.quoteService;
    }
    dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add('quote-open');
    // Tránh tự mở bàn phím che cửa sổ khi người dùng mở form trên điện thoại.
    close.focus({preventScroll:true});
  });
  close.addEventListener('click', () => dialog.close());
  let pointerOnBackdrop = false;
  const outside = event => {
    const rect = dialog.getBoundingClientRect();
    return event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  };
  dialog.addEventListener('pointerdown', event => { pointerOnBackdrop = event.target === dialog && outside(event); });
  dialog.addEventListener('click', event => {
    if (pointerOnBackdrop && event.target === dialog && outside(event)) dialog.close();
    pointerOnBackdrop = false;
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('quote-open');
    opener?.focus({preventScroll:true});
  });
  window.QuoteEmail.bind({ form, fields: data.fields, controls, submit, status, email: data.email });
})();
