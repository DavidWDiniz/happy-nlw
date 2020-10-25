import React from "react";
import Sidebar from "../components/Sidebar";

import {PageDashboard, MapContainer} from "../styles/pages/dashboard";
import {Map, Marker, TileLayer} from "react-leaflet";
import mapIcon from "../utils/mapIcon";
import {Link} from "react-router-dom";
import {FiEdit3, FiTrash} from "react-icons/all";

const Dashboard = () => {
    return (
        <PageDashboard>

            <Sidebar isDashboard initialState={true} />
            <main>

                <MapContainer>
                    <Map
                        center={[20, 20]}
                        zoom={16}
                        style={{ width: 545, height: 310 }}
                        dragging={false}
                        touchZoom={false}
                        zoomControl={false}
                        scrollWheelZoom={false}
                        doubleClickZoom={false}
                    >
                        <TileLayer
                            url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker interactive={false} icon={mapIcon} position={[20, 20]} />
                    </Map>

                    <footer>
                        <p>Ver rotas no Google Maps</p>
                        <div>
                            <Link to="/">
                                <FiEdit3 size={24} color="#15C3D6"/>
                            </Link>
                            <Link to="/">
                                <FiTrash size={24} color="#15C3D6"/>
                            </Link>
                        </div>
                    </footer>
                </MapContainer>
                <MapContainer>
                    <Map
                        center={[20, 20]}
                        zoom={16}
                        style={{ width: 545, height: 310 }}
                        dragging={false}
                        touchZoom={false}
                        zoomControl={false}
                        scrollWheelZoom={false}
                        doubleClickZoom={false}
                    >
                        <TileLayer
                            url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker interactive={false} icon={mapIcon} position={[20, 20]} />
                    </Map>

                    <footer>
                        <p>Ver rotas no Google Maps</p>
                        <div>
                            <Link to="/">
                                <FiEdit3 size={24} color="#15C3D6"/>
                            </Link>
                            <Link to="/">
                                <FiTrash size={24} color="#15C3D6"/>
                            </Link>
                        </div>
                    </footer>
                </MapContainer>
                <MapContainer>
                    <Map
                        center={[20, 20]}
                        zoom={16}
                        style={{ width: 545, height: 310 }}
                        dragging={false}
                        touchZoom={false}
                        zoomControl={false}
                        scrollWheelZoom={false}
                        doubleClickZoom={false}
                    >
                        <TileLayer
                            url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker interactive={false} icon={mapIcon} position={[20, 20]} />
                    </Map>

                    <footer>
                        <p>Ver rotas</p>
                        <div>
                            <Link to="/">
                                <FiEdit3 size={24} color="#15C3D6"/>
                            </Link>
                            <Link to="/">
                                <FiTrash size={24} color="#15C3D6"/>
                            </Link>
                        </div>
                    </footer>
                </MapContainer>

            </main>
        </PageDashboard>
    );
}

export default Dashboard;
