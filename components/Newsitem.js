import React, { Component } from 'react';

class Newsitem extends Component {
  render() {
    const { title, description, newsUrl, imageUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card" >
          <img src={!imageUrl?"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i4K5Viz50WOA/v0/1200x799.jpg":imageUrl} className="card-img-top" alt="..." /> 
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;

