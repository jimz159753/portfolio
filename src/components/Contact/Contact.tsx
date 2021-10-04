import React from "react";
import "./Contact.scss";
import { Form, Input, Button, Row, Col } from "antd";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="wrapper">
        <h1>Contact me</h1>
        <Form name="basic" className="form">
          <Row gutter={[32, 8]} align="middle" justify="center">
            <Col span={12}>
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input placeholder="Your name*" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input placeholder="Your email*" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input placeholder="Write a Subject" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input placeholder="Your Message" />
              </Form.Item>
            </Col>
          </Row>
          <Row justify="center">
            <Col>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
