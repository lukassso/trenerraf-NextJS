import React, { FC, useCallback, useState } from 'react';
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
  DialogActions,
  DialogContent,
  DialogTitle,
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

  const setCardTeaser = useCallback(() => {
    const amountOfLetters = matchMobileView ? 110 : 130;
    return story.text.length <= amountOfLetters ? story.text : `${story.text?.substring(0, amountOfLetters)}...`;
  }, [matchMobileView, story.text]);

  return (
    <Card sx={{ mx: 3, my: 5, minHeight: matchMobileView ? '560px' : '590px', position: 'relative' }} elevation={5}>
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
          {setCardTeaser()}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: 'block',
          position: 'absolute',
          textAlign: 'left',
          bottom: 0,
          pb: 5,
          pl: 4,
        }}
      >
        <Button variant="outlined" onClick={matchMobileView ? toggleDrawer(true) : handleClickOpenDialog}>
          Więcej
        </Button>
      </CardActions>
      <SwipeableDrawer
        sx={{
          '& .MuiPaper-elevation': {
            borderRadius: '16px 16px 0 0',
          },
        }}
        anchor="bottom"
        open={openDrawer}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box sx={{ minHeight: '90vh' }}>
          <Image src={story.image} alt={`Efekty treningu osobistego ` + story.name} />
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
        // keepMounted
        maxWidth="xs"
        onClose={handleCloseDialog}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ m: 0, p: 2 }}>
          {story.name}
          {openDialog ? (
            <IconButton
              aria-label="close"
              onClick={handleCloseDialog}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          ) : null}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>{story.text}</Typography>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default CardItem;
