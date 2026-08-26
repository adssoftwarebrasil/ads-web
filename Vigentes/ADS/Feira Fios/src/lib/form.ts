export async function sendEmail(info: {
  full_name: string;
  email: string;
  phone: string;
  service_type: string;
  message: string;
}) {
  const response = await fetch(
    "https://feira-fios-api.netlify.app/.netlify/functions/send-email",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        full_name: info.full_name,
        email: info.email,
        phone: info.phone,
        service_type: info.service_type,
        message: info.message,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to send email");
  }

  return response.json();
}