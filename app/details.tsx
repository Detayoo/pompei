import React from "react";
import { Image, ScrollView, StatusBar, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { AppText } from "@/components";
import { useTheme } from "@/contexts";
import { sizes } from "@/constants";

const DetailsPage = () => {
  const params = useLocalSearchParams();
  const { theme } = useTheme();

  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: theme.background,
        flex: 1,
      }}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar barStyle="light-content" />
      <Image
        source={require("../assets/images/nvidia.webp")}
        style={{
          width: "100%",
          height: sizes.height / 2.5,
          marginBottom: 10,
        }}
        resizeMode="cover"
      />

      <AppText
        title={params.title?.toString()}
        size="xlarge"
        style={{ fontFamily: "GeistMedium", textAlign: "center" }}
      />
      <AppText
        title="By Tayo Adedigba | April 14th, 2025"
        size="small"
        color={theme.border}
        style={{
          fontFamily: "GeistExtraLight",
          textAlign: "center",
          marginVertical: 10,
        }}
      />

      <AppText
        title="Nvidia, the world's most valuable chipmaker, has announced a monumental investment plan to build artificial intelligence (AI) supercomputers entirely within the United States. With an estimated outlay of $500 billion, the initiative marks a significant shift in the company's strategy, reflecting growing political and economic pressure for major tech firms to localize their operations and reduce dependence on foreign supply chains."
        size="small"
        color={theme.text}
        style={{ marginTop: 12, fontFamily: "GeistExtraLight" }}
      />
      <AppText
        title="At the heart of this endeavor is Texas, which will serve as the central hub for the project. Nvidia plans to construct more than one million square feet of advanced AI facilities across the state. These centers will not only host powerful AI infrastructure but also become pivotal in research, development, and large-scale AI training. Texas, already home to a burgeoning tech ecosystem, offers a strategic advantage due to its existing industrial base and connectivity."
        size="small"
        color={theme.text}
        style={{ marginTop: 12, fontFamily: "GeistExtraLight" }}
      />
      <AppText
        title="To bring this vision to life, Nvidia is partnering with Taiwanese manufacturing powerhouses Foxconn and Wistron. These companies are renowned for their expertise in high-tech construction and will play a critical role in equipping and building the new AI facilities. This collaboration also highlights Nvidia’s pragmatic approach—maintaining technological expertise from Asia while shifting physical infrastructure to the U.S."
        size="small"
        color={theme.text}
        style={{ marginTop: 12, fontFamily: "GeistExtraLight" }}
      />
      <AppText
        title="The construction and development phases are expected to move swiftly, with manufacturing scheduled to begin within the next 12 to 15 months. This rapid timeline underscores Nvidia's urgency in positioning itself as a leader not just in AI chip design but also in infrastructure and deployment."
        size="small"
        color={theme.text}
        style={{ marginTop: 12, fontFamily: "GeistExtraLight" }}
      />
      <AppText
        title="Politically, the move comes in response to increasing U.S. government scrutiny and strategic initiatives aimed at bolstering domestic tech capabilities. With mounting tensions between the U.S. and China, especially concerning advanced technologies like AI and semiconductors, Nvidia’s commitment supports national interests in securing critical technological assets within U.S. borders."
        size="small"
        color={theme.text}
        style={{ marginTop: 12, fontFamily: "GeistExtraLight" }}
      />
      <AppText
        title="Ultimately, this investment is more than just a financial milestone—it signals a new era in American tech manufacturing. Nvidia’s AI supercomputers are expected to power everything from large language models and autonomous systems to scientific research and defense technology. As global competition in AI intensifies, Nvidia is making a clear statement: the future of AI leadership will be built at home."
        size="small"
        color={theme.text}
        style={{ marginTop: 12, fontFamily: "GeistExtraLight" }}
      />
    </ScrollView>
  );
};

export default DetailsPage;
