import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "../screens/MainScreen";
import { Icon, ThemeProvider, useTheme } from "@rneui/themed";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  const { theme } = useTheme();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={MainScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="home"
              type="feather"
              size={28}
              color={focused ? theme.colors.primary : theme.colors.black}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="QRCode"
        component={MainScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="qrcode-scan"
              type="material-community"
              size={28}
              color={focused ? theme.colors.primary : theme.colors.black}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={MainScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="settings"
              type="feather"
              size={28}
              color={focused ? theme.colors.primary : theme.colors.black}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
