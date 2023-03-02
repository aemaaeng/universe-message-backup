import styled from "styled-components";

const SPageContainer = styled.div`
  padding-top: 40px;
  padding-left: 33px;
`;

const SHeadingContainer = styled.div`
  h1 {
    color: var(--deepPurple);
    font-weight: 800;
    font-size: 2rem;
    margin: 3px 0px;
  }
  .instruction {
    color: var(--lightBlack);
    font-size: 0.9rem;
    font-weight: 800;
    padding-left: 3px;
  }
`;

function Calendar() {
  return (
    <SPageContainer>
      <SHeadingContainer>
        <h1>Calendar</h1>
        <div className="instruction">
          날짜를 선택하면 해당 날짜의 채팅으로 이동합니다.
        </div>
        <div className="instruction">2022.03.10부터 검색할 수 있습니다.</div>
      </SHeadingContainer>
    </SPageContainer>
  );
}

export default Calendar;
