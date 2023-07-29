import React from 'react'
import { NotesListStyled } from '../NotesList/NotesList.styled';
import { useAppSelector } from '../../hooks/hooks';
import ArchivedItem from '../ArchivedItem/ArchivedItem';

const ArchivedList: React.FC = () => {
    const { notes } = useAppSelector(state => state.notes);

    return (
        <NotesListStyled>
            <thead>
                    <tr>
                        <th>Note Category</th>
                        <th>Name</th>
                        <th>UnArchived</th>
                    </tr>
                </thead>
            <tbody>
                {notes.find(({ archived }) => archived) ?
                    notes.filter(({ archived }) => archived).map(note => <ArchivedItem key={note.id} note={note} />) :
                    <tr><td>"List is empty..."</td></tr>
                }
            </tbody>
        </NotesListStyled>
    )
};

export default ArchivedList