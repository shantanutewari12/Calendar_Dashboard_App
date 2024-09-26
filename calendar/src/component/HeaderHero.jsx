import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Grid,
  Paper,
  Button,
  IconButton,
  Stack,
  ToggleButtonGroup,
  ToggleButton,
  Switch,
  Divider,
  Tooltip
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TodayIcon from '@mui/icons-material/Today';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import ShareIcon from '@mui/icons-material/Share';
import SettingsIcon from '@mui/icons-material/Settings';

const HeaderHero = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default" sx={{ backgroundColor: '#f8f9fa', boxShadow: 'none' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', color: '#555' }}>
            Home
          </Typography>
          <Button color="inherit">Get App</Button>
          <Button color="inherit">Premium</Button>
        </Toolbar>
      </AppBar>

      <Grid container spacing={2} sx={{ padding: '20px' }}>
        <Grid item xs={12} md={3}>
          <Paper elevation={1} sx={{ height: '100vh', padding: '20px', backgroundColor: '#fafafa', borderRadius: '8px' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Library
            </Typography>
            <Stack spacing={2}>
              <Typography>Profile</Typography>
              <Typography>Playlists</Typography>
              <Typography>Tracks</Typography>
              <Typography>Artists</Typography>
              <Typography>Albums</Typography>
              <Typography>Genres</Typography>
              <Typography>Decades</Typography>
              <Typography>Geos</Typography>
            </Stack>
          </Paper>
        </Grid>

        <Grid item xs={12} md={9}>
          
          <Paper elevation={3} sx={{ padding: '20px', borderRadius: '12px', backgroundColor: '#fff' }}>
            <Grid container justifyContent="space-between" alignItems="center" mb={2}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333' }}>Calendar</Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <IconButton>
                  <ArrowBackIosIcon />
                </IconButton>
                <Button startIcon={<TodayIcon />} sx={{ textTransform: 'none', color: '#555' }}>May 27, 2022</Button>
                <IconButton>
                  <ArrowForwardIosIcon />
                </IconButton>

                <ToggleButtonGroup color="primary" exclusive>
                  <ToggleButton value="day" sx={{ textTransform: 'none' }}>Day</ToggleButton>
                  <ToggleButton value="week" sx={{ textTransform: 'none' }}>Week</ToggleButton>
                  <ToggleButton value="month" sx={{ textTransform: 'none' }}>Month</ToggleButton>
                </ToggleButtonGroup>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography sx={{ color: '#555' }}>Google Calendar</Typography>
                  <Switch />
                </Stack>
              </Stack>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={9}>
                <Paper elevation={1} sx={{ height: '500px', padding: '10px', borderRadius: '12px', backgroundColor: '#fafafa' }}>
                  <Typography variant="subtitle2" sx={{ color: '#555', mb: 1 }}>Jai Shree Ram - 8:00 AM</Typography>
                  <Typography variant="subtitle2" sx={{ color: '#555', mb: 1 }}>Radha 2023 - 9:00 AM</Typography>
                  <Typography variant="subtitle2" sx={{ color: '#555', mb: 1 }}>B Prank - 10:00 AM</Typography>
                  <Typography variant="subtitle2" sx={{ color: '#555', mb: 1 }}>Arlene McCoy Track - 11:00 AM</Typography>
                  <Typography variant="subtitle2" sx={{ color: '#555', mb: 1 }}>Chloe McKinney Hits - 12:00 PM</Typography>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper elevation={1} sx={{ height: '500px', padding: '10px', borderRadius: '12px', backgroundColor: '#fafafa' }}>
                  <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'bold', color: '#333' }}>January 2022</Typography>

                  <Box mt={2}>
                    <Typography variant="subtitle2" mb={1} sx={{ fontWeight: 'bold' }}>Schedule</Typography>
                    <Stack spacing={1}>
                      <Stack direction="row" alignItems="center">
                        <Box sx={{ width: '12px', height: '12px', backgroundColor: '#ffeb3b', borderRadius: '50%', marginRight: '8px' }}></Box>
                        <Typography>Listen</Typography>
                      </Stack>
                      <Stack direction="row" alignItems="center">
                        <Box sx={{ width: '12px', height: '12px', backgroundColor: '#f44336', borderRadius: '50%', marginRight: '8px' }}></Box>
                        <Typography>Learn</Typography>
                      </Stack>
                      <Stack direction="row" alignItems="center">
                        <Box sx={{ width: '12px', height: '12px', backgroundColor: '#4caf50', borderRadius: '50%', marginRight: '8px' }}></Box>
                        <Typography>Work-Out</Typography>
                      </Stack>
                      <Stack direction="row" alignItems="center">
                        <Box sx={{ width: '12px', height: '12px', backgroundColor: '#8bc34a', borderRadius: '50%', marginRight: '8px' }}></Box>
                        <Typography>Study</Typography>
                      </Stack>
                    </Stack>
                  </Box>
                </Paper>
              </Grid>
            </Grid>

            <Divider sx={{ my: 2 }} />
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>Music</Typography>
                  <Tooltip title="Settings">
                    <IconButton>
                      <SettingsIcon />
                    </IconButton>
                  </Tooltip>
                </Stack>
                <Stack spacing={2} sx={{ mt: 2 }}>
                  <Paper elevation={1} sx={{ padding: '10px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="subtitle1">Ronald Rich Playlist</Typography>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Switch />
                      <PlayCircleIcon sx={{ color: '#ff9800', cursor: 'pointer' }} />
                      <DeleteIcon sx={{ color: '#f44336', cursor: 'pointer' }} />
                    </Stack>
                  </Paper>
                  <Paper elevation={1} sx={{ padding: '10px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="subtitle1">Ronald Rich Playlist</Typography>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Switch />
                      <PlayCircleIcon sx={{ color: '#ff9800', cursor: 'pointer' }} />
                      <DeleteIcon sx={{ color: '#f44336', cursor: 'pointer' }} />
                    </Stack>
                  </Paper>
                </Stack>
              </Grid>
            </Grid>

            <Stack direction="row" justifyContent="flex-end" sx={{ mt: 3 }}>
              <Button
                variant="contained"
                startIcon={<ShareIcon />}
                sx={{
                  backgroundColor: '#ff9800',
                  textTransform: 'none',
                  color: '#fff',
                  '&:hover': { backgroundColor: '#fb8c00' }
                }}
              >
                Share
              </Button>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeaderHero;
