/**
 * Perfictus website – Contact form mailer (Google Apps Script)
 *
 * Receives the Contact page form and emails it to TO with a copy to CC.
 *
 * SETUP (one time, about 5 minutes):
 *  1. Sign in to Google as the account that should send the emails, then open https://script.google.com
 *  2. New project → delete the sample code → paste this whole file → Save (name it "Perfictus Contact Form").
 *  3. Deploy → New deployment → gear icon → "Web app".
 *       Execute as:      Me
 *       Who has access:  Anyone
 *     → Deploy → Authorize access → choose your account → "Advanced" → "Go to Perfictus Contact Form" → Allow.
 *  4. Copy the "Web app URL" (https://script.google.com/macros/s/…/exec) and put it in
 *     CONTACT_FORM.endpoint in src/app/data/site-content.ts.
 *
 * After editing this script later: Deploy → Manage deployments → edit (pencil) → Version: "New version" → Deploy.
 * The URL stays the same.
 */

const TO = 'info@perfictus.com';
const CC = 'vijaijesudoss@gmail.com';
const SUBJECT = 'New enquiry from perfictus.com';

function doPost(e) {
  try {
    const d = JSON.parse((e && e.postData && e.postData.contents) || '{}');

    // Spam trap: real visitors never fill in this hidden field.
    if (d.company) return json({ ok: true });

    const name = clean(d.name, 80);
    const email = clean(d.email, 120);
    const phone = clean(d.phone, 60);
    const service = clean(d.service, 80);
    const message = clean(d.message, 2000);
    const page = clean(d.page, 200);

    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || !phone || !service) {
      return json({ ok: false, error: 'Please fill in all required fields.' });
    }

    // Light flood protection: one message per email address every 30 seconds.
    const cache = CacheService.getScriptCache();
    const key = 'sent:' + email.toLowerCase();
    if (cache.get(key)) return json({ ok: true });
    cache.put(key, '1', 30);

    const rows = [
      ['Name', name],
      ['Email', email],
      ['Mobile', phone],
      ['Service', service],
      ['Message', message || '—'],
      ['Page', page || 'perfictus.com'],
      ['Received', Utilities.formatDate(new Date(), 'Asia/Kolkata', 'd MMM yyyy, h:mm a') + ' IST'],
    ];

    const html =
      '<div style="font-family:Arial,sans-serif;font-size:14px;color:#111">' +
      '<h2 style="margin:0 0 14px;color:#00b46b">New enquiry from the website</h2>' +
      '<table cellpadding="10" style="border-collapse:collapse;max-width:640px">' +
      rows.map(function (r) {
        return '<tr><td style="border:1px solid #e3e3e3;background:#f6faf8;font-weight:bold;white-space:nowrap;vertical-align:top">' +
          esc(r[0]) + '</td><td style="border:1px solid #e3e3e3;white-space:pre-wrap">' + esc(r[1]) + '</td></tr>';
      }).join('') +
      '</table><p style="color:#777;font-size:12px">Reply to this email to answer ' + esc(name) + ' directly.</p></div>';

    MailApp.sendEmail({
      to: TO,
      cc: CC,
      replyTo: email,
      name: 'Perfictus Website',
      subject: SUBJECT + ' – ' + service,
      htmlBody: html,
      body: rows.map(function (r) { return r[0] + ': ' + r[1]; }).join('\n'),
    });

    return json({ ok: true });
  } catch (err) {
    console.error(err);
    return json({ ok: false, error: 'Server error' });
  }
}

// Opening the Web app URL in a browser shows this, so you can check the deployment is live.
function doGet() {
  return json({ ok: true, status: 'Perfictus contact form is running' });
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function clean(value, max) {
  return String(value == null ? '' : value).trim().slice(0, max);
}

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
