import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';

const useStyles = makeStyles(theme => ({
  root: {
    
    // minWidth: 256,
    backgroundColor: "aqua",
    maxWidth: 250,
    textAlign: 'center',
    
  },
  header: {
    textAlign: 'center',
    spacing: 10,

  },
  price: {
    color: '#0070f3',
    paddingBottom: 20,

  },
  list: {
    // padding: '20px',
    display: 'flex',
    alignContent: 'center',
    align: 'center',
    textAlign: 'left',
  },
  listItem: {
    borderBottom: 'solid 1px black',
    // maxWidth: 200,
    paddingTop: 10,
  },
  button: {
    margin: theme.spacing(1),
  },
  action: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}));

export const PricingCardDemo = React.memo(function PricingCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title="Basic" className={classes.header} />
      {/* <Divider variant="middle" /> */}
      <CardContent>
        <Typography variant="h4" align="center" className={classes.price}>
          Free
        </Typography>
        <div className={classes.list}>
          <ul>
            <li className={classes.listItem}>Know Where to watch</li>
            <li className={classes.listItem}>Watch Free Content</li>            
            <li className={classes.listItem}>Watchlist</li>            
          </ul>
          {/* <Typography align="center">Manage tasks</Typography>
          <Typography align="center">Sync notes</Typography>
          <Typography align="center">Set deadline</Typography> */}
        </div>
      </CardContent>
      <CardActions className={classes.action}>
        <Button variant="contained" color="primary" className={classes.button}>
          Select Plan
        </Button>
      </CardActions>
    </Card>
  );
});

export default PricingCardDemo