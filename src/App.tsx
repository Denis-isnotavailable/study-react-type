import React from 'react';
import NotesPage from './pages/NotesPage/NotesPage';
import SharedLayout from './components/SharedLayout/SharedLayout';


const App: React.FC = () => {

  return (
    <SharedLayout>
      <NotesPage />
    </SharedLayout>
    
  );
};

export default App;
