import React from 'react'

function Footer() {
  return (
    <footer class="page-footer font-small mdb-color">
        <div class="container text-center text-md-left">
        <div class="row">
            <div class="col-md-6 col-lg-6 mr-auto my-md-6 my-0 mt-6 mb-1">
            <h5 class="font-weight-bold text-uppercase mb-4">About</h5>
            <p>Originating in New York, Wework was built on the idea that success breeds more success. We want to redefine how work is done.</p>
            <p>Plug into our energy and watch your world accelerate.</p>
            </div>
            <hr class="clearfix w-100 d-md-none"/>
            <div class="col-md-6 col-lg-6 mx-auto my-md-6 my-0 mt-6 mb-1 text-center">
            <h5 class="font-weight-bold text-uppercase mb-4">Address</h5>
            <ul class="list-unstyled">
                <li>
                <p> New York, NY 10012, US</p>
                </li>
                <li>
                <p> wework@info.com</p>
                </li>
                <li>
                <p> + 01 234 567 88</p>
                </li>
            </ul>
            </div>
            </div>
        </div>
        <div class="footer-copyright text-center py-3">© 2018 Copyright: WeWork
        </div>
    </footer>
  )
}

export default Footer;