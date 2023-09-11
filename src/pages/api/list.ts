// 날짜 목록을 리턴하는 핸들러
import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../../data.json";

export interface Item {
  [key: string]: string | boolean | undefined;
  date: string;
  IMAGE?: boolean;
  VOD?: boolean;
  VOICE?: boolean;
}

type DateList = Item[];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const datelist: DateList = [];

  data.forEach((el) => {
    const obj: Item = { date: "" };
    obj.date = el.date;

    el.chats.forEach((grouped) => {
      grouped.forEach((chat) => {
        if (chat.type !== "TEXT") obj[chat.type] = true;
      });
    });

    datelist.push(obj);
  });

  res.status(200).json(datelist);
}
