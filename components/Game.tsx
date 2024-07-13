import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Cell} from './Cell.tsx';
import {useEffect, useState} from 'react';

interface CellFields {
  value: string;
  id: number;
}
export const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
  const createEmptyBoard = () => {
    const board = [];
    for (let row = 0; row < 3; row++) {
      const rowCells: CellFields[] = [];
      for (let col = 0; col < 3; col++) {
        rowCells.push({
          id: row * 3 + col + 1,
          value: `1`,
        });
      }
      board.push(rowCells);
    }
    return board;
  };

  const [board, setBoard] = useState(createEmptyBoard());

  return (
    <SafeAreaView style={styles.container}>
      {board.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map(cell => (
            <Cell
              key={cell.id}
              cellId={cell.id}
              value={'1'}
              onPress={() => {}}
            />
          ))}
        </View>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  row: {
    flexDirection: 'row',
  },
});
