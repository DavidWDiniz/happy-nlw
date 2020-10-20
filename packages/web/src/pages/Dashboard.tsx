import React from "react";
import Sidebar from "../components/Sidebar";

import {PageDashboard} from "../styles/pages/dashboard";

const Dashboard = () => {
    return (
        <PageDashboard>

            <Sidebar dashboard />

            <main>
                <h1>Dashboard</h1>
            </main>
        </PageDashboard>
    );
}

export default Dashboard;
