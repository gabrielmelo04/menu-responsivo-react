import { Helmet } from "react-helmet-async";
import { ContainerProduct } from "./styles";


export function Product(){

    return(
        <ContainerProduct>
            <Helmet title="Produtos" />
            <h1>Produtos</h1>
        </ContainerProduct>
    )
}