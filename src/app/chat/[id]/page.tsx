import { notFound } from "next/navigation";
import GroupedByMin from "@/components/GroupedByMin";
import { ChatMessage } from "@/components/Bubble";

type ChatProps = {
  params: { id: string };
};

async function fetchChat(id: string) {
  const resp = await fetch(`http://localhost:3000/api/chat/${id}`, {
    headers: {
      Accept: "application/json",
    },
  });
  if (!resp.ok) return undefined;
  return resp.json();
}

export default async function Chats(props: ChatProps) {
  const id = props.params.id;
  const chat = await fetchChat(id);

  if (!chat) {
    notFound();
  }

  return (
    <div id="chatContainer">
      {chat.map((el: ChatMessage[], idx: number) => {
        return <GroupedByMin data={el} key={idx} />;
      })}
    </div>
  );
}
