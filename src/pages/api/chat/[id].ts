// 날짜를 쿼리로 받아서 그 날짜에 해당하는 챗을 보내주는 핸들러
import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../../../data.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const chat = data.filter((el) => el.date === String(id))[0];
  res.status(200).json(chat.chats);
}
