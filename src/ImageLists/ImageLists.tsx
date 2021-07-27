import React, { useState } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
//テスト用　ここから
import image1 from '../SampleImages/image1.PNG'
import image2 from '../SampleImages/image2.PNG'
import image3 from '../SampleImages/image3.PNG'
import image4 from '../SampleImages/image4.PNG'
import image5 from '../SampleImages/image5.PNG'
import image6 from '../SampleImages/image6.PNG'
//テスト用　ここまで
import { Modal } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    imageList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: '#fafafa',
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    modal: {
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
    },
    paper: {
      position: 'absolute',
      width: 600,
      height: 600,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      //padding: theme.spacing(2, 4, 3),
      padding: theme.spacing(1,4,3,3),
    },
    submitarea: {
      textAlign: 'right'
    },
    submitbutton: {
      backgroundColor: '#ffb74d'
    },
    modalimage: {
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
    },
  }),
);

interface itemdata{
  img: string,
  title: string,
}

export default function SingleLineImageList(/*props:itemdata*/) {
  const classes = useStyles();

  //const itemData:itemdata[] = [props];
  const itemData:itemdata[] = [
    {
      img: image1,
      title: '画像１'
    },
    {
      img: image2,
      title: '画像２'
    },
    {
      img: image3,
      title: '画像３'
    },
    {
      img: image4,
      title: '画像４'
    },
    {
      img: image5,
      title: '画像５'
    },
    {
      img: image6,
      title: '画像６'
    },
  ];

  const [open, setOpen] = useState(false);

  const handleOpen = (item:itemdata) => {
    setOpen(true);
    setModalImage(item);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [modalImage, setModalImage] = useState<itemdata>(itemData[0])

  const body = (
    <div className={classes.paper}>
      <form noValidate autoComplete="off">
      <div className={classes.modalimage}>
        <img 
          src={modalImage.img}
          alt={modalImage.title}
          width="400"
          height="400"
        />
      </div>
        <div className={classes.submitarea}>
          <Button type='submit' className={classes.submitbutton}>追加</Button>
        </div>
      </form>
    </div>
  );

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} rowHeight={500} cols={2.5}>
        {itemData.map((item) => (
            <ImageListItem key={item.img} onClick={() => { handleOpen(item) }}>
              <img src={item.img} alt={item.title} />
              <ImageListItemBar
                title={item.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
              />
            </ImageListItem>
        ))}
      </ImageList>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      >
        {body}
      </Modal>
    </div>
  );
}
