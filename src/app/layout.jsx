import "./globals.css";

export const metadata = {
  title: "Movil shop",
  description: "online movile shop",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>{children}
      </body>

    </html>
  );
}
