import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    height: "100%",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 15,
  },
  form: {
    width: "100%",
  },
  formLabel: {
    color: "#000000",
    fontSize: 18,
    paddingLeft: 20,
  },
  formInput: {
    width: "90%",
    borderRadius: 50,
    backgroundColor: "#f6f6f6",
    height: 40,
    margin: 6,
    paddingLeft: 10,
  },
  buttonCalculator: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#ff0043",
    paddingBottom: 14,
    paddingTop: 14,
    marginLeft: 12,
    marginTop: 20,
  },
  textButtonCalculator: {
    fontSize: 20,
    color: "#ffffff",
  },
  errorMessage: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    paddingLeft: 20,
  },
  exhibitionResultImc: {
    width: "100%",
  },
  resultImcItem: {
    fontSize: 28,
    color: "red",
    height: 50,
    width: "100%",
    paddingRight: 20,
  },
  textResultItemList: {
    color: "red",
    fontSize: 16,
  },
  listImcs: { marginTop: 60 },
});

export default styles;
