import React from 'react'
import { ButtonsListStyled, ButtonStyled } from './ButtonsList.styled';

interface IProps {
    setModalType(type: string): void
}

const ButtonsList: React.FC<IProps> = ({setModalType}: IProps) => {
    return (
        <ButtonsListStyled>
            <li><ButtonStyled type='button' onClick={() => setModalType("updateOrCreate")}>Create note</ButtonStyled></li>
            <li><ButtonStyled type='button' onClick={() => setModalType("archive")}>Archive</ButtonStyled></li>
        </ButtonsListStyled>
    )
};

export default ButtonsList