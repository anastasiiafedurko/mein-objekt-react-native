import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Header as HeaderRNE } from "@rneui/themed";

interface HeaderProps {
  museumName: string;
}

export const Header: React.FunctionComponent<HeaderProps> = ({
  museumName,
}) => {
  return (
    <HeaderRNE
      leftComponent={
        <View style={styles.headerRight}>
          <Image
            source={require("../assets/images/museum-logo.png")}
            style={styles.image}
          />
        </View>
      }
      rightComponent={{
        icon: "settings",
        color: "#fff",
      }}
      centerComponent={{ text: museumName, style: styles.heading }}
    />
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#397af8",
    marginBottom: 20,
    width: "100%",
    paddingVertical: 15,
  },
  heading: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  headerRight: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
  },
  image: {
    width: 20,
    height: 20,
  },
});

export default Header;
