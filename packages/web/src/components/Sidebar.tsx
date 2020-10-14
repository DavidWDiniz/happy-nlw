import React from "react";
import mapMarkerImg from "../images/map-marker.svg";
import {FiArrowLeft} from "react-icons/fi";
import { useHistory } from "react-router-dom";

import {AppSidebar} from "../styles/components/sidebar";

const Sidebar: React.FC = () => {
    const {goBack} = useHistory();
    return (
        <AppSidebar>
            <img src={mapMarkerImg} alt="Happy" />

            <footer>
                <button type="button" onClick={goBack}>
                    <FiArrowLeft size={24} color="#FFF" />
                </button>
            </footer>
        </AppSidebar>
    );
}

export default Sidebar;
