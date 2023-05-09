import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1f1e25",
    flexDirection: "row",
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 12,
  },
  name: {
    color: "#fff",
    fontSize: 16,
    flex: 1,
    marginLeft: 16,
  },
  button: {
    // red color
    backgroundColor: "#E23C44",
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
});
