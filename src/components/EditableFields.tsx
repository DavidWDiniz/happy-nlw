import React, {ChangeEvent, FormEvent, useCallback, useEffect, useMemo, useState} from "react";
import {
    ButtonSelect,
    ConfirmButton,
    Container,
    CreateOrphanageForm,
    ImagesContainer,
    InputBlock,
    NewImage,
    RefuseButton,
} from "../styles/components/EditableFields";
import {Map, Marker, TileLayer} from "react-leaflet";
import mapIcon from "../utils/mapIcon";
import {FiCheck, FiPlus, FiX} from "react-icons/fi";
import {useHistory, useParams} from "react-router-dom";
import api from "../services/api";
import {LeafletMouseEvent} from "leaflet";

interface Orphanage {
    id: number;
    longitude: number;
    latitude: number;
    name: string;
    about: string;
    whatsapp: number;
    instructions: string;
    opening_hours: string;
    open_on_weekends: string;
    images: Array<{
        id: number;
        url: string;
    }>;
}

interface OrphanageParams {
    id: string;
}

interface inputType {
    type: "register" | "editRegistered" | "editPending";
}

const EditableFields: React.FC<inputType> = ({type}) => {
    const history = useHistory();
    const params = useParams<OrphanageParams>();
    const [orphanage, setOrphanage] = useState<Orphanage>();

    const [position, setPosition] = useState({latitude: 0, longitude: 0});

    const [name, setName] = useState("");
    const [about, setAbout] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [instructions, setInstructions] = useState("");
    const [opening_hours, setOpeningHours] = useState("");
    const [open_on_weekends, setOpenOnWeekends] = useState(true);
    const [images, setImages] = useState<File[]>([]);
    const [previewImages, setPreviewImages] = useState<string[]>([]);

    useEffect(() => {
        switch (type) {
            case "editPending":
                api.get(`/pending/${params.id}`).then(response => {
                    setOrphanage(response.data);
                });
                break;
            case "editRegistered":
                api.get(`/orphanages/${params.id}`).then(response => {
                    setOrphanage(response.data);
                });
                break;
            default:
                break;
        }

    }, [type, params.id]);

    useMemo(() => {
        if (orphanage && type !== "register") {
            setName(orphanage.name);
            setAbout(orphanage.about);
            setWhatsapp(String(orphanage.whatsapp));
            setInstructions(orphanage.instructions);
            setOpeningHours(orphanage.opening_hours);
            setOpenOnWeekends(!!orphanage.open_on_weekends);
            setPosition({latitude: orphanage.latitude, longitude: orphanage.longitude});
        }
    }, [type, orphanage]);

    const deleteOrphanage = useCallback(async () => {
        await api.delete(`/orphanages/${params.id}`);
        history.push("/pending");
    }, [history, params.id]);

    function handleMapClick(event: LeafletMouseEvent) {
        const {lat, lng} = event.latlng;

        setPosition({
            latitude: lat,
            longitude: lng,
        });
    }

    function handleSelectedImages(event: ChangeEvent<HTMLInputElement>) {
        if (!event.target.files) {
            return;
        }
        const selectedImages = Array.from(event.target.files);
        setImages(selectedImages);

        const selectedImagesPreview = selectedImages.map(image => {
            return URL.createObjectURL(image);
        });
        setPreviewImages(selectedImagesPreview);
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        const {latitude, longitude} = position;

        const data = new FormData();

        data.append("name", name);
        data.append("about", about);
        data.append("whatsapp", String(whatsapp))
        data.append("latitude", String(latitude));
        data.append("longitude", String(longitude));
        data.append("instructions", instructions);
        data.append("opening_hours", opening_hours);
        data.append("open_on_weekends", String(open_on_weekends));

        images.forEach(image => {
            data.append("images", image);
        });

        switch (type) {
            case "register":
                data.append("accepted", "false");
                await api.post("orphanages", data);
                history.push("/orphanages/register");
                break;
            case "editRegistered":
                data.append("accepted", "true");
                await api.put(`orphanages/${orphanage?.id}`, data);
                history.push("/dashboard");
                break;
            case "editPending":
                data.append("accepted", "true");
                await api.put(`orphanages/${orphanage?.id}`, data);
                history.push("/pending");
        }
    }

    return (
        <Container>
            {orphanage && <p>Editar perfil de {orphanage?.name}</p>}
            <CreateOrphanageForm onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Dados</legend>

                    <Map
                        center={[orphanage ? orphanage.latitude : -20.3823676, orphanage ? orphanage.longitude : -43.4163019]}
                        style={{width: "100%", height: 280}}
                        zoom={15}
                        onClick={handleMapClick}
                    >
                        <TileLayer
                            url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {position.latitude !== 0 &&
                        <Marker interactive={false} icon={mapIcon} position={[position.latitude, position.longitude]}/>}

                    </Map>

                    <InputBlock>
                        <label htmlFor="name">Nome</label>
                        <input id="name" value={name} onChange={event => setName(event.target.value)}/>
                    </InputBlock>

                    <InputBlock>
                        <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
                        <textarea id="about" maxLength={300} value={about}
                                  onChange={event => setAbout(event.target.value)}/>
                    </InputBlock>

                    <InputBlock>
                        <label htmlFor="whatsapp">Whatsapp</label>
                        <input type="number" id="whatsapp" value={whatsapp}
                               onChange={event => setWhatsapp(event.target.value)}/>
                    </InputBlock>

                    <InputBlock>
                        <label htmlFor="images">Fotos</label>

                        <ImagesContainer>
                            {previewImages.map(image => {
                                return (
                                    <img key={image} src={image} alt={name}/>
                                );
                            })}
                            <NewImage htmlFor="image[]">
                                <FiPlus size={24} color="#15b6d6"/>
                            </NewImage>
                        </ImagesContainer>
                        <input multiple onChange={handleSelectedImages} type="file" id="image[]"/>
                    </InputBlock>
                </fieldset>

                <fieldset>
                    <legend>Visitação</legend>

                    <InputBlock>
                        <label htmlFor="instructions">Instruções</label>
                        <textarea id="instructions" value={instructions}
                                  onChange={event => setInstructions(event.target.value)}/>
                    </InputBlock>

                    <InputBlock>
                        <label htmlFor="opening_hours">Horário de funcionamento</label>
                        <input id="opening_hours" value={opening_hours}
                               onChange={event => setOpeningHours(event.target.value)}/>
                    </InputBlock>

                    <InputBlock>
                        <label htmlFor="open_on_weekends">Atende fim de semana</label>

                        <ButtonSelect>
                            <button
                                className={open_on_weekends ? "active" : ""}
                                type="button"
                                onClick={() => setOpenOnWeekends(true)}
                            >
                                Sim
                            </button>
                            <button
                                className={!open_on_weekends ? "inactive" : ""}
                                type="button"
                                onClick={() => setOpenOnWeekends(false)}
                            >
                                Não
                            </button>
                        </ButtonSelect>
                    </InputBlock>
                </fieldset>

                {type === "editPending" && <RefuseButton onClick={deleteOrphanage}>
                    <FiX size={24} color="#FFF"/>
                    Recusar
                </RefuseButton>}
                <ConfirmButton type="submit">
                    <FiCheck size={24} color="#FFF"/>
                    {type === "editPending" ? "Aceitar" : "Confirmar"}
                </ConfirmButton>
            </CreateOrphanageForm>
        </Container>
    );
};

export default EditableFields;
