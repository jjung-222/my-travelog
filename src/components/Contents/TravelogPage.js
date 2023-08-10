import styles from "../../../styles/Home.module.css";
import React, {useState} from "react";
import travelogStyles from "../../../styles/Travelog.module.css";
import {Button, DatePicker, Input, Radio, Space, Timeline} from 'antd';
import {FileSyncOutlined, FormOutlined} from "@ant-design/icons";
import TimeLineItem from "../travelog/TimeLineItem";

export default function TravelogPage() {

    const [mode, setMode] = useState('left');
    const [log, setLog] = useState({label:'', children: ''});
    const [logList, setLogList] = useState([]);
    const [isEdit, setEdit] = useState(false);

    const onChange = (e) => {
        setMode(e.target.value);
    };

    const onChangeDate = (date, dateString) => {
        //push 쓰지말기
        setLog({...log, label: dateString, date: date})
    }

    const onInputChangeMemo = (e) => {
        //git test
        setLog({...log, children: e.target.value})
    }

    const onClickEnter = () => {
        let newLogList = logList.concat(log);
        setLogList(newLogList);
        setLog({label: '', children: ''});
    }

    const onClickEdit = () => {
        if(isEdit) {
            setEdit(!isEdit)
            setLogList(logList);
        } else {
            setEdit(!isEdit)
        }
    }

    const onDeleteItem = (index) => {
        let newLogList = logList.filter((item, i)=>{
            if(i != index) {
                return item;
            }
        })
        setLogList(newLogList);
    }

    const onEditItemDate = (date, dateString, index) => {
        let newLogList = logList.map((item, i)=>{
            if(i == index) {
                return {...item, date: date, label: dateString};
            } else {
                return item
            }
        })
        setLogList(newLogList);
    }

    const onEditItemMemo = (editedItem, index) => {
        let newLogList = logList.map((item, i)=>{
            if(i == index) {
                return {...item, children: editedItem};
            } else {
                return item
            }
        })
        setLogList(newLogList);
    }



    return (
        <main className={styles.main2}>
            <div className={travelogStyles.travelogContainer}>
                <div className={travelogStyles.timelineLog}>
                    <Radio.Group
                        className={travelogStyles.radioBtn}
                        onChange={onChange}
                        value={mode}
                    >
                        <Radio value="left">Left</Radio>
                        <Radio value="right">Right</Radio>
                        <Radio value="alternate">Alternate</Radio>
                    </Radio.Group>
                    <Space  className={travelogStyles.inputStyle} direction="horizontal">
                        <DatePicker className={travelogStyles.inputDate} value={log.date} onChange={onChangeDate} />
                        <Input className={travelogStyles.inputMemo} value={log.children} onChange={onInputChangeMemo} />
                    </Space>

                    <div className={travelogStyles.btnGroupStyle}>
                        {
                            !isEdit &&
                            <Button
                                className={travelogStyles.btnStyle1}
                                type="default"
                                icon={<FormOutlined/>}
                                onClick={onClickEnter}
                            >
                                ENTER
                            </Button>
                        }
                        <Button
                            className={ isEdit ? travelogStyles.btnStyle2Reverse : travelogStyles.btnStyle2}
                            type="default"
                            icon={<FileSyncOutlined />}
                            onClick={onClickEdit}
                        >
                            {isEdit ? "FINISH EDIT" : "EDIT"}
                        </Button>
                    </div>
                    {
                        isEdit ?
                            logList.map((item, index)=>{
                                return <TimeLineItem item={item} index={index} onDeleteItem={onDeleteItem} onEditItemMemo={onEditItemMemo} onEditItemDate={onEditItemDate}/>
                            })
                            :
                            <Timeline
                                mode={mode}
                                items={logList}
                            />
                    }
                </div>
                <div className={travelogStyles.content}>

                </div>
            </div>
        </main>
    )
}