import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    gap: 6px;

    /* Encobre parcialmente o componente acima */
    position: relative;
    margin-top: -150px;
    z-index: 2;
`;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 16px;
    border: 2px solid rgba(0, 0, 0, 1);
    width: 272px;
    height: 306px;
    text-align: left;

    img {
        width: 40px;
        height: 40px;
    }

    h1 {
        font-size: 18px;
        margin: 8px 0;
    }

    p {
        font-size: 14px;
        line-height: 1.4;
        flex-grow: 1;
    }

    .arrow {
        align-self: flex-end;
    }
`;

const OrangeCard = styled(CardWrapper)`
    background-color: rgba(237, 77, 27, 1);
`;

const TerraCard = styled(CardWrapper)`
    background-color: #ff9a3c;
    margin-top: 30px;
`;

const Card: React.FC<{
    type: "orange" | "terra";
    title: string;
    description: string;
    image: string;
    arrow: string;
}> = ({ type, title, description, image, arrow }) => {
    const CardComponent = type === "orange" ? OrangeCard : TerraCard;
    return (
        <CardComponent>
            <img src={image} alt="" />
            <h1>{title}</h1>
            <p>{description}</p>
            <img className="arrow" src={arrow} alt="Arrow" />
        </CardComponent>
    );
};

const CardCourses: React.FC = () => {
    return (
        <CardContainer>
            <Card
                type="orange"
                title="Piano Popular"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
                    dignissimos ab cupiditate doloribus, natus nulla corrupti libero
                    quam officiis nihil dolor numquam, voluptate facere, iusto ex.
                    Dolores magni accusamus voluptatibus?"
                image="/piano.png"
                arrow="/ArrowRightShort.svg"
            />
            <Card
                type="terra"
                title="Teoria Musical"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
                    dignissimos ab cupiditate doloribus, natus nulla corrupti libero
                    quam officiis nihil dolor numquam, voluptate facere, iusto ex.
                    Dolores magni accusamus voluptatibus?"
                image="/theory.png"
                arrow="/ArrowRightShort.svg"
            />
            <Card
                type="orange"
                title="Sax Alto"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
                    dignissimos ab cupiditate doloribus, natus nulla corrupti libero
                    quam officiis nihil dolor numquam, voluptate facere, iusto ex.
                    Dolores magni accusamus voluptatibus?"
                image="/sax.png"
                arrow="/ArrowRightShort.svg"
            />
            <Card
                type="terra"
                title="Bateria"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
                    dignissimos ab cupiditate doloribus, natus nulla corrupti libero
                    quam officiis nihil dolor numquam, voluptate facere, iusto ex.
                    Dolores magni accusamus voluptatibus?"
                image="/bateria.png"
                arrow="/ArrowRightShort.svg"
            />
        </CardContainer>
    );
};

export default CardCourses;
