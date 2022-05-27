import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import MaterialLink from "@material-ui/core/Link";
import { Link } from "react-router-dom";

import tea1 from "../assets/images/tea1.jpg";
import tea2 from "../assets/images/tea2.jpg";
import tea3 from "../assets/images/tea3.jpg";
import tea4 from "../assets/images/tea4.jpg";
import tea5 from "../assets/images/tea5.jpg";
import tea6 from "../assets/images/tea6.jpg";
import tea7 from "../assets/images/tea7.jpg";
import tea8 from "../assets/images/tea8.jpg";
import tea9 from "../assets/images/tea9.jpg";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <MaterialLink component={Link} to="/" color="inherit">
        Your Website
      </MaterialLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  "@global": {
    a: {
      textDecoration: "none",
    },
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

// dummy data
const cards = [
  {
    id: 1,
    name: "Green Tea Powder",
    image: tea1,
    description:
      "Key flavors: Herbs, grass, tannins. Pure ground organic green tea leaves grown wild and unshaded in full sun. Nutrient-dense with intense flavor.",
  },
  {
    id: 2,
    name: "Bubble Gum",
    image: tea2,
    description:
      "Key flavors: Tropical fruits, berries, flowers Cheerful, buoyant and oh-so pretty.",
  },
  {
    id: 3,
    name: "Desert Breeze",
    image: tea3,
    description:
      "Key flavors: Earthy, mint Fresh, earthy & sensible. Ingredients: Organic green tea, organic peppermint.",
  },
  {
    id: 4,
    name: "Morning Sun",
    image: tea4,
    description:
      "Key flavors: Ginger, citrus, flowers Warm, bright & awakening. Ingredients: Organic green tea, organic ginger, organic lemon peels, natural flavor, organic marigold flowers.",
  },
  {
    id: 5,
    name: "English Cottage",
    image: tea5,
    description:
      "Key flavors: Lemongrass, citrus, herbs A bright & elegant melange. Ingredients: Organic green tea, organic lemongrass, organic rosemary leaves, natural flavor, organic lemon peels, organic blackberry leaves, organic spearmint leaves.",
  },
  {
    id: 6,
    name: "AYR Red Powder",
    image: tea6,
    description:
      "Key flavors: Dark, roasted, earthy, chocolate, coffee Made of a unique black tea finished with the perfect roast, AYR Red Powder has an unforgettably robust flavor with a clean, pleasant finish. Ingredients: Organic black tea.",
  },
  {
    id: 7,
    name: "Early Spring",
    image: tea7,
    description:
      "Key flavors: Delicate, green, a hint of nectar. Premium hand-picked first harvest. Ingredients:  Organic green tea.",
  },
  {
    id: 8,
    name: "Late Spring",
    image: tea8,
    description:
      "Key flavors: Earthy, green A satisfying everyday green tea. Premium hand-picked. Ingredients: Organic green tea.",
  },
  {
    id: 9,
    name: "Kinto glass carafe",
    image: tea9,
    description:
      "Large all-glass carafe for the perfect cold brews. Parts include bottle and lid (both heat-resistant glass) with silicone ring for tight sealing. Max temperature 284ºF / 140ºC. Microwave and dishwasher safe (hand washing recommended).",
  },
];

export default function Album({ isSignedIn }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Wild Orchard Green Tea
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              The green tea trees on our Jeju Island partner farm are lush and
              hardy, often adorned with spiders and other beautiful insects
              thriving alongside the rich wildlife native to the island—a clear
              indication that our green tea has been raised with absolutely no
              chemicals, pesticides or artificial inputs.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Link to="/about">
                    <Button variant="contained" color="primary">
                      About us
                    </Button>
                  </Link>
                </Grid>
                {/* {!isSignedIn && (
                  <Grid item>
                    <Link to="/dashboard">
                      <Button variant="outlined" color="primary">
                        Dashboard. {console.log(isSignedIn)}
                      </Button>
                    </Link>
                  </Grid>
                )} */}
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {/* Heading */}
                      {card.name}
                    </Typography>
                    <Typography>
                      {/* This is a media card. You can use this section to describe
                      the content. */}
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
