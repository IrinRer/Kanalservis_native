import styled from "styled-components/native";
import Logo from "../../../assets/icons/logo_short.svg";
import Exit from "../../../assets/icons/exit.svg";
import { CREAM_COLOR_LIGHT } from "../../../constants/common";

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  width: 100%;
  font-weight: 700;
  padding: 0px 10px;
  align-items: center;
  justify-content: space-between;
  background-color: ${CREAM_COLOR_LIGHT};
  svg {
    cursor: pointer;
  }
`;

const WrapperParagraph = styled.View`
  display: flex;
  align-items: center;
`;

const Paragraph = styled.Text`
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  margin-right: 30px;
`;

const Header = () => {
  //   const userName: string | undefined = useAppSelector(getLoginAuth);

  //   const size = useWindowSize();

  return (
    <Wrapper>
      <Logo width={70} height={118} />
      <Exit onPress={() => console.log('fffff')}/>
    </Wrapper>
  );
};

export default Header;
