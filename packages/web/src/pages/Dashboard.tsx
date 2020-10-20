import React from "react";
import {useAuth} from "../services/auth";

const Dashboard = () => {
    const {signOut} = useAuth();
    return (
        <>
            <h1>Dashboard</h1>
            <button onClick={signOut}>Sair</button>
        </>
    );
}

export default Dashboard;
