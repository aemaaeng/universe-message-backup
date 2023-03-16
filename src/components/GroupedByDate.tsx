import { ChatGroup } from "../util/groupByDateAndMinute";
import GroupedByMin from "./GroupedByMin";

function GroupedByDate({ data }: { data: ChatGroup }) {
  return (
    <>
      <div>{data.date}</div>
      {data.chats.map((byDate, idx) => (
        <GroupedByMin key={idx} data={byDate} />
      ))}
    </>
  );
}

export default GroupedByDate;
