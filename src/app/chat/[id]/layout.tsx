import Navbar from "@/components/Navbar";
import Loading from "@/components/Loading";
import { Suspense } from "react";

export default function ChatLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    id: string;
  };
}) {
  const { id } = params;

  return (
    <main>
      <Navbar title={id} />
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </main>
  );
}
