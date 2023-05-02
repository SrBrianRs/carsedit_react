import React from "react";
import '../styles/clip.css'

function CommentsComponent() {
  return (
    <div class="comments-section">
      <h4>Comentarios</h4>
      <form>
        <div class="form-group">
          
          <textarea
            id="comment-input"
            name="comment"
            cols="60" 
            rows="2"
            placeholder="Deja tu comentario"
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
      <div class="comments-list">
       
      </div>
    </div>
  );
}

export default CommentsComponent;