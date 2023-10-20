import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../../data.json";
import { Item } from "./list";
import { GroupedByDate } from "./chat/[id]";
import { cors, runMiddleware } from "../../utils/cors";

const assertedData: GroupedByDate[] = data as GroupedByDate[];

function searchMessage(keyword: string) {
  const results: Item[] = [];

  assertedData.forEach((groupedByDate) => {
    const obj: Item = { date: "" };
    obj.date = groupedByDate.date;

    groupedByDate.chats.forEach((grouped) => {
      grouped.forEach((chat) => {
        if (chat.type !== "TEXT") {
          if (chat.type === "IMAGE") {
            obj.IMAGE = true;
            if (!obj.imgSrc) obj.imgSrc = chat.message;
          } else obj[chat.type] = true;
        } else if (
          chat.type === "TEXT" &&
          String(chat.message).includes(keyword)
        ) {
          obj.message = chat.message;
          return;
        }
      });
    });

    obj.message ? results.push(obj) : null;
  });

  return results;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let { keyword } = req.query;
  if (Array.isArray(keyword)) {
    keyword = keyword.join("");
  }
  const result = searchMessage(keyword!);

  await runMiddleware(req, res, cors);

  res.status(200).json({ result: result });
}
