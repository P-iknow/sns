import Link from "next/link";
import React, { useCallback, useState } from "react";
import { Card, Icon, Button, Avatar } from "antd";
import PropTypes from "prop-types";
import CommentForm from "./CommentForm";

const PostCard = ({ post }) => {
  const [commentFormOpened, setCommentFormOpened] = useState(false);

  const onToggleComment = useCallback(() => {
    setCommentFormOpened(prev => !prev);
  }, []);

  const postContent = post.content.split(/(#[^\s]+)/g).map(v => {
    if (v.match(/#[^\s]+/)) {
      return (
        <Link
          href={{ pathname: "/hashtag", query: { tag: v.slice(1) } }}
          as={`/hashtag/${v.slice(1)}`}
          key={v}
        >
          <a>{v}</a>
        </Link>
      );
    }
    return v;
  });
  return (
    <div>
      <Card
        key={+post.createdAt}
        cover={post.img && <img alt="example" src={post.img} />}
        actions={[
          <Icon type="retweet" key="retweet" />,
          <Icon type="heart" key="heart" />,
          <Icon type="message" key="message" onClick={onToggleComment} />,
          <Icon type="ellipsis" key="ellipsis" />
        ]}
        extra={<Button>팔로우</Button>}
      >
        <Card.Meta
          avatar={
            <Link
              href={{ pathname: "/user", query: { id: post.User.id } }}
              as={`/user/${post.User.id}`}
            >
              <a>
                <Avatar>{post.User.nickname[0]}</Avatar>
              </a>
            </Link>
          }
          title={post.User.nickname}
          description={<>{postContent}</>}
        />
      </Card>
      {commentFormOpened && <CommentForm post={post} />}
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    User: PropTypes.object,
    content: PropTypes.string,
    img: PropTypes.string,
    createdAt: PropTypes.string
  })
};

export default PostCard;
