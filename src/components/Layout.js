// components/layout.js
import { useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import MedicationIcon from '@mui/icons-material/Medication';
import MoveDownIcon from '@mui/icons-material/MoveDown';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import WindowIcon from '@mui/icons-material/Window';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import NavigationTab from './NavigationTab';

export default function Layout({ children }) {

  const [isLogIn, setIsLogIn] = useState(true);
  const router = useRouter();

  const pageCheck = (tab) => {
    return router.pathname.includes(tab);
  };

  const stackClassName = useMemo(() => {
    let className = 'layout-stack';
    if (router.pathname === '/') {
      className += ' login';
    }
    return className;
  }, [router.pathname]);

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Stack spacing={2} className={stackClassName}>
          <div className="layout-row">
            <div className="layout-navigation">
              <AppBar className="app-bar" sx={{ width: '260px', height: '100%', left: 0 }}>
                <Toolbar
                  disableGutters
                  sx={{
                    width: '100%',
                    height: '100%',
                    display: 'block',
                  }}
                >
                  <Grid
                    container
                    direction="column"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <Grid item sx={{ width: '100%', pt: 2 }}>
                      <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                          letterSpacing: '.1rem',
                          backgroundColor: 'white',
                          textDecoration: 'none',
                          textAlign: 'center',
                          lineHeight: 1,
                          color: '#3c4858',
                          ml: 4,
                        }}
                      >
                        <span className="mobile-hide">{process.env.NEXT_PUBLIC_APP_NAME}</span>
                      </Typography>
                      <Divider sx={{ mt: 2 }} variant="middle" flexItem />
                      {isLogIn && (
                        <Box className="left-icon-bar" sx={{ width: '228px', pl: 2, pr: 2, mt: 2 }}>
                          <NavigationTab link="/user" selected={pageCheck('/user')} name="User" icon={<SwitchAccountIcon sx={{ transform: 'scale(1.2)', mr: 1 }} />} />
                          <NavigationTab link="/todo_list" selected={pageCheck('/todo_list')} name="Dashboard" icon={<WindowIcon sx={{ transform: 'scale(1.2)', mr: 1 }} />} />
                          <NavigationTab link="/transfer" selected={pageCheck('/transfer')} name="Transfer" icon={<MoveDownIcon sx={{ transform: 'scale(1.2)', mr: 1 }} />} />
                          <NavigationTab link="/drugs" selected={pageCheck('/drugs')} name="Drugs" icon={<MedicationIcon sx={{ transform: 'scale(1.2)', mr: 1 }} />} />
                          <Divider variant="middle" flexItem sx={{ mt: 3 }} />
                          <Button
                            className="nav-btn"
                            startIcon={<ExitToAppIcon sx={{ transform: 'scale(1.2)', mr: 1 }} />}
                            color="error"
                            sx={{
                              display: 'flex',
                              justifyContent: 'start',
                              mt: 2,
                              pl: 3,
                              pt: '12px',
                              pb: '12px',
                            }}
                            size="large"
                            fullWidth
                          >
                            <span className="mobile-hide">Log Out</span>
                          </Button>
                        </Box>
                      )}
                    </Grid>
                    <Grid item sx={{ width: '100%!important', pl: 2, pr: 2, pb: 2}}>
                      <Button
                        className="nav-btn"
                        startIcon={<ArrowBackIosNewIcon sx={{ transform: 'scale(1.3)', mr: 1 }} />}
                        sx={{
                          display: 'flex',
                          justifyContent: 'start',
                          color: '#a9afbb',
                          backgroundColor: 'transparent',
                          pl: 3,
                          pt: '12px',
                          pb: '12px',
                        }}
                        size="large"
                        fullWidth
                        onClick={() => router.back()}
                      >
                        <span className="mobile-hide">Back</span>
                      </Button>
                    </Grid>
                  </Grid>
                </Toolbar>
              </AppBar>
            </div>
            <div className="layout-content">
              <main>{children}</main>
            </div>
          </div>
        </Stack>
      </Box>
    </>
  );
}