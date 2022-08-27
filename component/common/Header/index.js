import styled from "styled-components/native";
import Logo from "../../../assets/icons/logo_short.svg";
import { CREAM_COLOR } from "../../../constants/common";
import ExitComponent from "./Exit";

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  font-weight: 700;
  margin-top: 50px;
  padding: 0px 10px;
  align-items: center;
  justify-content: space-between;
  background-color: ${CREAM_COLOR};
  svg {
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Logo width={70} height={118} />
      <ExitComponent/>
    </Wrapper>
  );
};

export default Header;
