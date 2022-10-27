import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function InstructionText({children, style}) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.accent500,
  },
});
export default InstructionText;
