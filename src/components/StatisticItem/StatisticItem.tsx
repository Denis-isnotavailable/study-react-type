import React from 'react'
import { Note } from '../../redux/slice'
import { NotesItemStyled } from '../NotesItem/NotesItem.styled';

interface IMyProps {
    note: Note,
}

const StatisticItem: React.FC<IMyProps> = ({ note }: IMyProps) => {

    const { name, category, archived } = note;
    return (
        <NotesItemStyled>
            <td>{category}</td>
            <td>{archived}</td>
            <td>{name}</td>          
        </NotesItemStyled>
    )
};

export default StatisticItem