import styled from "@emotion/styled";

export const NoteFormStyled = styled.form`
    text-align: center;

    label {
        font-size: 18px;
        font-weight: 500;
    }

    select {
        width: 50%;
        text-align: center;
    }

    input {
        width: calc(50% - 12px);   
    }

    textarea {
        width: 80%;
        margin-bottom: 16px;
    }

    select,
    input,
    textarea {    
        padding: 5px;
        border: 1px solid #dbdbdb;
        border-radius: .3rem;
        font-size: 16px;
    }
`;