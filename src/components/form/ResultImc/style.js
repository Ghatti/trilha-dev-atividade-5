import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  resultImc: {
    flex: 1,
    marginTop: 15,
    paddingTop: 20,
    borderRadius: 50,
    alignItems: "center",
    color: "#FF0043",
  },
  numberImc: { fontWeight: "bold", fontSize: 48, width: "100%" },
  information: {
    fontSize: 18,
    color: "#FF0043",
    fontWeight: "bold",
  },
  boxShareButton: {
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  shared: {
    backgroundColor: "#1877f2",
    borderRadius: 50,
    paddingBottom: 5,
    paddingTop: 5,
  },
  sharedText: {
    color: "#ffffff",
    fontWeight: "bold",
    paddingHorizontal: 30,
  },
});

export default styles;
