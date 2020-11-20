import styled from 'styled-components';

export const ProductsContainer  = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding: 5rem calc((100vw-1300px)/2);
    background: #333333;
    color: #fff;
`;

export const ProductWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`;
export const ProductCard = styled.div`
    margin: 0 2rem;
    line-height: 2;
    width: 300px;
`;

export const ProductImg = styled.img`
    height: 300px;
    min-width: 300px;
    max-width: 100%;
    box-shadow: 8px 8px #48e5c2;
    object-fit: cover;
`;

export const ProductsHeading = styled.h1`
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align: center;
    margin-bottom: 4rem;
    padding-top: 1rem;
    color: #FCFAF9;
`;

export const ProductTitle = styled.h2`
    font-weight: 400;
    font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center; 
`;

export const ProductDesc = styled.p`
    margin-bottom: 1rem;
`;
 
export const ProductPrice  = styled.p`
    margin-bottom: 1rem;
    font-size: 2rem;
`;

export const ProductButton  = styled.button`
    
    margin-bottom: 1rem;
    padding: 1rem;
    font-size: 1rem;
    border: 1rem 4rem;
    background-color: #48e5c2;
    color: #fff;
    transition : 0.2s ease-out;

    &:hover{
        background: #48e5d9;
        transition : 0.2s ease-out;
        cursor: pointer;
        color: #000;

    }
`;