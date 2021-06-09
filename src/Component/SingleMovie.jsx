import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Modal, Button} from "react-bootstrap"
import {useState} from "react"
import CommentList from "./CommentList";
import { Link } from 'react-router-dom'

const SingleMovie = (props) => {
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
console.log(props)
  return (
    <>
    <Link to={"/ShowDetail/" + props.id}>
      <img src={props.img} className="thumbnail" />
    </Link>
      {/* <img src={props.img} className="thumbnail" onClick={handleShow} /> */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <CommentList movieId={props.id}/>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SingleMovie;
