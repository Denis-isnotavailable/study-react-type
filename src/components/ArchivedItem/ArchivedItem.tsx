import React from 'react'
import { NotesItemStyled } from '../NotesItem/NotesItem.styled';
import { Note } from '../../redux/slice';
import { ButtonStyled } from '../ButtonsList/ButtonsList.styled';
import { useAppDispatch } from '../../hooks/hooks';
import { toggleArchiveNote } from '../../redux/slice';

interface IMyProps {
    note:Note
}

const ArchivedItem: React.FC<IMyProps> = ({ note }: IMyProps) => {
    const dispatch = useAppDispatch();
    
    const { id, category, name } = note;
    return (
        <NotesItemStyled>            
            <td>{category}</td>
            <td>{name}</td>
            <td><ButtonStyled type="button" onClick={() => dispatch(toggleArchiveNote(id))}>Return to list</ButtonStyled></td>            
        </NotesItemStyled>
    )
};

export default ArchivedItem