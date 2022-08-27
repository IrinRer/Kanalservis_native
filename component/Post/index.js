import React from "react";
import styled from "styled-components";
import Title from "./Title";

const WrapperTitle = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

const Posts = ({ id }) => {
  return (
    <>
      <WrapperTitle>
        <Title id={id} />
      </WrapperTitle>
    </>
  );
};

export default Posts;
