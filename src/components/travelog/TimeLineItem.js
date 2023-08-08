import React from 'react';
import {DeleteOutlined} from '@ant-design/icons';
import {Button, Card, DatePicker, Input, Space} from 'antd';
import travelogStyles from "../../../styles/Travelog.module.css";

export default function TimeLineItem(props) {
    const onChangeDate = (date, dateString) => {
        props.onEditItemDate(date, dateString, props.index)
    }

    const onInputChangeMemo = (e) => {
        props.onEditItemMemo(e.target.value, props.index)
    }

    const onClickDelete = () =>{
        props.onDeleteItem(props.index)
    }


    return (
        <Space className={travelogStyles.inputStyle} direction="horizontal">
            <DatePicker className={travelogStyles.inputDate} value={props.item.date} onChange={onChangeDate} />
            <Input className={travelogStyles.inputMemo} value={props.item.children} onChange={onInputChangeMemo} />
            <Button icon={<DeleteOutlined />} onClick={onClickDelete}/>
        </Space>
    )
};
