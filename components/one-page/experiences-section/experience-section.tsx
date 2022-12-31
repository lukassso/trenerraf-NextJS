import { experiencesSectionData } from '@/components/one-page/experiences-section/experiences-section.data';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { PaperBox, PrizeHeader, PrizesText } from '@/components/one-page/experiences-section/experience-section.styled';
import SuperfmSvg from '@/assets/superfmSvg';

export default function ExperiencesSection() {
  return (
    <>
      <Box
        component="section"
        id="doswiadczenie"
        sx={{
          mt: 10,
          mb: 20,
        }}
      >
        <Container maxWidth="sm">
          <PrizeHeader>
            <Box>
              <SuperfmSvg />
            </Box>
            <Box>
              <PrizesText>Zwycięzca konkursu Fitness Motywatory 2017 w kategorii Trener Personalny</PrizesText>
            </Box>
          </PrizeHeader>

          <Box pt={12} pb={1}>
            <Typography
              sx={{
                textAlign: 'center',
                pb: 10,
              }}
              variant="h3"
            >
              Przebyte kursy i szkolenia
            </Typography>
          </Box>
        </Container>
        <Container maxWidth="md">
          <Grid container spacing={5}>
            {experiencesSectionData.map((experience, index) => (
              <Grid key={`${experience}.${index}`} item xs={6} sm={4}>
                <PaperBox elevation={0} variant="outlined">
                  <Typography key={experience.name} variant="h5" component="h2">
                    {experience.name}
                  </Typography>
                  <Typography variant="body1" key={experience.area}>
                    {experience.area}
                  </Typography>
                </PaperBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
