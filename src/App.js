import React, {Component, Fragment} from 'react';
import MainNav from './components/MainNav/MainNav';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './containers/Home/Home';
import History from './containers/History/History';
import Favorites from './containers/Favorites/Favorites'

class App extends Component {
    state = {
        search: false
    };

    makeSearchVisible = () => {
        this.setState({search: true});
    };

    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <MainNav
                        onclick={this.makeSearchVisible}/>
                    <Switch>
                        <Route path="/" exact render={() => <Home search={this.state.search}/>}/>
                        <Route path="/history" exact component={History}/>
                        <Route path="/favorites" exact component={Favorites}/>
                    </Switch>
                </Fragment>
            </BrowserRouter>
        );
    }
}

export default App;