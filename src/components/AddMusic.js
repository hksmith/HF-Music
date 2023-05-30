import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMusic } from '../store/mucisState';
import MusicForm from './MusicForm';

const AddMusicPage = ({ onClose }) => {
    const dispatch = useDispatch();
  
    const handleAddMusic = (newMusic) => {
      dispatch(addMusic(newMusic));
    };
  
    return <MusicForm onClose={onClose} onSubmit={handleAddMusic} />;
  };
  
  export default AddMusicPage;