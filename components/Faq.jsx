"use client";

import { useState } from "react";
import { site } from "../data/site";

export default function Faq() {
  const [open, setOpen] = useState(null);

  return (
    <div className="faq-list">
      {site.faq.map((item, i) => (
        <div className={"faq-item" + (open === i ? " open" : "")} key={i}>
          <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
            <span>{item.q}</span>
            <span className="faq-icon">{open === i ? "−" : "+"}</span>
          </button>
          {open === i && <div className="faq-a">{item.a}</div>}
        </div>
      ))}
    </div>
  );
}
