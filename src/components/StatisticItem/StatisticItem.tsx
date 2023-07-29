import React from 'react';
import { NotesItemStyled } from '../NotesItem/NotesItem.styled';
import { IArchivedProps } from '../../redux/slice';


interface IMyProps {
    note: IArchivedProps
}

const StatisticItem: React.FC<IMyProps> = ({ note }: IMyProps) => {

    const { category, archivedItems, activeItems} = note;
    return (
        <NotesItemStyled>
            <td>{category}</td>
            <td>{activeItems}</td>
            <td>{archivedItems}</td>          
        </NotesItemStyled>
    )
};

export default StatisticItem