import React from 'react';
import { Link } from 'react-router-dom';
import {
    ProductsContainer,
    ProductWrapper,
    ProductsHeading,
    ProductTitle,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductDesc,
    ProductPrice,
    ProductButton
} from './ProductsElement.js'

const Products = ({heading, data}) => {
    return (
        <ProductsContainer>
            <ProductsHeading>
                {heading}
            </ProductsHeading>
            
            <ProductWrapper>
                {data.map((product, index) => {
                    return(
                        <ProductCard key = {index}>
                            <ProductImg src = {product.img} alt={product.alt}/>
                            <ProductInfo>
                                <ProductTitle> {product.name} </ProductTitle>
                                <ProductDesc> {product.desc} </ProductDesc>
                                <ProductPrice> {product.price} </ProductPrice>
                                <Link to={{
                                    pathname: '/Menu',
                                    state: {
                                        product: product
                                    }
                                }}>
                                    <ProductButton> {product.button} </ProductButton>
                                </Link>
                            </ProductInfo>
                        </ProductCard>
                    );
                })}
            </ProductWrapper>

        </ProductsContainer>

    )
}

export default Products
