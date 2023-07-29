import styled from "@emotion/styled";

export const ButtonsListStyled = styled.ul`
    width: 100%;
    display: flex;
    justify-content: end;
    margin-bottom: 30px;

    li:not(:last-child) {
        margin-right: 16px;
    }
`;

export const ButtonStyled = styled.button`
    display: block;
    margin-left: auto;   
    padding: 10px 20px;
    background-color: rgb(240, 239, 239);
    border-radius: .3rem;

    cursor: pointer;

    transition: background-color 250ms linear;

    :hover {
        background-color: #dbdbdb;
    }
`;