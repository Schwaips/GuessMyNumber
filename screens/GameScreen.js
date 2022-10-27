import { Text, View, StyleSheet } from "react-native";
import { useState } from "react";

import Title from "../components/ui/Title";
// exclude so that phone can't guess the number at first guess.
function generateRandomBetween(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
}


function GameScreen({userNumber}) {
  // generate first guess
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  // update guess
  const [currentGuess, setcurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponent's guess</Title>

      <View>
        <Text>Higher or lower</Text>
        {/* + - */}
      </View>
      <View></View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});

export default GameScreen;
