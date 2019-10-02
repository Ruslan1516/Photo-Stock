import React, {Component, Fragment} from 'react';
import Search from '../../components/Search/Search';
import Images from '../../components/Images/Images';
import axios from '../../axios-photo';

const API_KEY = 'b094e56ee1bac7ca185d0aea8acc4b311108f1d81fd8ac9bffab4a2f1beca4a6';

class Home extends Component {
  state = {
    photos: [],
    search: '',
    favorites: '',
  };

  componentDidMount() {
    axios.get('photos/?client_id=' + API_KEY).then(
      success => {
        console.log(success.data);
        this.setState({photos: success.data})
      }, error => {
        console.log(error);
      }
    );

    document.addEventListener('keyup', (event) => {
      if (event.keyCode === 13) {
        this.searchPhotos();

        let results = [];
        if (localStorage.getItem('results')) {
          results = JSON.parse(localStorage.getItem('results'));
        }
        results.push(this.state.search);
        localStorage.setItem('results', JSON.stringify(results));
      }
    });
  }


  searchPhotos = () => {
    axios.get('search/photos/?client_id=' + API_KEY + '&query=' + this.state.search).then(
      success => {
        console.log(success);
        this.setState({photos: success.data.results});
      }, error => {
        console.log(error);
      }
    );
  };

  change = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  addFavorite = elem => {
    let favorites = [];
    if (localStorage.getItem('Favorites')) {
      favorites = JSON.parse(localStorage.getItem('Favorites'));
    }
    favorites.push(elem);
    localStorage.setItem('Favorites', JSON.stringify(favorites));
  };

  render() {
    return (
      <Fragment>
        {this.props.search ? <Search value={this.state.search} change={this.change}/> : null}
        {this.state.photos.length ? <Images addFavorite={this.addFavorite} images={this.state.photos}/> : null}
      </Fragment>
    );
  }
}

export default Home;