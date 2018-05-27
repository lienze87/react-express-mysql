import React from 'react';
import {connect} from 'react-redux';
import './style.css';
import { actions } from '../../actions';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handelClick = this.handelClick.bind(this);
  }

  componentDidMount(){
//    this.props.getSearchKey('html');
  }
  handelClick(e) {
    console.log("get_search_key:"+document.querySelector('.search_input').value);
    this.props.getSearchKey(document.querySelector('.search_input').value);
  }

  render() {
    return (
      <div className="search_bar">
        <input type="text" className="search_input" maxLength="100" autoComplete="off" placeholder="搜索你感兴趣的内容..." />
        <div className="input_after">
          <button className="Button SearchBar_searchIcon Button_primary" onClick={this.handelClick}>
            <svg viewBox="0 0 16 16" className="Icon Icon_search" width="16" height="16" >
              <g>
                <path d="M12.054 10.864c.887-1.14 1.42-2.57 1.42-4.127C13.474 3.017 10.457 0 6.737 0S0 3.016 0 6.737c0 3.72 3.016 6.737 6.737 6.737 1.556 0 2.985-.533 4.127-1.42l3.103 3.104c.765.46 1.705-.37 1.19-1.19l-3.103-3.104zm-5.317.925c-2.786 0-5.053-2.267-5.053-5.053S3.95 1.684 6.737 1.684 11.79 3.95 11.79 6.737 9.522 11.79 6.736 11.79z"></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { }
}

function mapDispatchToProps(dispatch) {
  return {
    getSearchKey: (key) => {
      dispatch(actions.get_search_key(key));
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);