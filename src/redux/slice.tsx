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

export interface IArchivedProps {
    id: string,    
    category: string,
    archivedItems: number,
    activeItems: number
}

interface NotesState {
    notes: Note[],
    archivedList: IArchivedProps[],
    isLoadingNotes: boolean,
    errorNotes: null | {},
    idToUpdate: null | string
}

const handleUpdatingArchive = (state: NotesState): IArchivedProps[] => {
    const currentList: IArchivedProps[] = [];

    state.notes.forEach(({ category, archived }) => {
        const i = currentList.findIndex(item => item.category === category);
        if (i !== -1) {
            archived ? currentList[i].archivedItems += 1 : currentList[i].activeItems += 1;
        } else {
            currentList.push({
                category,
                activeItems: archived ? 0 : 1,
                archivedItems: archived ? 1 : 0,
                id: Math.random().toString()
            });
        }            
    });
    
    return currentList;
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
    archivedList: [],
    isLoadingNotes: false,
    errorNotes: null,
    idToUpdate: null
}
    
const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        deleteNote: (state, action: PayloadAction<string>) => {
            const i = state.notes.findIndex(({ id }) => id === action.payload);
            state.notes.splice(i, 1);
            // state.notes = [...state.notes].filter(({ id }) => id !== action.payload);
        },
        toggleArchiveNote: (state, action: PayloadAction<string>) => {
            const i = state.notes.findIndex(({ id }) => id === action.payload);
            state.notes[i].archived = !state.notes[i].archived;    
            state.archivedList = handleUpdatingArchive(state);
        },
        setIdToUpdate: (state, action: PayloadAction<null | string>) => {
            state.idToUpdate = action.payload;
        },
        updateNotes: (state, action: PayloadAction<Note>) => {
            const i = state.notes.findIndex(({ id }) => id === action.payload.id);
            i !== -1 ? state.notes.splice(i, 1, action.payload) : state.notes.push(action.payload);           
        },
        updateArchiveList: (state) => {
            state.archivedList = handleUpdatingArchive(state);         
        },
  }

});

export const { deleteNote, toggleArchiveNote, setIdToUpdate, updateNotes, updateArchiveList } = notesSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectNotes = (state: RootState) => state.notes;

export default notesSlice.reducer;
