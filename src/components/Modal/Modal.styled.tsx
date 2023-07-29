import styled from '@emotion/styled';

export const ModalStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 2;   

`;

export const ButtonCloseStyled = styled.button`
    position: absolute;
    top: calc(50% - 150px);
    right: calc(50% - 154px);
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 20px;
    height: 20px;
    color: #000000;
    border: 1px solid #5b5b5e;
    font-size: 64px;
    
    background-color: #969899;
    border-radius: 50%;
    
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover,
    :focus {
        background-color: #6b6b71;
        color: #ffffff;
    }
`;