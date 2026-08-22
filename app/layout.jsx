import "./globals.css";

export const metadata = {
  title: "World Science Academy | Helping Your Child Take the World Stage",
  description:
    "Personalized science-fair research mentorship across Asia, the Americas, and Europe — papers, posters, and presentations. Fully online.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
