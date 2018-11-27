import React from 'react';
import './Screen.css';

class Screen extends React.Component {
  render() {
    return (
      <div className='screen'>
        <div>
          {this.props.value}
        </div>
      </div>
    );
  }
}
export default Screen;
