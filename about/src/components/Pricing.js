import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Link as RouterLink } from "react-router-dom";

import about from "../assets/images/about.jpg";
import logo from "../assets/images/logo.jpg";
import logo2 from "../assets/images/logo2.jpg";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  imageAbout: {
    maxWidth: `50%`,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  logo: {
    maxWidth: `25%`,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  logo2: {
    maxWidth: `15%`,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const tiers = [
  {
    title: "Free",
    price: "0",
    description: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },
  {
    title: "Pro",
    subheader: "Most popular",
    price: "15",
    description: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support",
    ],
    buttonText: "Get started",
    buttonVariant: "contained",
  },
  {
    title: "Enterprise",
    price: "30",
    description: [
      "50 users included",
      "30 GB of storage",
      "Help center access",
      "Phone & email support",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
  },
];
const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"],
  },
  {
    title: "Features",
    description: [
      "Cool stuff",
      "Random feature",
      "Team feature",
      "Developer stuff",
      "Another one",
    ],
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource",
    ],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
  },
];

export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Wild Since 1999
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          The green tea trees on our Jeju Island partner farm are lush and
          hardy, often adorned with spiders and other beautiful insects thriving
          alongside the rich wildlife native to the island—a clear indication
          that our green tea has been raised with absolutely no chemicals,
          pesticides or artificial inputs.
        </Typography>
      </Container>
      <img src={about} className={classes.imageAbout}></img>
      <Box mt={5}></Box>
      <Container className={classes.image}>
        <Typography
          component="h1"
          variant="h3"
          align="left"
          color="textPrimary"
          gutterBottom
        >
          The Origin
        </Typography>
        <Box mt={5}></Box>
        <Typography
          component="h3"
          variant="h4"
          align="left"
          color="textPrimary"
          gutterBottom
        >
          Jeju Island
        </Typography>
        <Typography
          variant="h5"
          align="left"
          color="textSecondary"
          component="p"
        >
          All of Wild Orchard's tea comes from a single tea plant species called
          Camellia sinensis grown on a 1,000 acre regenerative tea farm on the
          subtropical volcanic island of Jeju in South Korea. For the first two
          decades, the farmers kept their green tea plants and soil wild and
          free of chemicals and artificial inputs in order to develop the
          healthiest and cleanest green tea possible. During that time, no
          significant profit was made from it, and they merely worked to keep
          the green tea protected and pure. Since then they have continued to
          grow their teas naturally and regeneratively without any sprays,
          fertilizers or compromising practices.
        </Typography>
        <Box mt={5}></Box>
        <Typography
          component="h3"
          variant="h4"
          align="left"
          color="textPrimary"
          gutterBottom
        >
          Born on the Farm
        </Typography>
        <Typography
          variant="h5"
          align="left"
          color="textSecondary"
          component="p"
        >
          The farm's tea plants were born of seeds originating from its organic
          and equally pristine sister farm on the mainland. The seeds were
          planted directly into the Jeju Island soil, causing them to develop
          much deeper roots than those of simply transplanted trees. This
          allowed for superior nutrient absorption, resulting in stronger,
          healthier plants, and, ultimately, a healthier tea.
        </Typography>
        <Box mt={5}></Box>
        <Typography
          component="h1"
          variant="h3"
          align="left"
          color="textPrimary"
          gutterBottom
        >
          Our Mission
        </Typography>
        <Typography
          variant="h5"
          align="left"
          color="textSecondary"
          component="p"
        >
          By now it’s no secret green tea is a powerhouse of antioxidants and
          other incredible properties. It not only fights a slew of illnesses
          like heart disease, cancer and diabetes, it even improves mental
          health. Yet, while the green tea industry is booming, it’s hard to
          know which one to choose. Even “healthy” products like teas and
          natural foods can contain contaminants and very low bioavailability of
          nutrients depending on their origin and how they were grown or
          processed. That is why we felt it was time to introduce Wild Orchard
          Green Tea in partnership with a truly good, clean, regenerative
          source. We are honored to bring you this hidden gem in the hopes of
          helping people everywhere achieve better health and gain a deeper
          understanding of how we must protect nature because it is ultimately
          what protects us.
        </Typography>
        <img src={logo} className={classes.logo}></img>
        <Box mt={5}></Box>
        <img src={logo2} className={classes.logo2}></img>
      </Container>

      {/* End hero unit */}
      {/* <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  action={tier.title === "Pro" ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /mo
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    component={RouterLink}
                    to="/auth/signup"
                    fullWidth
                    color="primary"
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container> */}
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>

        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}
