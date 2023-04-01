export type ChatMessage = {
  nickname: string;
  type: string;
  message: string;
  datetime: string;
};

function groupByMinute(messages: ChatMessage[]): Record<string, ChatMessage[]> {
  const groupedMessages: Record<string, ChatMessage[]> = {};

  messages.forEach((msg) => {
    const minute = msg.datetime.slice(0, 16);
    if (!groupedMessages[minute]) {
      groupedMessages[minute] = [];
    }
    groupedMessages[minute].push(msg);
  });

  return groupedMessages;
}

export default groupByMinute;
