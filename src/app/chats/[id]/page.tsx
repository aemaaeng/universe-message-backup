import GroupedByMin from "@/components/GroupedByMin";
import { ChatMessage } from "@/components/Bubble";
import Navbar from "@/components/Navbar";

type ChatProps = {
  params: { id: string };
};

export default async function Chats(props: ChatProps) {
  const id = props.params.id;
  const resp = await fetch(`http://localhost:3000/api/chat/${id}`, {
    headers: {
      Accept: "application/json",
    },
  });
  const chat = await resp.json();

  return (
    <>
      <Navbar title={id} />
      <div id="chats">
        {chat.map((el: ChatMessage[], idx: number) => {
          return <GroupedByMin data={el} key={idx} />;
        })}
      </div>
    </>
  );
}
