import React, {useEffect} from 'react';
import { Note, updateArchiveList } from '../../redux/slice'
import { NotesListStyled } from '../NotesList/NotesList.styled';
import StatisticItem from '../StatisticItem/StatisticItem';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

interface IMyProps {
    notes?: Note[],
}

const StatisticList: React.FC<IMyProps> = () => {
    const { notes, archivedList } = useAppSelector(state => state.notes);
    const dispatch = useAppDispatch();

    useEffect(() => {    
        dispatch(updateArchiveList()); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [notes]);


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
                {archivedList.map(note => <StatisticItem key={note.id} note={note} />)}
            </tbody>
        </NotesListStyled>
    )
};

export default StatisticList;