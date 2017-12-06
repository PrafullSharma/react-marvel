import React from 'react';
import PropTypes from 'prop-types';
import Truncate from 'react-truncate';

const ComicCard = ({comic}) => {
  return (
    <div className="card m-1 m-sm-1 m-md-2"
       key={comic.id}
       style={{width: '16.8rem'}}>
      <a href={comic.thumbnail.path + '.' + comic.thumbnail.extension}>
        <img className="card-img-top"
           alt={comic.title}
           style={{height: '20rem', maxWidth: '20rem'}}
           src={comic.thumbnail.path + '.' + comic.thumbnail.extension} />
      </a>
      <div className="card-body">
        <h4 className="card-title reset-span" title={comic.title}>
          <Truncate lines={2} ellipsis={'...'}>
            {comic.title}
          </Truncate>
        </h4>
        <p className="card-text reset-span" title={comic.description}>
          <Truncate lines={3} ellipsis={<span>... <a href='#'>Read more</a></span>}>
            {comic.description}
          </Truncate>
        </p>
        <a className="btn btn-primary mr-1" href="#" role="button">Characters</a>
        <a className="btn btn-primary" href="#" role="button">Story</a>
      </div>
    </div>
  );
};

ComicCard.propTypes = {
  comic: PropTypes.object.isRequired
}

export default ComicCard;
