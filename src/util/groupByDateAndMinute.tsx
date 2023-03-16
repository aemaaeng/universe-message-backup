export type ChatMessage = {
  nickname: string;
  type: string;
  message: string;
  datetime: string;
};

export type ChatGroup = {
  date: string;
  chats: ChatMessage[][];
};

function groupChatsByDateAndMinute(chats: ChatMessage[]): ChatGroup[] {
  const chatGroups: ChatGroup[] = [];

  for (const chat of chats) {
    const chatDate = chat.datetime.substring(0, 10); // datetime에서 날짜만 뽑는다.

    let chatGroup = chatGroups.find((group) => group.date === chatDate);

    if (!chatGroup) {
      chatGroup = { date: chatDate, chats: [] };
      chatGroups.push(chatGroup);
    }

    // 분 단위로 묶는다.
    let minuteGroup = chatGroup.chats.find(
      (group) =>
        group[0].datetime.substring(11, 16) === chat.datetime.substring(11, 16)
    );

    if (!minuteGroup) {
      minuteGroup = [];
      chatGroup.chats.push(minuteGroup);
    }

    minuteGroup.push(chat);
  }

  return chatGroups;
}

export default groupChatsByDateAndMinute;
