import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
    display: "flex",
    gap: 12,
  },
  eventName: {
    color: "#fdfcfe",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#6b6b6b",
    fontSize: 16,
  },
  textInput: {
    flex: 1,
    backgroundColor: "#1f1e25",
    height: 48,
    borderRadius: 5,
    color: "#fff",
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },
  button: {
    backgroundColor: "#a370f7",
    height: 48,
    width: 48,
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 24,
    marginBottom: 36,
  },

  participants: {
    marginTop: 24,
    display: "flex",
    gap: 12,
  },
  participant: {
    backgroundColor: "#1f1e25",
    width: "100%",
    height: 48,
  },

  // List styles
  emptyListText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 24,
  },
});
