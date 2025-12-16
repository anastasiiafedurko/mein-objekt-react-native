import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import WelcomeScreen from "./screens/WelcomeScreen";
import MainScreen from "./screens/MainScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ObjectDetailsScreen from "./screens/ObjectDetailsScreen";
import { RootStackParamList } from "./navigation/types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon, ThemeProvider, useTheme } from "@rneui/themed";
import TabNavigator from "./components/TabNavigator";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <SafeAreaProvider>
          {/* <Header museumName="museumName" /> */}

          <Stack.Navigator>
            <Stack.Screen
              name="WelcomeScreen"
              component={WelcomeScreen}
              options={{ title: "" }}
            />
            {/* <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{ title: "" }}
          /> */}
            <Stack.Screen
              name="ObjectDetailsScreen"
              component={ObjectDetailsScreen}
              options={{ title: "" }}
            />
            <Stack.Screen name="MainScreen" component={TabNavigator} />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
