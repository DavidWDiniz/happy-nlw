import React, {useEffect, useState} from "react";
import {Linking, ScrollView} from "react-native";
import {Marker} from "react-native-maps";
import {default as Feather} from "react-native-vector-icons/Feather";
import mapMarkerImg from "../../images/map-marker.png";
import {useRoute} from "@react-navigation/native";

import api from "../../services/api";

import {MapContainer, Image, Container, Title, Description, DetailsContainer, ImagesContainer, MapStyle, RoutesContainer, RoutesText, ScheduleContainer, ScheduleItem, ScheduleText, Separator} from "./styles";

interface OrphanageDetailsRouteParams {
    id: number;
}

interface Orphanage {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    about: string;
    instructions: string;
    opening_hours: string;
    open_on_weekends: boolean;
    images: Array<{
        id: number;
        url: string;
    }>
}

const OrphanageDetails = () => {
    const route = useRoute();
    const params = route.params as OrphanageDetailsRouteParams;

    const [orphanage, setOrphanage] = useState<Orphanage>();

    useEffect(() => {
        api.get(`orphanages/${params.id}`).then(response => {
            setOrphanage(response.data);
        });
    }, [params.id]);

    if (!orphanage) {
        return (
            <Container>
                <Description>...Carregando...</Description>
            </Container>
        );
    }

    async function handleOpenGoogleMapsRoutes() {
        await Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${orphanage?.latitude},${orphanage?.longitude}`)
    }

    return (
    <Container>
            <ImagesContainer>
                <ScrollView horizontal pagingEnabled>
                    {orphanage.images.map(image => {
                        return (
                            <Image
                                key={image.id}
                                source={{uri: image.url}}
                            />
                        );
                    })}
                </ScrollView>
            </ImagesContainer>

            <DetailsContainer>
                <Title>{orphanage.name}</Title>
                <Description>{orphanage.about}</Description>

                <MapContainer>
                    <MapStyle
                        initialRegion={{
                            latitude: orphanage.latitude,
                            longitude: orphanage.longitude,
                            latitudeDelta: 0.008,
                            longitudeDelta: 0.008,
                        }}
                        zoomEnabled={false}
                        pitchEnabled={false}
                        scrollEnabled={false}
                        rotateEnabled={false}
                    >
                        <Marker
                            icon={mapMarkerImg}
                            coordinate={{
                                latitude: orphanage.latitude,
                                longitude: orphanage.longitude,
                            }}
                        />
                    </MapStyle>

                    <RoutesContainer onPress={handleOpenGoogleMapsRoutes}>
                        <RoutesText>Ver rotas no Google Maps</RoutesText>
                    </RoutesContainer>
                </MapContainer>

                <Separator/>

                <Title>Instruções para visita</Title>
                <Description>{orphanage.instructions}</Description>

                <ScheduleContainer>
                    <ScheduleItem itemColor="blue">
                        <Feather name="clock" size={40} color="#2AB5D1"/>
                        <ScheduleText itemColor="blue">
                            Segunda à Sexta {orphanage.opening_hours}
                        </ScheduleText>
                    </ScheduleItem>
                    {orphanage.open_on_weekends ? (
                        <ScheduleItem itemColor="green">
                            <Feather name="info" size={40} color="#39CC83"/>
                            <ScheduleText itemColor="green">
                                Atendemos fim de semana
                            </ScheduleText>
                        </ScheduleItem>
                    ) : (
                        <ScheduleItem itemColor="red">
                            <Feather name="info" size={40} color="#FF669D"/>
                            <ScheduleText itemColor="red">
                                Não atendemos fim de semana
                            </ScheduleText>
                        </ScheduleItem>
                    )}
                </ScheduleContainer>

                {/*  <RectButton style={styles.contactButton} onPress={() => {}}>
                    <FontAwesome name="whatsapp" size={24} color="#FFF" />
                    <Text style={styles.contactButtonText}>Entrar em contato</Text>
                </RectButton>*/}
            </DetailsContainer>
    </Container>
    );
}

export default OrphanageDetails;
