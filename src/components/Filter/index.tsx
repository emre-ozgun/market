import React from "react"
import { useDispatch } from "react-redux";
import { Checkbox, Col, Input, List, Radio, Skeleton, Space, Typography } from "antd";

import { FilterActions } from "@store/actions";
import { IFilter } from "@base/interfaces";
import { filterTypes } from "./types";



type FilterProps = {
  filters: any[];
}

const Filter = ({ filters }: FilterProps) => {

  const dispatch = useDispatch(),

    onChangeFilterBrand = (e: any) => {
      const { checked, name } = e.target;

      if (checked) {
        dispatch(FilterActions.addFilterByBrandAction(name));
      } else {
        dispatch(FilterActions.removeFilterByBrandAction(name));
      }
    },

    onChangeFilterTag = (e: any) => {

      const { checked, name } = e.target;

      if (checked) {
        dispatch(FilterActions.addFilterByTagAction(name));
      } else {
        dispatch(FilterActions.removeFilterByTagAction(name));
      }

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
                  (filterItem.type === filterTypes.searchableCheckbox && filterItem.brand) && (
                    <Col xs={24} md={24} className={`filter-searchable-checkbox ${filterItem.className}`}>
                      <Typography.Paragraph className="filter-title">
                        {filterItem.label}
                      </Typography.Paragraph>
                      <Col xs={24} md={24}>
                        <Skeleton loading={filterItem.loading} active paragraph>
                          <Input
                            placeholder={`Search ${filterItem.label}`}
                            onChange={(e) => console.log(e)}
                            className={filterItem.className}
                            value={filterItem.value}
                          />
                          <List
                            dataSource={Object.values(filterItem.items)}
                            renderItem={(item) => (
                              <List.Item key={item.name}>
                                <Checkbox onChange={onChangeFilterBrand} name={item.name}>
                                  {item.name} {`(${item.count})`}
                                </Checkbox>
                              </List.Item>
                            )}
                          />
                        </Skeleton>
                      </Col>
                    </Col>
                  )
                }

                {
                  (filterItem.type === filterTypes.searchableCheckbox && filterItem.tag) && (
                    <Col xs={24} md={24} className={`filter-searchable-checkbox ${filterItem.className}`}>
                      <Typography.Paragraph className="filter-title">
                        {filterItem.label}
                      </Typography.Paragraph>
                      <Col xs={24} md={24}>
                        <Skeleton loading={filterItem.loading} active paragraph>
                          <Input
                            placeholder={`Search ${filterItem.label}`}
                            onChange={(e) => console.log(e)}
                            className={filterItem.className}
                            value={filterItem.value}
                          />
                          <List
                            dataSource={Object.values(filterItem.items)}
                            renderItem={(item) => (
                              <List.Item key={item.name}>
                                <Checkbox onChange={onChangeFilterTag} name={item.name}>
                                  {item.name} {`(${item.count})`}
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