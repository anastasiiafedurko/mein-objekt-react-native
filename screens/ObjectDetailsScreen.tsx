import { StaticScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Card } from "@rneui/themed";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "ObjectDetailsScreen">;

export const ObjectDetailsScreen = ({ route }: Props) => {
  const objectId = route.params.objectId;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/mona-lisa.jpg")}
          style={styles.image}
        />
        <Text style={styles.title}>ObjName</Text>
        <Text style={styles.metadata}>Metadata</Text>
        <Text style={styles.description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
          reiciendis fugiat nostrum alias id repudiandae nisi deserunt sit
          sapiente dolor corporis ducimus debitis consectetur dolorem aut earum
          nulla odio hic culpa perspiciatis quas consequuntur, aliquid incidunt
          architecto. Voluptas magni laborum libero, aperiam aut alias
          laboriosam repudiandae nulla doloribus maxime explicabo!
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
  },
  image: {
    width: 300,
    height: 400,
  },
  metadata: {
    fontSize: 16,
    fontStyle: "italic",
  },
  description: {
    marginHorizontal: 15,
  },
});

export default ObjectDetailsScreen;
