import React from 'react';
import { Button, List, Card, Icon } from 'antd';

const FollowingList = () => {
  return (
    <List
      style={{ marginBottm: '20px' }}
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="small"
      header={<div>팔로잉 목록</div>}
      loadMore={<Button style={{ width: '100%' }}>더 보기</Button>}
      bordered
      dataSource={['p-iknow', 'gren', 'Q']}
      renderItem={item => (
        <List.Item style={{ marginTop: '20px' }}>
          <Card actions={[<Icon key="stop" type="stop" />]}>
            <Card.Meta description={item} />
          </Card>
        </List.Item>
      )}
    />
  );
};

export default FollowingList;
