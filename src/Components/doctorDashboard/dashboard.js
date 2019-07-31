import React from 'react';
import { Input, Card, Icon, Avatar } from 'antd';

const { Search } = Input;
const { Meta } = Card;

function dashboard() {
  return (
    <div>
      <Search
        placeholder="Please enter patients name/phoneNumber/emailAddress or any other kind of Identification number available"
        enterButton="Search"
        size="large"
        onSearch={value => console.log(value)}
      />
      <span>
        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <Icon type="setting" />,
            <Icon type="edit" />,
            <Icon type="ellipsis" />,
          ]}
        >
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="test user"
            description="Patient Card"
          />
        </Card>
        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <Icon type="setting" />,
            <Icon type="edit" />,
            <Icon type="ellipsis" />,
          ]}
        >
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="test user"
            description="Patient Card"
          />
        </Card>
      </span>
    </div>
  );
}

export default dashboard;
