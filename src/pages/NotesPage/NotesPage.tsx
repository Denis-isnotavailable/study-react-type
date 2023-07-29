import React, {useState} from 'react'
import { NotesPageStyled } from './NotesPage.styled'
import NotesList from '../../components/NotesList/NotesList';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import StatisticList from '../../components/StatisticList/StatisticList';
import ButtonsList from '../../components/ButtonsList/ButtonsList';
import { Modal } from '../../components/Modal/Modal';
import ArchivedList from '../../components/ArchivedList/ArchivedList';
import NoteForm from '../../components/NoteForm/NoteForm';
import { setIdToUpdate } from '../../redux/slice';



const NotesPage: React.FC = () => {
    const [modalType, setModalType] = useState<string>("");
    const { notes } = useAppSelector(state => state.notes);
    const dispatch = useAppDispatch();

    const closeModal = () => {
        setModalType("");
        dispatch(setIdToUpdate(null));
    };
    
    
    return (
        <NotesPageStyled>
            <NotesList notes={notes} setModalType={setModalType}/>
            <ButtonsList setModalType={setModalType} />
            <StatisticList notes={notes} />

            {modalType === "archive" &&
                <Modal closeModal={closeModal}>
                    <ArchivedList />
                </Modal>}
            
            {modalType === "updateOrCreate" &&
                <Modal closeModal={closeModal}>
                    <NoteForm closeModal={closeModal} />
                </Modal>}
        </NotesPageStyled>
    )
};

export default NotesPage