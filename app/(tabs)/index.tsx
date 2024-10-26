import { StyleSheet, Text, View } from "react-native";
import { Banner, Button, TextInput } from "react-native-paper";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Prematch</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    layoutContainer: {
      flex: 0.5,
      justifyContent: 'center', 
      alignItems: 'center',
      flexDirection: 'row'
    }
});
