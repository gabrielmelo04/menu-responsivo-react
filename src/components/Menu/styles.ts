import styled, { keyframes } from "styled-components";

export const ContainerMenu = styled.div`

    width: 100vw;
    height: 5rem;

    position: absolute;
    left: 0px;
    top: 0px;

    padding: 0 2rem;

    background-color: ${props => props.theme.COLORS.PRIMARY};
    box-shadow: 0px 2px 3px #495057;

    display: flex;
    flex-direction: row;

    justify-content: space-between;
    align-items: center;

`

export const Logo = styled.div`

    width: 16.68rem;
    height: 4.9rem;

    margin-left: -1.70rem;

    flex: 1 1 0%; //ocupar o espaço que está sobrando

`

export const ItemsMenu = styled.nav`

    display: flex;
    flex-direction: row;

    align-items: center;
    gap: 2rem;

    a{
        color: ${props => props.theme.COLORS.GRAY_500};
        text-decoration: none;
        letter-spacing: 0.1rem;

        font-size: ${props => props.theme.FONT_SIZES.XL};
        font-weight: ${props => props.theme.FONT_WEIGHTS.SEMI_BOLD};

    }

    .active{
        color: ${props => props.theme.COLORS.SECONDARY};
        text-decoration: underline;
    }

    @media (max-width: 700px){
        display: none;
    }

`

export const IconMenu = styled.div`

    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;

    border: none;
    

    svg{
        font-size: 42px;
        color: ${props => props.theme.COLORS.GRAY_100};
    }

    @media (min-width: 700px) {
        display: none;
    }

`

const showOpenDropDownMenu = keyframes `
    from{
        transform: translatey(-500px);
    }
    to{
        transform: translatex(0px);
    }
`

const showCloseDropDownMenu = keyframes `
    from{
        transform: translatex(0px);
    }
    to{
        transform: translatex(1000px);
    }
`

export const DropDownMenu = styled.div`

    width: 50vw;
    padding: 1rem 0;

    z-index: 999;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.625rem;

    position: absolute;
    top: 6rem;
    right: 1rem;

    border-radius: 10px;

    box-shadow: 0px 0px 4px #495057;

    //pointer-events: none;

    //Arrumar
    animation: ${showOpenDropDownMenu} 1s ease-in-out;

    background-color: ${props => props.theme.COLORS.PRIMARY};

    a{
        width: 100%;
        padding: 0.625rem 0;

        text-decoration: none;
        color: ${props => props.theme.COLORS.GRAY_500};
        text-align: center;
        letter-spacing: 0.1rem;

        font-size: ${props => props.theme.FONT_SIZES.XL};
        font-weight: ${props => props.theme.FONT_WEIGHTS.SEMI_BOLD};

        transition-duration: 1s;

    }

    a:hover{
        background-color: ${props => props.theme.COLORS.TERTIARY};
    }

    .active{
        color: ${props => props.theme.COLORS.SECONDARY};
    }

    &.openClass{
        animation: ${showCloseDropDownMenu} 1s linear;
    }

    @media (min-width: 700px){
        display: none;
    }

`