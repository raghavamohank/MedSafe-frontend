import React, { Component } from 'react';
import { Drawer, List, Avatar, Divider, Col, Row, Input, Card } from 'antd';

const pStyle = {
  fontSize: 16,
  color: 'rgba(0,0,0,0.85)',
  lineHeight: '24px',
  display: 'block',
  marginBottom: 16,
};

const { Search } = Input;

const DescriptionItem = ({ title, content }) => (
  <div
    style={{
      fontSize: 14,
      lineHeight: '22px',
      marginBottom: 7,
      color: 'rgba(0,0,0,0.65)',
    }}
  >
    <p
      style={{
        marginRight: 8,
        display: 'inline-block',
        color: 'rgba(0,0,0,0.85)',
      }}
    >
      {title}:
    </p>
    {content}
  </div>
);

export default class PatientInfo extends Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Search
          placeholder="Please enter patients name/phoneNumber/emailAddress or any other kind of Identification number available"
          enterButton="Search"
          size="large"
          onSearch={value => console.log(value)}
        />
        <List
          dataSource={[
            {
              name: 'John',
            },
            {
              name: 'Lily',
            },
          ]}
          bordered
          renderItem={item => (
            <List.Item
              key={item.id}
              actions={[<a onClick={this.showDrawer}>View Medical Data</a>]}
            >
              <List.Item.Meta
                avatar={
                  <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                }
                title={<a href="https://ant.design/index-cn">{item.name}</a>}
                description="Progresser AFX"
              />
            </List.Item>
          )}
        />
        <Drawer
          width={640}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p style={{ ...pStyle, marginBottom: 24 }}>User Profile</p>
          <p style={pStyle}>Personal</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Full Name" content="John Doe" />{' '}
            </Col>
            <Col span={12}>
              <DescriptionItem title="Account" content="joh@medsafep.com" />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="City" content="HangZhou" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Country" content="China🇨🇳" />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Birthday" content="February 2,1900" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Blood Group" content="O-" />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Important Notes by patient"
                content="On daily diabetics medication "
              />
            </Col>
          </Row>
          <Divider />
          <p style={pStyle}>Vitals</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Blood Pressure" content="120/140" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Body Temperature" content="76" />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Heart Rate" content="120" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Respiratory Rate" content="235" />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Medications currently on"
                content="paracetmol, vitamin D, bla, bla"
              />
            </Col>
          </Row>
          <Divider />
          <p style={pStyle}>Emergency Contacts</p>
          <Row>
            <Col span={8}>
              <DescriptionItem title="Name" content="Patrick Doe" />
            </Col>
            <Col span={8}>
              <DescriptionItem title="Phone Number" content="+86181000" />
            </Col>
            <Col span={8}>
              <DescriptionItem title="email" content="patrckdoe@test.com" />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Address"
                content="john doe lane, john doe city, 5056"
              />
            </Col>
          </Row>
        </Drawer>
      </div>
    );
  }
}
