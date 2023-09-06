// chatlist
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default async function ChatList() {
  const resp = await fetch("http://localhost:3000/api/list");
  const list = await resp.json();

  return (
    <>
      <Navbar title="list" />
      {list.map((date: string, index: number) => {
        return (
          <li key={index}>
            <Link href={`chats/${date}`}>{date}</Link>
          </li>
        );
      })}
    </>
  );
}
