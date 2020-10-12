import React from "react";
import {FiPlus} from "react-icons/fi";
import {Map, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import mapMarkerImg from "../images/map-marker.svg";
import {PageMap, CreateOrphanage} from "../styles/pages/orphanages-map";

const OrphanagesMap: React.FC = () => {
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
            </Map>

            <CreateOrphanage to="">
                <FiPlus size={32} color="#FFF" />
            </CreateOrphanage>
        </PageMap>
    );
};

export default OrphanagesMap;
