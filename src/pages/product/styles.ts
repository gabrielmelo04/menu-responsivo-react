import styled from "styled-components";


export const ContainerProduct = styled.div`

    width: 100vw;
    height: calc(100vh - 5rem);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
        color: ${props => props.theme.COLORS.WHITE};
    }
`