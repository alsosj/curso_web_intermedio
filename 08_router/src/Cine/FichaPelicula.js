import React from 'react';
import Grid from "@material-ui/core/Grid";

function FichaPelicula(props) {
    const {datos} = props;
    console.log(datos);

    return (
        <Grid container spacing={3}>
            <Grid item xs={8}>
                <h1>{datos.Title}</h1>
            </Grid>
            <Grid item xs={4}>
                <h2>{datos.Ratings[0].Value}</h2>
            </Grid>
            <Grid item xs={3}>
                <img src={datos.Poster}/>
            </Grid>
        </Grid>
    );
}
export default FichaPelicula;

