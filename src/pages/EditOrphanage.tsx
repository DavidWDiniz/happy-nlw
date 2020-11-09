import React from "react";

import {PageEditOrphanage} from "../styles/pages/edit-orphanage";
import Sidebar from "../components/Sidebar";

import EditableFields from "../components/EditableFields";

const EditOrphanage = () => {
    return (
        <PageEditOrphanage>

            <Sidebar />

            <EditableFields type="editRegistered" />

        </PageEditOrphanage>
    );
}

export default EditOrphanage;
