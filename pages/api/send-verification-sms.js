import Twilio from "twilio";

export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }

  const { phone } = req.body;
  const client = new Twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );

  try {
    // Ici, vous pouvez implémenter la logique pour générer et stocker un code de vérification

    const verification = await client.verify
      .services(process.env.TWILIO_VERIFICATION_SERVICE_SID)
      .verifications.create({ to: phone, channel: "sms" });

    return res.status(200).json({ success: true, sid: verification.sid });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
