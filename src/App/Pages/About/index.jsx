import React from 'react';

import './About.css'

export default () => (
  <section className="about">
    <div className="header container">
      <h1>About us</h1>
      <h3>Who we are?</h3>
    </div>
    <div className="content container">
      <div className="about-left ">
        <p>Praesent metus urna, feugiat a placerat vel, elementum at leo. Quisque vel fermentum ipsum. Nulla at facilisis est, vel condimentum ligula. Mauris volutpat vitae risus sed pellentesque. Praesent fermentum neque ac tellus gravida, at varius sem accumsan. Nam porta erat id sapien consectetur. Fusce sed purus eros. Vivamus rhoncus, ipsum in tempus fermentum, orci leo facilisis purus. Nam porta erat id sapien consectetur. Fusce sed purus eros. Vivamus rhoncus, ipsum in tempus fermentum, orci leo facilisis purus.</p>
        <button>LEARN MORE</button>
      </div>
      <div className="about-right">
        <iframe
          title="forest"
          // width="560"
          // height="315"
          width="448"
          height="252"
          src="https://www.youtube.com/embed/zv9FXqoq3kw?rel=0"
          frameBorder="0"
          allow="encrypted-media"
          allowFullScreen />
      </div>
    </div>
  </section>
)