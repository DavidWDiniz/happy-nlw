import React, {useEffect, useState} from "react";
import {FiArrowRight, FiPlus} from "react-icons/fi";
import {Map, TileLayer, Marker} from "react-leaflet";
import {Link} from "react-router-dom";

import mapMarkerImg from "../images/map-marker.svg";
import {PageMap, CreateOrphanage, MapPopup} from "../styles/pages/orphanages-map";
import mapIcon from "../utils/mapIcon";
import api from "../services/api";

interface Orphanage {
    id: number;
    longitude: number;
    latitude: number;
    name: string;
}

const OrphanagesMap: React.FC = () => {

    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(() => {
        api.get("/orphanages").then(response => {
            setOrphanages(response.data);
        })
    },  []);

    return (
        <PageMap>
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando sua visita :)</p>
                </header>

                <footer>
                    <strong>Mariana</strong>
                    <span>Minas Gerais</span>
                </footer>
            </aside>

            <Map
                center={[-20.3833472,-43.4163019]}
                zoom={15}
                style={{width: "100%", height: "100%"}}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {orphanages.map(orphanage => {
                    return (
                        <Marker
                            icon={mapIcon}
                            position={[orphanage.latitude, orphanage.longitude]}
                            key={orphanage.id}
                        >
                            <MapPopup closeButton={false} minWidth={240} maxWidth={240}>
                                {orphanage.name}
                                <Link to={`/orphanages/${orphanage.id}`}>
                                    <FiArrowRight size={20} color="#FFF" />
                                </Link>
                            </MapPopup>
                        </Marker>
                    );
                })}

            </Map>

            <CreateOrphanage to="/orphanages/create">
                <FiPlus size={32} color="#FFF" />
            </CreateOrphanage>
        </PageMap>
    );
};

export default OrphanagesMap;
