import {
  ONE_ON_ONE_VIDEO_CALL_CONFIG,
  ZegoUIKitPrebuiltCall,
} from "@zegocloud/zego-uikit-prebuilt-call-rn";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useMemo } from "react";
import { View } from "react-native";

import { ZegoConfig } from "../zegoConfig";

type CallRouteParams = {
  callID?: string;
};

export default function VideoCallScreen() {
  const router = useRouter();
  const { callID } = useLocalSearchParams<CallRouteParams>();

  const userID = useMemo(
    () => String(Math.floor(Math.random() * 1_000_000)),
    []
  );
  const userName = `User_${userID.slice(-4)}`;

  return (
    <View style={{ flex: 1 }}>
      <ZegoUIKitPrebuiltCall
        appID={ZegoConfig.appID}
        appSign={ZegoConfig.appSign}
        userID={userID}
        userName={userName}
        callID={callID || "medical123"}
        config={{
          ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
          onHangUp: () => {
            router.back();
          },
        }}
      />
    </View>
  );
}
