import React from 'react';
import { Note } from '../../redux/slice';
import { ArchiveIconStyled, DeleteIconStyled, NotesListStyled, IconsListStyled } from './NotesList.styled';
import NotesItem from '../NotesItem/NotesItem';

interface IMyProps {
    notes: Note[],
    setModalType(type: string): void
}

const NotesList: React.FC<IMyProps> = ({ notes, setModalType }: IMyProps) => {
    
    return (
        <NotesListStyled>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Created</th>
                    <th>Category</th>
                    <th>Content</th>
                    <th>Dates</th>
                    <th>
                        <IconsListStyled>
                            <li><ArchiveIconStyled ishead={"true"} /></li>
                            <li><DeleteIconStyled ishead={"true"} /></li>                                                        
                        </IconsListStyled>
                    </th>
                </tr>
            </thead>
            <tbody>              
                {notes.find(({ archived }) => !archived) ?
                    notes.filter(({ archived }) => !archived).map(note => <NotesItem key={note.id} note={note} setModalType={setModalType} />) : 
                    <tr><td>"List is empty..."</td></tr>
                }
            </tbody>
            
        </NotesListStyled>
    )
};

export default NotesList;