import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../components/Header/Header';
import AddMusicPage from '../pages/AddMusicPage/AddMusicPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import MusicDetailsPage from '../pages/MusicDetailsPage/MusicDetailsPage';
import SingUpPage from '../pages/SingUpPage/SingUpPage';



const Router = () => {
    return (
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/">           
            <HomePage />
          </Route>

          <Route exact path={"/cadastro"}>           
            <SingUpPage />
          </Route>

          <Route exact path={"/login"}>
            <LoginPage />
          </Route>

          <Route exact path={"/adicionar-musica"}>
            <AddMusicPage />
          </Route>

          <Route exact path={"/musica/detalhes/:id"}>
            <MusicDetailsPage />
          </Route>

          <Route>
            <ErrorPage />
          </Route>

        </Switch>
      </BrowserRouter>
    );
  }

  export default Router