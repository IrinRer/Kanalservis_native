import styled from "styled-components/native";
import Logo from "../../../assets/icons/logo_short.svg";
import Exit from "../../../assets/icons/exit.svg";
import { CREAM_COLOR_LIGHT } from "../../../constants/common";
import ButtonComponent from "../../Auth/Button";
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
  background-color: ${CREAM_COLOR_LIGHT};
  svg {
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Logo width={70} height={118} />
      {/* <Exit onClick={handlePress} /> */}
      <ExitComponent/>
    </Wrapper>
  );
};

export default Header;
