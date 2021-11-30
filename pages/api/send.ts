const mailchimp = require('@mailchimp/mailchimp_transactional')('-MdSRnC1VGs5HSsptTHeGw');
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  
  const { email, position, name, phone, linkedIn, message } = req.body

  const content = {
    to: [{
      email: 'info@galaxis.co',
      type: "to"
    } ],
    from_email: "info@galaxis.co",
    from_name: name,
    subject: `Galaxis Demo (${position})`,
    text: message,
    html: `
      <p>Name : <b>${name}</b></p>
      <p>Email: <b>${email}</b></p>
      <p>Phone number : <b>${phone}</b></p>
      <p>LinkedIn: <b>${linkedIn}</b></p>
      <p>Position: <b>${position}</b></p>
      <p>${message}</p>
      `
  }
  try {
    const response = await mailchimp.messages.send({ message: content });
    console.log(response);
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }
}