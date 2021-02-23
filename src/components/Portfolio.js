import React, { Component } from "react";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                        <a href={item.href}>
                          <img src={`${item.imgurl}`} />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                          <div className="link-icon">
                            <i className="icon-plus"></i>
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })}
              {resumeData.portfolio &&
                resumeData.portfolio.map((item) => {
                  return (
                    <div id={item.modal} className="popup-modal mfp-hide">
                      <img src={`${item.imgurl}`} />
                      <div className="description-box">
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                        <span className="categories">
                          <i className="fa fa-tag"></i>
                        </span>
                      </div>
                      <div className="link-box">
                        <a href={item.deployed}>Try It Out!</a>
                        <a href={item.githuburl}>Github</a>
                        <a className="popup-modal-dismiss">Close</a>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
