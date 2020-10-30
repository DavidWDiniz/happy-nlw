import styled from "styled-components";

export const PageDashboard = styled.div`
    min-height: 100vh;
    display: flex;
    
    > div {
        width: 1120px;
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
            justify-content: space-between;
            flex-wrap: wrap;
        }
        
    }
    
    
    
`;

export const MapContainer = styled.div`
    background: #FFF;
    border: 1px solid #D3E2E5;
    border-radius: 20px;
    margin-bottom: 32px;
    z-index: 1;
    
    footer {
        position: relative;
        display: flex;
        padding: 20px 0;
        text-align: center;
        align-items: center;
        
        
        p {
            font-size: 24px;
            font-weight: 700;
            margin-left: 32px;
            line-height: 34px;
            color: #4D6F80;
            text-align: left;
        }
        
        div {
            display: flex;
            position: absolute;
            right: 32px;
            bottom: 12px;
            
            a {
                width: 48px;
                height: 48px;
            
                border: 0;
                outline: none;
                
              
                background: #EBF2F5;
                border-radius: 16px;
              
                cursor: pointer;
              
                transition: background-color 0.2s;
              
                display: flex;
                justify-content: center;
                align-items: center;
                
                &:hover {  
                    background: #dee4e7;
                }
                
                & + a {
                    margin-left: 8px;
                }
            }
        }
        
  
    }
    
    .leaflet-container {
        border-bottom: 1px solid #D3E2E5;
        border-radius: 20px;
    }
`;
