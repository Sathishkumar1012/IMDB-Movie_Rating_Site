import {useEffect, useRef} from 'react';
import api from '../../api/axiosConfig';
import {useParams} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';

import React from 'react'

const Reviews = ({getMovieData,movie,reviews,setReviews}) => {
console.log(movie);
    const revText = useRef();
    let params = useParams();
    const movieId = params.movieId;

    useEffect(()=>{
        getMovieData(movieId);
    },[])

    const addReview = async (e) =>{
        e.preventDefault();

        const rev = revText.current;

        try
        {

            const response = await api.post("http://localhost:8080/reviews",{reviewBody:rev.value,imdbId:movieId});

            console.log(movie)

            const updatedReviews = [...reviews, {body:rev.value}];
    
            rev.value = "";
    
            setReviews(updatedReviews);
        }
        catch(err)
        {
            console.error(err);
        }
        



    }

  return (
    <Container>
        <Row>
            <Col><h3>Reviews</h3></Col>
        </Row>
        <Row className="mt-2">
            <Col>
    <img alt="" src="https://image.tmdb.org/t/p/original/r9PkFnRUIthgBp2JZZzD380MWZy.jpg" style={{ width: '300px', height: 'auto' }}/>
            </Col>
            <Col>
                {
                    <>
                        <Row>
                            <Col>
                                <ReviewForm handleSubmit={addReview} revText={revText} labelText = "Write a Review?" />  
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr />
                            </Col>
                        </Row>
                    </>
                }
                {
                    reviews?.map((r) => {
                        return(
                            <>
                                <Row>
                                    <Col>{r.body}</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <hr />
                                    </Col>
                                </Row>                                
                            </>
                        )
                    })
                }
            </Col>
        </Row>
        <Row>
            <Col>
                <hr />
            </Col>
        </Row>        
    </Container>
  )
}

export default Reviews