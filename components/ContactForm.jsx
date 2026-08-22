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
    const formData = new FormData(e.target);
    formData.append("access_key", c.accessKey);
    formData.append("subject", "科展輔導課程 — 新諮詢");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
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
      {/* 防機器人的隱藏欄位 */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

      <div className="form-row">
        <label>
          家長姓名 *
          <input type="text" name="家長姓名" required />
        </label>
        <label>
          聯絡 Email *
          <input type="email" name="Email" required />
        </label>
      </div>

      <div className="form-row">
        <label>
          電話 / LINE / WeChat
          <input type="text" name="電話或通訊軟體" />
        </label>
        <label>
          學生年級
          <input type="text" name="學生年級" placeholder="例:9 年級" />
        </label>
      </div>

      <label>
        所在州 / 目標科展(選填)
        <input type="text" name="所在州或目標科展" placeholder="例:Indiana IAS STS" />
      </label>

      <label>
        想詢問的內容
        <textarea name="想詢問的內容" rows="4" placeholder="孩子的興趣、比賽時程、任何問題…" />
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
