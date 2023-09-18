import Navbar from "@/components/Navbar";

export default function ChatListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navbar title="CHATS" />
      {children}
    </main>
  );
}
