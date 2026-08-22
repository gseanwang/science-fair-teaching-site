"use client";

import { useState } from "react";

// 沒有照片(或照片還沒放進去)時,用英文名字縮寫當頭像;略過 Dr. 等稱謂。
function initials(nameEn) {
  return (nameEn || "")
    .split(" ")
    .filter((w) => w && !w.endsWith("."))
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Avatar({ photo, nameEn, name }) {
  const [failed, setFailed] = useState(false);

  if (photo && !failed) {
    return (
      <div className="fm-avatar">
        <img src={photo} alt={name} onError={() => setFailed(true)} />
      </div>
    );
  }
  return (
    <div className="fm-avatar">
      <span>{initials(nameEn)}</span>
    </div>
  );
}
