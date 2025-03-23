import "./globals.css";
import {Toaster} from "sonner"

export const metadata = {
  title: "Movil shop",
  description: "online movile shop",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>{children}
        <Toaster/>
      </body>

    </html>
  );
}
