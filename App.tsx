import { FC, useState } from 'react'
import { StatusBar, StyleSheet, View, Image, Platform, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants'
import images from './images'
const statusBarHeightIOS = Constants.statusBarHeight
const statusBarHeightAndroid = StatusBar.currentHeight
const ifWin = (squares: Array<string>) => {
  const winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < winner.length; i++) {
    const [a, b, c] = winner[i];
    if (squares[a] && (squares[a] == squares[b]) && (squares[a] == squares[c])) {
      return squares[a]
    }
  }
  return null
}
const Brick: FC<{ onClick: () => void, value: string }> = (props) => {
  const onClick = () => {
    props.onClick()
  }
  return (
    <View style={styles.brick}>
      <TouchableOpacity style={styles.button} onPress={onClick}>
        <Image source={
          props.value == 'X' ? images.xPic : props.value === 'O' ? images.oPic : images.empty
        }></Image>
      </TouchableOpacity>
    </View>
  )
}

const App: FC = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isX, setIsX] = useState(true);

  const handleRestart = () => {
    setIsX(true)
    setSquares(Array(9).fill(null))
  }

  const handleClick = (i: number) => {
    if (ifWin(squares) || squares[i]) { return }
    squares[i] = isX ? 'X' : 'O';
    setSquares(squares)
    setIsX(!isX)
  }
  const winner = ifWin(squares)
  let status = winner ? `winner: ${winner}` : `player: ${isX ? 'X' : 'O'}`

  console.log("My app is running")

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Brick onClick={() => handleClick(0)} value={squares[0]}></Brick>
        <Brick onClick={() => handleClick(1)} value={squares[1]}></Brick>
        <Brick onClick={() => handleClick(2)} value={squares[2]}></Brick>
      </View>
      <View style={styles.row}>
        <Brick onClick={() => handleClick(3)} value={squares[3]}></Brick>
        <Brick onClick={() => handleClick(4)} value={squares[4]}></Brick>
        <Brick onClick={() => handleClick(5)} value={squares[5]}></Brick>
      </View>
      <View style={styles.row}>
        <Brick onClick={() => handleClick(6)} value={squares[6]}></Brick>
        <Brick onClick={() => handleClick(7)} value={squares[7]}></Brick>
        <Brick onClick={() => handleClick(8)} value={squares[8]}></Brick>
      </View>
      <View style={styles.container}>
        <Image source={
          status == `player: X` ? images.xplay
            : status == `player: O` ? images.oplay
              : status == `winner: X` ? images.xwin
                : status == `winner: O` ? images.owin
                  : images.empty
        }
        ></Image>
      </View>
      <View style={styles.centerContainer}>
        <TouchableOpacity style={styles.button} onPress={handleRestart}>
          <Image source={images.playAgain} style={styles.image}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS == 'android' ? statusBarHeightAndroid : statusBarHeightIOS,
    flex: 1,
    backgroundColor: 'grey'
  },
  row: {
    flexDirection: 'row',
    backgroundColor: 'blue',
  },
  brick: {
    flex: 1,
    backgroundColor: 'white',
    margin: 5,
    aspectRatio: 1
  },
  button: {
    flex: 1,
    height: 100,
    width: 100,
  },

  centerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  image: {
    height: 80,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App
