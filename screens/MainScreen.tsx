import { FlatList, ListRenderItem, StyleSheet, View } from "react-native";
import { allObjects } from "../dammyData/allObjects";
import RecentObjectCard from "../components/RecentObjectCard/RecentObjectCard";
import { ObjectItem } from "../types/ObjectItem";
import { useCallback } from "react";

export const MainScreen = () => {
  const renderObjectItem = useCallback(
    ({ item }: { item: ObjectItem }) => <RecentObjectCard obj={item} />,
    []
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={allObjects}
        renderItem={renderObjectItem}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
});

export default MainScreen;
