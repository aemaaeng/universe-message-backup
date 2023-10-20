// 날짜 목록을 리턴하는 핸들러
import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../../data.json";
import { GroupedByDate } from "./chat/[id]";
import { cors, runMiddleware } from "../../utils/cors";

const assertedData: GroupedByDate[] = data as GroupedByDate[];

export interface Item {
  [key: string]: string | boolean | undefined;
  date: string;
  IMAGE?: boolean;
  VOD?: boolean;
  VOICE?: boolean;
  message?: string;
  imgSrc?: string;
}

type DateList = Item[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const datelist: DateList = [];

  assertedData.forEach((el) => {
    const obj: Item = { date: "" };
    obj.date = el.date;

    el.chats.forEach((grouped) => {
      grouped.forEach((chat) => {
        if (chat.type !== "TEXT") {
          if (chat.type === "IMAGE") {
            obj.IMAGE = true;
            if (!obj.imgSrc) obj.imgSrc = chat.message;
          } else obj[chat.type] = true;
        }
      });
    });

    datelist.push(obj);
  });

  await runMiddleware(req, res, cors);

  res.status(200).json(datelist);
}
