import { FC, useState } from 'react';
import { StatusBar, StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';


const Brick: FC<{ onClick: () => void, getCurrentPlayer: () => number }> = (props) => {
  const [player, setPlayer] = useState(0)
  const onClick = () => {
    setPlayer(props.getCurrentPlayer())
    props.onClick()
  }
  const playerX = () => {
    if (player == 1) {
      return "flex"
    } else {
      return "none"
    }
  }
  const playerO = () => {
    if (player == 2) {
      return "flex"
    } else {
      return "none"
    }
  }
  return (
    <View style={styles.brick}>
      <TouchableOpacity></TouchableOpacity>
      <TouchableOpacity style={[styles.button]} onPress={onClick} disabled={player ? true : false}>
        <Image style={[styles.image, { display: playerX() }]} source={require("./assets/x.png")} />
        <Image style={[styles.image, { display: playerO() }]} source={require("./assets/o.png")} />
      </TouchableOpacity>
    </View>
  )
}
const App: FC = () => {
  // 0: not selected, 1: 'x', 2: 'o'
  var currentPlayer = 1

  const getCurrentPlayer = () => {
    return currentPlayer
  }
  const onBrickClick = () => {
    if (currentPlayer == 1)
      currentPlayer = 2
    else
      currentPlayer = 1
    // ifWinner()
  }

  console.log("My app is running")

  const onPressCallback = () => {
    console.log("button was pressed")
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Brick onClick={onBrickClick} getCurrentPlayer={getCurrentPlayer}></Brick>
        <Brick onClick={onBrickClick} getCurrentPlayer={getCurrentPlayer}></Brick>
        <Brick onClick={onBrickClick} getCurrentPlayer={getCurrentPlayer}></Brick>
      </View>
      <View style={styles.row}>
        <Brick onClick={onBrickClick} getCurrentPlayer={getCurrentPlayer}></Brick>
        <Brick onClick={onBrickClick} getCurrentPlayer={getCurrentPlayer}></Brick>
        <Brick onClick={onBrickClick} getCurrentPlayer={getCurrentPlayer}></Brick>
      </View>
      <View style={styles.row}>
        <Brick onClick={onBrickClick} getCurrentPlayer={getCurrentPlayer}></Brick>
        <Brick onClick={onBrickClick} getCurrentPlayer={getCurrentPlayer}></Brick>
        <Brick onClick={onBrickClick} getCurrentPlayer={getCurrentPlayer}></Brick>
      </View>
      <Button onPress={playAgain} title="play again"></Button>
      <Text>player {getCurrentPlayer()}</Text>
    </View>
  );
}



const ifWinner = (arr: number[]) => {
  if (arr.indexOf(1) != -1 && arr.indexOf(2) != -1 && arr.indexOf(3) != -1) {

  }
  if (arr.indexOf(4) != -1 && arr.indexOf(5) != -1 && arr.indexOf(6) != -1) {

  }
  if (arr.indexOf(7) != -1 && arr.indexOf(8) != -1 && arr.indexOf(9) != -1) {

  }
  if (
    arr.indexOf(1) != -1 && arr.indexOf(4) != -1 && arr.indexOf(7) != -1) {

  }
  if (arr.indexOf(2) != -1 && arr.indexOf(5) != -1 && arr.indexOf(8) != -1) {

  }
  if (arr.indexOf(3) != -1 && arr.indexOf(6) != -1 && arr.indexOf(9) != -1) {

  }
  if (arr.indexOf(1) != -1 && arr.indexOf(5) != -1 && arr.indexOf(9) != -1) {

  }
  if (arr.indexOf(3) != -1 && arr.indexOf(5) != -1 && arr.indexOf(7) != -1) {

  }
}

const playAgain = () => {

}
const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: 'grey',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  brick: {
    flex: 1,
    backgroundColor: 'white',
    margin: 5,
    aspectRatio: 1,
  },
  button: {
    flex: 1,
    height: 100,
    width: 100,
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    aspectRatio: 1,
    display: "none",

  },
});

export default App
