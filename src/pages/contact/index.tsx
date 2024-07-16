import { Helmet } from "react-helmet-async";
import { ContainerContact } from "./styles";


export function Contact(){
    return(
        <ContainerContact>
            <Helmet title="Contato" />
            <h1>Contato</h1>
        </ContainerContact>
    )
}