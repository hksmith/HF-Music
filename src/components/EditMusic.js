import React from 'react';
import { useDispatch } from 'react-redux';
import { updateMusic } from '../store/mucisState';
import MusicForm from './MusicForm';

const EditMusicPage = ({ onClose, musicId }) => {
  const dispatch = useDispatch();
  // const musics = useSelector(state => state.musics);

  const handleSubmit = (musicId, updatedMusic) => {
    dispatch(updateMusic({ id: musicId, updatedMusic: updatedMusic }));
  };

  return (
    <div>
      <h2>Edit Music</h2>
      <MusicForm
        onClose={onClose}
        onSubmit={handleSubmit}
        musicId={musicId}
      />
    </div>
  );
};

export default EditMusicPage;
