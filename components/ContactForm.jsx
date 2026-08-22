"use client";

import { useState } from "react";
import { site } from "../data/site";

export default function ContactForm() {
  const c = site.contact;
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  // 還沒填 access key 時,顯示「即將開通」,避免表單失效
  if (!c.accessKey) {
    return (
      <div className="form-placeholder">
        <p>📮 諮詢表單即將開通,敬請期待。</p>
      </div>
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const f = e.target;

    // 用英文 key 當後台的欄位標籤(避免中文標籤在信件裡變亂碼);
    // 家長填的值(可為中文)以 UTF-8 JSON 送出,不會亂碼。
    const payload = {
      access_key: c.accessKey,
      subject: "New Inquiry — 科展輔導諮詢",
      from_name: "科展輔導網站",
      Name: f.Name.value,
      Email: f.Email.value,
      "Phone/LINE": f.Phone.value,
      Grade: f.Grade.value,
      "State/Fair": f.StateFair.value,
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
          家長姓名 *
          <input type="text" name="Name" required />
        </label>
        <label>
          聯絡 Email *
          <input type="email" name="Email" required />
        </label>
      </div>

      <div className="form-row">
        <label>
          電話 / LINE / WeChat
          <input type="text" name="Phone" />
        </label>
        <label>
          學生年級
          <input type="text" name="Grade" placeholder="例:9 年級" />
        </label>
      </div>

      <label>
        所在州 / 目標科展(選填)
        <input type="text" name="StateFair" placeholder="例:Indiana IAS STS" />
      </label>

      <label>
        想詢問的內容
        <textarea name="Message" rows="4" placeholder="孩子的興趣、比賽時程、任何問題…" />
      </label>

      <button className="btn btn-primary btn-lg block" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "送出中…" : "送出諮詢"}
      </button>

      {status === "error" && (
        <p className="form-error">送出失敗,請稍後再試,或直接與我們聯繫。</p>
      )}
    </form>
  );
}
