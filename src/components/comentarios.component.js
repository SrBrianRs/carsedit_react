import React, { useState, useEffect } from "react";
import "../styles/clip.css";
import KafkaService from "../services/kafka.service";
import axios from 'axios';

const CommentsComponent = ({ id }) => {
  const [comentarios, setComentarios] = useState([]);
  const [commentText, setCommentText] = useState([]);
  const uri = "https://api-reac-comment-service-kafka-srbrianrs.cloud.okteto.net/api/comments"

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async (r) => {
    try {
      const response = await axios.get(`${uri}/${id}`);
      const comentarios = response.data ? response.data : [];

      setComentarios(comentarios);
    } catch (error) {
      console.log('Error al obtener los comentarios:', error);
    }
  };

  const comment = (e, status) => {
    const user = localStorage.getItem('user');
    const data = {
      userId: user,
      objectId: id,
      comment: commentText
    };

    console.log(JSON.stringify(data));
    KafkaService.commentPush(data);
    e.preventDefault();
  };

  return (
    <div className="comments-section">
      <h4>Comments</h4>
      <div className="form-group">
        <label htmlFor="comment-input">Leave a comment:</label>
        <textarea
          id="comment-input"
          name="comment"
          rows="4"
          placeholder="Write your comment here..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        ></textarea>
      </div>
      <button type="button" onClick={comment}>
        Comentar
      </button>
      <div className="comments-list">
        {comentarios.map((comentario) => (
          <div className="comment" key={comentario._id}>
            <h5>{comentario.userId} <h6>{comentario.comment}</h6>
            
            
            </h5>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsComponent;
