import React from 'react';
import { Note } from '../../redux/slice';
import { NotesItemStyled } from './NotesItem.styled';
import { ArchiveIconStyled, IconsListStyled, DeleteIconStyled, RedactIconStyled } from '../NotesList/NotesList.styled';
import { useAppDispatch } from '../../hooks/hooks';
import { deleteNote, toggleArchiveNote, setIdToUpdate } from '../../redux/slice';

interface IMyProps {
    note: Note,
    setModalType(type: string): void
}

const NotesItem: React.FC<IMyProps> = ({ note, setModalType }: IMyProps) => {
    const dispatch = useAppDispatch();

    const handleRedactNote = () => {
        setModalType("updateOrCreate");
        dispatch(setIdToUpdate(id))
    }

    const { id, name, createdAt, category, content, dates } = note;
    return (
        <NotesItemStyled>
            <td>{name}</td>
            <td>{createdAt}</td>
            <td>{category}</td>
            <td>{content}</td>
            <td>{dates}</td>
            <td>                                
                <IconsListStyled>
                    <li><RedactIconStyled onClick={handleRedactNote} /></li>
                    <li><ArchiveIconStyled onClick={() => dispatch(toggleArchiveNote(id))} /></li>
                    <li><DeleteIconStyled onClick={() => dispatch(deleteNote(id))} /></li>                                                        
                </IconsListStyled>
            </td>
        </NotesItemStyled>
    )
};

export default NotesItem