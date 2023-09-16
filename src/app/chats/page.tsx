// chatlist
import Navbar from "@/components/Navbar";
import ListItem from "@/components/ListItem";
import { Item } from "@/pages/api/list";

export default async function ChatList() {
  const resp = await fetch("http://localhost:3000/api/list");
  const list = await resp.json();

  return (
    <>
      <Navbar title="CHATS" />
      <ol id="chatlist">
        {list.map((item: Item, index: number) => {
          const { IMAGE, VOD, VOICE } = item;
          const media = { IMAGE, VOD, VOICE };

          return (
            <ListItem
              key={index}
              content={item.date}
              id={index}
              media={media}
            />
          );
        })}
      </ol>
    </>
  );
}
