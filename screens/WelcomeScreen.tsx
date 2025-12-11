import { StyleSheet, Text, View } from "react-native";
import { Button } from "@rneui/themed";

interface WelcomeScreenProps {
  museumName: string;
}

export const WelcomeScreen: React.FunctionComponent<WelcomeScreenProps> = ({
  museumName,
}) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to {museumName}</Text>
      <Button title="Start" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 10,
  },
});

export default WelcomeScreen;
