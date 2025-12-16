import { StyleSheet, Text, View } from "react-native";
import { Button } from "@rneui/themed";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "WelcomeScreen">;

export const WelcomeScreen = ({ navigation }: Props) => {
  const handlePress = () => {
    navigation.navigate("MainScreen");
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to "museumName"</Text>
      <Button title="Start" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});

export default WelcomeScreen;
