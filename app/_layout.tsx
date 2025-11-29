import ZegoUIKitPrebuiltCall, { ZegoUIKitPrebuiltCallInvitation } from '@zegocloud/zego-uikit-prebuilt-call-rn';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';

const APP_ID = 644505875; // TODO: Add your ZEGO App ID here
const APP_SIGN = "90ffff5db4169e933cf66ab115983dbbacd828257fca4973bbe98bf18595d395"; // TODO: Add your ZEGO App Sign

export default function CallScreen() {

  const userID = String(Math.floor(Math.random() * 100000));
  const userName = "User_" + userID;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Medical App - Call</Text>

      <ZegoUIKitPrebuiltCallInvitation
        appID={APP_ID}
        appSign={APP_SIGN}
        userID={userID}
        userName={userName}
        notifyWhenAppRunningInBackgroundOrQuit={true}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          ZegoUIKitPrebuiltCall.startCall({
            appID: APP_ID,
            appSign: APP_SIGN,
            userID,
            userName,
            callID: "medical123",
            isVideoCall: true,
            invitees: [{ userID: "2000", userName: "Doctor" }]
          });
        }}>
        <Text style={styles.buttonText}>Start Video Call</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  button: {
    backgroundColor: "#007AFF",
    padding: 14,
    borderRadius: 10
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: '600' }
});
