"use client";

import { useEffect } from "react";
import { mailerlite } from "../data/mailerlite";

// MailerLite 嵌入式訂閱表單。腳本只會載入一次(多個區塊共用)。
export default function Subscribe() {
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

  return <div className="ml-embedded" data-form={mailerlite.formId} />;
}
