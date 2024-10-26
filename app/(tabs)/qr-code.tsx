import { StyleSheet, Text, View } from "react-native";

export default function QRCode() {
  return (
    <View style={styles.container}>
      <Text>QR Code</Text>
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
