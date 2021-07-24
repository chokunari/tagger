import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    button: {
        color: "#212121",
        backgroundColor: "#fafafa",
    },
  }),
);


export default function UploadButtons() {
  const classes = useStyles();

  return (
        <div className={classes.root}>
            <Button variant="contained" className={classes.button} component="span">
              すべてのタグにチェックをつける／はずす
            </Button>
        </div>
  );
}