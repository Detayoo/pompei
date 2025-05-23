import React from "react";
import { StatusBar, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

import { AppText } from "@/components";
import { useTheme } from "@/contexts";
import { themes } from "@/constants";

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
        marginTop: 10,
        width: 200,
        height: 50,
        gap: 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Ionicons name={focused ? icon : activeIcon} size={20} color={color} />
      <AppText size="small" color={color}>
        {routeName}
      </AppText>
    </View>
  );
};

const DashboardLayout = () => {
  const { theme, mode } = useTheme();

  return (
    <>
      <StatusBar
        barStyle="default"
        backgroundColor={
          mode === "light" ? themes.light.background : themes.dark.background
        }
      />
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: theme.background,
            borderTopWidth: 0,
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
                activeIcon="star-outline"
                icon="star"
                routeName="For You"
                color={focused ? theme.text : theme.border}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="shop"
          options={{
            ...genericOptions,
            tabBarLabelStyle: { fontSize: 12, display: "none" },
            title: "Shop",
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                focused={focused}
                activeIcon="bag-outline"
                icon="bag"
                routeName="Shop"
                color={focused ? theme.text : theme.border}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="culture"
          options={{
            ...genericOptions,
            tabBarLabelStyle: { fontSize: 12, display: "none" },
            title: "Culture",
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                focused={focused}
                activeIcon="book-outline"
                icon="book"
                routeName="Culture"
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
    </>
  );
};
export default DashboardLayout;
