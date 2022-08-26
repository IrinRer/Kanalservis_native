import styled from "styled-components/native";
import Exit from "../../../../assets/icons/exit.svg";
import { useDispatch } from "react-redux";
import { resetAuthorization } from "../../../../store/auth/slice";

const ButtonCustom = styled.TouchableOpacity`
  border: none;
  background-color: transparent;
`;

const ExitComponent = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(resetAuthorization());
  };

  return (
    <ButtonCustom onPress={handleClick}>
      <Exit width={50} height={118} />
    </ButtonCustom>
  );
};

export default ExitComponent;
