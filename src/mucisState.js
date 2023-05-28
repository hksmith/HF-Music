import { createSlice } from "@reduxjs/toolkit";

export const musicSlice = createSlice({
  name: 'musics',
  initialState: {
    musics: [],
    isLoading: false
  },
  reducers: {
    getMusicFetch: (state) => {
      state.isLoading = true;
    },
    getMusicSuccess: (state, action) => {
      state.musics = action.payload;
      state.isLoading = false;
    },
    getMusicFailure: (state) => {
      state.isLoading = false;
    },
    addMusic: (state, action) => {
      state.musics.push(action.payload);
    },
    updateMusic: (state, action) => {
      const { id, updatedMusic } = action.payload;
      const index = state.musics.findIndex((music) => music.id === id);
      if (index !== -1) {
        state.musics[index] = { ...state.musics[index], ...updatedMusic };
      }
    },
    deleteMusic: (state, action) => {
      const id = action.payload;
      state.musics = state.musics.filter((music) => music.id !== id);
    }
  }
});

export const {
  getMusicFetch,
  getMusicSuccess,
  getMusicFailure,
  addMusic,
  updateMusic,
  deleteMusic
} = musicSlice.actions;

export default musicSlice.reducer;
