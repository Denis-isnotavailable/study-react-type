import React from 'react';
import { Note } from '../../redux/slice';
import { NotesItemStyled } from './NotesItem.styled';
import { ArchiveIconStyled, IconsListStyled, DeleteIconStyled, RedactIconStyled } from '../NotesList/NotesList.styled';

interface IMyProps {
    note: Note,
    setModalType(type: string): void
}

const NotesItem: React.FC<IMyProps> = ({ note, setModalType }: IMyProps) => {


    const { name, createdAt, category, content, dates } = note;
    return (
        <NotesItemStyled>
            <td>{name}</td>
            <td>{createdAt}</td>
            <td>{category}</td>
            <td>{content}</td>
            <td>{dates}</td>
            <td>                                
                <IconsListStyled>
                    <li><RedactIconStyled onClick={() => setModalType("updateOrCreate")} /></li>
                    <li><ArchiveIconStyled /></li>
                    <li><DeleteIconStyled /></li>                                                        
                </IconsListStyled>
            </td>
        </NotesItemStyled>
    )
};

export default NotesItem