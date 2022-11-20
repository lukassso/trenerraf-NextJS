import { experiencesSectionData } from '@/containers/experiences-section/experiences-section.data';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { PaperBox, PriceHeader, PrizesText } from '@/containers/experiences-section/experience-section.styled';

export default function ExperiencesSection() {
  return (
    <>
      <Box
        component="section"
        id="experience"
        sx={{
          mt: 10,
          mb: 20,
        }}
      >
        <Container maxWidth="sm">
          <PriceHeader>
            <Box sx={{ width: '30%' }}>{/*<Img fluid={data.pic1.childImageSharp.fluid} alt="" />*/}</Box>
            <Box>
              <PrizesText>Zwycięzca konkursu Fitness Motywatory 2017 w kategorii Trener Personalny</PrizesText>
            </Box>
          </PriceHeader>

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
            {experiencesSectionData.map((experience) => (
              <Grid key={experience.id} item xs={6} sm={4}>
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
