import React, { useEffect, useState } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import { Modal } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { getImagetag } from '../graphql/queries';
import awsExports from "../aws-exports";

Amplify.configure(awsExports);

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
  "data": {
    "getImagetag": {
      "id":string,
      "sub":string,
      "tagname":string
      "imgurl": string,
    }
  }

  //title: string,
}

export default function SingleLineImageList(/*props:itemdata*/) {
  const classes = useStyles();

  const [itemData, setItemData] = useState<itemdata[] | any[]>([
    {
      "data": {
        "getImagetag": {
          "id":"1",
          "sub":"default",
          "tagname":"default",
          "imgurl": "default",
        }
      }
    }
  ]);

  const [open, setOpen] = useState(false);
  const [modalImage, setModalImage] = useState<itemdata>(itemData[0])

  useEffect(()=>{
    dataFetch();
  });

  const dataFetch = async () => {
    try{
      const item = await API.graphql(graphqlOperation(getImagetag, {id: "1"}));
      setItemData([item]);
    }catch(err){
      console.log('error fetching image:', err)
    }
  }


  const handleOpen = (item:itemdata) => {
    setOpen(true);
    setModalImage(item);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={classes.paper}>
      <form noValidate autoComplete="off">
      <div className={classes.modalimage}>
        
        <img 
          src={modalImage.data.getImagetag.imgurl}
          alt="test"
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
        {itemData.map((item: itemdata) => (
            <ImageListItem key={item.data.getImagetag.imgurl} onClick={() => { handleOpen(item) }}>
              <img src={item.data.getImagetag.imgurl} alt="test" />
              <ImageListItemBar
                title="test"
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
