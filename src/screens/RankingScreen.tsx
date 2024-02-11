import ResumeBox from "@components/ResumeBox";
import { AuthContext } from "@contexts/AuthContext";
import { IAuthContext } from "@interfaces/Auth";
import React, { useContext } from "react";
import { Image, Text, View } from "react-native";

const RankingScreen = (): React.JSX.Element => {
  const {authState}:IAuthContext = useContext(AuthContext);
  return (
    <View>
      <ResumeBox>
        <View>
          <Image
            source={{
              uri: authState.user?.image
            }}
            width={50}
            height={50}
            style={{
              borderRadius: 50
            }}
          />
        </View>
      </ResumeBox>
    </View>
  );
}

export default RankingScreen;