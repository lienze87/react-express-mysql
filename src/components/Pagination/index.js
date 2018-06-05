import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function PreviousPage(props) {
  if (props.page === "disabled") {
    return (
      <li className="previous_page pagination_disabled">&lt;</li>
    )
  } else {
    return (
      <li className="previous_page" ><Link to={`/${props.type}/${props.page}`} data-page={props.page}>&lt;</Link></li>
    )
  }
}

function NextPage(props) {
  if (props.page === "disabled") {
    return (
      <li className="next_page pagination_disabled">&gt;</li>
    )
  } else {
    return (
      <li className="next_page"><Link to={`/${props.type}/${props.page}`} data-page={props.page}>&gt;</Link></li>
    )
  }
}

function PageList(props) {
  const list = [];
  for (let i = 1, item; i <= props.pageNum; i++) {
    if (i === props.pageNow) {
      item = (
        <li title={i} key={i}  className="pagination_active">
          <Link to={`/${props.type}/${i}`} data-page={i}>{i}</Link>
        </li>
      );
    } else {
      item = (
        <li title={i} key={i}>
          <Link to={`/${props.type}/${i}`} data-page={i}>{i}</Link>
        </li>
      );
    }
    list.push(item);
  };
  return list;
}

export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if (e.target.dataset.page === undefined) {
      console.log('page error');
      return;
    } else {
      console.log("get_list:" + this.props.type + "---" + e.target.dataset.page);
      this.props.getList(this.props.type,e.target.dataset.page);
    }
  }
  render() {
    const previous_page = this.props.pageNow - 1 < 1 ? "disabled" : this.props.pageNow - 1;
    const next_page = this.props.pageNow + 1 > this.props.pageNum ? "disabled" : this.props.pageNow + 1;
    if (this.props.pageNum === 1) {
      return <span></span>
    } else {
      return (
        <ul className="card pagination" onClick={this.handleClick}>
          <PreviousPage page={previous_page} type={this.props.type} />
          <PageList pageNum={this.props.pageNum} type={this.props.type} />
          <NextPage page={next_page} type={this.props.type} />
        </ul>
      )
    }

  }
}