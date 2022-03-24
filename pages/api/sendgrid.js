import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: ["rosebudturner@gmail.com", "ryankirsch88@gmail.com"], // Your email where you'll receive emails
      from: "rosebudturnerdotcom@gmail.com", // your website email address here
      subject: `Message From ${req.body.name} via rosebudturner.com`,
      html: `<div>${req.body.message}</div><p>Sent from:
      ${req.body.email}</p>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ status: "OK!" });
}

export default sendEmail;