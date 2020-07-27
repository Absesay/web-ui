import React from "react"
import ReactDom from "react-dom"
import * as data from "./data"


ReactDom.render(
  <div className="container">
    <header className="navbar navbar-light">
      <a className="navbar-brand" href="#">
        Weebie
      </a>

    <nav className="">
      <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link active" href="#">Workouts & Programs</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Nutrition</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Community</a>
          </li>
        </ul>
    </nav>
    </header>

    <main>
      <div className="row">
        <div className="col">
          <div className="jumbotron">
            <h1 className="display-4">It's Time to Regain Your Fitness</h1>
            <p className="lead">Do fitness anywhere and anytime with our training videos.</p>
            
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </div>
        </div>
        <div className="col">
          <img src="../images/hero.png"/>
          
        </div>
      </div>
    </main>

    <footer>
    <div class="card-deck mb-3">
    <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <svg id="Layer_1" enable-background="new 0 0 512 512" height="40" viewBox="0 0 512 512" width="40" xmlns="http://www.w3.org/2000/svg">
          <g><path d="m446 40h-46v-24c0-8.836-7.163-16-16-16s-16 7.164-16 16v24h-224v-24c0-8.836-7.163-16-16-16s-16 7.164-16 16v24h-46c-36.393 0-66 29.607-66 66v340c0 36.393 29.607 66 66 66h380c36.393 0 66-29.607 66-66v-340c0-36.393-29.607-66-66-66zm-380 32h46v16c0 8.836 7.163 16 16 16s16-7.164 16-16v-16h224v16c0 8.836 7.163 16 16 16s16-7.164 16-16v-16h46c18.748 0 34 15.252 34 34v38h-448v-38c0-18.748 15.252-34 34-34zm380 408h-380c-18.748 0-34-15.252-34-34v-270h448v270c0 18.748-15.252 34-34 34z"/></g>
          </svg>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">$0 <small class="text-muted">/ mo</small></h1>
        <ul class="list-unstyled mt-3 mb-4">
          <li>10 users included</li>
          <li>2 GB of storage</li>
          <li>Email support</li>
          <li>Help center access</li>
        </ul>
        <button type="button" class="btn btn-lg btn-block btn-outline-primary fbtn">Sign up for free</button>
      </div>
    </div>
    
    <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <svg id="Capa_1" enable-background="new 0 0 512 512" height="40" viewBox="0 0 512 512" width="40" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m366.649 364.636h30v76.799h-30z"/><path d="m381.615 344.712c7.846 0 15.363-6.899 15-15-.364-8.127-6.591-15-15-15-7.846 0-15.363 6.899-15 15 .364 8.127 6.591 15 15 15z"/></g><g><path d="m408.097 255.16v-255.16h-342.172c-36.351 0-65.925 28.704-65.925 65.055v382.96h.317c3.332 35.835 33.558 63.985 70.248 63.985h311.245c71.787 0 130.19-57.533 130.19-129.319 0-62.784-44.674-115.329-103.903-127.521zm-30.047-2.61c-66.099 1.885-120.009 53.278-125.887 118.319h-131.517v-341.692h257.404zm-312.125-223.373h24.673v341.692h-20.033c-15.071 0-29.042 4.765-40.518 12.845v-318.659c0-19.784 16.095-35.878 35.878-35.878zm4.64 452.776c-22.342 0-40.518-18.177-40.518-40.518 0-22.342 18.176-40.518 40.518-40.518h182.339c1.25 8.876 3.395 17.468 6.347 25.68h-183.109v30.047h198.593c6.519 9.409 14.244 17.92 22.951 25.31h-227.121zm311.246.87c-55.219 0-100.142-44.924-100.142-100.142s44.923-100.142 100.142-100.142 100.142 44.924 100.142 100.142-44.924 100.142-100.142 100.142z"/><path d="m200.796 87.6h100.561v30.047h-100.561z"/><path d="m166.828 152.831h168.497v30.047h-168.497z"/></g></g></svg>
      </div>
      
      <div class="card-body">
        <h1 class="card-title pricing-card-title">$15 <small class="text-muted">/ mo</small></h1>
        <ul class="list-unstyled mt-3 mb-4">
          <li>20 users included</li>
          <li>10 GB of storage</li>
          <li>Priority email support</li>
          <li>Help center access</li>
        </ul>
        <button type="button" class="btn btn-lg btn-block btn-primary fbtn">Get started</button>
      </div>
    </div>
    
    <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 512 512" width="40" ><path d="M477.858 0H34.142C15.317 0 0 15.317 0 34.142v264.525c0 4.72 3.823 8.533 8.533 8.533h494.933c4.7 0 8.533-3.814 8.533-8.533V34.142C512 15.317 496.683 0 477.858 0zm17.075 290.133H17.067V34.142c0-9.42 7.663-17.075 17.075-17.075h443.716c9.412 0 17.075 7.654 17.075 17.075v255.99z"/><path d="M503.467 290.133H8.533c-4.7 0-8.533 3.814-8.533 8.533v76.79C0 394.283 15.317 409.6 34.142 409.6h443.716c18.825 0 34.142-15.317 34.142-34.142v-76.79c0-4.72-3.823-8.534-8.533-8.534zm-8.534 85.325c0 9.42-7.663 17.075-17.075 17.075H34.142c-9.412 0-17.075-7.654-17.075-17.075V307.2h477.867v68.258z"/><path d="M469.333 34.133H42.667a8.54 8.54 0 0 0-8.533 8.533v256a8.53 8.53 0 0 0 8.533 8.533h426.667a8.54 8.54 0 0 0 8.533-8.533v-256c0-4.718-3.823-8.533-8.534-8.533zm-8.533 256H51.2V51.2h409.6v238.933zM366.95 460.8h-221.9c-14.106 0-25.583 11.477-25.583 25.583v17.084A8.53 8.53 0 0 0 128 512h256a8.54 8.54 0 0 0 8.533-8.533v-17.084c0-14.106-11.477-25.583-25.583-25.583zm8.517 34.133H136.533v-8.55c0-4.702 3.823-8.516 8.516-8.516h221.9c4.693 0 8.516 3.814 8.516 8.516v8.55z"/><path d="M349.867 460.8c-28.314 0-42.667-20.096-42.667-59.733a8.53 8.53 0 0 0-8.533-8.533h-85.333a8.54 8.54 0 0 0-8.533 8.533c0 39.637-14.353 59.733-42.667 59.733a8.54 8.54 0 0 0-8.533 8.533c0 4.72 3.823 8.533 8.533 8.533h187.733a8.54 8.54 0 0 0 8.533-8.533c0-4.72-3.823-8.533-8.533-8.533zm-146.168 0c10.505-11.63 16.7-28.97 17.937-51.2h68.736c1.237 22.23 7.424 39.57 17.937 51.2H203.7zm69.368-102.4h-25.6v-17.067h25.6a8.54 8.54 0 0 0 8.533-8.533c0-4.72-3.823-8.533-8.533-8.533h-34.133a8.54 8.54 0 0 0-8.533 8.533v34.133a8.53 8.53 0 0 0 8.533 8.533h34.133a8.54 8.54 0 0 0 8.533-8.533c0-4.72-3.823-8.533-8.533-8.533zm-156.1-287.633c-3.328-3.336-8.738-3.336-12.066 0L70.767 104.9c-3.337 3.337-3.337 8.73 0 12.066a8.51 8.51 0 0 0 12.066 0l34.133-34.133c3.337-3.336 3.337-8.73 0-12.066zm59.734 51.2c-3.328-3.337-8.738-3.337-12.066 0L130.5 156.1c-3.337 3.337-3.337 8.73 0 12.066a8.51 8.51 0 0 0 12.066 0l34.133-34.133c3.337-3.336 3.337-8.73.001-12.066zm-8.534-51.2c-3.328-3.337-8.738-3.337-12.066 0L70.767 156.1c-3.337 3.337-3.337 8.73 0 12.066a8.51 8.51 0 0 0 12.066 0l85.333-85.333c3.337-3.336 3.337-8.73 0-12.066z"/></svg>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">$29 <small class="text-muted">/ mo</small></h1>
        <ul class="list-unstyled mt-3 mb-4">
          <li>30 users included</li>
          <li>15 GB of storage</li>
          <li>Phone and email support</li>
          <li>Help center access</li>
        </ul>
        <button type="button" class="btn btn-lg btn-block btn-primary fbtn">Contact us</button>
      </div>
    </div>
  </div>
    </footer>
  </div>
  , document.getElementById("root"))