import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getMusicFetch } from '../store/mucisState';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  FormContainer,
  FormGroup,
  Label,
  Input,
  Button,
  ButtonClose,
  Overlay,
  PopupStyles,
} from '../styles/MusicFromStyle';

const MusicForm = ({ onClose, onSubmit, musicId }) => {
  const musics = useSelector(state => state.musics.musics);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMusicFetch());
  }, [dispatch]);

  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [duration, setDuration] = useState(0);
  const [genre, setGenre] = useState('');

  //Music Editing

  useEffect(() => {
    if (musicId) {
      const music = musics.find((music) => music.id === Number(musicId));

      if (music) {
        // Set the form fields with the music data.
        setTitle(music.title);
        setArtist(music.artist);
        setAlbum(music.album);
        setDuration(music.duration);
        setGenre(music.genre);
      }
    }
  }, [musicId, musics]);

  const handleEditSubmit = (event) => {
    event.preventDefault();

    // Check if all required fields are filled in.
    if (title && artist && album && duration && genre) {
      const updatedMusic = {
        id: musicId,
        title: title,
        artist: artist,
        album: album,
        duration: duration,
        genre: genre,
      };
      onSubmit(musicId, updatedMusic);

      onClose();

      toast.success('Music Edited successfully!');
    }
  };

  //Music Adding

  const handleAddSubmit = (event) => {
    event.preventDefault();

    // Check if all required fields are filled in
    if (title && artist && album && duration && genre) {
      const newMusic = {
        title: title,
        artist: artist,
        album: album,
        duration: duration,
        genre: genre,
      };
      onSubmit(newMusic);

      onClose();

      toast.success('Music Added successfully!');
    }
  };

  return (
    <div>
      <Overlay onClick={onClose}>
        <PopupStyles onClick={(event) => event.stopPropagation()}>
          <FormContainer>
            <ButtonClose onClick={onClose}>
              <FaTimes />
            </ButtonClose>
            <form>
              <FormGroup>
                <Label>Title:</Label>
                <Input
                  type="text"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Artist:</Label>
                <Input
                  type="text"
                  value={artist}
                  onChange={(event) => setArtist(event.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Album:</Label>
                <Input
                  type="text"
                  value={album}
                  onChange={(event) => setAlbum(event.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Duration:</Label>
                <Input
                  type="number"
                  value={duration}
                  onChange={(event) =>
                    setDuration(Number(event.target.value))
                  }
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Genre:</Label>
                <Input
                  type="text"
                  value={genre}
                  onChange={(event) => setGenre(event.target.value)}
                  required
                />
              </FormGroup>{ musicId &&
                <Button onClick={handleEditSubmit}>Edit</Button>
              }{!musicId &&
                <Button onClick={handleAddSubmit}>Add</Button>
              }
            </form>
          </FormContainer>
        </PopupStyles>
      </Overlay>
    </div>
  );
};

export default MusicForm;
