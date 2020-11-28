import React from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null
        };
    }

    componentDidMount() {
        const { product } = this.props.location.state;
        this.setState({ product: product });
    }

    render() {
        const product = this.state.product;
        if (!product) {
            return (
                <div>Menu item not found</div>
            )
        }
        return (
            <div>
                <Link to='/'>
                    Back button
                </Link>
                {(Object.keys(product).map(function(prop,i) {                
                    return <div key={i++}>
                        <br/> 
                        <span>{prop}: {product[prop]}</span>
                    </div>
                }))}
            </div>        
        )
    }
}