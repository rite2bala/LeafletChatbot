import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
//import Typography from "../../components/Typography";

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(4)
  },
  images: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexWrap: "wrap"
  },
  imageWrapper: {
    position: "relative",
    display: "block",
    padding: 0,
    borderRadius: 0,
    height: "30vh",
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
      height: 100
    },
    "&:hover": {
      zIndex: 1
    },
    "&:hover $imageBackdrop": {
      opacity: 0.15
    },
    "&:hover $imageMarked": {
      opacity: 0
    },
    "&:hover $imageTitle": {
      border: "4px solid currentColor"
    }
  },
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%"
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create("opacity")
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity")
  }
});

function ProductCategories(props) {
  const { classes } = props;

  const images = [
    {
      url:
        "https://cdn.pixabay.com/photo/2015/11/12/13/08/heart-care-1040229_1280.png",
      title: "Entresto 100mg (Sacubitril/Valsartan)",
      width: "50%",
      href: "/Entresto"
    },
    {
      url:
        "https://cdn.pixabay.com/photo/2017/10/04/09/56/laboratory-2815641_1280.jpg",
      title: "Clozaril 100mg (Clozapine)",
      width: "50%",
      href: "/Clozaril"
    }
  ];

  return (
    <div>
      <video
        autoPlay
        loop
        style={{
          position: "absolute",
          width: "100%",
          left: "0%",
          height: "100%",
          top: "0%",
          objectFit: "cover",
          transform: "translate (-50%,-50%)",
          zIndex: "-1"
        }}
      >
        <source
          src="https://static.videezy.com/system/resources/previews/000/018/961/original/blue.mp4"
          type="video/mp4"
        />
      </video>
      <Container className={classes.root} component="section" maxWidth="lg">
        <Typography variant="h4" marked="center" align="center" component="h2">
          Product Information Portal
        </Typography>
        <div className={classes.images}>
          {images.map((image) => (
            <ButtonBase
              key={image.title}
              className={classes.imageWrapper}
              style={{
                width: image.width
              }}
              href={image.href}
            >
              <div
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(${image.url})`
                }}
              />
              <div className={classes.imageBackdrop} />
              <div className={classes.imageButton}>
                <Typography
                  component="h3"
                  variant="h6"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  {image.title}
                  <div className={classes.imageMarked} />
                </Typography>
              </div>
            </ButtonBase>
          ))}
        </div>
      </Container>
    </div>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductCategories);
