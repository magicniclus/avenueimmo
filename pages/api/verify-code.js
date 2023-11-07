import Twilio from "twilio";

export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }

  const { phone, code } = req.body;
  const client = new Twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );

  try {
    const verificationCheck = await client.verify
      .services(process.env.TWILIO_VERIFICATION_SERVICE_SID)
      .verificationChecks.create({ to: phone, code: code });

    if (verificationCheck.status === "approved") {
      return res.status(200).json({ success: true });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Code de vérification incorrect" });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
