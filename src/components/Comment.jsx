import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

const Comment = ({ comment, editingCommentId, handleEditComment, handleSaveComment, handleDeleteComment }) => {
  return (
    <ListGroup.Item key={comment.id} className="d-flex justify-content-between">
      <div>
        {editingCommentId === comment.id ? (
          <>
            <input
              type="text"
              value={comment.text}
              onChange={(e) => handleSaveComment(comment.id, e.target.value)}
            />
            <Button
              variant="warning"
              className="ms-2"
              onClick={() => handleSaveComment(comment.id, comment.text)}
            >
              Save
            </Button>
          </>
        ) : (
          <>
            {comment.text}
            <Button
              variant="info"
              className="ms-2"
              onClick={() => handleEditComment(comment.id)}
            >
              Edit
            </Button>
            <Button
              variant="danger"
              className="ms-2"
              onClick={() => handleDeleteComment(comment.id)}
            >
              Delete
            </Button>
          </>
        )}
      </div>
    </ListGroup.Item>
  );
}

export default Comment;