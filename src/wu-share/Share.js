import  React, { Component } from 'react';

class Share extends Component {
  render(){
    return(
      <div className='share-wrap'>
        <div className="social-share " data-initialized="true">
            <a href="#" className="social-share-icon icon-weibo"></a>
            <a href="#" className="social-share-icon icon-wechat"></a>
            <a href="#" className="social-share-icon icon-facebook"></a>
            <a href="#" className="social-share-icon icon-twitter"></a>
            <a href="#" className="social-share-icon icon-qq"></a>
        </div>
      </div>

    )
  }
}

export default Share;
