import { Helmet } from "react-helmet-async";
import { ContainerHome } from "./styles";


export function Home(){

    return(
        <ContainerHome>
            <Helmet title="Início" />
            <h1>Home</h1>
        </ContainerHome>
    )
}