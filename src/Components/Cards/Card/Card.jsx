import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import cx from 'classnames';
import styles from './Card.module.css';
import CountUp from 'react-countup';


const CardComponent = ({ className, cardTitle, value}) => {
    return (
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, className)}>
        <CardContent>
          <Typography  variant="h4" gutterBottom>
            {cardTitle}
          </Typography>
          <Typography variant="h5" component="h2">
            <CountUp start={0} end={value} duration={2.75} separator="," />
          </Typography>
        </CardContent>
      </Grid>
    );
}

export default CardComponent;
