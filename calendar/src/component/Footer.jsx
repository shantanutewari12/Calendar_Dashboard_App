import React from 'react';
import { Box, Typography, Grid, IconButton, Paper, Avatar, Slider } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import LyricsIcon from '@mui/icons-material/Lyrics';
import PictureInPictureAltIcon from '@mui/icons-material/PictureInPictureAlt';

const Footer = () => {
  return (
    <Box sx={{ width: '100%', position: 'relative', mt: 5 }}>
      
      <Box sx={{ width: '100%', textAlign: 'center', padding: '20px', backgroundColor: '#f9f9f9' }}>
        <Typography variant="body2">
          About | Help | Terms & conditions | Privacy | Copyright policy | Contact us
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          ©Curioushit 2023 - all rights reserved
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <IconButton href="https://www.facebook.com">
            <i className="fab fa-facebook-f" />
          </IconButton>
          <IconButton href="https://www.twitter.com">
            <i className="fab fa-twitter" />
          </IconButton>
          <IconButton href="https://www.linkedin.com">
            <i className="fab fa-linkedin-in" />
          </IconButton>
          <IconButton href="https://www.instagram.com">
            <i className="fab fa-instagram" />
          </IconButton>
          <IconButton href="https://www.tiktok.com">
            <i className="fab fa-tiktok" />
          </IconButton>
        </Box>
      </Box>

      <Paper elevation={3} sx={{ width: '100%', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#fff' }}>
        
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            src="https://c.saavncdn.com/191/Kesariya-From-Brahmastra-Hindi-2022-20220717092820-500x500.jpg"
            alt="Kesariya"
            sx={{ width: 60, height: 60, marginRight: 2 }}
          />
          <Box>
            <Typography variant="subtitle1">Kesariya</Typography>
            <Typography variant="body2">Pritam</Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton>
            <ShuffleIcon />
          </IconButton>
          <IconButton>
            <SkipPreviousIcon />
          </IconButton>
          <IconButton sx={{ backgroundColor: '#4a4a4a', color: '#fff', '&:hover': { backgroundColor: '#333' } }}>
            <PlayArrowIcon />
          </IconButton>
          <IconButton>
            <SkipNextIcon />
          </IconButton>
          <IconButton>
            <RepeatIcon />
          </IconButton>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', width: '40%' }}>
          <Typography variant="body2" sx={{ mr: 1 }}>00:06</Typography>
          <Slider
            defaultValue={20}
            aria-label="Time Slider"
            sx={{ color: '#333', mx: 2 }}
          />
          <Typography variant="body2">00:10</Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton>
            <QueueMusicIcon />
          </IconButton>
          <IconButton>
            <LyricsIcon />
          </IconButton>
          <IconButton>
            <PictureInPictureAltIcon />
          </IconButton>
          <IconButton>
            <VolumeUpIcon />
          </IconButton>
          <Slider
            defaultValue={50}
            aria-label="Volume Slider"
            sx={{ width: '100px', color: '#333', ml: 1 }}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default Footer;
