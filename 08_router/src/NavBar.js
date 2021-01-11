import React from 'react';
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    Elige la sección a visitar
                </Typography>
                <Link to="/empleados">Empleados</Link>
                <Link to="/fotos">Fotos</Link>
                <Link to="/peliculas">Películas</Link>
            </Toolbar>
        </AppBar>
    )
}; export default NavBar;
