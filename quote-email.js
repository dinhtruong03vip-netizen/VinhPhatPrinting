'use strict';

(() => {
  let sending = false;

  // EmailJS REST API: https://www.emailjs.com/docs/rest-api/send/
  const send = async (fields, values, email) => {
    const config = window.EMAILJS_CONFIG;
    if (!config?.serviceId?.trim() || !config?.templateId?.trim() || !config?.publicKey?.trim()) {
      throw new Error('Dịch vụ gửi yêu cầu chưa sẵn sàng. Vui lòng gọi hotline để được tư vấn.');
    }
    if (sending) throw new Error('Một yêu cầu đang được gửi. Vui lòng chờ trong giây lát.');
    sending = true;
    try {
      const message = [email.introduction, '', ...fields.map(field =>
        `${field.label}: ${values[field.name] || email.emptyValue}`
      )].join('\n');
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: config.serviceId.trim(),
          template_id: config.templateId.trim(),
          user_id: config.publicKey.trim(),
          template_params: {
            ...values,
            from_name: values.fullName,
            reply_to: values.email,
            subject: email.subject,
            message,
            page_url: window.location.origin + window.location.pathname,
          },
        }),
      });
      if (!response.ok) {
        throw new Error(response.status === 429
          ? 'Hệ thống đang nhận nhiều yêu cầu. Vui lòng thử lại sau ít phút hoặc gọi hotline.'
          : 'Chưa gửi được yêu cầu. Vui lòng thử lại hoặc gọi hotline để được hỗ trợ.');
      }
    } catch (error) {
      if (error instanceof TypeError) {
        throw new Error('Không kết nối được dịch vụ gửi yêu cầu. Vui lòng kiểm tra mạng và thử lại.');
      }
      throw error;
    } finally {
      sending = false;
    }
  };

  const bind = ({ form, fields, controls, submit, status, email }) => {
    let pending = false;
    form.addEventListener('submit', async event => {
      event.preventDefault();
      if (pending || !form.reportValidity()) return;
      pending = true;
      const originalLabel = submit.innerHTML;
      const inputs = [...controls.values()];
      const disabledStates = inputs.map(input => input.disabled);
      const values = Object.fromEntries(fields.map(field => [field.name, controls.get(field.name).value.trim()]));
      submit.disabled = true;
      submit.textContent = 'ĐANG GỬI YÊU CẦU…';
      inputs.forEach(input => { input.disabled = true; });
      form.setAttribute('aria-busy', 'true');
      status.hidden = false;
      status.dataset.state = 'pending';
      status.textContent = 'Đang gửi thông tin đến Vinh Phát, vui lòng chờ…';
      try {
        await send(fields, values, email);
        status.dataset.state = 'success';
        status.textContent = 'Đã gửi yêu cầu báo giá thành công. Vinh Phát sẽ liên hệ tư vấn cho bạn.';
        form.reset();
      } catch (error) {
        status.dataset.state = 'error';
        status.textContent = error.message || 'Chưa gửi được yêu cầu. Vui lòng thử lại.';
      } finally {
        inputs.forEach((input, index) => { input.disabled = disabledStates[index]; });
        submit.disabled = false;
        submit.innerHTML = originalLabel;
        form.removeAttribute('aria-busy');
        pending = false;
      }
    });
  };

  window.QuoteEmail = { bind };
})();
