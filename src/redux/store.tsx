import { configureStore } from '@reduxjs/toolkit';
import notesReducer from '../redux/slice';

export const store = configureStore({
  reducer: {
    notes: notesReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {notes: notesState}
export type AppDispatch = typeof store.dispatch