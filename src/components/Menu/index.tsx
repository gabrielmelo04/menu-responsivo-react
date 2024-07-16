import { ContainerMenu, DropDownMenu, IconMenu, ItemsMenu, Logo } from "./styles";

import LogoImg from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";
import { List, X } from "phosphor-react";
import { useEffect, useState } from "react";

export function Menu(){

    const [buttonMenu, setButtonMenu] = useState(false);

    useEffect(() => {
        document.addEventListener("mousedown", (event) => {
            if(event.target !== document.getElementById("menu")
                && event.target !== document.getElementById("home")
                && event.target !== document.getElementById("product")
                && event.target !== document.getElementById("about")
                && event.target !== document.getElementById("contact")
                && event.target !== document.getElementById("icon-menu")
                && event.target !== document.getElementById("open-menu")
                && event.target !== document.getElementById("close-menu")
            ){
                setButtonMenu(false);
            }
        })
    },[]);

    function handleMenu(value: boolean) {
        if(!value){
            document.getElementById("menu")?.classList.toggle("openClass");

            setTimeout(() => {
                setButtonMenu(value);
            },300);
            
        }else{
            setButtonMenu(value);   
        }
    }

    return(
        <ContainerMenu>
            <Logo>
                <img src={LogoImg} alt="Logo" />
            </Logo>

            <ItemsMenu>
                <NavLink to="/">Início</NavLink>
                <NavLink to="/product">Produtos</NavLink>
                <NavLink to="/about">Sobre</NavLink>
                <NavLink to="/contact">Contato</NavLink>
            </ItemsMenu>

            <IconMenu id="icon-menu">
                {
                    !buttonMenu ? (
                        <List id="open-menu" onClick={() => handleMenu(true)} />
                    ): (
                        <X id="close-menu" onClick={() => handleMenu(false)} />
                    )
                }
            </IconMenu>

            {
                buttonMenu &&(
                    <DropDownMenu id="menu">
                        <NavLink id="home" to="/" onClick={() => handleMenu(false)} >Início</NavLink>
                        <NavLink id="product" to="/product" onClick={() => handleMenu(false)}>Produtos</NavLink>
                        <NavLink id="about" to="/about" onClick={() => handleMenu(false)}>Sobre</NavLink>
                        <NavLink id="contact" to="/contact" onClick={() => handleMenu(false)}>Contato</NavLink>
                    </DropDownMenu>
                )
            }
             
        </ContainerMenu>
    )
}