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
        gap: 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Ionicons name={focused ? icon : activeIcon} size={24} color={color} />
      <AppText size="small" color={color} title={routeName}></AppText>
    </View>
  );
};

const DashboardLayout = () => {
  const { theme } = useTheme();
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.background,
          borderTopColor: "transparent",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          ...genericOptions,
          tabBarLabelStyle: { fontSize: 12, display: "none" },
          title: "Dashboard",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              activeIcon="home-outline"
              icon="home"
              routeName="Home"
              color={focused ? theme.text : theme.border}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          ...genericOptions,
          tabBarLabelStyle: { fontSize: 12, display: "none" },
          title: "Orders",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              activeIcon="cart-outline"
              icon="cart"
              routeName="Orders"
              color={focused ? theme.text : theme.border}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          ...genericOptions,
          tabBarLabelStyle: { fontSize: 12, display: "none" },
          title: "Settings",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              activeIcon="settings-outline"
              icon="settings"
              routeName="Settings"
              color={focused ? theme.text : theme.border}
            />
          ),
        }}
      />
    </Tabs>
  );
};
export default DashboardLayout;
