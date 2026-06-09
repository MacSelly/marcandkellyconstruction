import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, email, type, message } = body

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 })
    }

    // ── 1. Notify you of the new enquiry ─────────────────────────
    await resend.emails.send({
      from: 'Marc & Kelly Construction <onboarding@resend.dev>',
      to: ['markselly19@gmail.com'],
      replyTo: email,
      subject: `New enquiry from ${name} — ${type}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head><meta charset="utf-8" /></head>
          <body style="margin:0;padding:0;background:#f5f4f0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f4f0;padding:40px 20px;">
              <tr><td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;max-width:600px;">

                  <!-- Header -->
                  <tr>
                    <td style="background:#1e1a17;padding:28px 36px;">
                      <table cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="background:#c2620a;width:36px;height:36px;text-align:center;vertical-align:middle;">
                            <span style="font-family:Georgia,serif;font-size:18px;font-weight:bold;color:#fff;">M</span>
                          </td>
                          <td style="padding-left:12px;">
                            <span style="font-family:Georgia,serif;font-size:16px;font-weight:bold;color:#ffffff;text-transform:uppercase;letter-spacing:2px;">
                              MARC<span style="color:#c2620a;">&amp;</span>KELLY <span style="color:#c2620a;">CONSTRUCTION</span>
                            </span>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Alert banner -->
                  <tr>
                    <td style="background:#c2620a;padding:14px 36px;">
                      <p style="margin:0;font-size:13px;font-weight:bold;color:#fff;text-transform:uppercase;letter-spacing:1.5px;">
                        🔔 New Quote Enquiry Received
                      </p>
                    </td>
                  </tr>

                  <!-- Body -->
                  <tr>
                    <td style="padding:36px;">
                      <p style="margin:0 0 24px;font-size:15px;color:#444;line-height:1.6;">
                        You have a new project enquiry from <strong>${name}</strong>. Details below:
                      </p>

                      <!-- Details table -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8e5e0;">
                        ${[
                          ['Name', name],
                          ['Email', email],
                          ['Phone', phone || '—'],
                          ['Project Type', type || '—'],
                        ].map(([label, value], i) => `
                        <tr style="background:${i % 2 === 0 ? '#faf9f7' : '#ffffff'};">
                          <td style="padding:12px 16px;font-size:12px;font-weight:bold;color:#999;text-transform:uppercase;letter-spacing:1px;width:140px;border-bottom:1px solid #e8e5e0;">${label}</td>
                          <td style="padding:12px 16px;font-size:14px;color:#1e1a17;border-bottom:1px solid #e8e5e0;">${value}</td>
                        </tr>`).join('')}
                      </table>

                      <!-- Message -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:20px;border:1px solid #e8e5e0;">
                        <tr style="background:#faf9f7;">
                          <td style="padding:12px 16px;font-size:12px;font-weight:bold;color:#999;text-transform:uppercase;letter-spacing:1px;border-bottom:1px solid #e8e5e0;">
                            Project Details
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:16px;font-size:14px;color:#444;line-height:1.7;white-space:pre-wrap;">${message || 'No details provided.'}</td>
                        </tr>
                      </table>

                      <!-- CTA -->
                      <table cellpadding="0" cellspacing="0" style="margin-top:28px;">
                        <tr>
                          <td style="background:#c2620a;padding:0;">
                            <a href="mailto:${email}" style="display:inline-block;padding:14px 28px;font-size:13px;font-weight:bold;color:#fff;text-decoration:none;text-transform:uppercase;letter-spacing:1.5px;">
                              Reply to ${name} →
                            </a>
                          </td>
                        </tr>
                      </table>

                      <p style="margin:28px 0 0;font-size:13px;color:#999;line-height:1.6;">
                        This enquiry was submitted via the contact form on your website. Hit reply to respond directly to the client.
                      </p>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background:#1e1a17;padding:20px 36px;">
                      <p style="margin:0;font-size:12px;color:#666;text-align:center;">
                        Marc &amp; Kelly Construction &middot; Dansoman, Accra, Ghana &middot; markselly19@gmail.com
                      </p>
                    </td>
                  </tr>

                </table>
              </td></tr>
            </table>
          </body>
        </html>
      `,
    })

    // ── 2. Auto-reply to the person who contacted you ────────────
    await resend.emails.send({
      from: 'Marc & Kelly Construction <onboarding@resend.dev>',
      to: [email],
      subject: `Thanks for reaching out, ${name.split(' ')[0]}!`,
      html: `
        <!DOCTYPE html>
        <html>
          <head><meta charset="utf-8" /></head>
          <body style="margin:0;padding:0;background:#f5f4f0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f4f0;padding:40px 20px;">
              <tr><td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;max-width:600px;">

                  <!-- Header -->
                  <tr>
                    <td style="background:#1e1a17;padding:28px 36px;">
                      <table cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="background:#c2620a;width:36px;height:36px;text-align:center;vertical-align:middle;">
                            <span style="font-family:Georgia,serif;font-size:18px;font-weight:bold;color:#fff;">M</span>
                          </td>
                          <td style="padding-left:12px;">
                            <span style="font-family:Georgia,serif;font-size:16px;font-weight:bold;color:#ffffff;text-transform:uppercase;letter-spacing:2px;">
                              MARC<span style="color:#c2620a;">&amp;</span>KELLY <span style="color:#c2620a;">CONSTRUCTION</span>
                            </span>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Hero strip -->
                  <tr>
                    <td style="background:#c2620a;padding:14px 36px;">
                      <p style="margin:0;font-size:13px;font-weight:bold;color:#fff;text-transform:uppercase;letter-spacing:1.5px;">
                        ✓ We've received your enquiry
                      </p>
                    </td>
                  </tr>

                  <!-- Body -->
                  <tr>
                    <td style="padding:36px;">
                      <h1 style="margin:0 0 16px;font-family:Georgia,serif;font-size:26px;font-weight:bold;color:#1e1a17;line-height:1.2;">
                        Thank you, ${name.split(' ')[0]}!
                      </h1>
                      <p style="margin:0 0 20px;font-size:15px;color:#444;line-height:1.7;">
                        We've received your enquiry about <strong>${type}</strong> and we appreciate you reaching out to Marc &amp; Kelly Construction.
                      </p>
                      <p style="margin:0 0 20px;font-size:15px;color:#444;line-height:1.7;">
                        Our team will review your project details and get back to you within <strong>one business day</strong> to discuss next steps and arrange a free on-site estimate.
                      </p>

                      <!-- What to expect -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin:24px 0;border:1px solid #e8e5e0;background:#faf9f7;">
                        <tr>
                          <td style="padding:16px 20px;border-bottom:1px solid #e8e5e0;">
                            <p style="margin:0;font-size:12px;font-weight:bold;color:#c2620a;text-transform:uppercase;letter-spacing:1px;">What happens next?</p>
                          </td>
                        </tr>
                        ${[
                          ['1', 'We review your project details'],
                          ['2', 'We call or email you within 1 business day'],
                          ['3', 'We schedule a free on-site estimate'],
                          ['4', 'You get a detailed, no-obligation quote'],
                        ].map(([num, step]) => `
                        <tr>
                          <td style="padding:12px 20px;border-bottom:1px solid #e8e5e0;">
                            <table cellpadding="0" cellspacing="0">
                              <tr>
                                <td style="background:#c2620a;width:24px;height:24px;text-align:center;vertical-align:middle;font-size:11px;font-weight:bold;color:#fff;">${num}</td>
                                <td style="padding-left:12px;font-size:14px;color:#444;">${step}</td>
                              </tr>
                            </table>
                          </td>
                        </tr>`).join('')}
                      </table>

                      <p style="margin:0 0 8px;font-size:15px;color:#444;line-height:1.7;">
                        In the meantime, if you have any urgent questions feel free to reach us directly:
                      </p>
                      <table cellpadding="0" cellspacing="0" style="margin-top:8px;">
                        <tr>
                          <td style="padding:4px 0;font-size:14px;color:#444;">
                            📞 <a href="tel:+233249659930" style="color:#c2620a;text-decoration:none;">+233 249 659 930</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:4px 0;font-size:14px;color:#444;">
                            ✉️ <a href="mailto:markselly19@gmail.com" style="color:#c2620a;text-decoration:none;">markselly19@gmail.com</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:4px 0;font-size:14px;color:#444;">
                            📍 Dansoman, Accra, Ghana
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background:#1e1a17;padding:20px 36px;">
                      <p style="margin:0;font-size:12px;color:#666;text-align:center;line-height:1.6;">
                        &copy; ${new Date().getFullYear()} Marc &amp; Kelly Construction &middot; Dansoman, Accra, Ghana<br/>
                        <span style="color:#555;">You're receiving this because you submitted an enquiry on our website.</span>
                      </p>
                    </td>
                  </tr>

                </table>
              </td></tr>
            </table>
          </body>
        </html>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Server error.' }, { status: 500 })
  }
}
