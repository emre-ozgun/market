import React from "react"
import { Col, Radio, Space, Typography } from "antd";


const Filter = () => {

  return (
    <Col xs={24} md={24} className="filter">
      <Col xs={24} md={24} className="filter-sorting-container">
        <Typography.Paragraph className="filter-title">Sorting</Typography.Paragraph>
        <Col xs={24} md={24}>
          <Radio.Group buttonStyle="solid">
            <Space direction="vertical">
              <Radio value={1}>Price low to high</Radio>
              <Radio value={2}>Price high to low</Radio>
              <Radio value={3}>New to old</Radio>
              <Radio value={4}>Old to new</Radio>
            </Space>
          </Radio.Group>
        </Col>
      </Col>
    </Col>
  )
}

export default Filter;