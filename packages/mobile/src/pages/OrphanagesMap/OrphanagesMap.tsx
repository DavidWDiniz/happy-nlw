import React, {useCallback, useState} from "react";
import {Callout, Marker, PROVIDER_GOOGLE} from "react-native-maps";
import Icon from "react-native-vector-icons/Feather";
import {useFocusEffect, useNavigation} from "@react-navigation/native";

import mapMarker from "../../images/map-marker.png";
import api from "../../services/api";

import {Container, Map, CalloutContainer, CalloutText, Footer, FooterText, CreateOrphanageButton} from "./styles";

interface Orphanage {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
}

const OrphanagesMap = () => {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
    const navigation = useNavigation();

    useFocusEffect(
        useCallback(() => {
            api.get("orphanages").then(response => {
                setOrphanages(response.data);
            });
        }, []),
    );

    function handleNavigateToOrphanageDetails(id: number) {
        navigation.navigate("OrphanageDetails", {id});
    }

    function handleNavigateToCreateOrphanage() {
        navigation.navigate("SelectMapPosition");
    }

    return (
        <Container>
            <Map
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: -20.3833472,
                    longitude: -43.4163019,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008,
                }}
            >
                {orphanages.map(orphanage => {
                    return (
                        <Marker
                            key={orphanage.id}
                            icon={mapMarker}
                            calloutAnchor={{
                                x: 2.7,
                                y: 0.8,
                            }}
                            coordinate={{
                                latitude: orphanage.latitude,
                                longitude: orphanage.longitude,
                            }}
                        >
                            <Callout tooltip onPress={() => handleNavigateToOrphanageDetails(orphanage.id)}>
                                <CalloutContainer>
                                    <CalloutText>{orphanage.name}</CalloutText>
                                </CalloutContainer>
                            </Callout>
                        </Marker>
                    );
                })}
            </Map>

            <Footer>
                <FooterText>{orphanages.length} orfanatos encontrados</FooterText>
                <CreateOrphanageButton onPress={handleNavigateToCreateOrphanage}>
                    <Icon name="plus" size={20} color="#FFF"/>
                </CreateOrphanageButton>
            </Footer>

        </Container>
    );
};

export default OrphanagesMap;
