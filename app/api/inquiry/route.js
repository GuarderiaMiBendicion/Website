import { Resend } from 'resend';

export async function POST(req) {
  try {
    const body = await req.json();
    const required = ['name','email','message'];
    for (const key of required) if (!body[key]) return Response.json({error:`Missing ${key}`},{status:400});

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.INQUIRY_TO_EMAIL;
    const from = process.env.INQUIRY_FROM_EMAIL || 'Website <onboarding@resend.dev>';
    if (!apiKey || !to) return Response.json({error:'Email service is not configured yet.'},{status:500});

    const resend = new Resend(apiKey);
    await resend.emails.send({
      from,
      to,
      replyTo: body.email,
      subject: `New childcare inquiry from ${body.name}`,
      text: `Parent/Guardian: ${body.name}\nEmail: ${body.email}\nPhone: ${body.phone || '-'}\nChild age: ${body.childAge || '-'}\nDesired start date: ${body.startDate || '-'}\nDays needed: ${body.days || '-'}\nAssistance/vouchers: ${body.assistance || '-'}\n\nMessage:\n${body.message}`
    });
    return Response.json({ok:true});
  } catch (e) {
    console.error(e);
    return Response.json({error:'Unable to send inquiry.'},{status:500});
  }
}
