import React from "react";
import PrivateRoute from "./PrivateRoute";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../pages/Home";
import AuthPage from "../../pages/AuthPage";
import Header from "../../component/common/Header";

const Stack = createNativeStackNavigator();

const CreateRoutes = () => {
  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={() => (
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          )}
        />
        <Stack.Screen name="Auth" component={AuthPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CreateRoutes;
