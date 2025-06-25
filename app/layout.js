import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata = {
  title: "Bustline - Secure Password Manager",
  icons: {
    icon: "/bustline.png",
    shortcut: "/bustline.png",
  },
  description:
    "End-to-end encrypted password manager with a seamless autofill extension for secure, on-the-go access.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} ${GeistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
