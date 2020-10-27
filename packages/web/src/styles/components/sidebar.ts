import styled from "styled-components";

export const AppSidebar = styled.aside`
    position: fixed;
    height: 100%;
    padding: 32px 24px;
    background: linear-gradient(329.54deg, #15B6D6 0%, #15D6D6 100%);
    z-index: 5;
  
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    img {
        width: 48px;
    }
    
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        
        button + button {
            margin-top: 16px;
        }
        
        button.active {
            background: #FFD666;
        }
    }
    
    a, button {
        width: 48px;
        height: 48px;
    
        border: 0;
        outline: none;
      
        background: #12AFCB;
        border-radius: 16px;
      
        cursor: pointer;
      
        transition: background-color 0.2s;
      
        display: flex;
        justify-content: center;
        align-items: center;
        
        &:hover {  
            background: #17D6EB;
        }
    }
    
`;
