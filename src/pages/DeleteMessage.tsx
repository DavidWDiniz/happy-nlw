import React, {useCallback} from "react";
import {useHistory, useLocation, useParams} from "react-router-dom";
import {CancelButton, ConfirmButton, ContentWrapper, PageRegister} from "../styles/pages/delete-message";
import api from "../services/api";

interface dataType {
    name: string;
}

interface OrphanageParams {
    id: string;
}

const DeleteMessage = () => {
    const history = useHistory();
    const data = useLocation<dataType>();
    const params = useParams<OrphanageParams>();

    function handleGoBackToDashboard() {
        history.push("/dashboard");
    }

    const deleteOrphanage = useCallback(async () => {
        await api.delete(`/orphanages/${params.id}`);
        history.push("/dashboard");
    }, [history, params.id]);

    return (
        <PageRegister>
            <ContentWrapper>
                <main>
                    <h1>Excluir!</h1>
                    <p>
                        Você tem certeza que quer
                        excluir {data.state.name}
                    </p>
                    <div>
                        <ConfirmButton type="button" onClick={deleteOrphanage}>
                            Sim
                        </ConfirmButton>
                        <CancelButton type="button" onClick={handleGoBackToDashboard}>
                            Não
                        </CancelButton>
                    </div>
                </main>
            </ContentWrapper>
        </PageRegister>
    );
}

export default DeleteMessage;
