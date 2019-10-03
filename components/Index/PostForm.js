import React from 'react';
import { Form, Input, Button } from 'antd';

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [
    {
      User: {
        id: 1,
        nickname: '제로초',
      },
      content: '첫 번째 게시글',
      img:
        'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
    },
  ],
};

const PostForm = () => {
  return (
    <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data">
      <Input.TextArea
        maxLength={140}
        placeholder="당신에게 어떤 일이 있었나요?"
      />
      <div>
        <Input type="file" multiple hidden />
        <Button>이미지 업로드</Button>
        <Button type="primary" style={{ float: 'right' }} htmlType="submit">
          Twit
        </Button>
      </div>
      <div>
        {dummy.imagePaths.map(imagePath => {
          return (
            <div key={imagePath} style={{ display: 'inline-block' }}>
              <img
                src={`http://localhost:3000/${imagePath}`}
                style={{ width: '200px' }}
                alt={imagePath}
              />
              <div>
                <Button>제거</Button>
              </div>
            </div>
          );
        })}
      </div>
    </Form>
  );
};

export default PostForm;
