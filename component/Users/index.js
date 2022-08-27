import React from "react";
import styled from "styled-components";
import Item from "./Item";

const Wrapper = styled.ScrollView`
  display: flex;
  flex-direction: column;
`;

const WrapperView = styled.View`
  padding: 0px 25px 20px 0px;
`;

const Users = () => {
  return (
    <Wrapper>
      <WrapperView>
        <Item />
      </WrapperView>
    </Wrapper>
  );
};

export default Users;
