import styled from "styled-components";

const SContainer = styled.div`
  #line {
    font-size: 0.75rem;
    margin: 15px 0px;
    color: var(--gray);
    display: flex;
    align-items: center;
    flex-basis: 100%;
  }

  #line::before {
    content: "";
    flex-grow: 1;
    margin: 0px 10px;
    background: var(--gray);
    height: 0.5px;
    font-size: 0px;
    line-height: 0px;
  }

  #line::after {
    content: "";
    flex-grow: 1;
    margin: 0px 10px;
    background: var(--gray);
    height: 0.5px;
    font-size: 0px;
    line-height: 0px;
  }
`;

function DateDivider({ date }: { date: string }) {
  const slicedDate = date.split("-");
  return (
    <SContainer>
      <div id="line">{`${slicedDate[0]}년 ${slicedDate[1]}월 ${slicedDate[2]}일`}</div>
    </SContainer>
  );
}

export default DateDivider;
