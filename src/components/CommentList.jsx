import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Comment from './Comment';

const CommentList = ({ comments, editingCommentId, handleEditComment, handleSaveComment, handleDeleteComment }) => {
  return (
    <ListGroup>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          editingCommentId={editingCommentId}
          handleEditComment={handleEditComment}
          handleSaveComment={handleSaveComment}
          handleDeleteComment={handleDeleteComment}
        />
      ))}
    </ListGroup>
  );
}

export default CommentList;