import React from "react";
import {BrowserRouter, Switch} from "react-router-dom";

import Landing from "./pages/Landing";
import OrphanagesMap from "./pages/OrphanagesMap";
import Orphanage from "./pages/Orphanage";
import CreateOrphanage from "./pages/CreateOrphanage";
import RegisterMessage from "./pages/RegisterMessage";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import EditOrphanage from "./pages/EditOrphanage";
import Route from "./Route";
import DeleteMessage from "./pages/DeleteMessage";
import Pending from "./pages/Pending";
import EditPendingOrphanage from "./pages/EditPendingOrphanage";


const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={OrphanagesMap} />
                <Route path="/orphanages/create" component={CreateOrphanage} />
                <Route path="/orphanages/register/" component={RegisterMessage} />
                <Route path="/orphanages/:id" component={Orphanage} />

                <Route path="/signin" component={SignIn} />
                <Route isPrivate path="/dashboard" component={Dashboard} />
                <Route isPrivate path="/pending" component={Pending} />
                <Route isPrivate path="/edit-pending/:id" component={EditPendingOrphanage} />
                <Route isPrivate path="/orphanage/update/:id" component={EditOrphanage} />
                <Route isPrivate path="/orphanage/delete/:id" component={DeleteMessage} />

            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
