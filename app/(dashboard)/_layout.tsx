import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";

import { AppText } from "@/components";
import { useTheme } from "@/contexts";

const genericOptions = {
  headerShown: false,
};

const TabBarIcon = ({
  focused,
  activeIcon,
  icon,
  routeName,
  color,
}: {
  focused: boolean;
  activeIcon: string;
  icon: any;
  routeName: string;
  color?: string;
}) => {
  return (
    <View
      style={{
        padding: 5,
        // flexDirection: "row",
        // backgroundColor: "red",
        marginTop: 30,
        width: 200,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Ionicons name={focused ? activeIcon : icon} size={24} />
      <AppText color={color} title={routeName}></AppText>
    </View>
  );
};

const DashboardLayout = () => {
  const { theme } = useTheme();
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          ...genericOptions,
          tabBarLabelStyle: { fontSize: 18, display: "none" },
          title: "Dashboard",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              activeIcon="home-outline"
              icon="home"
              routeName="Home"
            />
          ),
          tabBarStyle: { padding: 50 },
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          ...genericOptions,
          tabBarLabelStyle: { fontSize: 18, display: "none" },
          title: "Settings",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              activeIcon="settings-outline"
              icon="settings"
              routeName="Settings"
              color={focused ? theme.secondary : theme.border}
            />
          ),
          tabBarStyle: { padding: 70 }, // Added padding to the tab bar container
        }}
      />
    </Tabs>
  );
};
export default DashboardLayout;
