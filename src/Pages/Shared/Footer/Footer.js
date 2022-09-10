import React from 'react';
import './Footer.css';
import fb from '../../../images/icons/fb.png'
import github from '../../../images/icons/github.png'
import google from '../../../images/icons/google.png'

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer class="nb-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="about">
              <img src="images/logo.png" class="img-responsive center-block" alt="" />
              <p>Travel Guru BD.com is a rapidly-growing global online travel agency, Trip.com is here to help you plan the perfect trip. Whether you're going on holiday, taking a business trip, or looking to set up a corporate travel account, Trip.com is here to help you travel the world with cheap flights, discount hotels, and train tickets.
              </p>

              {/* <div class="social-media">
                  <ul class="list-inline">
                    <li><a href="http://www.nextbootstrap.com/" title=""><i class="fa fa-facebook"></i></a></li>
                    <li><a href="http://www.nextbootstrap.com/" title=""><i class="fa fa-twitter"></i></a></li>
                    <li><a href="http://www.nextbootstrap.com/" title=""><i class="fa fa-google-plus"></i></a></li>
                    <li><a href="http://www.nextbootstrap.com/" title=""><i class="fa fa-linkedin"></i></a></li>
                  </ul>
                </div> */}
            </div>
          </div>

          <div class="col-md-3 col-sm-6">
            <div class="footer-info-single">
              <h2 class="title">Contact Us</h2>
              <ul class="list-unstyled">
                <li><a href="http://www.nextbootstrap.com/" title=""><i class="fa fa-angle-double-right"></i> How to Pay</a></li>
                <li><a href="http://www.nextbootstrap.com/" title=""><i class="fa fa-angle-double-right"></i> Customer Support</a></li>
                <li><a href="http://www.nextbootstrap.com/" title=""><i class="fa fa-angle-double-right"></i> Service Guarantee</a></li>
                <li><a href="http://www.nextbootstrap.com/" title=""><i class="fa fa-angle-double-right"></i> Website Feedback</a></li>
              </ul>
            </div>
          </div>

          <div class="col-md-3 col-sm-6">
            <div class="footer-info-single">
              <h2 class="title">About</h2>
              <ul class="list-unstyled">
                <li><a href="http://www.nextbootstrap.com/" title=""><i class="fa fa-angle-double-right"></i> About Travel Guru BD.com</a></li>
                <li><a href="http://www.nextbootstrap.com/" title=""><i class="fa fa-angle-double-right"></i> News</a></li>
                <li><a href="http://www.nextbootstrap.com/" title=""><i class="fa fa-angle-double-right"></i> Careers</a></li>
                <li><a href="http://www.nextbootstrap.com/" title=""><i class="fa fa-angle-double-right"></i> Privacy Statement</a></li>
                <li><a href="http://www.nextbootstrap.com/" title=""><i class="fa fa-angle-double-right"></i> Terms & Conditions</a></li>
              </ul>
            </div>
          </div>

          <div class="col-md-3 col-sm-6">
            <div class="footer-info-single">
              <h2 class="title">Other Services</h2>
              <ul class="list-unstyled">
                <li><a href="http://www.nextbootstrap.com/" title=""><i class="fa fa-angle-double-right"></i> Travel Guru BD.com Rewards</a></li>
                <li><a href="http://www.nextbootstrap.com/" title=""><i class="fa fa-angle-double-right"></i> Investor Relations</a></li>
                <li><a href="http://www.nextbootstrap.com/" title=""><i class="fa fa-angle-double-right"></i> Affiliate Program</a></li>
                <li><a href="http://www.nextbootstrap.com/" title=""><i class="fa fa-angle-double-right"></i> List My Hotel</a></li>
              </ul>
            </div>
          </div>

          <div class="col-md-3 col-sm-6">
            <div class="footer-info-single">
              <h2 class="title">Payment</h2>
              <p> Travel Guru BD.com's secure payment system takes the stress out of travel by providing easy payment options, including credit and debit cards, and UnionPay.

              </p>

            </div>
          </div>
        </div>
      </div>

      <section class="copyright">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <p>Copyright © {year}. Travel Guru BD.</p>
            </div>
            <div class="col-sm-6"></div>
          </div>
        </div>
      </section>
    </footer>



    // <footer className='text-center p-5 mt-5 bg-light ' variant="light">
    //     <p><small>copyright @ {year}</small></p>
    // </footer>
  );
};

export default Footer;