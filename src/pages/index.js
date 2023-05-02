import React, { useState } from 'react';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import config from '../plugins/config';
import toastHelper from '../plugins/toastHelper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { IconButton, Typography, Divider } from '@mui/material';
import Box from '@mui/material/Box';
import FaceIcon from '@mui/icons-material/Face';
import {
  Grid,
  TextField,
  Button,
} from '@mui/material';
import { ToastContainer } from 'react-toastify';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const login = () => {
    toastHelper.Error('Username or password is not correct!');
  };

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
        <meta name="description" content="user login page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Card sx={config.style.form.card}>
          <CardContent>
            <Box sx={config.style.content.header.wrap}>
              <Box className="card-header-icon-box" sx={config.style.content.iconBox}>
                <IconButton
                  id="order"
                  sx={{
                    color: 'white',
                    mt: 2,
                    ml: 2,
                  }}
                >
                  <FaceIcon sx={{ transform: 'scale(1.8)', ml: 1, mt: 1 }} />
                </IconButton>
              </Box>
              <Typography variant="h6" sx={config.style.content.header.title}>
                Login
              </Typography>
            </Box>
            <Divider variant="middle" flexItem />
            <Box sx={{ pl: 2, pr: 2 }} component="form" noValidate>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                sx={{ mb: 2 }}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    login();
                  }
                }}
                onChange={(event) => setPassword(event.target.value)}
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={config.style.form.saveButton}
                onClick={login}
              >
                <Typography variant="h6" sx={config.style.form.saveTittle}>
                  Sign In
                </Typography>
              </Button>
              <Grid container>
                <Grid item xs></Grid>
                <Grid item></Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
        <ToastContainer position="bottom-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      </main>
    </>
  );
}
