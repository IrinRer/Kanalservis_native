import React, { useEffect, useRef } from 'react';
// import { useAppDispatch } from 'customHooks/redux/useAppDispatch';
// import { useAppSelector } from 'customHooks/redux/useAppSelector';
import { BLUE_WATER, GRAY } from '../../constants/common';
import {  Text, View } from "react-native";
import styled from 'styled-components';
import ButtonComponent from './Button';
// import { changeInputLogin, changeInputPassword } from '../../store/auth/slice';
// import { getAuth, getLogin, getPassword } from '../../store/auth/selectors';

const Form = styled.View`
  padding: 20px 10px 10px 10px;
  width: 90%;
  margin: 50px auto;
  text-align: center;
  color: ${BLUE_WATER};
  font-weight: 800;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  border-width: 5px;
  border-color:#27569c;
  border-style: solid;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
`;

const TextCustomHeader = styled.Text`
  color: ${BLUE_WATER};
  font-weight: 800;
  font-size: 24px;
  text-align: center;
`;

const Label = styled.Text`
  font-weight: 800;
  font-size: 24px;
  color: black;
  text-align: left;
`;

const Input = styled.TextInput`
  border-width: 4px;
  border-style: solid;
  border-color: black;
  /* border-color: ${(props) => props.color}; */
  border-radius: 10px;
  padding: 3px;
  font-weight: 800;
  background-color: ${GRAY};
  font-size: 24px;
  padding: 5px;
  width: 100%;
  margin: 0px 0px 20px 0px;
`;

const Auth = () => {
//   const dispatch = useAppDispatch();
//   const loginValue: string | undefined = useAppSelector(getLogin);
//   const isAuth: string = useAppSelector(getAuth);
//   const passwordValue: string | undefined = useAppSelector(getPassword);

  const handleChangeLogin = (e) => {
    // dispatch(changeInputLogin(e.target.value));
    console.log(e.target.value)
  };

  const handleChangePassword = (e) => {
    // dispatch(changeInputPassword(e.target.value));
    console.log(e.target.value)
  };

  return (
    <Form >
      <TextCustomHeader>Autorization</TextCustomHeader>
      <Label>login</Label>
        <Input
          autoFocus
          type="email"
          onChange={handleChangeLogin}
        //   value={loginValue}
        //   color={isAuth !== 'no' ? BLUE_WATER : 'red'}
        />
        <Label>password</Label>
        <Input
          secureTextEntry
          onChange={handleChangePassword}
        //   value={passwordValue}
        //   color={isAuth !== 'no' ? BLUE_WATER : 'red'}
        />
      <ButtonComponent />
    </Form>
  );
};

export default Auth;