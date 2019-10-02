import React, {Component} from 'react';
import Images from '../../components/Images/Images';
import './Favorites.css';



class Favorites extends Component {
    state = {
        arrFavoritesLocal: []
    };

    componentDidMount() {
        const arrResultsLocal = localStorage.getItem('Favorites');
        if (arrResultsLocal) {
            this.setState({arrFavoritesLocal: JSON.parse(arrResultsLocal)});
        }
    }

    render() {
        return (
            <div className="FavoritesMainBLock">
                <h2>Избранное</h2>
                {this.state.arrFavoritesLocal.length ? <Images images={this.state.arrFavoritesLocal}/> : null}
            </div>
        )
    }
}

export default Favorites;