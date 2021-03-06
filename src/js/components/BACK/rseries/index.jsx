import React from 'react';

import S1 from './s1.jsx';
// import SearchBar from './SearchBar.jsx';
// import GifList from './GifList.jsx';
// import GifModal from './GifModal.jsx';
// import request from 'superagent';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  openModal(gif) {
    this.setState({
      modalIsOpen: true,
      selectedGif: gif
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
      selectedGif: null
    });
  }

  handleTermChange(term) {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;

    // request.get(url, (err, res) => {
    //   this.setState({ gifs: res.body.data })
    // });
    var that = this;
    request.get(url,function(err,res){
      that.setState({gifs: res.body.data})
    })
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}
export default App