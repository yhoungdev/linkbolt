import Plunk from "@plunk/node";

interface ISendMail {
  email: string;
  subject: string;
  body: any;
}

export const sendMail = async ({ email, subject, body }: ISendMail) => {
  const plunk = new Plunk(import.meta.env.VITE_APP_PLUNK_SKEY);
  await plunk.emails.send({
    to: email,
    subject: subject,
    body: body,
  });

  console.log("sending mail");
};
