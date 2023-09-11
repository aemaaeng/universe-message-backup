// chatlist
import Navbar from "@/components/Navbar";
import ListItem from "@/components/ListItem";

export default async function ChatList() {
  const resp = await fetch("http://localhost:3000/api/list");
  const list = await resp.json();

  return (
    <>
      <Navbar title="CHATS" />
      {list.map((date: string, index: number) => {
        return <ListItem content={date} id={index} />;
      })}
    </>
  );
}
