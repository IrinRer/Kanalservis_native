import React from "react";
import { useSelector } from "react-redux";
import { View } from "react-native";
import styled from "styled-components/native";
import { BLUE_WATER } from "../../../constants/common";
import { getUsers } from "../../../store/users/selectors";
import Posts from "../../Post";

const Wrapper = styled.View`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-width: 5px;
  margin: 10px;
  border-style: solid;
  border-color: ${BLUE_WATER};
  border-radius: 5px;
`;
const Paragraph = styled.Text`
  font-weight: 800;
  font-size: 16px;
  line-height: 40px;
`;

const Item = () => {
  const users = useSelector(getUsers);

  return (
    <>
      {users.map((item) => {
        return (
          <Wrapper key={item.name}>
            <View>
              <Paragraph>Auth: {item.name}</Paragraph>
              <Paragraph>Company: {item.company.name} </Paragraph>
            </View>
            <Posts id={item.id} />
          </Wrapper>
        );
      })}
    </>
  );
};

export default Item;
