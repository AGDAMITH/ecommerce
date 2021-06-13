import React , {Component} from 'react';
import { Navbar } from 'react-bootstrap';

export class About extends Component {
    render(){
      return (
        <div className="mad-body--scheme-brown">
          <div className="mad-preloader"></div>
          <div className="mad-breadcrumb">
            <div className="container">
              <Navbar className="mad-breadcrumb-path"><span><a href="index.html" className="mad-link">Home</a></span> / <span>Contact
                  v1</span>
              </Navbar>
              <h1 className="mad-page-title">Contact v1</h1>
            </div>
          </div>
          <div className="mad-content no-pd">
            <div className="container">
              <div className="mad-section">
                <div className="row hr-size-2 vr-size-2">
                  <div className="col-lg-6">
                    <div className="content-element-5">
                    <h3 className="mad-page-title">Contact Information</h3>
                    <p className="mad-text-medium">Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer
                      rutrum ante eu
                      lacus. Vestibulum libero nisl,
                      porta vel, scelerisque.</p>
                    </div>

                    <div classame="mad-icon-boxes size-2 hr-type item-col-1">
                      <div className="mad-col">
                        {/* ================ Icon Box ================ */}
                        <section className="mad-icon-box">
                          <i className="mad-icon-box-icon"><img className="svg" src="images/lekarna_svg_icons-location.svg" alt=""/></i>
                          <div className="mad-icon-box-content">
                            <span className="mad-icon-sub-title">Our Address:</span>
                            <h6 className="mad-icon-box-title">9863 - 9867 Mill Road,
                              Cambridge, MG09 99HT</h6>
                          </div>
                        </section>
                        {/* ================ End of Icon Box ================ */}
                      </div>
                      
                      <div className="mad-col">
                        {/* ================ Icon Box ================ */}
                        <section className="mad-icon-box">
                          <i className="mad-icon-box-icon"><img className="svg" src="images/lekarna_svg_icons-support.svg" alt=""/></i>
                          <div className="mad-icon-box-content">
                            <span className="mad-icon-sub-title">Call Us:</span>
                            <h6 className="mad-icon-box-title">+1 800 559 6580,
                        +1 800 559 6588</h6>
                          </div>
                        </section>
                        {/* ================ End of Icon Box ================ */}
                      </div>

                      <div className="mad-col">
                        {/* ================ Icon Box ================ */}
                        <section className="mad-icon-box">
                          <i className="mad-icon-box-icon"><img className="svg" src="images/lekarna_svg_icons-email.svg" alt=""/></i>
                          <div className="mad-icon-box-content">
                            <span className="mad-icon-sub-title">Email Us:</span>
                            <h6 className="mad-icon-box-title">info@companyname.com</h6>
                          </div>
                        </section>
                        {/* ================ End of Icon Box ================ */}
                      </div>

                      <div className="mad-col">
                        {/* ================ Icon Box ================ */}
                        <section className="mad-icon-box">
                          <i className="mad-icon-box-icon"><img className="svg" src="images/lekarna_svg_icons-clock.svg" alt=""/></i>
                          <div className="mad-icon-box-content">
                            <span className="mad-icon-sub-title">Opening Hours:</span>
                            <h6 className="mad-icon-box-title">Mon - Fri: 8am - 11pm,
                        Sat - Sun: 8am - 12pm</h6>
                          </div>
                        </section>
                        {/* ================ End of Icon Box ================ */}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="content-element-3">
                      <h3 className="mad-page-title">Have a Question?</h3>
                      <p className="mad-text-medium">Before you reach out to us, check out our FAQs page. If you still have
                        question or enquiries,
                        please use the form below.</p>
                    </div>
                    <form className="mad-contact-form">
                      <input type="text" id="cf_name" name="cf_name" required="" placeholder="Name"/>
                      <input type="email" id="cf_email" name="cf_email" required="" placeholder="Email address"/>
                      <input type="tel" id="cf_phone" name="cf_phone" required="" placeholder="Phone (optional)"/>
                      <textarea rows="5" id="message" name="cf_message" required="" placeholder="Your message"></textarea>
                      <div className="mad-col align-right">
                        <button type="submit" className="btn btn-big"><span>Submit</span></button>
                      </div>
                    </form>
                  </div>

                </div>
              </div>

              
              <div className="mad-section">
                <h3 className="mad-page-title with-carousel">Store Locations</h3>
                <div className="mad-our-info-box owl-carousel mad-grid mad-grid--cols-2 no-dots nav-top">
                  {/* <!-- owl item --> */}
                  <div className="mad-grid-item">
                    <div className="mad-our-info-item">
                      <div className="mad-our-info-img">
                        <img src="images/images-248x248_img1.jpg" alt=""/>
                      </div>
                      <div className="mad-our-info vr-type">
                        <div className="mad-info-title">lekarna Mill</div>
                        <div className="mad-info"><i className="material-icons-outlined">location_on</i> <span>9863 - 9867 Mill Road,
                            <br/>
                            Cambridge, MG09 99HT</span></div>
                        <div className="mad-info"><i className="material-icons-outlined">call</i> <span>+1 800 603 6035, +1 800 889
                            9898</span>
                        </div>
                        <div className="mad-info"><i className="material-icons">mail_outline</i> <a href="#" className="mad-link">mail@companyname.com</a>
                        </div>
                        <div className="mad-info"><i className="material-icons">access_time</i> <span>Mon - Fri: 8am - 11pm, <br/>
                            Sat - Sun: 8am - 12pm</span></div>
                        <div className="mad-info"><a href="https://bit.ly/2RNqbia" className="mad-link">Get Directions</a></div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- / owl item --> */}
                  {/* <!-- owl item --> */}
                  <div className="mad-grid-item">
                    <div className="mad-our-info-item">
                      <div className="mad-our-info-img">
                        <img src="images/images-248x248_img2.jpg" alt=""/>
                      </div>
                      <div className="mad-our-info vr-type">
                        <div className="mad-info-title">lekarna Vincent</div>
                        <div className="mad-info"><i className="material-icons-outlined">location_on</i> <span>9863 - 9867 Mill Road,
                            <br/>
                            Cambridge, MG09 99HT</span></div>
                        <div className="mad-info"><i className="material-icons-outlined">call</i> <span>+1 800 603 6035, +1 800 889
                            9898</span>
                        </div>
                        <div className="mad-info"><i className="material-icons">mail_outline</i> <a href="#" className="mad-link">mail@companyname.com</a>
                        </div>
                        <div className="mad-info"><i className="material-icons">access_time</i> <span>Mon - Fri: 8am - 11pm, <br/>
                            Sat - Sun: 8am - 12pm</span></div>
                        <div className="mad-info"><a href="https://bit.ly/2RNqbia" className="mad-link">Get Directions</a></div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- / owl item --> */}
                </div>
              </div>

              <div className="mad-section no-pd mad-section--stretched mad-colorizer--scheme-color-2">
                <div className="mad-sub-wrap">
                  <h5 className="mad-page-title">Get Our Best Deals Straight to Your Inbox!</h5>
                  <div className="mad-col">
                    <form className="mad-newsletter-form one-line">
                      <input type="email" name="email" placeholder="Enter Your Email Address"/>
                      <button type="submit" className="btn btn-big btn-style-3"><span>Sign Up</span></button>
                    </form>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
    );
  }
}