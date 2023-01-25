import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { BoxRoot } from '@/components/one-page/about-section/about-section.styled';

export default function AboutSection() {
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down('md'));
  return (
    <BoxRoot component="section">
      <Container
        maxWidth="md"
        sx={{
          pt: matchMobileView ? 30 : 40,
          pb: 40,
        }}
      >
        <Box>
          <Typography
            sx={{
              textAlign: 'center',
              pb: 20,
            }}
            variant="h3"
            component="h2"
          >
            Trener personalny Rafał Kiszło
          </Typography>

          <Typography>
            Nazywam się Rafał Kiszło i jestem wykwalifikowanym trenerem personalnym. Pracuje wiele lat nad formą swoich
            podopiecznych. Pomagam w uzyskaniu wymarzonej sylwetki, poprawie sprawności, motoryki, przygotowaniu się do
            różnych dyscyplin sportu, wyjściu z kontuzji, czyli byciu lepszą wersją siebie. Swoją wiedzy zdobywałem
            między innymi w Wyższej Szkole Wychowania Fizycznego i Turystyki w Białymstoku ( wychowanie fizyczne ) czy
            podczas wieloletnich treningi w klubie sportowym. Od ponad 14 lat pomagam podopiecznym w osiąganiu ich
            zamierzonych celów.
          </Typography>
          <Typography sx={{ pt: 20 }}>
            W mojej pracy najważniejszy jest Ty i z Twojego sukcesu czerpie energię do pracy. Cały czas się rozwijam,
            aby moje szkolenia i kwalifikacje pomogły w osiągnięciu Twojego sukcesu. Wiele lat pracy w zawodzie trenera
            i tysiące przeprowadzonych treningów sprawiają, że moje doświadczenie przyczyni się w osiągnięciu
            zamierzonego celu.
          </Typography>
          <Typography sx={{ pt: 20 }}>
            Najważniejszy jesteś Ty i podczas wspólnej pracy sprawimy, abyś wracał na treningi z radością i uśmiechem! W
            2017 roku wygrałem konkurs Fitness Motywatory w kat. Trener personalny. Postaram się również ułożyć ci
            zbilansowaną dietę, która również przyczyni się do osiągnięcia celu sportowego. Każdy trening jest
            indywidualny, personalny i dostosowany pod twoich celów. Podczas treningów używam zróżnicowanych metod
            treningu, aby trening był atrakcyjny dla Ciebie.
          </Typography>
          <Typography variant="body1" component="h2" sx={{ pt: 20, fontSize: '1.2rem' }} align="center">
            Bądź lepszą wersją siebie! Zapraszam do współpracy!
          </Typography>
        </Box>
      </Container>
    </BoxRoot>
  );
}
