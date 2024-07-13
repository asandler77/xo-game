import {Dimensions, StyleSheet, Text, View} from 'react-native';

interface Props {
  cellId: number;
  value: string;
  onPress: () => void;
}

const {width} = Dimensions.get('window');
const cellSize = width * 0.2; // 20% of the screen width
export const Cell = (props: Props) => {
  const {value, cellId} = props;
  return (
    <View style={styles.container}>
      <Text>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'blue',
    minHeight: cellSize,
    minWidth: cellSize,
  },
});
