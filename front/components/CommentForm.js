import React, { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, Button, List, Comment, Avatar } from "antd";
import { ADD_COMMENT_REQUEST } from "../reducers/post";

const CommentForm = ({ post }) => {
  const { me } = useSelector(state => state.user);
  const [commentText, setCommentText] = useState("");
  const { isCommentAdded, isCommentAdding } = useSelector(state => state.post);
  const dispatch = useDispatch();

  const onSubmitComment = useCallback(
    e => {
      e.preventDefault();
      if (!me) {
        return alert("댓글을 쓰기 위해 로그인이 필요합니다.");
      }
      dispatch({
        type: ADD_COMMENT_REQUEST,
        data: {
          postId: post.id
        }
      });
    },
    [me && me.id]
  );

  const onChangeCommentText = useCallback(e => {
    setCommentText(e.target.value);
  }, []);

  useEffect(() => {
    setCommentText("");
  }, [isCommentAdded === true]);

  return (
    <>
      <Form onSubmit={onSubmitComment}>
        <Form.Item>
          <Input.TextArea
            rows={4}
            value={commentText}
            onChange={onChangeCommentText}
          />
        </Form.Item>
        <Button type="primary" htmlType="submit" loading={isCommentAdding}>
          등록
        </Button>
      </Form>
      <List
        header={`${post.Comments ? post.Comments.length : 0} 댓글`}
        itemLayout="horizontal"
        dataSource={post.Comments || []}
        renderItem={item => (
          <li>
            <Comment
              author={item.User.nickname}
              avatar={
                <Link
                  href={{ pathname: "/user", query: { id: item.User.id } }}
                  as={`/user/${item.User.id}`}
                >
                  <a>
                    <Avatar>{item.User.nickname[0]}</Avatar>
                  </a>
                </Link>
              }
              content={item.content}
              // datetime={item.createdAt}
            />
          </li>
        )}
      />
    </>
  );
};

export default CommentForm;
