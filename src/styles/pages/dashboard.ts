import styled from "styled-components";

export const PageDashboard = styled.div`
    min-height: 100vh;
    display: flex;
    
    > div {
        margin: 64px 32px;

        overflow: hidden;
    
        h1 {
            color: #4D6F80;
            font-size: 32px;
            font-weight: 700;
            line-height: 34px;
        }
        
        hr {
            width: 100%;
            height: 1px;
            border: 0;
            background: #D3E2E6;
            margin: 32px 0;
        }
        
        main {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-flow: row wrap;
        }
        
    }
    
     @media(max-width: 720px) {
        flex-direction: column;
        > div {
            margin: 64px 8px 64px 24px;
            
            main {
                justify-content: space-evenly;
            }
        }
        
    }
    
`;

