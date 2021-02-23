import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>
          <div className="ten columns">
            <p className="lead">
              Please feel free to get in touch with me emailing
              <span>
                <a href="mailto: ikenna.nwagbara@gmail.com">
                  ikenna.nwagbara@gmail.com
                </a>
              </span>
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                Ikenna Nwagbara
                <br></br>
                Atlanta, GA
                <br></br>
                <span>(678) 557-2142</span>
              </p>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
