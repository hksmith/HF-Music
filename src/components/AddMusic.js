import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import {
    FormContainer,
    FormGroup,
    Label,
    Input,
    Button,
    ButtonClose,
    Overlay,
    PopupStyles
} from '../styles/AddMusicStyle';

const AddMusicPage = ({onClose}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [duration, setDuration] = useState(0);
    const [genre, setGenre] = useState('');
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
    
      // Check if all required fields are filled in
      if (title && artist && album && duration && genre) {
        // const newMusic = {
        //   title: title,
        //   artist: artist,
        //   album: album,
        //   duration: duration,
        //   genre: genre,
        // };
        // dispatch(addMusic(newMusic));
        // console.log(newMusic);
    
        // Reset the form fields after adding the music
        setTitle('');
        setArtist('');
        setAlbum('');
        setDuration(0);
        setGenre('');
  
        navigate('/');
      }
    };
    
    
  
    return (
      <div>
        <Overlay onClick={onClose}>
            <PopupStyles onClick={(event) => event.stopPropagation()}>
                <FormContainer>
                <ButtonClose onClick={onClose}><FaTimes /></ButtonClose>
                    <form onSubmit={handleFormSubmit}>
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
                            onChange={(event) => setDuration(Number(event.target.value))}
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
                        </FormGroup>
                        <Button type="submit">Add</Button>
                    </form>
                </FormContainer>
            </PopupStyles>
        </Overlay>
      </div>
    );
  };
  
  export default AddMusicPage;