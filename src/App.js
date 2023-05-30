import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMusicFetch } from './store/mucisState';
import styled from '@emotion/styled';
import MusicsList from './components/MusicsList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden; /* Add this line to hide the overflow of the container */
`;

const Content = styled.div`
  flex-grow: 1;
  overflow: auto; /* Add this line to enable scrolling within the content */
`;

function App() {
  const musics = useSelector(state => state.musics.musics);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMusicFetch());
  }, [dispatch]);

  return (
    <Router>
      <Container>
        <Content>
          <Routes>
            <Route path="/" element={<MusicsList musics={musics} />} />
          </Routes>
        </Content>
        <ToastContainer />
      </Container>
    </Router>
  );
}

export default App;
