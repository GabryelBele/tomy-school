import React from "react";
import styled from "styled-components";

const HeadlineContainer = styled.div` 
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    width: 90vw;  
    height: 756px;
    border: 1px solid #000000;
    background-color: #FFFFFF;
    color: #000000;

    img {
        margin-top: 10px;
        width: 842px;
        height: 561px;
    }
`;

const HeadText = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 25px;
    width: 464px;  
    height: 425px;
    margin-left: 100px;
    margin-top: 50px;
    background-color: #FFFFFF;
    color: #000000;

    h2 {
        width: 80%;
        font-family: Roboto;
        font-size: 64px;
        font-weight: 900;
        line-height: 67.2px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;

        span {
            color: #ed4d1b;
        }
    }

    p {
        width: 80%;
        font-family: Roboto;
        font-size: 24px;
        font-weight: 500;
        line-height: 28.13px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
    }
`;

const ButtonStyled = styled.button`
    width: 200px;
    height: 100px;
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

const HeadlineSection: React.FC = () => {
    return (
        <HeadlineContainer>
            <HeadText>
                <h2>Cria algo <span>impactante</span> com música</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure ullam sequi, expedita voluptates, blanditiis dolorem a
                    nesciunt pariatur non eaque repellat corrupti necessitatibus
                    vero perspiciatis ad accusantium odio. A, ipsa!</p>
                <ButtonStyled>Comece Agora</ButtonStyled>
            </HeadText>
            <img src="/hero-img.png" alt="" />
        </HeadlineContainer>
    );
};

export default HeadlineSection; 