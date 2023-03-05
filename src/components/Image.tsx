import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import NoImage from "../img/noImage.png";

const SImageContainer = styled.img`
  max-width: 70%;
  object-fit: contain;
  border-radius: 3px 20px 20px 3px;
  /* margin: 5px 0px; */
`;

function Image({ src, isLast }: { src: string; isLast: string }) {
  // ref로 돔에 바로 접근하기
  const imgRef = useRef<HTMLImageElement>(null);
  const observeRef = useRef<IntersectionObserver>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!observeRef.current) {
      // 새 인스턴스 생성
      observeRef.current = new IntersectionObserver(onIntersection, {
        threshold: 0.7,
      });
    }

    imgRef.current && observeRef.current.observe(imgRef.current); // 이미지 태그 관찰 시작
  }, []);

  // 뷰포트에 교차한다 = isLoading true, 아니다 isLoading false
  // 교차할 때 실행될 함수
  function onIntersection(
    entries: IntersectionObserverEntry[],
    io: IntersectionObserver
  ) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 관찰되고 있는 entry가 보이게 되면
        io.unobserve(entry.target); // 관찰을 끝내고
        setIsLoading(true); // 로딩 상태를 true로 설정한다
      }
    });
  }

  return (
    <SImageContainer
      className={isLast}
      ref={imgRef}
      src={isLoading ? `media/${src}` : NoImage}
      alt={src}
    ></SImageContainer>
  );
}

export default Image;
