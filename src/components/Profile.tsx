import styled from "styled-components";
import profileImg from "../img/profileImg.jpeg";

const SProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px;
  gap: 7px;
`;

const SProfileImg = styled.img`
  border-radius: 50%;
  width: 10%;
  height: 10%;
`;

const SProfileName = styled.div`
  font-weight: 700;
`;

function Profile() {
  return (
    <SProfileContainer>
      <SProfileImg src={profileImg} />
      <SProfileName>기현</SProfileName>
    </SProfileContainer>
  );
}

export default Profile;
