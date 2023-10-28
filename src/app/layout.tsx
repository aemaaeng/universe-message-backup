import "./global.css";
import type { Metadata } from "next";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "햄니버스",
  description: "기현 유니버스 프라이빗 메시지 백업",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
