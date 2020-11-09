import React from "react";

import {PageCreateOrphanage} from "../styles/pages/create-orphanage";
import Sidebar from "../components/Sidebar";

import EditableFields from "../components/EditableFields";

export default function CreateOrphanage() {

    return (
        <PageCreateOrphanage>

            <Sidebar />

            <EditableFields type="register" />
        </PageCreateOrphanage>
    );
}

