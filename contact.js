'use strict';

(() => {
  const shared = window.SITE_DATA;
  const data = window.CONTACT_DATA;
  if (!shared || !data) return;
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  })[char]);
  const href = value => value === '#gioi-thieu' ? 'gioi-thieu.html' : value === '#lien-he' ? 'lien-he-va-bao-gia.html' : value.startsWith('#') ? `index.html${value}` : value;
  const text = (selector,value) => { document.querySelector(selector).textContent=value; };
  const html = (selector,value) => { document.querySelector(selector).innerHTML=value; };
  const node = (tag,className,value) => {
    const result=document.createElement(tag);
    if(className)result.className=className;
    if(value!==undefined)result.textContent=value;
    return result;
  };
  document.title=data.page.title;
  document.querySelector('meta[name="description"]').content=data.page.description;
  document.querySelector('link[rel="icon"]').href=shared.site.favicon;
  document.querySelector('main').style.setProperty('--contact-background',data.page.background);
  document.querySelectorAll('.brand img,.footer-about img').forEach(image=>{image.src=shared.site.logo;image.alt=shared.site.logoAlt;});
  document.querySelector('.brand').href='index.html';
  document.querySelector('.brand').setAttribute('aria-label',`${shared.site.logoAlt} — Trang chủ`);
  const phone=`tel:${shared.contact.phone}`;
  const email=`mailto:${shared.contact.email}`;
  html('.topbar-contact',`<a href="${escape(phone)}">☎ <span>Hotline: ${escape(shared.contact.phoneDisplay)}</span></a><a href="${escape(email)}">✉ <span>${escape(shared.contact.email)}</span></a><span class="support"><span class="status-dot"></span> ${escape(shared.contact.support)}</span>`);
  html('.nav',shared.menu.map(item=>item.disabled || !item.href ? `<a role="link" aria-disabled="true">${escape(item.label)}</a>` : `<a href="${escape(href(item.href))}"${['#lien-he','lien-he-va-bao-gia.html'].includes(item.href)?' class="active" aria-current="page"':''}>${escape(item.label)}</a>`).join(''));

  html('.contact-badge',`<img src="assets/icons/carton.svg" width="14" height="14" alt="">${escape(data.page.badge)}`);
  html('.contact-heading',`<span>${escape(data.page.titleHighlight)}</span> ${escape(data.page.heading)}`);
  text('.contact-subtitle',data.page.subtitle);
  const formTitle=document.querySelector('.contact-form-title');
  const formIcon=node('img');formIcon.src=data.form.icon;formIcon.alt='';formIcon.width=16;formIcon.height=16;
  formTitle.replaceChildren(formIcon,document.createTextNode(data.form.title));
  const form=document.querySelector('.contact-form');
  form.setAttribute('aria-label',data.form.title);
  form.style.setProperty('--contact-button-start',data.form.buttonStartColor);
  form.style.setProperty('--contact-button-end',data.form.buttonEndColor);
  const controls=new Map();
  data.form.fields.forEach(field=>{
    const wrapper=node('div',`contact-field${field.width==='full'?' contact-field-full':''}`);
    if(field.heading)wrapper.append(node('p','contact-field-heading',field.heading));
    const label=node('label','',field.label);
    const input=node(field.type==='select'?'select':'input');
    input.id=`contact-${field.name}`;input.name=field.name;label.htmlFor=input.id;
    input.required=Boolean(field.required);
    if(field.type==='select'){
      (field.options||[]).forEach(option=>input.append(new Option(option,option)));
    }else{
      input.type=['text','number','tel','email'].includes(field.type)?field.type:'text';
      input.placeholder=field.placeholder||'';
      if(field.autocomplete)input.autocomplete=field.autocomplete;
      if(field.pattern)input.pattern=field.pattern;
      if(field.min!==undefined)input.min=field.min;
      if(field.step!==undefined)input.step=field.step;
      if(field.inputmode)input.inputMode=field.inputmode;
      else if(field.type==='number')input.inputMode=Number(field.step)===1?'numeric':'decimal';
    }
    if(field.value!==undefined){
      input.value=field.value;
      if(field.type!=='select')input.defaultValue=field.value;
    }
    wrapper.append(label,input);form.append(wrapper);controls.set(field.name,input);
  });
  const noteWrapper=node('div','contact-note-wrap');
  const note=node('div','contact-note');
  const noteIcon=node('span','contact-note-icon','i');noteIcon.setAttribute('aria-hidden','true');
  note.append(noteIcon,node('p','',data.form.note));noteWrapper.append(note);
  const submit=node('button','contact-submit');submit.type='submit';
  submit.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h11v12H3m11-8h4l3 4v4h-7M1 9h6m-7 4h7"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>';
  submit.append(document.createTextNode(data.form.submitLabel));
  const status=node('p','contact-email-status');status.hidden=true;status.setAttribute('role','status');status.setAttribute('aria-live','polite');
  form.append(noteWrapper,submit,status);

  text('.contact-info-card h2',data.sidebar.title);
  const infoList=document.querySelector('.contact-info-list');
  data.sidebar.items.forEach(item=>{
    const row=node('div','contact-info-item');
    const icon=node('img');icon.src=item.icon;icon.alt='';icon.width=20;icon.height=20;
    const details=node('div');details.append(node('h3','',item.label));
    const value=item.value||(item.source==='phone'?shared.contact.phoneDisplay:shared.contact[item.source])||'';
    const display=node(['phone','email'].includes(item.source)?'a':'p','contact-info-value',value);
    if(item.source==='phone')display.href=`tel:${item.value||shared.contact.phone}`;
    if(item.source==='email')display.href=`mailto:${value}`;
    details.append(display);row.append(icon,details);infoList.append(row);
  });
  text('.footer-company-name',shared.footer.description);
  document.querySelector('.footer-address').textContent = shared.contact.address;
  document.querySelectorAll('.footer-grid>div:not(.footer-about):not(.footer-contact)').forEach(column=>column.remove());
  const footerContact=document.querySelector('.footer-contact');
  footerContact.insertAdjacentHTML('beforebegin',shared.footer.columns.map(column=>`<div><h2>${escape(column.title)}</h2>${column.links.map(item=>item.href?`<a href="${escape(href(item.href))}">${escape(item.label)}</a>`:`<button type="button" class="footer-links-button">${escape(item.label)}</button>`).join('')}</div>`).join(''));
  footerContact.innerHTML=`<h2>${escape(shared.footer.contactTitle)}</h2><a href="${escape(phone)}"><span aria-hidden="true">☎</span> ${escape(shared.contact.phoneDisplay)}</a><a href="${escape(email)}"><span aria-hidden="true">✉</span> ${escape(shared.contact.email)}</a><p><span class="status-dot"></span> ${escape(shared.contact.support)}</p>`;
  text('.footer-bottom p',`© ${new Date().getFullYear()} ${shared.site.name}.`);
  text('.footer-bottom a',`${shared.footer.backTopLabel} ↑`);
  const floating=document.querySelector('.floating-contact');floating.href=phone;floating.setAttribute('aria-label',`Gọi tư vấn: ${shared.contact.phoneDisplay}`);

  window.QuoteEmail.bind({ form, fields: data.form.fields, controls, submit, status, email: data.email });
  const menu=document.querySelector('.nav');const toggle=document.querySelector('.menu-toggle');
  const closeMenu=()=>{menu.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Mở menu');};
  toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';menu.classList.toggle('is-open',open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Đóng menu':'Mở menu');});
  menu.addEventListener('click',event=>{if(event.target.closest('a[href]'))closeMenu();});
  document.addEventListener('click',event=>{if(!event.target.closest('.header'))closeMenu();});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.classList.contains('is-open')){closeMenu();toggle.focus();}});
  matchMedia('(min-width:1281px)').addEventListener('change',event=>{if(event.matches)closeMenu();});
  const backTop=document.querySelector('.back-top');
  const updateBackTop=()=>{backTop.hidden=scrollY<500;};
  window.addEventListener('scroll',updateBackTop,{passive:true});
  backTop.setAttribute('aria-label',shared.footer.backTopLabel);
  backTop.addEventListener('click',()=>{window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'});document.querySelector('.brand').focus({preventScroll:true});});
  updateBackTop();
})();
