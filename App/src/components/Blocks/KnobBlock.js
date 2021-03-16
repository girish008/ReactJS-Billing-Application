import React, { Component } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './styles.scss';

class KnobBlock extends Component {
  render() {
    return (
      <div className='knob-widget'>
        <div className='box'>
          <CircularProgressbar className={this.props.varient} value={this.props.value} text={`${this.props.value}%`}
            strokeWidth={2}
            styles={buildStyles({
              textSize: '24px',
            })}
          />
        </div>
        <p>{this.props.type}</p>
      </div>
    );
  }
}

export default KnobBlock;
