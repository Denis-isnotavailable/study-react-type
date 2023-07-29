import React, { useEffect, useState } from 'react'
import { NoteFormStyled } from './NoteForm.styled'
import { ButtonStyled } from '../ButtonsList/ButtonsList.styled';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { updateNotes } from '../../redux/slice';

interface IProps {
    closeModal(): void
}

const NoteForm: React.FC<IProps> = ({closeModal}: IProps) => {
    const [category, setCategory] = useState<string>("Task");
    const [name, setName] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const { notes, idToUpdate } = useAppSelector(state => state.notes);
    const dispatch = useAppDispatch();

    const i = notes.findIndex(({ id }) => id === idToUpdate);
    
    useEffect(() => {                  
        idToUpdate && setFormState(notes[i].category, notes[i].name, notes[i].content); 

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSubmitForm = (e: any): void => {
        e.preventDefault();

        const dates = content.match(/\d{1,2}[./]\d{1,2}[./]\d{2,4}/g);

        const note = {
            id: i !== -1 ? notes[i]?.id : Date.now().toString(),
            name: name,
            createdAt: i !== -1 ? notes[i]?.createdAt : new Date().toLocaleDateString(),
            category: category,
            content: content,
            dates: dates ? dates.join(" ") : "",
            archived: false
        };

        dispatch(updateNotes(note));
        setFormState("", "", "");
        closeModal();
    }

    const setFormState = (category: string, name: string, content: string): void => {
        setCategory(category);
        setName(name);
        setContent(content);
    }


    return (
        <NoteFormStyled onSubmit={handleSubmitForm}>
            <label>
                <p>Note Category</p>
                <select id="category" name="category" value={category} onChange={e => setCategory(e.target.value)}>
                    <option value="Task">Task</option>
                    <option value="Random Thought">Random Thought</option>
                    <option value="Idea">Idea</option>
                    <option value="Quote">Quote</option>
                </select>
            </label>

            <label>
                <p>Note Name</p>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)} placeholder="Enter note name"
                    required
                />
            </label>

            <label>
                <p>Note Content</p>
                <textarea
                    name="content"
                    rows={4}
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    placeholder="Enter your text here..."
                    required
                ></textarea>                    
            </label>
        
            <ButtonStyled type="submit">Submit</ButtonStyled>
        </NoteFormStyled>
    )
};

export default NoteForm;