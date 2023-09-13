// 날짜를 쿼리로 받아서 그 날짜에 해당하는 챗을 보내주는 핸들러
import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../../../data.json";
import { ChatMessage } from "@/components/Bubble";

interface GroupedByDate {
  date: string;
  chats: ChatMessage[][];
}

const assertedData: GroupedByDate[] = data as GroupedByDate[];

function binary_search(
  arr: GroupedByDate[],
  target: string,
  start: number,
  end: number
) {
  const targetDate = new Date(target);

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const midDate = new Date(arr[mid].date);

    if (String(midDate) === String(targetDate)) {
      return arr[mid].chats;
    } else if (midDate < targetDate) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (typeof id === "string") {
    const chat = binary_search(assertedData, id, 0, assertedData.length - 1);
    if (chat) res.status(200).json(chat);
    else res.status(404).json({ error: "Chat not found" });
  } else {
    res.status(404).json({ error: "Invalid Date" });
  }
}
