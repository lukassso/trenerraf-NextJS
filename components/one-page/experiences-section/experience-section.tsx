import { experiencesSectionData } from '@/components/one-page/experiences-section/experiences-section.data';
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import {
  ButtonBlog,
  CertIcon,
  PaperBox,
  PrizeHeader,
  PrizesText,
  OpisKursyStyled,
} from '@/components/one-page/experiences-section/experience-section.styled';
import SuperfmSvg from '@/assets/superfmSvg';
import { SectionMainHeader } from '@/components/common/section-main-header';
import CertIconSvg from '@/assets/cert-icon-svg';
import NextLink from '@/components/common/next-link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NextLink2 from '@/components/common/next-link-2';

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
              <PrizesText>Rafał Kiszło - Zwycięzca konkursu Fitness Motywatory 2017 w kategorii Trener Personalny</PrizesText>
            </Box>
          </PrizeHeader>

          <SectionMainHeader sectionTitle="Przebyte kursy i szkolenia" />
        </Container>
        <Container maxWidth="md">
          <Grid container spacing={5}>
            <OpisKursyStyled>
              <Typography component="p">
              Nieustannie się kształcę i rozwijam oraz uzyskuję branżowe certyfikaty, które potwierdzają moje kwalifikacje. To wszystko, połączone z wieloma latami pracy, pozwala mi skutecznie dzielić się wiedzą z moimi podopiecznymi. Potrafię dobrać najskuteczniejsze metody treningów, dostosowane do Twoich możliwości. 
                <Typography component="span">
                  <strong>Doświadczony Trener personalny</strong> to oszczędność czasu i pieniędzy oraz najszybsze efekty w przebudowie sylwetki</Typography>
              </Typography>
            </OpisKursyStyled>
            {experiencesSectionData.map((experience, index) => (
              <Grid key={`${experience}.${index}`} item xs={6} sm={4}>
                <PaperBox elevation={0} variant="outlined">
                  <Typography key={experience.name} variant="h5" component="h2">
                    {experience.name}
                  </Typography>

                  <Typography variant="body1" key={experience.area}>
                    {experience.area}
                  </Typography>
                  {experience.blogArticles && (
                    <ButtonBlog>
                      <NextLink href={`/blog`}>
                        {/*<Button variant="outlined" title="Czytaj na blogu" endIcon={<NavigateNextIcon />}>*/}
                        <Typography>
                          Czytaj na blogu{' '}
                          <Typography component="span">
                            {' '}
                            <NavigateNextIcon />
                          </Typography>
                        </Typography>
                        {/*</Button>*/}
                      </NextLink>
                    </ButtonBlog>
                  )}
                  <CertIcon>
                    <CertIconSvg />
                  </CertIcon>
                </PaperBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
