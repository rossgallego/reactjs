import React from 'react';
import GifItem from './GiftItem.jsx';

const GifList = (props) => {
  const gifItems = props.gifs.map((image) => {
    return <GifItem key={image.id} gif={image}
     onGifSelect={props.onGifSelect} />
  });

	  return (
	    <ul className="gifs gif-list">{gifItems}</ul>
	  );
};

export default GifList;