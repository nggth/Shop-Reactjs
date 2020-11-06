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
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                        <label>
                            <input type="checkbox" ref="shipping" onChange={this.handleChecked} />
                            <span>Shipping(+6$)</span>
                        </label>
                    </li>
                    <li className="collection-item"><b>Total: {this.props.total} $</b></li>
                </div>
                <div className="checkout">
                    <button className="waves-effect waves-light btn">Checkout</button>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
