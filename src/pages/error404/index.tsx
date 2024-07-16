import { Helmet } from "react-helmet-async";
import { ContainerError404 } from "./styles";


export function Error404(){

    return(
        <ContainerError404>
            <Helmet title="página não encontrada" />
            <h1>Página não encontrada !</h1>
        </ContainerError404>
    )
}