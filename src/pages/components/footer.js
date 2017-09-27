import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <div
          className='footer'
          style={{paddingTop: '40px',
                  borderTopStyle: 'outset',
                  borderTopColor: '#afafaf',
                  borderTopWidth: 'thin',
                  marginTop: '80px' }}>
          <p>Good work, you just read some of Finn&#39;s writing.
          Please do come back if you enjoyed yourself.</p>
          <p>You can catch more evidence that he is alive on his <a href='https://github.com/H3yfinn'>Github</a>.</p>
        </div>
      );
    }
}

export default Footer;
