import React from 'react'
import styled from 'styled-components'
import { db } from './firebase'

function Product({ title, price, rating, image, id }) {

    const addToCart = () => {
        console.log(id);
        const cartItem = db.collection("cartItems").doc(id);
        cartItem.get()
        .then((doc)=>{
            console.log(doc);
            if(doc.exists){
                cartItem.update({
                    quantity: doc.data().quantity + 1
                })
            } else {
                db.collection("cartItems").doc(id).set({
                    name: title,
                    image: image,
                    price: price,
                    quantity: 1
                })
            }
        })
    }

    return (
        <Container>
            <Title>
                {title}
            </Title>
            <div></div>
            <Price>
                Rs. {price}
            </Price>
            <Rating>
                {
                    Array(rating)
                        .fill()
                        .map(rating => <p>⭐</p>)
                }
            </Rating>
            <Image src={image} />
            <ActionSection>
                <AddToCartButton
                    onClick={addToCart}
                >
                    Add to Cart
                </AddToCartButton>
            </ActionSection>
        </Container>
    )
}

export default Product

const Container = styled.div`
    background-color: #f0efef;
    border-radius:30px;
    z-index: 100;
    flex: 1;
    /* flex-grow:1; */
    padding: 20px;
    margin: 10px;
    max-height: 400px;
    box-shadow: 1px 1px 5px grey;
    
 
   
`
const Title = styled.span``
const Price = styled.span`
    font-weight: 500;
    margin-top: 3px;
`
const Rating = styled.div`
    display: flex;
    /* margin-left:60px; */
`
const Image = styled.img`
    max-height: 40vh;
    min-width:10vh;
    object-fit: contain;
    justify-content:center;
    margin-left:50px;
    margin-top:5px;
    border:2px solid #e6e6ff;
    border-radius:20px;
    /* margin-right:12px; */
    /* align-items:center; */
`

const ActionSection = styled.div`
    margin-top: 12px;
    display: grid;
    place-items: center;
`

const AddToCartButton = styled.button`
    width: 100px;
    height: 30px;
    background-color: #f0c14b;
    border: 2px solid #a88734;
    border-radius: 2px;
    cursor: pointer;
`
