import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Auth from "./component/Auth/index.js";
import Header from './component/common/Header/index.js'

export default function App() {
  return (
    <View>
      <Header />
      <Auth/>
    </View>
  )
}
