"use client";

import { useState } from "react";

export default function ContactForm({ contact }) {
  const c = contact;
  const F = c.fields;
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  if (!c.accessKey) {
    return (
      <div className="form-placeholder">
        <p>{c.placeholderText}</p>
      </div>
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const f = e.target;
    const payload = {
      access_key: c.accessKey,
      subject: c.subject,
      from_name: "World Science Academy",
      Name: f.Name.value,
      Email: f.Email.value,
      "Phone/LINE": f.Phone.value,
      Grade: f.Grade.value,
      "Region/Fair": f.Region.value,
      Message: f.Message.value,
    };
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return <div className="form-success">{c.successMessage}</div>;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          {F.name} *
          <input type="text" name="Name" required />
        </label>
        <label>
          {F.email} *
          <input type="email" name="Email" required />
        </label>
      </div>
      <div className="form-row">
        <label>
          {F.phone}
          <input type="text" name="Phone" />
        </label>
        <label>
          {F.grade}
          <input type="text" name="Grade" placeholder={F.gradePh} />
        </label>
      </div>
      <label>
        {F.region}
        <input type="text" name="Region" placeholder={F.regionPh} />
      </label>
      <label>
        {F.message}
        <textarea name="Message" rows="4" placeholder={F.messagePh} />
      </label>
      <button className="btn btn-primary btn-lg block" type="submit" disabled={status === "sending"}>
        {status === "sending" ? c.sendingText : c.submitText}
      </button>
      {status === "error" && <p className="form-error">{c.errorText}</p>}
    </form>
  );
}
