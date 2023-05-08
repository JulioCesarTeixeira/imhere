import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export function Home() {
  const today = new Date().toDateString();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.eventName}>Event name</Text>
        <Text style={styles.eventDate}>{today}</Text>
      </View>

      <TextInput
        style={styles.textInput}
        placeholder="Type your name"
        placeholderTextColor="#6b6b6b"
        keyboardType="default"
        autoCorrect={false}
      />
    </View>
  );
}
