import styled from '@emotion/styled';
import { FaMusic } from 'react-icons/fa';
import { FiPlayCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background: linear-gradient(to left top, #000000, #4B0082);
`;

export const Sidebar = styled.div`
  width: 200px;
  height: 100vh;
  background: linear-gradient(to left top, #000000, #4B0082);
  color: black;
  padding: 20px;
  overflow-y: auto;
  position: fixed;
`;

export const SidebarHeading = styled.h2`
  margin-top: 0;
  padding: 40px;
  border-bottom: 1px solid black;
  white-space: nowrap;
  -webkit-background-clip: text;
  color: hsl(300, 100%, 40%);
`;

export const SidebarList = styled.ul`
  list-style-type: none;
  padding: 5px;
  margin: 0;
  margin-top: 0;
  padding-bottom: 40px;
`;

export const SidebarListItem = styled.li`
  margin-bottom: 10px;
  padding-bottom: 20px;
`;

export const SidebarLink = styled.a`
  color: hsl(275, 100%, 40%);
  text-decoration: none;
  display: block;
  position: relative;
  overflow: hidden;
  font-weight: bold;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0, 255, 255, 0), rgba(255, 0, 255, 0.5), rgba(255, 255, 255, 0));
    transition: left 0.3s;
    z-index: 1;
  }

  &:hover:before {
    left: -50%;
    color: black;
  }
`;

export const Content = styled.div`
  background-color: #333;
  flex: 1;
  display: flex;
`;

export const TopSection = styled.div`
  background: linear-gradient(to left top, #000000, #4B0082);
  border-radius: 50px;
  margin-top: 10px;
  over-flow: hidden;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
`;

export const BottomSection = styled.div`
  background: linear-gradient(to left top, #000000, #4B0082);
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  height: 100%;
`;

export const Song = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const SongImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin-right: 20px;
`;

export const SongInfo = styled.div`
  flex: 1;
`;

export const SongTitle = styled.h3`
  margin: 0;
  font-size: 18px;
`;

export const SongArtist = styled.p`
  margin: 0;
  color: #777;
`;

export const MusicContainer = styled.div`
  background-color: hsl(269, 100%, 40%);
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 10px;
  border-radius: 15px;
`;

export const MusicItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #4A0f7f;
  padding: 10px;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  color: gray;

  &:hover {
    background-color: hsl(269, 100%, 40%);
    color: white;
  }
`;

export const MusicInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const MusicTitle = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 18px;
`;

export const MusicDetails = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

export const MusicField = styled.div`
  display: flex;
  align-items: right;
  margin-right: 15px;
  font-size: 16px;
`;

export const Icon = styled.span`
  margin-right: 5px;
`;

export const PlayIcon = styled(FiPlayCircle)`
  font-size: 30px;
  margin-right: 10px;
`;

export const EditButton = styled.button`
  background-color: #ffc107;
  color: white;
  border: none;
  padding: 5px 10px;
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`;

export const AddButton = styled(Link)`
  color: hsl(290, 100%, 40%);
  border: none;
  padding: 5px;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  margin-left: 70%;
  font-size: 30px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 10px;
  border-radius: 5px;
  border: none;
  background-color: hsl(275, 100%, 40%);
  color: white;
`;

export const StyledIcon = styled(FaMusic)`
  font-size: 22px;
  color: hsl(310, 100%, 40%);
`;

export const TopHeading = styled.h2`
  margin-top: 0;
  padding: 40px;
  white-space: nowrap;
  -webkit-background-clip: text;
  color: hsl(300, 100%, 40%);
`;