/*
 * Lead capture form — submits via FormSubmit.co (no backend required).
 * Delivery target: soleneconstruction@gmail.com
 *
 * NOTE: FormSubmit requires a one-time activation. The first submission triggers
 * a confirmation email to LEAD_EMAIL — click the link inside it and every later
 * submission is delivered straight to the inbox.
 */

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

const LEAD_EMAIL = "soleneconstruction@gmail.com";
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${LEAD_EMAIL}`;

type Field = "name" | "email" | "phone" | "subject";

const FIELDS: { id: Field; label: string; placeholder: string; type: string; autoComplete: string }[] = [
  { id: "name", label: "Full Name", placeholder: "John Smith", type: "text", autoComplete: "name" },
  { id: "email", label: "Email", placeholder: "john@example.com", type: "email", autoComplete: "email" },
  { id: "phone", label: "Phone Number", placeholder: "(689) 331-4029", type: "tel", autoComplete: "tel" },
  { id: "subject", label: "Subject", placeholder: "Kitchen cabinets estimate", type: "text", autoComplete: "off" },
];

const EMPTY = { name: "", email: "", phone: "", subject: "" };

function validate(values: typeof EMPTY) {
  const errors: Partial<Record<Field, string>> = {};

  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) errors.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  if (!values.phone.trim()) errors.phone = "Please enter your phone number.";
  else if (values.phone.replace(/\D/g, "").length < 10) errors.phone = "Please enter a valid phone number.";
  if (!values.subject.trim()) errors.subject = "Please tell us what this is about.";

  return errors;
}

export default function LeadForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [sending, setSending] = useState(false);

  const setField = (id: Field, value: string) => {
    setValues(prev => ({ ...prev, [id]: value }));
    setErrors(prev => (prev[id] ? { ...prev, [id]: undefined } : prev));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const found = validate(values);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      return;
    }

    setSending(true);
    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          Name: values.name.trim(),
          Email: values.email.trim(),
          Phone: values.phone.trim(),
          Subject: values.subject.trim(),
          _subject: `New website lead — ${values.subject.trim()}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!res.ok) throw new Error(`Request failed with status ${res.status}`);

      setValues(EMPTY);
      toast.success("Message sent!", {
        description: "Thanks for reaching out — our team will get back to you within 24 hours.",
      });
    } catch (err) {
      console.error("Lead form submission failed:", err);
      toast.error("We couldn't send your message.", {
        description: "Please try again, or call us at (689) 331-4029.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="py-24 lg:py-32" style={{ background: "#F8F6F2" }}>
      <div className="container mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="section-label block mb-4">Send Us a Message</span>
            <h2
              className="text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "#0D2B5E", fontFamily: "'Playfair Display', serif" }}
            >
              Request Your <span style={{ color: "#E8610A", fontStyle: "italic" }}>Free Quote</span>
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-lg" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
              Fill out the form below and our team will get back to you within 24 hours.
            </p>
            <div className="mx-auto w-16 h-px mt-6" style={{ background: "#E8610A" }} />
          </div>

          {/* Form card */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="p-8 lg:p-12"
            style={{
              background: "white",
              border: "1px solid #e8edf5",
              borderTop: "3px solid #E8610A",
              borderRadius: "2px",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FIELDS.map(field => (
                <div key={field.id} className={field.id === "subject" ? "md:col-span-2" : ""}>
                  <label
                    htmlFor={field.id}
                    className="block text-xs uppercase tracking-widest mb-2 font-semibold"
                    style={{ color: "#0D2B5E", fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {field.label} <span style={{ color: "#E8610A" }}>*</span>
                  </label>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    autoComplete={field.autoComplete}
                    placeholder={field.placeholder}
                    value={values[field.id]}
                    onChange={e => setField(field.id, e.target.value)}
                    aria-invalid={!!errors[field.id]}
                    aria-describedby={errors[field.id] ? `${field.id}-error` : undefined}
                    className="w-full px-4 py-3 text-sm outline-none transition-colors focus:border-[#E8610A]"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "#0D2B5E",
                      background: "#F8F6F2",
                      border: `1px solid ${errors[field.id] ? "#dc2626" : "#e8edf5"}`,
                      borderRadius: "2px",
                    }}
                  />
                  {errors[field.id] && (
                    <p id={`${field.id}-error`} className="mt-1.5 text-xs" style={{ color: "#dc2626", fontFamily: "'DM Sans', sans-serif" }}>
                      {errors[field.id]}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                disabled={sending}
                className="btn-orange inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                style={{ borderRadius: "2px", opacity: sending ? 0.7 : 1, cursor: sending ? "wait" : "pointer" }}
              >
                {sending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                {sending ? "Sending..." : "Send Message"}
              </button>
              <p className="text-xs text-gray-400 text-center sm:text-left" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                We respond within 24 hours. Your information is never shared.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
