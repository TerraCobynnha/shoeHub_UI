import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

// React nav
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./../screens/Home";
import Detail from "./../screens/Detail";

import NativeTab from "./../components/NativeTab";

// style
import { colors } from "./../styles/shared";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

const StyledRightView = styled.View`
  flex-direction: row;
  margin-right: 5px;
`;

const StyledHeadTouchable = styled(TouchableOpacity)`
  padding: 10px;
`;

const HeaderRight = ({ mode }) => {
  return (
    <>
      {mode !== "Detail" && (
        <StyledRightView>
          <StyledHeadTouchable onPress={() => alert("Search")}>
            <AntDesign name="search1" size={25} color="black" />
          </StyledHeadTouchable>
          <StyledHeadTouchable onPress={() => alert("Account")}>
            <AntDesign name="user" size={25} color="black" />
          </StyledHeadTouchable>
        </StyledRightView>
      )}

      {mode === "Detail" && (
        <StyledRightView>
          <StyledHeadTouchable>
            <AntDesign name="hearto" size={25} color={tint} />
          </StyledHeadTouchable>
        </StyledRightView>
      )}
    </>
  );
};

const Stack = createStackNavigator();
const { tint, primary } = colors;

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{
        headerRight: () => <HeaderRight />,
        title: "Shoes",
      }}
      name="Home"
      component={Home}
    />
  </Stack.Navigator>
);

export default HomeStack;
