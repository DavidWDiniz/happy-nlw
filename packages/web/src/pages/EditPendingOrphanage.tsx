import React from "react";

import {PageCreateOrphanage} from "../styles/pages/edit-pending-orphanage";
import Sidebar from "../components/Sidebar";

import EditableFields from "../components/EditableFields";

const EditPendingOrphanage = () => {

    return (
        <PageCreateOrphanage>

            <Sidebar />

            <EditableFields type="editPending" />

        </PageCreateOrphanage>
    );
}

export default EditPendingOrphanage;
