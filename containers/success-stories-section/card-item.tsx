import React, { FC } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ISuccessStories } from '@/interfaces/i-success-stories';
import { Card, CardContent, CardMedia } from '@mui/material';

interface Props {
  story: ISuccessStories;
}

const CardItem: FC<Props> = ({ story }) => {
  return (
    <Box px={2}>
      <Card
        sx={{
          marginTop: 40,
          marginBottom: 40,
        }}
      >
        <CardMedia
          key={story.id}
          title={story.name}
          // image={story.image}
        >
          <Image
            // fluid={data.pic6.childImageSharp.fluid}
            src={story.image}
            alt={`Efekty treningu osobistego ` + story.name}
          />
          {/* <img className={classes.pictureStories} src={story.image} alt=""/> */}
        </CardMedia>
        <CardContent key={story.id}>
          <Typography align="center" key={story.id} variant="h2" component="p" color="initial">
            {story.weight}
          </Typography>
          <Typography sx={{ p: 10 }} align="center" key={story.name} variant="h5" component="p" color="initial">
            {story.name}
          </Typography>
          <Typography sx={{ marginTop: 10 }} variant="body1" color="initial">
            {story.cardTeaser}
          </Typography>
        </CardContent>
        {/*<CardActions key={story.id} disableSpacing>*/}
        {/*    /!* <IconButton key={story.id} aria-label="add to favorites">*/}
        {/*        <FavoriteIcon key={story.id} />*/}
        {/*      </IconButton>*/}
        {/*      <IconButton key={story.id} aria-label="share">*/}
        {/*        <ShareIcon />*/}
        {/*      </IconButton> *!/*/}
        {/*    <IconButton*/}
        {/*        // style={{ display: 'flex', justifyContent: 'center' }}*/}
        {/*        key={story.id}*/}
        {/*        className={clsx(classes.expand, {*/}
        {/*            [classes.expandOpen]: expanded,*/}
        {/*        })}*/}
        {/*        onClick={handleExpandClick}*/}
        {/*        aria-expanded={expanded}*/}
        {/*        aria-label="show more"*/}
        {/*    >*/}
        {/*        <ExpandMoreIcon key={story.id} />*/}
        {/*    </IconButton>*/}
        {/*</CardActions>*/}
        {/*<Collapse*/}
        {/*    key={story.id}*/}
        {/*    in={expanded}*/}
        {/*    timeout="auto"*/}
        {/*    unmountOnExit*/}
        {/*>*/}
        {/*    <CardContent key={story.id}>*/}
        {/*        <Typography*/}
        {/*            key={story.id}*/}
        {/*            paragraph*/}
        {/*        >*/}
        {/*            {story.text}*/}
        {/*        </Typography>*/}
        {/*    </CardContent>*/}
        {/*</Collapse>*/}
      </Card>
    </Box>
  );
};

export default CardItem;
