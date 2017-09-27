import React from 'react';
import Link from 'gatsby-link';
import Footer from './components/footer.js'
//import me from './images/me_tonga.png';

const SecondPage = () => (
  <div>
      <div>
          <h1>About</h1>
          <p>This page is my elevator pitch, web style!</p>
          <p>I&#39;m one of those people that likes to try do things differently. I find that I&#39;m always trying to improve my situation but my methods don&#39;t always run in the norm. </p>
          <p>For example, this year I left university to try out studying online. I thought it would be cheaper, more benefical and maybe even exciting! That&#39;s going well. </p>
          <div>
          <img src={'/me_tonga.png'} alt='picture of finn' />
          </div>
          <p>My goals for life seem to revolve around enjoyment and fullfilment. I&#39;m not one to sacrifice either of those recklessly but I am definitely up for taking opportunities to gain experience and improvements in life. </p>
          <p>To note, as hard as I try to keep things simple, the above is, like this website, continually changing. If you have feedback or even want to get in touch please <a href='mailto:finn.maunsell@gmail.com'>email me</a>.</p>
      </div>
      <Footer />
  </div>
)

export default SecondPage
