import React, { Component } from "react";
import NewsItem from "./NewsItem";
import emptyImg from "./empty_data_icon_149938.png";
export class News extends Component {
  constructor() {
    super();
    console.log("Hi I am a constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    console.log("ComponentDidMount");
    let url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=803097cb157b478a9f6ed95b16ca8345&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles,totalResults: parsedData.totalResults});    
  }
  handleNextClick=async()=>{
    console.log("Next");
    let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=803097cb157b478a9f6ed95b16ca8345&page=${this.state.page+1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    
    this.setState({
      page:this.state.page+1,
      articles: parsedData.articles,
      totalResults:parsedData.totalResults
    })
  }
  handlePreviousClick=async()=>{
    console.log("Previous");
    let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=803097cb157b478a9f6ed95b16ca8345&page=${this.state.page-1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    
    this.setState({
      page:this.state.page-1,
      articles: parsedData.articles,
      totalResults:parsedData.totalResults
    })
  }
  render() {
    console.log("I am in Render");
    return (
      <div className="container my-3">
        <h2>Top-Head lines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                <NewsItem
                  title={
                    element && element.title ? element.title.slice(0, 45) : ""
                  }
                  description={
                    element && element.description ? element.description.slice(0, 88): ""
                  }
                  imgUrl={
                    element && element.urlToImage?element.urlToImage:emptyImg
                  }
                  newsURL={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container" class="d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr;Previous</button>
          <button disabled={this.state.page+1> Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
