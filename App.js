import { StyleSheet, View } from "react-native";
import Box from "./components/Box";

export default function App() {
  return (
    // <View style={{ backgroundColor: "plum", flex: 1 }}></View>
    <View style={styles.container}>
      <Box style={{ backgroundColor: "purple" }}>Box 1</Box>
      <Box style={{ backgroundColor: "plum" }}>Box 2</Box>
      <Box style={{ backgroundColor: "lightblue" }}>Box 3</Box>
      <Box style={{ backgroundColor: "lightgreen" }}>Box 4</Box>
      <Box style={{ backgroundColor: "crimson" }}>Box 5</Box>
      <Box style={{ backgroundColor: "orange" }}>Box 6</Box>
      <Box style={{ backgroundColor: "blue" }}>Box 7</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    flexWrap: "wrap-reverse",
    height: 300,
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red",
  },
});
