import React, { Component } from "react";

export class NewsItem extends Component {
  
  static propTypes = {};

  render() {
    let {title,description,imgUrl,newsURL}=this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src={imgUrl} className="card-img-top" alt="..." height={"200px"}/>
          <div className="card-body">
            <h5 className="card-title">{title}..</h5>
            <p className="card-text">{description}....</p>
            <a href={newsURL} target="blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
