import Link from "next/link";

function Home() {
  return (
    <>
      {/* 메시지 연도 선택 버튼 렌더링하기? */}
      <p>몬스타엑스 기현 유니버스 프라이빗 메시지 백업공간</p>
      <p>from 2022-03-10 to 2023-02-14</p>
      <button>
        <Link href="/chats">입장하기</Link>
      </button>
    </>
  );
}

export default Home;
