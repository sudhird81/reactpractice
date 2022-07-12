import { Button, Col, Row, Space } from "antd";
import React from "react";
import { Card, Typography } from "antd";
const { Title, Text } = Typography;
const About = () => {
  return (
    <>
      <Row>
        <Col span={18} offset={3}>
          <div>
            <Card
              style={{
                width: "100%",
                height: "50vh",
              }}
            >
              <h3 className="banner-heading">
                Grow Your School With India's Most Trusted School Management
                Software
              </h3>
              <p className="banner-desc">
                Run your school more efficiently by digitizing and automating
                daily tasks and improving parental involvement through better
                parent-teacher communication
              </p>

              <Button className="defaultButton" type="primary">
                REQUEST A DEMO
              </Button>
            </Card>
          </div>
        </Col>
      </Row>
      <Row justify="space-between">
        <Col span={12}>
          <Card>
            <Title level={2}>
              8000+ educators use Schoolpad’s
              <br />
              School Management Software every
              <br />
              day to organise and manage their
              <br />
              students’ progress and keep parents
              <br />
              informed
            </Title>

            <Space direction="vertical">
              <Text>
                {" "}
                More than 8 years of experience 300+ schools across 17 states
                7,00,000+ Parents and students
              </Text>{" "}
            </Space>
            <div>
              <Button className="defaultButton" type="success ">
                REQUEST A DEMO
              </Button>
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card></Card>
        </Col>
      </Row>
    </>
  );
};

export default About;
