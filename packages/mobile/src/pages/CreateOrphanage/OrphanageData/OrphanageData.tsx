import React, {useState} from "react";
import {Alert, Switch} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import {useNavigation, useRoute} from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

import api from "../../../services/api";

import {Title, Container, Input, ImagesInput, Label, NextButton, NextButtonText, SwitchContainer, UploadedImage, UploadedImagesContainer} from "./styles";

interface OrphanageDataRouteParams {
    position: {
        latitude: number;
        longitude: number;
    }
}

const OrphanageData = () => {
    const [name, setName] = useState("");
    const [about, setAbout] = useState("");
    const [instructions, setInstructions] = useState("");
    const [opening_hours, setOpeningHours] = useState("");
    const [open_on_weekends, setOpenOnWeekends] = useState(true);
    const [images, setImages] = useState<string[]>([]);

    const navigation = useNavigation();
    const route = useRoute();
    const params = route.params as OrphanageDataRouteParams;

    async function handleCreateOrphanage() {
        const {latitude, longitude} = params.position;

        const data = new FormData();

        data.append("name", name);
        data.append("latitude", String(latitude));
        data.append("longitude", String(longitude));
        data.append("about", about);
        data.append("instructions", instructions);
        data.append("opening_hours", opening_hours);
        data.append("open_on_weekends", String(open_on_weekends));

        images.forEach((image, index) => {
            data.append("images", {
                name: `image_${index}.jpg`,
                type: "image/jpg",
                uri: image,
            });
        });

        await api.post("orphanages", data);
        navigation.navigate("OrphanagesMap");
    }

    async function handleSelectImages() {
        const {status} = await ImagePicker.requestCameraRollPermissionsAsync();

        if (status !== "granted") {
            Alert.alert("Eita, precisamos de acesso as suas fotos...");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
            mediaTypes: ImagePicker.MediaTypeOptions.Images
        });

        if (result.cancelled) {
            return;
        }
        const {uri: image} = result;
        setImages([...images, image]);
    }

    return (
        <Container contentContainerStyle={{padding: 24}}>
            <Title>Dados</Title>

            <Label>Nome</Label>
            <Input
                value={name}
                onChangeText={setName}
            />

            <Label>Sobre</Label>
            <Input
                style={{height: 110}}
                multiline
                value={about}
                onChangeText={setAbout}
            />

            {/*  <Text style={styles.label}>Whatsapp</Text>
            <TextInput
                style={styles.input}
            />*/}

            <Label>Fotos</Label>

            <UploadedImagesContainer>
                {images.map(image => {
                    return (
                        <UploadedImage
                            key={image}
                            source={{uri: image}}
                        />
                    );
                })}
            </UploadedImagesContainer>

            <ImagesInput onPress={handleSelectImages}>
                <Icon name="plus" size={24} color="#15B6D6"/>
            </ImagesInput>

            <Title>Visitação</Title>

            <Label>Instruções</Label>
            <Input
                style={{height: 110}}
                multiline
                value={instructions}
                onChangeText={setInstructions}
            />

            <Label>Horario de visitas</Label>
            <Input
                value={opening_hours}
                onChangeText={setOpeningHours}
            />

            <SwitchContainer>
                <Label>Atende final de semana?</Label>
                <Switch
                    thumbColor="#fff"
                    trackColor={{false: "#ccc", true: "#39CC83"}}
                    value={open_on_weekends}
                    onValueChange={setOpenOnWeekends}
                />
            </SwitchContainer>

            <NextButton onPress={handleCreateOrphanage}>
                <NextButtonText>Cadastrar</NextButtonText>
            </NextButton>
        </Container>
    )
}

export default OrphanageData;
