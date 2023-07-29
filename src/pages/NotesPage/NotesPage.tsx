import React, {useState} from 'react'
import { NotesPageStyled } from './NotesPage.styled'
import NotesList from '../../components/NotesList/NotesList';
import { useAppSelector } from '../../hooks/hooks';
import StatisticList from '../../components/StatisticList/StatisticList';
import ButtonsList from '../../components/ButtonsList/ButtonsList';
import { Modal } from '../../components/Modal/Modal';

const NotesPage: React.FC = () => {
    const [modalType, setModalType] = useState<string>("archive");
    const { notes } = useAppSelector(state => state.notes);

    const closeModal = () => setModalType("");
    
    
    return (
        <NotesPageStyled>
            <NotesList notes={notes} setModalType={setModalType}/>
            <ButtonsList setModalType={setModalType} />
            <StatisticList notes={notes} />
            {modalType === "archive" &&
                <Modal closeModal={closeModal}>
                    <div style={{backgroundColor: "#fff"}}>archive</div>
                </Modal>}
            {modalType === "updateOrCreate" &&
                <Modal closeModal={closeModal}>
                    <div style={{backgroundColor: "#fff"}}>updateOrCreate</div>
                </Modal>}
        </NotesPageStyled>
    )
};

export default NotesPage