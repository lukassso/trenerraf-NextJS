import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { BoxRoot } from '@/components/one-page/about-section/about-section.styled';
import { SectionMainHeader } from '@/components/common/section-main-header';
import React from 'react';

export default function AboutSection() {
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down('md'));
  return (
    <BoxRoot component="section">
      <Container
        maxWidth="md"
        sx={{
          pt: matchMobileView ? 10 : 20,
          pb: 40,
        }}
      >
        <SectionMainHeader sectionTitle="Trener personalny" />
        <Box sx={{ px: 8 }}>
          <Typography>
            <strong>Nazywam się Rafał Kiszło i jestem wykwalifikowanym trenerem personalnym na Mokotowie. Od ponad 15 lat pracuje nad formą swoich podopiecznych.</strong> Pomagam w uzyskaniu wymarzonej sylwetki, poprawie sprawności, motoryki, przygotowaniu się do różnych dyscyplin sportu, wyjściu z kontuzji, czyli byciu lepszą wersją siebie.
            Swoją wiedzę zdobywałem między innymi w Wyższej Szkole Wychowania Fizycznego i Turystyki w Białymstoku (Wychowanie Fizyczne) czy podczas wieloletnich treningów w klubie sportowym. Od wielu lat pomagam podopiecznym w osiąganiu ich zamierzonych celów.
          </Typography>
          <Typography sx={{ pt: 20 }}>
            W mojej pracy najważniejszy jest Ty i z Twojego sukcesu czerpie energię do pracy. Cały czas się rozwijam, aby moje szkolenia i kwalifikacje pomogły w osiągnięciu Twojego sukcesu. Wiele lat pracy w zawodzie trenera i tysiące przeprowadzonych treningów sprawiają, że moje doświadczenie przyczyni się w osiągnięciu zamierzonego celu.
          </Typography>
          <Typography sx={{ pt: 20 }}>
            Najlepszy motywator w mieście - dewiza zobowiązuje! Sprawię abyś wracał na treningi z radością i uśmiechem! Postaram się również ułożyć ci zbilansowaną dietę, która również przyczynia się do osiągnięcia celu sportowego. Każdy trening jest indywidualny poodczas którego używam zróżnicowanych metod tak aby był atrakcyjny dla Ciebie.
          </Typography>
          <Typography variant="body1" component="h3" sx={{ pt: 20, fontSize: '1.2rem' }} align="center">
            Bądź lepszą wersją siebie! Zapraszam do współpracy!
          </Typography>
        </Box>
      </Container>
    </BoxRoot>

    
  );
}
