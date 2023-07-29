import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../redux/store';

export interface Note {
    id: string,
    name: string,
    createdAt: string,
    category: string,
    content: string,
    dates: string,
    archived: boolean
}

interface NotesState {
    notes: Note[],
    isLoadingNotes: boolean,
    errorNotes: null | {},
}

const initialState: NotesState = {
    notes: [
        {
            id: "1",
            name: "Shopping List",
            createdAt: "01.01.2023",
            category: "Task",
            content: "Apples, bread",
            dates: "",
            archived: false
        },
        {
            id: "2",
            name: "The theory of evolution",
            createdAt: "02.02.2023",
            category: "Random Thought",
            content: "Charles Darwin was a British naturalist who proposed the theory of biological evolution",
            dates: "",
            archived: false
        },
        {
            id: "3",
            name: "New Feature",
            createdAt: "03.03.2023",
            category: "Idea",
            content: "New feature definition (03/03/2023): Something that is new has been recently created (05/03/2023)",
            dates: "03/03/2023 05/03/2023",
            archived: false
        },
        {
            id: "4",
            name: "William Gaddis",
            createdAt: "04.04.2023",
            category: "Quote",
            content: "New feature definition: Something that is new has been recently created",
            dates: "",
            archived: false
        },
        {
            id: "5",
            name: "Task",
            createdAt: "05.05.2023",
            category: "Task",
            content: "New feature definition: Something that is new has been recently created",
            dates: "",
            archived: false
        },
        {
            id: "6",
            name: "One Man",
            createdAt: "06.06.2023",
            category: "Quote",
            content: "New feature definition: Something that is new has been recently created",
            dates: "",
            archived: false
        },
        {
            id: "7",
            name: "Some Idea",
            createdAt: "07.07.2023",
            category: "Idea",
            content: "New feature definition: Something that is new has been recently created",
            dates: "",
            archived: false
        }
    ],
    isLoadingNotes: false,
    errorNotes: null,
}
    
const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        changeNotes: (state, action: PayloadAction<Note[]>) => {
            state.notes = action.payload;
        }
  }

});

export const { changeNotes } = notesSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectNotes = (state: RootState) => state.notes

export default notesSlice.reducer;
