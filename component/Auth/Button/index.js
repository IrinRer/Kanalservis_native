import React from "react";
import styled from "styled-components";
import { Text, TouchableOpacity } from "react-native";
import { CREAM_COLOR, CREAM_COLOR_LIGHT } from "../../../constants/common";

const ButtonCustom = styled.TouchableOpacity`
  border-radius: 10px;
  border: none;
  background-color: ${CREAM_COLOR};
  padding: 5px;
  margin: 0px auto;
  width: 213px;
`;

const CustomText = styled.Text`
  font-weight: 800;
  color: "#2196F3";
  font-size: 24px;
  text-align: center;
  line-height: 35px;
`;

const ButtonComponent = () => {
  // const dispatch = useAppDispatch();

  const handleSubmit = (e) => {
    // e.preventDefault();
    // dispatch(authorization());
    console.log("submit");
  };
  return (
    <ButtonCustom onPress={handleSubmit}>
      <CustomText>Submit</CustomText>
    </ButtonCustom>
  );
};

export default ButtonComponent;
