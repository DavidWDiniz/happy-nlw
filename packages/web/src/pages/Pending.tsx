import React, {useEffect, useState} from "react";
import Sidebar from "../components/Sidebar";

import {MapContainer, PageDashboard} from "../styles/pages/dashboard";
import {Map, Marker, TileLayer} from "react-leaflet";
import mapIcon from "../utils/mapIcon";
import {Link} from "react-router-dom";
import {FiArrowRight} from "react-icons/all";
import api from "../services/api";

interface Orphanage {
    id: number;
    longitude: number;
    latitude: number;
    name: string;
}

const Pending = () => {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(() => {
        api.get("/pending").then(response => {
            setOrphanages(response.data);
        })
    },  []);
    return (
        <PageDashboard>

            <Sidebar isDashboard initialState={false}/>
            <div>
                <h1>Orfanatos pendentes</h1>
                <hr />
                <main>
                    {orphanages.map(orphanage => {
                        return (
                            <MapContainer key={orphanage.id}>
                                <Map
                                    center={[orphanage.latitude, orphanage.longitude]}
                                    zoom={16}
                                    style={{width: 535, height: 300}}
                                    dragging={false}
                                    touchZoom={false}
                                    zoomControl={false}
                                    scrollWheelZoom={false}
                                    doubleClickZoom={false}
                                >
                                    <TileLayer
                                        url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker interactive={false} icon={mapIcon} position={[orphanage.latitude, orphanage.longitude]}/>
                                </Map>

                                <footer>
                                    <p>{orphanage.name}</p>
                                    <div>
                                        <Link to={`edit-pending/${orphanage.id}`}>
                                            <FiArrowRight size={24} color="#15C3D6"/>
                                        </Link>
                                    </div>
                                </footer>
                            </MapContainer>
                        );
                    })}
                </main>
            </div>
        </PageDashboard>
    );
}

export default Pending;
