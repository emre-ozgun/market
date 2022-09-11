import React from "react"
import { Checkbox, Col, Input, List, Radio, Space, Typography } from "antd";

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
              <Col xs={24} md={24} key={filterItem.label}>
                {
                  filterItem.type === filterTypes.radio && (
                    <Col xs={24} md={24} className={`filter-sorting-radio ${filterItem.className}`}>
                      <Typography.Paragraph className="filter-title">
                        {filterItem.label}
                      </Typography.Paragraph>
                      <Col xs={24} md={24}>
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
                        <Input
                          placeholder={`Search ${filterItem.label}`}
                          onChange={onFilterChange}
                          className={filterItem.className}
                          value={filterItem.value}
                        />
                        <Checkbox onChange={onFilterChange} className="checkbox-check-all">
                          <Typography.Text>
                          {`All (${filterItem.items.length})`}
                          </Typography.Text>
                        </Checkbox>
                        <List
                          dataSource={Object.values(filterItem.items)}
                          renderItem={(item) => (
                            <List.Item key={item.id}>
                              <Checkbox onChange={onFilterChange}>
                                {item.value}
                              </Checkbox>
                            </List.Item>
                          )}
                        />
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