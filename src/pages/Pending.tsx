import React, {useEffect, useState} from "react";
import Sidebar from "../components/Sidebar";

import {PageDashboard} from "../styles/pages/dashboard";

import api from "../services/api";
import MapContainer from "../components/MapContainer";

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
                            <MapContainer
                                id={orphanage.id}
                                name={orphanage.name}
                                latitude={orphanage.latitude}
                                longitude={orphanage.longitude}
                                pending
                            />
                        );
                    })}
                </main>
            </div>
        </PageDashboard>
    );
}

export default Pending;
