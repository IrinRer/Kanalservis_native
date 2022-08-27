import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { getPosts } from "../../../store/posts/selectors";

const Paragraph = styled.Text`
  font-weight: 800;
  font-size: 16px;
  line-height: 19px;
`;

const Title = ({ id }) => {
  const posts = useSelector(getPosts);

  return (
    <View>
      {posts.map((item) => {
        if (item.userId === id) {
          return <Paragraph key={item.title}>Title:{item.title}</Paragraph>;
        }
        return null;
      })}
    </View>
  );
};

export default Title;
