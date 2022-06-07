import React from "react";
import styles from "./style";
import { View, Text, Share, TouchableOpacity } from "react-native";

export default function ResultImc(props) {
  const onShare = async () => {
    const result = await Share.share({
      message: "Meu imc hoje é: " + props.resultImc,
    });
  };
  return (
    <View>
      <View style={styles.resultImc}>
        <View style={styles.boxShareButton}>
          {props.resultImc != null ? (
            <TouchableOpacity onPress={onShare} style={styles.shared}>
              <Text style={styles.sharedText}>Share</Text>
            </TouchableOpacity>
          ) : null}
        </View>
        <Text style={styles.information}>{props.messageResultImc}</Text>
        <Text style={styles.numberImc}>{props.resultImc}</Text>
      </View>
    </View>
  );
}
