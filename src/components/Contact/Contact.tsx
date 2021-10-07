import React from "react";
import "./Contact.scss";
import { Form, Input, Button, Row, Col } from "antd";

const { TextArea } = Input;

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="wrapper">
        <h1>Contact me</h1>
        <p>I am available for full time, part time and freelance work.</p>
        <Form name="basic" className="form">
          <Row gutter={[32, 8]} align="middle" justify="center">
            <Col md={12} xs={24}>
              <Form.Item name="username">
                <Input placeholder="Your name*" />
              </Form.Item>
            </Col>
            <Col md={12} xs={24}>
              <Form.Item name="username">
                <Input placeholder="Your email*" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item name="username">
                <Input placeholder="Write a Subject" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item name="username">
                <TextArea placeholder="Your Message" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Button type="primary" htmlType="submit">
              SUBMIT
            </Button>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
