import React, {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {MapEvent, Marker} from "react-native-maps";

import mapMarkerImg from "../../../images/map-marker.png";

import {NextButtonText, NextButton, Container, MapStyle} from "./styles";

const SelectMapPosition = () => {
    const navigation = useNavigation();
    const [position, setPosition] = useState({latitude: 0, longitude: 0})

    function handleNextStep() {
        navigation.navigate("OrphanageData", {position});
    }

    function handleSelectMapPosition(event: MapEvent) {
        setPosition(event.nativeEvent.coordinate);
    }

    return (
        <Container>
            <MapStyle
                initialRegion={{
                    latitude: -20.3833472,
                    longitude: -43.4163019,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008,
                }}
                onPress={handleSelectMapPosition}
            >
                {position.latitude !== 0 && (
                    <Marker
                        icon={mapMarkerImg}
                        coordinate={{latitude: position.latitude, longitude: position.longitude}}
                    />
                )}
            </MapStyle>

            {position.latitude !== 0 && (
                <NextButton onPress={handleNextStep}>
                    <NextButtonText>Próximo</NextButtonText>
                </NextButton>
            )}
        </Container>
    );
}

export default SelectMapPosition;

