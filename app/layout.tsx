import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Doonext - Smart Software Solutions for Every Business",
  description: "Doonext provides powerful and easy-to-use software solutions to manage your business efficiently. From billing to ERP, CRM to payroll – we've got you covered.",
  icons: {
    icon: [
      { url: "/doonext-fav.png?v=2", type: "image/png" },
      { url: "/icon.png?v=2", type: "image/png" }
    ],
    shortcut: "/doonext-fav.png?v=2",
    apple: "/doonext-fav.png?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${poppins.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/doonext-fav.png?v=2" sizes="any" />
        <link rel="shortcut icon" href="/doonext-fav.png?v=2" />
        <link rel="apple-touch-icon" href="/doonext-fav.png?v=2" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className={`min-h-full flex flex-col bg-[#fafbfc] text-[#282023] ${poppins.className}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
