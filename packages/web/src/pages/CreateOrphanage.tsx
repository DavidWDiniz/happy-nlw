import React, {ChangeEvent, FormEvent, useState} from "react";
import { Map, Marker, TileLayer } from "react-leaflet";
import {useHistory} from "react-router-dom";

import { FiPlus } from "react-icons/fi";

import {ButtonSelect, ConfirmButton, CreateOrphanageForm, InputBlock, NewImage, PageCreateOrphanage, ImagesContainer} from "../styles/pages/create-orphanage";
import Sidebar from "../components/Sidebar";
import mapIcon from "../utils/mapIcon";
import {LeafletMouseEvent} from "leaflet";
import api from "../services/api";

export default function CreateOrphanage() {
    const history = useHistory();

    const [position, setPosition] = useState({latitude: 0, longitude: 0});

    const [name, setName] = useState("");
    const [about, setAbout] = useState("");
    const [instructions, setInstructions] = useState("");
    const [opening_hours, setOpeningHours] = useState("");
    const [open_on_weekends, setOpenOnWeekends] = useState(true);
    const [images, setImages] = useState<File[]>([]);
    const [previewImages, setPreviewImages] = useState<string[]>([]);

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
        setPreviewImages(selectedImagesPreview)
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        const {latitude, longitude} = position;

        const data = new FormData();

        data.append("name", name);
        data.append("about", about);
        data.append("latitude", String(latitude));
        data.append("longitude", String(longitude));
        data.append("instructions", instructions);
        data.append("opening_hours", opening_hours);
        data.append("open_on_weekends", String(open_on_weekends));

        images.forEach(image => {
            data.append("images", image);
        });

        await api.post("orphanages", data);
        alert("Cadastro realizado com sucesso!");
        history.push("/app");
    }

    return (
        <PageCreateOrphanage>

            <Sidebar />

            <main>
                <CreateOrphanageForm onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Dados</legend>

                        <Map
                            center={[-27.2092052,-49.6401092]}
                            style={{ width: "100%", height: 280 }}
                            zoom={15}
                            onClick={handleMapClick}
                        >
                            <TileLayer
                                url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {position.latitude !== 0 &&  <Marker interactive={false} icon={mapIcon} position={[position.latitude, position.longitude]} />}

                        </Map>

                        <InputBlock>
                            <label htmlFor="name">Nome</label>
                            <input id="name" value={name} onChange={event => setName(event.target.value)}/>
                        </InputBlock>

                        <InputBlock>
                            <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
                            <textarea id="name" maxLength={300} value={about} onChange={event => setAbout(event.target.value)} />
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
                                    <FiPlus size={24} color="#15b6d6" />
                                </NewImage>
                            </ImagesContainer>
                            <input multiple onChange={handleSelectedImages} type="file" id="image[]"/>
                        </InputBlock>
                    </fieldset>

                    <fieldset>
                        <legend>Visitação</legend>

                        <InputBlock>
                            <label htmlFor="instructions">Instruções</label>
                            <textarea id="instructions" value={instructions} onChange={event => setInstructions(event.target.value)} />
                        </InputBlock>

                        <InputBlock>
                            <label htmlFor="opening_hours">Horário de funcionamento</label>
                            <input id="opening_hours" value={opening_hours} onChange={event => setOpeningHours(event.target.value)} />
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

                    <ConfirmButton type="submit">
                        Confirmar
                    </ConfirmButton>
                </CreateOrphanageForm>
            </main>
        </PageCreateOrphanage>
    );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
