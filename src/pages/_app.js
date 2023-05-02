import '@/styles/globals.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Layout from '../components/Layout';
import 'react-toastify/dist/ReactToastify.css';

const theme = createTheme({      
  typography: {
    button: {
      textTransform: 'none',
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
