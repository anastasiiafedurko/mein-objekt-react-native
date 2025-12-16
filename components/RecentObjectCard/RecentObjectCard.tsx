import { Button, Card, Icon } from "@rneui/themed";
import { ObjectItem } from "../../types/ObjectItem";
import { Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface RecentObjectCardProps {
  obj: ObjectItem;
}

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ObjectDetailsScreen"
>;

export const RecentObjectCard: React.FunctionComponent<
  RecentObjectCardProps
> = ({ obj }) => {
  const navigation = useNavigation<NavigationProp>();

  const handlePress = () => {
    navigation.navigate("ObjectDetailsScreen", { objectId: obj.id });
  };

  return (
    <Pressable onPress={handlePress}>
      <Card>
        <Card.Title>{obj.name}</Card.Title>
        <Card.Divider />
        <Card.Image source={obj.imageUrl} />
        {/* <Text style={{ marginBottom: 10 }}>Johannes Vermeer, 1665</Text> */}
      </Card>
    </Pressable>
  );
};

export default RecentObjectCard;
