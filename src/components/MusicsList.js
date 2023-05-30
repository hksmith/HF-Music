import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FiEdit, FiTrash2, FiUser, FiDisc, FiClock, FiMusic, FiPlusCircle } from 'react-icons/fi';
import AddMusicPage from './AddMusic';
import EditMusicPage from './EditMusic';
import { deleteMusic } from '../store/mucisState';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  TopHeading
} from '../styles/MusicsListStyle';

const MusicList = ({ musics }) => {
    const [selectedFilter, setSelectedFilter] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [viewAdd, setViewAdd] = useState(false);
    const [viewEdit, setViewEdit] = useState(false);
    const [specificId, setSpecificId] = useState(null);
  
    const dispatch = useDispatch();
  
    const handleDelete = (musicId) => {
      dispatch(deleteMusic(musicId));
      toast.success('Music deleted successfully!');
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
          </SidebarList>
        </Sidebar>
        <Content>
          <TopSection style={{padding: '20px', width: '200px'}}>

          </TopSection>
          <BottomSection>
          <TopSection style={{height: '100px'}}>
            <TopHeading>{selectedFilter || "All Albums"}</TopHeading>
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
                    <EditButton onClick={() => {setSpecificId(music.id); setViewEdit(true);}}>
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
      }{viewEdit &&
        <EditMusicPage musicId={specificId} onClose={() => setViewEdit(false)} />
      }
      </div>
    );
  };
  
  export default MusicList;