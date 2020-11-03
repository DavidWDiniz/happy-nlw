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

const Dashboard = () => {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(() => {
        api.get("/orphanages").then(response => {
            setOrphanages(response.data);
        })
    },  []);
    return (
        <PageDashboard>

            <Sidebar isDashboard initialState={true}/>
            <div>
                <h1>Orfanatos cadastrados</h1>
                <hr />
                <main>
                    {orphanages.map(orphanage => {
                        return (
                            <MapContainer
                                key={orphanage.id}
                                longitude={orphanage.longitude}
                                latitude={orphanage.latitude}
                                name={orphanage.name}
                                id={orphanage.id}
                            />
                        );
                    })}
                </main>
            </div>
        </PageDashboard>
    );
}

export default Dashboard;
