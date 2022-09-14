import React from "react"
import { Checkbox, Col, Input, List, Radio, Skeleton, Space, Typography } from "antd";

import { IFilter } from "@base/interfaces";
import { filterTypes } from "./types";



type FilterProps = {
  filters: any[];
}

const Filter = ({ filters }: FilterProps) => {

  const onFilterChange = () => {
    console.log("CHANGED FILTER");
  }

  return (
    <Col xs={24} md={24} className="filter">
      {
        filters && filters.length > 0 && filters.map((filterItem: IFilter) => {
          return (
            filterItem && (
              <Col xs={24} md={24} key={filterItem.name}>
                {
                  filterItem.type === filterTypes.radio && (
                    <Col xs={24} md={24} className={`filter-sorting-radio ${filterItem.className}`}>
                      <Typography.Paragraph className="filter-title">
                        {filterItem.label}
                      </Typography.Paragraph>
                      <Col xs={24} md={24}>
                        <Skeleton loading={filterItem.loading} active paragraph>
                          <Radio.Group>
                            <Space direction="vertical">
                              {
                                filterItem.items && Object.values(filterItem.items).map(({ id, value }) => {
                                  return (
                                    <Radio key={id} value={id}>
                                      {value}
                                    </Radio>
                                  )
                                })
                              }
                            </Space>
                          </Radio.Group>
                        </Skeleton>
                      </Col>
                    </Col>
                  )
                }

                {
                  filterItem.type === filterTypes.searchableCheckbox && (
                    <Col xs={24} md={24} className={`filter-searchable-checkbox ${filterItem.className}`}>
                      <Typography.Paragraph className="filter-title">
                        {filterItem.label}
                      </Typography.Paragraph>
                      <Col xs={24} md={24}>
                        <Skeleton loading={filterItem.loading} active paragraph>
                          <Input
                            placeholder={`Search ${filterItem.label}`}
                            onChange={onFilterChange}
                            className={filterItem.className}
                            value={filterItem.value}
                          />
                          <List
                            dataSource={Object.values(filterItem.items)}
                            renderItem={(item) => (
                              <List.Item key={`${item.name}_${Math.random()}`}>
                                <Checkbox onChange={onFilterChange}>
                                  {item.name}{`(${item.count})`}
                                </Checkbox>
                              </List.Item>
                            )}
                          />
                        </Skeleton>
                      </Col>
                    </Col>
                  )
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