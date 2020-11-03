import React from "react";

import {Marker, TileLayer} from "react-leaflet";
import mapIcon from "../utils/mapIcon";

import {MapContent, MapStyled} from "../styles/components/MapContainer"
import {Link} from "react-router-dom";
import {FiEdit3, FiTrash} from "react-icons/all";

interface MapProps {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

const MapContainer: React.FC<MapProps> = ({id, name, latitude, longitude}) => {

    return (
        <MapContent key={id}>
            <MapStyled
                center={[latitude, longitude]}
                zoom={16}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
            >
                <TileLayer
                    url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker interactive={false} icon={mapIcon} position={[latitude, longitude]}/>
            </MapStyled>

            <footer>
                <p>{name}</p>
                <div>
                    <Link to={`orphanage/update/${id}`}>
                        <FiEdit3 size={24} color="#15C3D6"/>
                    </Link>
                    <Link to={{pathname: `orphanage/delete/${id}`, state: {name}}} >
                        <FiTrash size={24} color="#15C3D6"/>
                    </Link>
                </div>
            </footer>
        </MapContent>
    );
}

export default MapContainer;
