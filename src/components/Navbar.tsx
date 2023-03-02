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
  align-items: center;
  justify-content: space-around;
  background-color: white;
`;

function Navbar() {
  const { pathname } = useLocation();

  function fillIcon(page: string) {
    if (pathname === page) {
      return "#7C4FFD";
    }
    return "#BBBBBB";
  }

  return (
    <SFooter>
      <SNavContainer>
        <Link to="/">
          <ChatIcon width="23px" height="25px" fill={fillIcon("/")} />
        </Link>
        <Link to="/calendar">
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
