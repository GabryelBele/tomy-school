import React from "react";
import styled from "styled-components";
import HeaderSection from "../components/Header/HeaderSection";
import HeadlineSection from "../components/HeadlineSection/HeadlineSection";
import CardCourses from "../components/Card/CardCourses";

const Container = styled.div`

       * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
       }

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
`;

const Home: React.FC = () => {
    return (
        <Container>
            <HeaderSection />
            <HeadlineSection />
            <CardCourses />
        </Container>
    )
};

export default Home;
