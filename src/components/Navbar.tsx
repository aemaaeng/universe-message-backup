import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as CalendarIcon } from "../icons/calendar.svg";
import { ReactComponent as ChatIcon } from "../icons/chats.svg";

const SFooter = styled.footer`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
`;

const SNavContainer = styled.div`
  height: 50px;
  display: flex;
  background-color: white;

  .menu {
    width: 50%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function Navbar() {
  const { pathname } = useLocation();

  // 현재 페이지 경로와 전달인자로 들어온 경로의 일치 여부를 확인해 색상을 리턴하는 함수
  function fillIcon(page: string) {
    if (pathname === page) {
      return "#7C4FFD";
    }
    return "#BBBBBB";
  }

  return (
    <SFooter>
      <SNavContainer>
        <Link to="/" className="menu">
          <ChatIcon width="23px" height="25px" fill={fillIcon("/")} />
        </Link>
        <Link to="/calendar" className="menu">
          <CalendarIcon
            width="23px"
            height="25px"
            fill={fillIcon("/calendar")}
          />
        </Link>
      </SNavContainer>
    </SFooter>
  );
}

export default Navbar;
