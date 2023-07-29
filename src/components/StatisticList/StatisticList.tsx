import React from 'react'
// import { StatisticListStyled } from './StatisticList.styled'
import { Note } from '../../redux/slice'
import { NotesListStyled } from '../NotesList/NotesList.styled';
import StatisticItem from '../StatisticItem/StatisticItem';

interface IMyProps {
    notes: Note[],
}

const StatisticList: React.FC<IMyProps> = ({ notes }: IMyProps) => {


    return (
        <NotesListStyled>
            <thead>
                <tr>
                    <th>Note Category</th>
                    <th>Active</th>
                    <th>Archived</th>                   
                </tr>
            </thead>
            <tbody>              
                {notes.map(note => <StatisticItem key={note.id} note={note} />)}
            </tbody>
        </NotesListStyled>
    )
};

export default StatisticList;