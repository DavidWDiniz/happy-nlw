import styled from "styled-components/native";
import {Dimensions} from "react-native";
import MapView from "react-native-maps";
import {RectButton} from "react-native-gesture-handler";

export const Container = styled.View`
    flex: 1;
`;

export const Map = styled(MapView)`
    width: ${Dimensions.get("window").width}px;
    height: ${Dimensions.get("window").height}px;
`;

export const CalloutContainer = styled.View`
    width: 160px;
    height: 46px;
    padding: 0 16px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 16px;
    justify-content: center;
`;

export const CalloutText = styled.Text`
        color: #0089A5;
        font-size: 14px;
        font-family: ${"Nunito-Bold"};
`;

export const Footer = styled.View`
    position: absolute;
    left: 24px;
    right: 24px;
    bottom: 32px;

    background-color: #FFF;
    border-radius: 20px;
    height: 56px;
    padding-left: 24px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    elevation: ${3};
`;

export const FooterText = styled.Text`
    font-family: ${"Nunito-Bold"};
    color: #8FA7B3;
`;

export const CreateOrphanageButton = styled(RectButton)`
    width: 56px;
    height: 56px;
    background-color: #15C3D6;
    border-radius: 20px;

    justify-content: center;
    align-items: center;
`;
