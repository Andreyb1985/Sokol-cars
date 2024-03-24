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
  return await sendEmail({
    to: "andriibakanov@gmail.com",
    subject: "SOKOL CARS REQUEST",
    html: render(WelcomeTemplate(data)),
  });
}
