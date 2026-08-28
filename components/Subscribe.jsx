"use client";

import { useEffect } from "react";
import { mailerlite } from "../data/mailerlite";

// MailerLite 嵌入式訂閱表單。腳本只會載入一次(多個區塊共用)。
const HINT = {
  tw: "送出後請到信箱點擊確認信中的按鈕,才算完成訂閱(若沒收到,請看看垃圾郵件匣)。",
  en: "After submitting, click the button in the confirmation email to finish subscribing (check your spam folder if it doesn\'t arrive).",
  cn: "提交后请到邮箱点击确认信中的按钮,才算完成订阅(若没收到,请看看垃圾邮件箱)。",
};

export default function Subscribe({ lang = "cn" }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // 已經載入過就直接重跑一次表單掃描
    if (window.ml) {
      window.ml("account", mailerlite.account);
      return;
    }

    (function (w, d, e, u, f, l, n) {
      w[f] =
        w[f] ||
        function () {
          (w[f].q = w[f].q || []).push(arguments);
        };
      l = d.createElement(e);
      l.async = 1;
      l.src = u;
      n = d.getElementsByTagName(e)[0];
      n.parentNode.insertBefore(l, n);
    })(window, document, "script", "https://assets.mailerlite.com/js/universal.js", "ml");

    window.ml("account", mailerlite.account);
  }, []);

  return (
    <>
      <div className="ml-embedded" data-form={mailerlite.formId} />
      <p className="subscribe-hint">{HINT[lang] || HINT.cn}</p>
    </>
  );
}
