import React, { useState } from 'react';
import plannerStyles from "../../../styles/Planner.module.css";
import {InputNumber, Select, Space, Button, List, Input } from 'antd';
import { FormOutlined } from '@ant-design/icons';

function BudgetInput() {
    const { Option } = Select;

    const [loadings, setLoadings] = useState([]);
    const [budgetData, setBudgetData] = useState({memo: "", amounts: null, prefix: "+", postfix:"KRW"});
    const [budgetList, setBudgetList] = useState([]);


    const enterLoading = (index) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });

        setTimeout(() => {
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });
        }, 1000);

        let newBudgetList = budgetList.concat(budgetData);
        setBudgetList(newBudgetList);
        setBudgetData({memo: "", amounts: null, prefix: "+", postfix:"KRW"});
    };

    const onInputChangeAmount = (value) => {
        setBudgetData({...budgetData, amounts: value});
    }

    const onInputChangeMemo = (e) => {
        setBudgetData({...budgetData, memo: e.target.value});
    }

    const onChangePrefix = (value) => {
        if(value == "minus") {
            setBudgetData({...budgetData, prefix: "-"})
        } else {
            setBudgetData({...budgetData, prefix: "+"})
        }
    }

    const onChangePostfix = (value) => {
        setBudgetData({...budgetData, postfix: value})
    }



    return (
        <div className={plannerStyles.assetListContainer}>
            <div>
                <Space direction="horizontal">
                    <Input value={budgetData.memo} onChange={onInputChangeMemo} />
                    <Select defaultValue="add" style={{ width: 60 }} onChange={onChangePrefix}>
                        <Option value="add">+</Option>
                        <Option value="minus">-</Option>
                    </Select>
                    <InputNumber value={budgetData.amounts} onChange={onInputChangeAmount} />
                    <Select defaultValue="USD" style={{ width: 60 }}  onChange={onChangePostfix}>
                        <Option value="USD">$</Option>
                        <Option value="EUR">€</Option>
                        <Option value="GBP">£</Option>
                        <Option value="CNY">¥</Option>
                        <Option value="KRW">₩</Option>
                    </Select>
                    <Space wrap>
                        <Button
                            type="default"
                            icon={<FormOutlined />}
                            loading={loadings[1]}
                            onClick={() => enterLoading(1)}
                        >
                            ENTER
                        </Button>
                    </Space>
                </Space>
            </div>
            <div style={{overflowY: "hidden"}}>
                <List
                    className="demo-loadmore-list"
                    itemLayout="horizontal"
                    dataSource={budgetList}
                    renderItem={(item) => (
                        <List.Item
                            actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">delete</a>]}
                        >
                            <div style={{width:"70%", paddingLeft:"15px"}}>{item.memo}</div><div style={{width:"30%"}}>{ item.prefix + item.amounts + item.postfix}</div>
                        </List.Item>
                    )}
                />
            </div>

        </div>
    );
}
export default BudgetInput;