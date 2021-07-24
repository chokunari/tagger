import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    button: {
      backgroundColor: '#fafafa',
      color: '#212121',
    },
    modal: {
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
    },
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      //padding: theme.spacing(2, 4, 3),
      padding: theme.spacing(1,4,3,3),
    },
    tagname: {
      margin: theme.spacing(1),
      width: '100%',
    },
    tagdescription: {
      margin: theme.spacing(1),
      width: '100%',
    },
    submitbutton: {
      backgroundColor: '#ffb74d'
    },
    submitarea: {
      textAlign: 'right'
    },
  }),
);


export default function AddTagButtons() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={classes.paper}>
      <form noValidate autoComplete="off">
        <TextField className={classes.tagname} label="タグ名"/>
        <br/>
        <TextareaAutosize className={classes.tagdescription} minRows={3} placeholder="タグの説明" />
        <div className={classes.submitarea}>
          <Button type='submit' className={classes.submitbutton}>追加</Button>
        </div>
      </form>
    </div>
  );

  return (
    <div className={classes.root}>
      <Button type="button" variant="outlined" onClick={handleOpen} className={classes.button}>
        タグを追加
      </Button>
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