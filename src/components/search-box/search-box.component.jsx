import React from 'react';
import TextField from '@material-ui/core/TextField';
import './search-box.styles.css'
import {StylesProvider} from '@material-ui/styles';


export const SearchBox = ({placeholder, handleChange}) => { //Cuando quiero poner las props directo de aca deben ir entre corchetes!! O bien usar (props) y después llamar a las props manualmente
    console.log("searchbooox")
    return (
      <form noValidate autoComplete="off">
        <div>
            <StylesProvider inyectFirst>
          <TextField placeholder={placeholder} onChange={handleChange} color="primary" id="outlined-search" label="Search field" type="search" variant="filled" />
          </StylesProvider>
        </div>
      </form>
    );
  }
// vamos a conectar el repositorio actual a mi repo en github: git remote ad origin https://github.com/sebawarrior/monster-rolodex.git
// luego yarn add gh-pages
// luego escribimos en el package json: "homepage": "https://sebawarrior.github.io/monster-rolodex" (justo arriba de dependencies)
// Luego escribimos 
// "predeploy": "yarn build", -> script del package json
// "deploy": "gh-pages -d build" -> script del package json