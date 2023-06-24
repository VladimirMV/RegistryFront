import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import  {ContactForm}  from 'components/ContactForm/ContactForm';
import  ContactList  from 'components/ContactList/ContactList';
import  Filter  from 'components/Filter/Filter';
import { Section } from 'components/Section/Section';
import { Title } from 'components/Title/Title';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#defabb',
    },
    secondary: {
      main: '#d4bff9',
    },
  },
});


 
const Contacts = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        sx={{
      backgroundImage: `url("https://phonoteka.org/uploads/posts/2022-01/1643604165_44-phonoteka-org-p-gradientnii-fon-dlya-prezentatsii-45.jpg")`,

      // backgroundImage: `url("https://catherineasquithgallery.com/uploads/posts/2023-02/thumbs/1676736256_catherineasquithgallery-com-p-svetlo-olivkovii-fon-9.jpg")`,
        // backgroundImage: `url('../../img/contact-fon.jpg')`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: t =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <CssBaseline />

        <Grid
          item
          xs={12}
          sm={6}
          md={5}
          component={Paper}
          elevation={24}
          square
          sx={{
            height: '99%',
            background: '#e5f1d7',
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
              <Section title="PhoneBook">
                <ContactForm />
                <Title title="Contacts" />
                <Filter />
                <ContactList />
              </Section>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={false} sm={6} md={7} />
      </Grid>
    </ThemeProvider>
  );
};

export default Contacts;
