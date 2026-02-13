import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: black;
`;

const Title = styled.h1`
  color: white;
  margin: 0;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  font-size: 16px;
  font-weight: 400;
  list-style: none;
  color: white;
  cursor: pointer;

  &:hover {
    color: #d7fa00;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Title>OZ코딩스쿨</Title>
      <NavList>
        <NavItem>로그인</NavItem>
        <NavItem>회원가입</NavItem>
        <NavItem>내클래스</NavItem>
      </NavList>
    </HeaderContainer>
  );
}