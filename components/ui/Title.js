import { Text, StyleSheet } from "react-native";

function Title({ children }) {
  return(<Text style={styles.title}>{children}</Text>);
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    marginTop: 24,
    color: 'white',
    textAlign: "center",
    padding: 12,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 8,
    // maxWidth refers to parent container that holds the title.
    maxWidth: '80%',
    width: 300
  },
});
export default Title;
