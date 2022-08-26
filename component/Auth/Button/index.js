import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { CREAM_COLOR } from "../../../constants/common";
import { authorization } from "../../../store/auth/slice";

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
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authorization());
  };
  return (
    <ButtonCustom onPress={handleSubmit}>
      <CustomText>Submit</CustomText>
    </ButtonCustom>
  );
};

export default ButtonComponent;
