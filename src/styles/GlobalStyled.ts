import styled from "styled-components";

const GlobalStyled = styled.div`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: 'Roboto', sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        align-items: center;
        color: #FFFFFF;
    }`;

export default GlobalStyled;