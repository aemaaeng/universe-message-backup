export default async function getData() {
  const response = await fetch("data/data.json", {
    headers: {
      Accept: "application / json",
    },
    method: "GET",
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw new Error("데이터를 불러오는데 실패했습니다.");
}
