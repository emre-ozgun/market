import React from "react"
import { Col, Radio, Space, Typography } from "antd";

import { IFilter } from "@base/interfaces";
import { filterTypes } from "./types";
import { initialSortData } from "./data";



type FilterProps = {
  filters: any[];
}

const Filter = ({ filters }: FilterProps) => {

  return (
    <Col xs={24} md={24} className="filter">
      {
        filters && filters.length > 0 && filters.map((filterItem: IFilter) => {
          return (
            filterItem && (
              <Col xs={24} md={24} key={filterItem.label}>
                {
                  filterItem.type === filterTypes.radio &&
                  <Col xs={24} md={24} className="filter-sorting-container">
                    <Typography.Paragraph className="filter-title">
                      {filterItem.label}
                    </Typography.Paragraph>
                    <Col xs={24} md={24}>
                      <Radio.Group defaultValue={initialSortData[0].id}>
                        <Space direction="vertical">
                          {
                            initialSortData.map(({ id, value }) => {
                              return (
                                <Radio key={id} value={id}>
                                  {value}
                                </Radio>
                              )
                            })
                          }
                        </Space>
                      </Radio.Group>
                    </Col>
                  </Col>
                }
              </Col>
            )
          )
        })
      }
    </Col>
  )
}

export default Filter;