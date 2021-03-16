import React, { Component } from 'react';
import './styles.scss';

class WidgetBlock extends Component {
  render() {
    return (
      <div className='widget-block'>
        <div className={ this.props.varient }>
            <p className="price-text"><sup>{ this.props.currencySymbol }</sup> <span>{ this.props.amount }</span></p>
            <p className="total-text">{ this.props.total }</p>
            <p className="type-text">{ this.props.type }</p>
        </div>
      </div>
    );
  }
}

WidgetBlock.defaultProps = {
    varient: 'default',
    currencySymbol: '',
    amount: '0',
    total: '0',
    type: '',
};


export default WidgetBlock;
