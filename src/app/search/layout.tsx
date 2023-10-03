import Navbar from "@/components/Navbar";

export default function SearchListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navbar title="SEARCH" />
      {children}
    </main>
  );
}
