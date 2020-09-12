import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';
   
function RenderDish({dish}) {
    if(dish != null) {
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
    } else {
        return (
            <div></div>
        );
    }
}

function RenderComments({dish}) {
    if (dish != null) {
        let comments = dish.comments.map( comment => {

            return (                    
                <div key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author} , { new Intl.DateTimeFormat('en-US', {year:'numeric', month: 'short', day: '2-digit'} ).format( new Date( Date.parse(comment.date))) } </p>
                </div>
            );
        })
        
        return (
            <div>
                <h4>Comments</h4>
                {comments}
            </div>
        );
    } else {
        return (<div></div>);
    }
}

const DishDetail = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-5 m-1">
                    <RenderDish dish={ props.dish } />
                    {/* <RenderComments comments={ props.dish.comments } /> */}
                    <RenderComments dish={ props.dish } />
                </div>
            </div>
        </div>
    );
}


export default DishDetail;