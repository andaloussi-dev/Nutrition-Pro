import React from 'react';
import { Grid } from '@mui/material';
import CardComponent from './Card/Card';
import styles from './Cards.module.css';

const Cards = ({data}) => {
    const calories = data.map(item => item.calories)
    .reduce((prev, curr) => prev + curr, 0);

    const protein = data.map(item => item.protein_g)
    .reduce((prev, curr) => prev + curr, 0);

    const carbs = data.map(item => item.carbohydrates_total_g)
    .reduce((prev, curr) => prev + curr, 0);
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justifyContent="center">
                <CardComponent
                    className={styles.calories}
                    cardTitle="Calories"
                    value={calories}
                />
                <CardComponent
                    className={styles.protein}
                    cardTitle="Protein"
                    value={protein}
                />
                <CardComponent
                    className={styles.carbs}
                    cardTitle="Carbs"
                    value={carbs}
                />
            </Grid>
        </div>
    );
}

export default Cards;
