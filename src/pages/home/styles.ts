import styled from "styled-components";

export const ContainerHome = styled.div`

    width: 100vw;
    margin-top: 5rem;
    height: calc(100vh - 5rem);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: red;

    h1{
        color: ${props => props.theme.COLORS.WHITE};
    }
`