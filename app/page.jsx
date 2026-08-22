import { redirect } from "next/navigation";
import { defaultLocale } from "../data/content";

// 打開網站根目錄時,自動導向預設語言(简体)
export default function RootRedirect() {
  redirect(`/${defaultLocale}`);
}
