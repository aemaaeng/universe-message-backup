// 날짜 목록을 리턴하는 핸들러
import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../../data.json";

type DateList = string[];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const datelist: DateList = data.map((el) => el.date);
  res.status(200).json(datelist);
}
