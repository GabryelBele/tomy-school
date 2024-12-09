import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 90vw;  
    height: 100px;
    border: 1px mixed #000000;
    background-color: #FFFFFF;
    color: #000000;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
`;

const NavBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around   ;
    width: 100vw;  
    height: 48px;
    background-color: #FFFFFF;
    color: #000000;

    p {
        font-family: Roboto;
        font-size: 40px;
        font-weight: 900;
        line-height: 46.88px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        width: 123px;
        height: 47px;
        top: 27px;
        left: 115px;
    }
`;


const NavButton = styled.div`
    display: flex;
    justify-content: space-between;
    width: 435px;
    height: 23px;

    button {
        background-color: transparent;
        border: none;
        font-family: Roboto;
        font-size: 20px;
        font-weight: 500;
        line-height: 23.44px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
    }
`;


export const ButtonStyled = styled.button`
    width: 200px;
    height: 48px;
    box-shadow: 4px 4px 0px 0px rgba(30, 30, 30, 1);
    background-color: rgba(237, 77, 27, 1);
    border-radius: 2px solid rgba(0, 0, 0, 1);
    font-family: Roboto;
    font-size: 20px;
    font-weight: 500;
    line-height: 23.44px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
`;


const HeaderSection: React.FC = () => {
    return (
        <HeaderContainer>
            <NavBar>
                <p>TOM'S</p>
                <NavButton>
                    <button>Início</button>
                    <button>Cursos</button>
                    <button>Eventos</button>
                    <button>Contato</button>
                </NavButton>
                <ButtonStyled>SE INSCREVA</ButtonStyled>
            </NavBar>
        </HeaderContainer>
    );
};

export default HeaderSection; 
