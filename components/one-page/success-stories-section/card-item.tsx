import React, { FC, useState } from 'react';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import { ISuccessStories } from '@/interfaces/i-success-stories';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  SwipeableDrawer,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  story: ISuccessStories;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CardItem: FC<Props> = ({ story }) => {
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down('md'));

  const [openDrawer, setOpenDrawer] = useState(false);

  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setOpenDrawer(open);
  };

  return (
    <Card sx={{ mx: 2, mb: 5, minHeight: matchMobileView ? '540px' : '560px' }} elevation={5}>
      <CardMedia key={story.id} title={story.name}>
        <Image src={story.image} alt={`Efekty treningu osobistego ` + story.name} />
      </CardMedia>
      <CardContent key={`${story.id}-${story.name}`}>
        <Typography align="center" variant="h2" component="p" color="initial">
          {story.weight}
        </Typography>
        <Typography sx={{ p: 4 }} align="center" key={story.name} variant="h3" component="p" color="initial">
          {story.name}
        </Typography>
        <Typography sx={{ marginTop: 2 }} variant="body1" color="initial">
          {story.cardTeaser}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: 'block',
          position: 'absolute',
          textAlign: 'center',
          bottom: 0,
          pb: 10,
        }}
      >
        <Button variant="outlined" onClick={matchMobileView ? toggleDrawer(true) : handleClickOpenDialog}>
          More
        </Button>
      </CardActions>
      <SwipeableDrawer anchor="bottom" open={openDrawer} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
        <Box sx={{ minHeight: '40vh' }}>
          <Box
            sx={{
              pt: 2,
              pr: 5,
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <IconButton onClick={toggleDrawer(false)} aria-label="delete">
              <CloseIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              p: 4,
            }}
          >
            <Typography>{story.text}</Typography>
          </Box>
        </Box>
      </SwipeableDrawer>
      <Dialog
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDialog}
        aria-describedby="alert-dialog-slide-description"
      >
        <Box sx={{ minHeight: '40vh', minWidth: '60vw' }}>body dialog</Box>
      </Dialog>
    </Card>
  );
};

export default CardItem;
