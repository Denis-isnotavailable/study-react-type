import React from 'react';

import { useAppSelector, useAppDispatch } from './hooks/hooks';
import NotesPage from './pages/NotesPage/NotesPage';
import SharedLayout from './components/SharedLayout/SharedLayout';
// import { changeNotes } from './redux/slice';


const App: React.FC = () => {
  const {notes} = useAppSelector(state => state.notes);
  const dispatch = useAppDispatch();

  console.log(dispatch);
  console.log(notes);

  return (
    <SharedLayout>
      <NotesPage />
    </SharedLayout>
    
  );
};

export default App;
