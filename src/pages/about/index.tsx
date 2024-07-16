import { Helmet } from "react-helmet-async";
import { ContainerAbout } from "./styles";


export function About(){

    return(
        <ContainerAbout>
            <Helmet title="Sobre" />
            <h1>Sobre</h1>
        </ContainerAbout>
    )
}