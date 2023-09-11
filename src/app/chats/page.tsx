// chatlist
import Navbar from "@/components/Navbar";
import ListItem from "@/components/ListItem";
import { Item } from "@/pages/api/list";

export default async function ChatList() {
  const resp = await fetch("http://localhost:3000/api/list", {
    cache: "no-cache",
  });
  const list = await resp.json();

  return (
    <>
      <Navbar title="CHATS" />
      <ol>
        {list.map((item: Item, index: number) => {
          return <ListItem key={index} content={item.date} id={index} />;
        })}
      </ol>
    </>
  );
}
