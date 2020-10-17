import styled, {css} from "styled-components/native";
import MapView from "react-native-maps";
import {Dimensions} from "react-native";

interface ScheduleType {
    itemColor: "blue" | "green" | "red";
}

const scheduleColorVariations = {
    blue: css`
        background-color: #E6F7FB;
        border-width: 1px;
        border-color: #B3DAE2;
        border-radius: 20px;
    `,

    green: css`
        background-color: #EDFFF6;
        border-width: 1px;
        border-color: #A1E9C5;
        border-radius: 20px;
    `,

    red: css`
        background-color: #FEF6F9;
        border-width: 1px;
        border-color: #FFBCD4;
        border-radius: 20px;
    `,
}

const scheduleTextColorVariations = {
    blue: css`
        color: #5C8599;
    `,

    green: css`
        color: #37C77F;
    `,

    red: css`
        color: #FF669D;
    `,
}

export const Container = styled.ScrollView`
    flex: 1;
`;

export const ImagesContainer = styled.View`
    height: 240px;
`;

export const Image = styled.Image`
    width: ${Dimensions.get("window").width}px;
    height: 240px;
    resizeMode: cover;
`;

export const DetailsContainer = styled.View`
    padding: 24px;
`;

export const Title = styled.Text`
    color: #4D6F80;
    font-size: 30px;
    font-family: ${"Nunito-Bold"};
`;

export const Description = styled.Text`
    font-family: ${"Nunito-SemiBold"};
    color: #5c8599;
    line-height: 24px;
    margin-top: 16px;
`;

export const MapContainer = styled.View`
    border-radius: 20px;
    overflow: hidden;
    border-width: 1.2px;
    border-color: #B3DAE2;
    margin-top: 40px;
    background-color: #E6F7FB;
`;

export const MapStyle = styled(MapView)`
    width: 100%;
    height: 150px;
`;

export const RoutesContainer = styled.TouchableOpacity`
    padding: 16px;
    align-items: center;
    justify-content: center;
`;

export const RoutesText = styled.Text`
    font-family: ${"Nunito-Bold"};
    color: #0089a5;
`;

export const Separator = styled.View`
    height: 0.8px;
    width: 100%;
    background-color: #D3E2E6;
    margin: 40px 0;
`;

export const ScheduleContainer = styled.View`
    margin-top: 24px;
    flex-direction: row;
    justify-content: space-between;
`;

export const ScheduleItem = styled.View<ScheduleType>`
    width: 48%;
    padding: 20px;
    
    ${props => scheduleColorVariations[props.itemColor]}
`;

export const ScheduleText = styled.Text<ScheduleType>`
    font-family: ${"Nunito-SemiBold"};
    font-size: 16px;
    line-height: 24px;
    margin-top: 20px;
    
    ${props => scheduleTextColorVariations[props.itemColor]}
`;

// export const ContactButton = styled(RectButton)`
//     background-color: #3CDC8C;
//     border-radius: 20px;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
//     height: 56px;
//     margin-top: 40px;
// `;
//
// export const ContactButtonText = styled.Text`
//     font-family: ${"Nunito-ExtraBold"};
//     color: #FFF;
//     font-size: 16px;
//     margin-left: 16px;
// `;
