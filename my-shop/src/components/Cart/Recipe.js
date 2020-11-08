import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state)=> {
    return {
        addedItems: state.addedItems,
        total: state.total
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addShipping: () => {dispatch({type: 'ADD_SHIPPING'})},
        subShipping: () => {dispatch({type: 'SUB_SHIPPING'})}
    };
};

class Recipe extends Component {
    constructor(props) {
        super(props);

        this.handleChecked = this.handleChecked.bind(this);
    }

    componentWillUnmount() {
        if(this.refs.shipping.checked) {
            this.props.subShipping();
        }
    }

    handleChecked(e) {
        if (e.target.checked) {
            this.props.addShipping();
        } else {
            this.props.subShipping();
        }
    }

    render() {
        return (
            <section>
                <div className="promotion">
                    <label htmlFor="promo-code">Have A Promo Code?</label>
                    <input type="text"/>
                    <button type="button"/>
                </div>
                <div className="summary">
                    <ul>
                        <li>
                            Subtotal <span>{this.props.total}</span>
                        </li>
                        <li>
                            <input type="checkbox" ref="shipping" onChange={this.handleChecked} />
                            <span>Shipping(+6$)</span>
                        </li>
                        <li className="total">
                            Total <span>{this.props.total}</span>
                        </li>
                    </ul>
                    <div className="checkout">
                        <button type="button">But now!</button>
                    </div>
                </div>
                
            </section>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
