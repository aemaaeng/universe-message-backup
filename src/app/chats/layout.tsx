import Navbar from "@/components/Navbar";
import Loading from "@/components/Loading";
import { Suspense } from "react";

export default function ChatListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navbar title="CHATS" />
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </main>
  );
}
