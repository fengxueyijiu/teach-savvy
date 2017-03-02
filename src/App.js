import React, { PropTypes } from 'react';
import './css/main.css';
import "./css/share.min.css";
import Share from './wu-share/Share';
class App extends React.Component {
  render () {
   return(
     <div>
       <Share />
     </div>
   )
  }
}

export default App;
