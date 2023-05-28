import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiEdit, FiTrash2, FiUser, FiDisc, FiClock, FiMusic, FiPlusCircle } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import AddMusicPage from './AddMusic';
import { deleteMusic } from '../mucisState';
import {
  Container,
  Sidebar,
  SidebarHeading,
  SidebarList,
  SidebarListItem,
  SidebarLink,
  Content,
  TopSection,
  AlbumImage,
  BottomSection,
  Song,
  SongImage,
  SongInfo,
  SongTitle,
  SongArtist,
  MusicContainer,
  MusicItem,
  MusicInfo,
  MusicTitle,
  MusicDetails,
  MusicField,
  Icon,
  PlayIcon,
  EditButton,
  DeleteButton,
  AddButton,
  SearchInput,
  StyledIcon,
} from '../styles/MusicsListStyle';

const MusicList = ({ musics }) => {
    const [selectedFilter, setSelectedFilter] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const [viewAdd, setViewAdd] = useState(false);
  
    const dispatch = useDispatch();
  
    const handleDelete = (musicId) => {
      dispatch(deleteMusic(musicId));
    };
  
    const handleEdit = (musicId) => {
      navigate(`/edit-music/${musicId}`);
    };
  
    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    let filteredMusics = [];
    if (Array.isArray(musics)) {
      filteredMusics = selectedFilter
        ? musics.filter((music) => music.album === selectedFilter)
        : musics.filter((music) =>
            music.title.toLowerCase().includes(searchQuery.toLowerCase())
          );
    }
    return (
        <div>{
      <Container>
        <Sidebar>
          <SidebarHeading><StyledIcon /> HF-Music</SidebarHeading>
          <SearchInput
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <SidebarList>
          <SidebarHeading>Albums</SidebarHeading>
            <SidebarListItem>
              <SidebarLink href="#" onClick={() => setSelectedFilter('')}>All Albums</SidebarLink>
            </SidebarListItem>
            <SidebarListItem>
              <SidebarLink href="#" onClick={() => setSelectedFilter('New')}>New</SidebarLink>
            </SidebarListItem>
            <SidebarListItem>
              <SidebarLink href="#" onClick={() => setSelectedFilter('Oldies')}>Oldies</SidebarLink>
            </SidebarListItem>
            <SidebarListItem>
              <SidebarLink href="#" onClick={() => setSelectedFilter('Mezmur')}>Mezmur</SidebarLink>
            </SidebarListItem>
            {/* Add more album options here */}
          </SidebarList>
        </Sidebar>
        <Content>
          <TopSection style={{padding: '20px', width: '200px'}}>
            <AlbumImage src="" alt="Album Image" />
            <AddButton onClick={() => {setViewAdd(true)}}>
              <FiPlusCircle />
            </AddButton>
          </TopSection>
          <BottomSection>
          <TopSection style={{height: '100px'}}>
            <AlbumImage src="" alt="Album Image" />
            <AddButton onClick={() => {setViewAdd(true)}}>
              <FiPlusCircle />
            </AddButton>
          </TopSection>
            {filteredMusics.map((music) => (
              <MusicContainer key={music.id}>
                <MusicItem>
                  <PlayIcon />
                  <MusicInfo>
                    <MusicTitle>{music.title}</MusicTitle>
                    <MusicDetails>
                      <MusicField>
                        <Icon>
                          <FiUser />
                        </Icon>
                        {music.artist}
                      </MusicField>
                      <MusicField>
                        <Icon>
                          <FiDisc />
                        </Icon>
                        {music.album}
                      </MusicField>
                      <MusicField>
                        <Icon>
                          <FiClock />
                        </Icon>
                        {music.duration} min
                      </MusicField>
                      <MusicField>
                        <Icon>
                          <FiMusic />
                        </Icon>
                        {music.genre}
                      </MusicField>
                    </MusicDetails>
                  </MusicInfo>
                  <div>
                    <EditButton onClick={() => handleEdit(music.id)}>
                      <FiEdit />
                    </EditButton>
                    <DeleteButton onClick={() => handleDelete(music.id)}>
                      <FiTrash2 />
                    </DeleteButton>
                  </div>
                </MusicItem>
              </MusicContainer>
            ))}
          </BottomSection>
        </Content>
      </Container>
      }{viewAdd &&
        <AddMusicPage onClose={() => setViewAdd(false)} />
      }
      </div>
    );
  };
  
  export default MusicList;