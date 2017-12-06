import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PropTypes from 'prop-types';
import * as comicActions from "../../actions/comicActions";
import ComicListPage from './ComicListPage';

class ComicPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render () {
    return (
      <div>
        <h1>Marvel Comics Catalog</h1>
        <ComicListPage allcomic={this.props.allcomic}/>
      </div>
    );
  }
}

ComicPage.propTypes = {
  actions: PropTypes.object.isRequired,
  allcomic: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    allcomic: state.comicReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(comicActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ComicPage);
