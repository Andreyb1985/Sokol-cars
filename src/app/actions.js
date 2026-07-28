'use server'

// export async function postContactsForm(values: FormValues) {
//   try {
//     await fetch(STRAPI_URL + '/api/feedbacks', {
//       headers: {Authorization: 'Bearer ' + POST_STRAPI_BEARER, 'Content-Type': 'application/json'},
//       method: 'POST',
//       body: JSON.stringify({data: values}),
//     })
//   } catch (error) {
//     console.error('DEBUG Database feedbacks Error:', error)
//   }
// }
import { render } from "@react-email/render";
import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { sendEmail } from "@/lib/email";

export async function handler(data) {
  const requestId = crypto.randomUUID();
  const recipient = process.env.CONTACT_FORM_RECIPIENT;

  if (!recipient) {
    console.error(`[contact-form][${requestId}] Server configuration error`, {
      missingVariable: "CONTACT_FORM_RECIPIENT",
    });

    return {
      ok: false,
      requestId,
      error: "Server email configuration is incomplete",
    };
  }

  console.info(`[contact-form][${requestId}] Request received by server`, {
    recipient,
    fields: {
      name: Boolean(data?.name),
      phoneNumber: Boolean(data?.phoneNumber),
      email: Boolean(data?.email),
      carLink: Boolean(data?.carLink),
      message: Boolean(data?.message),
    },
  });

  try {
    const result = await sendEmail({
      to: recipient,
      subject: "SOKOL CARS REQUEST",
      html: render(WelcomeTemplate({
        name: data?.name,
        phoneNumber: data?.phoneNumber,
        email: data?.email,
        carLink: data?.carLink,
        message: data?.message,
      })),
    });

    const response = {
      ok: true,
      requestId,
      messageId: result.messageId,
      accepted: result.accepted,
      rejected: result.rejected,
      smtpResponse: result.response,
    };

    console.info(`[contact-form][${requestId}] SMTP delivery accepted`, response);

    return response;
  } catch (error) {
    console.error(`[contact-form][${requestId}] SMTP delivery failed`, {
      name: error?.name,
      message: error?.message,
      code: error?.code,
      command: error?.command,
      responseCode: error?.responseCode,
      response: error?.response,
    });

    return {
      ok: false,
      requestId,
      error: "Email delivery failed",
      code: error?.code,
      responseCode: error?.responseCode,
    };
  }
}
