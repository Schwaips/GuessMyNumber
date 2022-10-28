import { View, StyleSheet, Alert, Text } from "react-native";
import { useState, useEffect } from "react";

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from "@expo/vector-icons";

// exclude so that phone can't guess the number at first guess.
function generateRandomBetween(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  // generate first guess of computer
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  // update guess for computer
  const [currentGuess, setcurrentGuess] = useState(initialGuess);
  // number of guess rounds
  const [guessRounds, setguessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
    // when this effect is done
  }, [currentGuess, userNumber, onGameOver]);

  // will not execute if the component was already on UI.
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  // When you click on + or min direction is either lower or greater number
  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Please, don't lie :(", "You know it's wrong", [
        { text: "Sorry, I won't do it again", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log(minBoundary, maxBoundary);
    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setcurrentGuess(newRandomNumber);
    // add newRandomNumber to it. 3 dots in array, so that we keep the data already in the array.
    // newRandomNumber is added first so that when we iterate into it, we got the lastest guess first.
    setguessRounds(
      (prevGuessRounds) => [newRandomNumber, ...prevGuessRounds],
    );
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower ?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white"></Ionicons>
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color="white"></Ionicons>
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View>
        {guessRounds.map((guessRound) => (
          <Text key={guessRound}>{guessRound}</Text>
        ))}
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default GameScreen;
