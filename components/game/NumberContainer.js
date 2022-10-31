import { View, Text, StyleSheet, Dimensions } from "react-native";
import styles from "../../styles/NumberContainerStyles";
import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

// on android :
// - Entire width and height available including the status bar
// - window : without the status bar
// On IOS, no differences between screen and window
const deviceWidth = Dimensions.get('window').width;
