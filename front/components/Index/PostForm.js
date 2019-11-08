import React, { useCallback, useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_POST_REQUEST } from '../../reducers/post';

const PostForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const { imagePaths, isPostAdding, isPostAdded } = useSelector(
    state => state.post
  );

  useEffect(() => {
    setText('');
  }, [isPostAdded]);

  const onSubmitForm = useCallback(
    e => {
      e.preventDefault();
      dispatch({
        type: ADD_POST_REQUEST,
        data: {
          content: text,
        },
      });
    },
    [text]
  );
  const onChangeText = useCallback(e => {
    setText(e.target.value);
  });
  return (
    <Form
      style={{ margin: '10px 0 20px' }}
      encType="multipart/form-data"
      onSubmit={onSubmitForm}>
      <Input.TextArea
        maxLength={140}
        placeholder="당신에게 어떤 일이 있었나요?"
        value={text}
        onChange={onChangeText}
      />
      <div>
        <Input type="file" multiple hidden />
        <Button>이미지 업로드</Button>
        <Button
          type="primary"
          style={{ float: 'right' }}
          htmlType="submit"
          loading={isPostAdding}>
          Twit
        </Button>
      </div>
      <div>
        {imagePaths.map(imagePath => {
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
