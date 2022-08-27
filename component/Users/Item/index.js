import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { BLUE_WATER } from '../../../constants/common';
import { getUsers } from '../../../store/users/selectors';

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
  line-height: 30px;
`;

const WrapperParagraph = styled.View`
  /* @media ${(props) => props.theme.tablet} {
    display: flex;
    flex-direction: column;
  } */
`;

const Item = () => {
  const users = useSelector(getUsers);

  return (
    <>
      {users.map((item) => {
        return (
          <Wrapper key={item.name} >
            <WrapperParagraph>
              {/* <Photos id={item.id} /> */}
              <Paragraph>Auth: {item.name}</Paragraph>
              <Paragraph>Company: {item.company.name} </Paragraph>
            </WrapperParagraph>
            {/* <Posts id={item.id} /> */}
          </Wrapper>
        );
      })}
    </>
  );
};

export default Item;