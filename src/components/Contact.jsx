import { useState } from "react";

const INFO = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
    label: "Email",
    value: "hello@minitravelexplorer.com",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92V21a1 1 0 0 1-1.1 1 19.9 19.9 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.9 19.9 0 0 1 3.18 4.21 1 1 0 0 1 4.17 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.29 1L8.21 10.3a16 16 0 0 0 6 6l1.52-1.71a1 1 0 0 1 1-.29l4 1a1 1 0 0 1 .75 1Z" />
      </svg>
    ),
    label: "Phone",
    value: "+1 (800) 123-4567",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Location",
    value: "123 Explorer Ave, Travel City",
  },
];

const EMPTY = { name: "", email: "", subject: "", message: "" };

function Field({ label, required, error, children }) {
  return (
    <div>
      <label
        style={{
          display: "block",
          fontSize: "0.8rem",
          fontWeight: 600,
          color: "var(--text-heading)",
          marginBottom: 8,
          fontFamily: "var(--font-heading)",
          letterSpacing: ".01em",
        }}
      >
        {label}{required && <span style={{ color: "var(--gold)", marginLeft: 4 }}>*</span>}
      </label>
      {children}
      {error && (
        <p role="alert" style={{ fontSize: "0.76rem", color: "#E11D48", marginTop: 6, fontWeight: 500 }}>
          {error}
        </p>
      )}
    </div>
  );
}

const INPUT_BASE = {
  width: "100%",
  padding: "13px 16px",
  borderRadius: "var(--r-md)",
  border: "1px solid var(--border)",
  background: "var(--surface)",
  color: "var(--text-heading)",
  fontSize: ".9rem",
  fontFamily: "var(--font-heading)",
  outline: "none",
  transition: "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)",
};

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [focusField, setFocusField] = useState(null);
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  }

  function fieldStyle(name) {
    const isFocus = focusField === name;
    const isError = !!errors[name];
    return {
      ...INPUT_BASE,
      borderColor: isError
        ? "rgba(225,29,72,.55)"
        : isFocus
          ? "var(--primary)"
          : "var(--border)",
      boxShadow: isError
        ? "0 0 0 4px rgba(225,29,72,.08)"
        : isFocus
          ? "0 0 0 4px var(--primary-50)"
          : "none",
      background: isFocus ? "#fff" : "var(--surface)",
    };
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSending(true);
    await new Promise((r) => setTimeout(r, 900));
    setSending(false);
    setSubmitted(true);
    setForm(EMPTY);
  }

  return (
    <section id="contact" aria-label="Contact" style={{ background: "var(--bg)" }}>
      <div className="container-p" style={{ paddingTop: "clamp(72px,9vw,112px)", paddingBottom: "clamp(72px,9vw,112px)" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="eyebrow">Contact</span>
          <h2 style={{ textAlign: "center", margin: 0 }}>
            We&apos;d Love to <em style={{ fontStyle: "italic", color: "var(--primary)" }}>Hear From You</em>
          </h2>
          <p style={{
            fontSize: ".98rem",
            color: "var(--text-body)",
            maxWidth: 500,
            margin: "14px auto 0",
            lineHeight: 1.7,
          }}>
            Questions about a destination or tour? Drop us a message — our team replies within 24 hours.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1.05fr 1.2fr",
          gap: 28,
          alignItems: "stretch",
        }} className="contact-grid">

          {/* ─── LEFT: Illustrated info panel ─── */}
          <div style={{
            position: "relative",
            borderRadius: "var(--r-2xl)",
            padding: "clamp(28px,4vw,44px)",
            color: "#fff",
            overflow: "hidden",
            background:
              "linear-gradient(155deg, #0B1220 0%, #0F172A 42%, #032B44 75%, #0EA5E9 140%)",
            minHeight: 520,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}>
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: -80, right: -80, width: 280, height: 280,
                background: "radial-gradient(circle at 30% 30%, rgba(14,165,233,.35), transparent 62%)",
                pointerEvents: "none",
              }}
            />
            <div
              aria-hidden
              style={{
                position: "absolute",
                bottom: -100, left: -60, width: 260, height: 260,
                background: "radial-gradient(circle at 60% 40%, rgba(199,155,87,.22), transparent 65%)",
                pointerEvents: "none",
              }}
            />

            <div style={{ position: "relative" }}>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "8px 14px",
                borderRadius: 999,
                background: "rgba(255,255,255,.08)",
                border: "1px solid rgba(255,255,255,.12)",
                backdropFilter: "blur(6px)",
                marginBottom: 22,
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2 2 12l10 10 10-10L12 2Zm0 0v20" />
                </svg>
                <span style={{
                  fontSize: ".7rem", letterSpacing: ".2em", textTransform: "uppercase",
                  fontWeight: 600, opacity: .95,
                }}>Reach Out Directly</span>
              </div>

              <h3 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem,2.3vw,1.95rem)",
                fontWeight: 700,
                lineHeight: 1.2,
                color: "#fff",
                margin: 0,
              }}>
                Let&apos;s plan your next great journey, together.
              </h3>
              <p style={{
                fontSize: ".9rem",
                color: "rgba(226,232,240,.78)",
                marginTop: 12,
                lineHeight: 1.7,
                maxWidth: 420,
              }}>
                Prefer a real conversation? Our travel specialists are on the line every day from 9am to 7pm EST.
              </p>
            </div>

            <ul style={{
              listStyle: "none", padding: 0, margin: "28px 0",
              display: "flex", flexDirection: "column", gap: 14, position: "relative",
            }}>
              {INFO.map((item) => (
                <li key={item.label} style={{
                  display: "flex",
                  gap: 14,
                  alignItems: "flex-start",
                  padding: "14px 16px",
                  borderRadius: "var(--r-lg)",
                  background: "rgba(255,255,255,.06)",
                  border: "1px solid rgba(255,255,255,.10)",
                  backdropFilter: "blur(4px)",
                  transition: "transform var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,.10)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,.06)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
                >
                  <span style={{
                    width: 40, height: 40, flexShrink: 0,
                    borderRadius: "var(--r-md)",
                    background: "linear-gradient(135deg, rgba(14,165,233,.35), rgba(199,155,87,.30))",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#fff",
                  }}>{item.icon}</span>
                  <div>
                    <p style={{
                      fontSize: ".68rem", fontWeight: 700, opacity: .65,
                      textTransform: "uppercase", letterSpacing: ".18em", marginBottom: 4,
                    }}>{item.label}</p>
                    <p style={{ fontSize: ".92rem", fontWeight: 500, margin: 0, color: "#F1F5F9" }}>
                      {item.value}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div style={{ position: "relative", borderRadius: "var(--r-xl)", overflow: "hidden", aspectRatio: "16/10", border: "1px solid rgba(255,255,255,.12)" }}>
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop&q=80"
                alt="Person planning a trip over a map"
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <div aria-hidden style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(180deg, transparent 40%, rgba(11,18,32,.55) 100%)",
              }} />
            </div>
          </div>

          {/* ─── RIGHT: Form card ─── */}
          <div style={{
            background: "var(--surface)",
            borderRadius: "var(--r-2xl)",
            padding: "clamp(28px,4vw,44px)",
            border: "1px solid var(--border-subtle)",
            boxShadow: "0 20px 50px -24px rgba(15,23,42,.12)",
          }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 8px", minHeight: 420, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <div style={{
                  width: 68, height: 68, borderRadius: "50%",
                  background: "var(--primary-50)",
                  color: "var(--primary)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 22,
                }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.75rem",
                  fontWeight: 700,
                  color: "var(--text-heading)",
                  marginBottom: 10,
                }}>
                  Message Sent!
                </h3>
                <p style={{ color: "var(--text-body)", fontSize: ".95rem", margin: "0 auto 28px", maxWidth: 360, lineHeight: 1.7 }}>
                  Thank you for reaching out. A travel specialist will get back to you within 24 hours.
                </p>
                <button className="btn-outline" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <div style={{ marginBottom: 28 }}>
                  <span className="eyebrow" style={{ marginBottom: 14 }}>Send a Message</span>
                  <h3 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.55rem",
                    fontWeight: 700,
                    color: "var(--text-heading)",
                    letterSpacing: "-.02em",
                    margin: 0,
                  }}>
                    Tell us about your dream trip
                  </h3>
                </div>

                <div style={{
                  display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16,
                }} className="form-name-email">
                  <Field label="Full Name" required error={errors.name}>
                    <input
                      id="name" name="name" type="text" autoComplete="name"
                      value={form.name} onChange={handleChange}
                      onFocus={() => setFocusField("name")}
                      onBlur={() => setFocusField((v) => (v === "name" ? null : v))}
                      placeholder="Jane Smith"
                      aria-required="true"
                      style={fieldStyle("name")}
                    />
                  </Field>
                  <Field label="Email" required error={errors.email}>
                    <input
                      id="email" name="email" type="email" autoComplete="email"
                      value={form.email} onChange={handleChange}
                      onFocus={() => setFocusField("email")}
                      onBlur={() => setFocusField((v) => (v === "email" ? null : v))}
                      placeholder="jane@example.com"
                      aria-required="true"
                      style={fieldStyle("email")}
                    />
                  </Field>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <Field label="Subject">
                    <input
                      id="subject" name="subject" type="text"
                      value={form.subject} onChange={handleChange}
                      onFocus={() => setFocusField("subject")}
                      onBlur={() => setFocusField((v) => (v === "subject" ? null : v))}
                      placeholder="e.g. Trip to Bali for two"
                      style={fieldStyle("subject")}
                    />
                  </Field>
                </div>

                <div style={{ marginBottom: 28 }}>
                  <Field label="Message" required error={errors.message}>
                    <textarea
                      id="message" name="message" rows={5}
                      value={form.message} onChange={handleChange}
                      onFocus={() => setFocusField("message")}
                      onBlur={() => setFocusField((v) => (v === "message" ? null : v))}
                      placeholder="Tell us where you'd like to go, when, and for how long…"
                      aria-required="true"
                      style={{
                        ...fieldStyle("message"),
                        resize: "vertical",
                        minHeight: 130,
                        lineHeight: 1.6,
                      }}
                    />
                  </Field>
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary"
                  style={{
                    width: "100%",
                    padding: "14px 22px",
                    fontSize: ".95rem",
                    opacity: sending ? .75 : 1,
                    cursor: sending ? "not-allowed" : "pointer",
                    justifyContent: "center",
                  }}
                >
                  {sending ? (
                    <>
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                        style={{ animation: "spin 0.8s linear infinite" }} aria-hidden="true">
                        <path strokeLinecap="round" d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 2 11 13" /><path d="m22 2-7 20-4-9-9-4 20-7Z" />
                      </svg>
                    </>
                  )}
                </button>

                <p style={{
                  fontSize: ".78rem",
                  color: "var(--text-muted)",
                  textAlign: "center",
                  marginTop: 16,
                }}>
                  We respect your privacy — your details are never shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 960px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .form-name-email { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
