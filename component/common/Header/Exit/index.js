import styled from "styled-components/native";
import { Text} from "react-native";
import Exit from "../../../../assets/icons/exit.svg";

const Button = styled.Button`
  border: none;
  background-color: red;
  width: 100px;
`;

const ExitComponent = () => {
  //   const dispatch = useAppDispatch();

  //   const handleClick = () => {
  //     dispatch(resetAuthorization());
  //   };

  return (
    <Button title={<Exit width={50} height={118} />}>
      {/* <Exit width={50} height={118} /> */}
    </Button>
  );
};

export default ExitComponent;
