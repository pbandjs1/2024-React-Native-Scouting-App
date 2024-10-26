import { StyleSheet, Text, View } from "react-native";

export default function Teleop() {
  return (
    <View style={styles.container}>
      <Text>Teleop</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    }
});
