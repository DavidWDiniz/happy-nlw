import React, {useEffect, useState} from "react";
import { FiClock, FiInfo} from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
import {useParams} from "react-router-dom";

import {Hour, Images, MapContainer, OpenDetails, CloseOnWeekends, OpenOnWeekends, OrphanageDetails, OrphanageDetailsContent, PageOrphanage, ContactButton} from "../styles/pages/orphanage";
import Sidebar from "../components/Sidebar";
import mapIcon from "../utils/mapIcon";
import api from "../services/api";
import {FaWhatsapp} from "react-icons/all";

interface Orphanage {
    longitude: number;
    latitude: number;
    name: string;
    about: string;
    whatsapp: number;
    instructions: string;
    opening_hours: string;
    open_on_weekend: string;
    images: Array<{
        id: number;
        url: string;
    }>;
}

interface OrphanageParams {
    id: string;
}

export default function Orphanage() {
    const params = useParams<OrphanageParams>();
    const [orphanage, setOrphanage] = useState<Orphanage>();
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    useEffect(() => {
        api.get(`/orphanages/${params.id}`).then(response => {
            setOrphanage(response.data);
        })
    },  [params.id]);

    if (!orphanage) {
        return <p>Carregando...</p>;
    }

    function handleClickToWhatsapp() {
        window.open(`https://wa.me/${orphanage?.whatsapp}`);
    }

    return (
        <PageOrphanage>

            <Sidebar />

            <main>
                <OrphanageDetails>
                    <img src={orphanage.images[activeImageIndex].url} alt={orphanage.name}/>

                    <Images>
                        {orphanage.images.map((image, index) => {
                            return (
                                <button
                                    key={image.id}
                                    type="button"
                                    className={activeImageIndex === index ? "active" : ""}
                                    onClick={() => {
                                        setActiveImageIndex(index);
                                    }}
                                >
                                    <img src={image.url} alt={orphanage.name} />
                                </button>
                            );
                        })}
                    </Images>

                    <OrphanageDetailsContent>
                        <h1>{orphanage.name}</h1>
                        <p>{orphanage.about}</p>

                        <MapContainer>
                            <Map
                                center={[orphanage.latitude, orphanage.longitude]}
                                zoom={16}
                                style={{ width: "100%", height: 280 }}
                                dragging={false}
                                touchZoom={false}
                                zoomControl={false}
                                scrollWheelZoom={false}
                                doubleClickZoom={false}
                            >
                                <TileLayer
                                    url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker interactive={false} icon={mapIcon} position={[orphanage.latitude, orphanage.longitude]} />
                            </Map>

                            <footer>
                                <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}>Ver rotas no Google Maps</a>
                            </footer>
                        </MapContainer>

                        <hr />

                        <h2>Instruções para visita</h2>
                        <p>{orphanage.instructions}</p>

                        <OpenDetails>
                            <Hour>
                                <FiClock size={32} color="#15B6D6" />
                                Segunda à Sexta <br />
                                {orphanage.opening_hours}
                            </Hour>
                            {orphanage.open_on_weekend ? (
                                <OpenOnWeekends>
                                    <FiInfo size={32} color="#39CC83" />
                                    Atendemos <br />
                                    fim de semana
                                </OpenOnWeekends>
                            ) : (
                                <CloseOnWeekends>
                                    <FiInfo size={32} color="#FF669D" />
                                    Não atendemos <br />
                                    fim de semana
                                </CloseOnWeekends>
                            )}
                        </OpenDetails>

                        <ContactButton type="button" onClick={handleClickToWhatsapp}>
                            <FaWhatsapp size={20} color="#FFF" />
                            Entrar em contato
                        </ContactButton>
                    </OrphanageDetailsContent>
                </OrphanageDetails>
            </main>
        </PageOrphanage>
    );
}
