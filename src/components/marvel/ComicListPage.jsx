import React from 'react';
import PropTypes from 'prop-types';
import ComicCard from './ComicCard';

const ComicListPage = ({allcomic}) => {
  return (
    <div className="row marvel-list-container">
      {allcomic.map(comic =>
        <ComicCard key={comic.id} comic={comic}/>
      )}
    </div>
  );
};

ComicListPage.propTypes = {
  allcomic: PropTypes.array.isRequired
};

export default ComicListPage;
