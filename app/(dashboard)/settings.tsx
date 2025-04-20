import { useRef, useState } from "react";

import { AppText, PrimaryButton, Screen } from "@/components";
import { LogoutModal } from "@/modals";
import { Pressable, View } from "react-native";
import { useTheme } from "@/contexts";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { themes } from "@/constants";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

const routes = [
  {
    icon: "settings-outline",
    name: "General",
    route: "/general-settings",
  },
  {
    icon: "person-circle",
    name: "Profile",
    route: "/profile",
  },
  {
    icon: "lock-closed-outline",
    name: "Security",
    route: "/security",
  },
  {
    icon: "notifications-outline",
    name: "Notifications",
    route: "/notifications",
  },
];

const SettingsItem = ({
  theme,
  iconName,
  routeName,
}: {
  theme: typeof themes.light;
  iconName: any;
  routeName: string;
}) => {
  return (
    <Pressable
      style={{
        paddingVertical: 18,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: theme.faintText,
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Ionicons name={iconName} size={30} color={theme.text} />
      <AppText style={{ paddingLeft: 8 }}>{routeName}</AppText>

      <Ionicons
        name="chevron-forward"
        size={24}
        color={theme.faintText}
        style={{ marginLeft: "auto" }}
      />
    </Pressable>
  );
};

const Settings = () => {
  const sheetRef = useRef<BottomSheetModal>(null);
  const [showModal, setShowModal] = useState(false);
  const { theme } = useTheme();

  return (
    <Screen>
      <AppText size="xxxlarge" style={{ fontFamily: "GeistBold" }}>
        Settings
      </AppText>
      <View style={{ marginTop: 20, gap: 15 }}>
        {routes.map((route) => (
          <SettingsItem
            key={route.icon}
            theme={theme}
            routeName={route.name}
            iconName={route.icon}
          />
        ))}
      </View>

      <Pressable
        onPress={() => sheetRef.current?.present()}
        style={{
          position: "absolute",
          bottom: 20,
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 15,
        }}
      >
        <Ionicons name="log-out-outline" size={30} color="#c00" />
        <AppText color="#c00" style={{ paddingLeft: 8 }}>
          Logout
        </AppText>
      </Pressable>
      <LogoutModal
        sheetRef={sheetRef}
        closeModal={() => sheetRef.current?.close()}
      />
    </Screen>
  );
};

export default Settings;
