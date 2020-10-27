import React, {useState} from "react";
import mapMarkerImg from "../images/map-marker.svg";
import {FiArrowLeft, FiPower, FiAlertCircle, FiMapPin} from "react-icons/fi";
import { useHistory } from "react-router-dom";

import {AppSidebar} from "../styles/components/sidebar";
import {useAuth} from "../services/auth";

interface SidebarProps {
    isDashboard?: boolean;
    initialState?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({isDashboard, initialState}) => {
    const {goBack} = useHistory();
    const {signOut} = useAuth();
    const [active, setActive] = useState(initialState);

    function handleButtonRegisteredClick() {
        !active && setActive(!active)
        //goback();
    }

    function handleButtonPendingClick() {
        active && setActive(!active)
        //goBack();
    }

    return (
        <AppSidebar>
            <img src={mapMarkerImg} alt="Happy" />
            {isDashboard && (
                <div>
                    <button className={active ? "active" : ""} type="button" onClick={handleButtonRegisteredClick}>
                        <FiMapPin size={24} color={active ? "#0089A5" : "#FFF"}/>
                    </button>
                    <button className={active ? "" : "active"} type="button" onClick={handleButtonPendingClick}>
                        <FiAlertCircle size={24} color={active ? "#FFF" : "#0089A5"}/>
                    </button>
                </div>
            )}
            <footer>
                {!isDashboard ? (
                    <button type="button" onClick={goBack}>
                        <FiArrowLeft size={24} color="#FFF"/>
                    </button>
                ) : (
                    <button type="button" onClick={signOut}>
                        <FiPower size={24} color="#FFF"/>
                    </button>
                )}
            </footer>
        </AppSidebar>
    );
}

export default Sidebar;
