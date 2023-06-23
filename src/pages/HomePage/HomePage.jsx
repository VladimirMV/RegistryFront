import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Section } from 'components/Section/Section';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Advertising } from 'components/Advertising/Advertising';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#608B38',
    },
    secondary: {
      main: '#dee2ff',
    },
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        sx={{
          height: '100vh',
          // backgroundImage: `url("https://phonoteka.org/uploads/posts/2022-02/1644833484_32-phonoteka-org-p-fon-dlya-prezentatsii-gradient-nezhnii-32.jpg")`,
          backgroundImage: `url("https://catherineasquithgallery.com/uploads/posts/2023-02/thumbs/1676737003_catherineasquithgallery-com-p-svetlo-salatovii-fon-87.jpg")`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: t =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <CssBaseline />
        <Grid item xs={false} sm={6} md={7} />
        <Grid
          item
          xs={12}
          sm={6}
          md={5}
          component={Paper}
          elevation={24}
          square
          sx={{
            height: '100vh',
            background: '#ffffffb0',
            backdropFilter: 'blur(7.5px)',
          }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Grid container spacing={2}>
              <Section title="Welcome to Phonebook!">
                <Advertising
                  text="PhoneBook app is an easy to use contact manager app that gives
                  you facility of saving and viewing your contacts, so that you
                  never lose your contacts. Try it today!"
                />
              </Section>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Home;