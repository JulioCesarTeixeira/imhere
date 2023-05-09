import {
  TouchableOpacity,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { Participant } from "../Participant";

// function to generate a random id
function generateId() {
  return Math.random().toString(36).substring(2, 15);
}

type Participant = {
  name: string;
  id: string;
};

export function Home() {
  const today = new Date().toDateString();
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [newParticipantName, setNewParticipantName] = useState<string>("");

  function checkIfParticipantAlreadyExists(
    name: string,
    participants: Participant[]
  ) {
    return participants.some((p) => p.name === name);
  }

  function handleNewParticipant() {
    if (checkIfParticipantAlreadyExists(newParticipantName, participants)) {
      return Alert.alert(
        `Participant already exists!`,
        `There is already a participant with the name ${newParticipantName}. Please, try again with a different name.`
      );
    }

    setParticipants([
      ...participants,
      { name: newParticipantName, id: generateId() },
    ]);
    clearTextInput();
  }

  function removeParticipant(id: string) {
    setParticipants((participants) => participants.filter((p) => p.id !== id));
  }

  function handleRemoveParticipant(id: string) {
    Alert.alert(
      "really?",
      "are you sure you want to remove this participant?",
      [{ text: "Yes", onPress: () => removeParticipant(id) }, { text: "No" }]
    );
  }

  function clearTextInput() {
    setNewParticipantName("");
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.eventName}>Event name</Text>
        <Text style={styles.eventDate}>{today}</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.textInput}
          placeholder="Participant name"
          placeholderTextColor="#6b6b6b"
          keyboardType="default"
          autoCorrect={false}
          onChangeText={setNewParticipantName}
          value={newParticipantName}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleNewParticipant}
          disabled={!newParticipantName}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={({ id }) => id}
        renderItem={({ item: { id, name } }) => (
          <Participant
            name={name}
            onRemove={() => handleRemoveParticipant(id)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>
            It looks like we are empty :crycry:
          </Text>
        )}
      />
    </View>
  );
}
