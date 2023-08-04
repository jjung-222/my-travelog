import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;


export default function ShareList() {
    return (
        [1, 2, 3, 4, 5, 6, 7, 8].map(()=>{
            return (
                <Card
                    style={{
                        width: "100%",
                        marginBottom:"20px"
                    }}
                    actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    <div >
                        <Meta
                        avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" style={{marginBottom: "5px"}}/>}
                        title="Card title"
                        style={{borderBottom:"1px solid #333333", marginBottom: "25px"}}
                    />
                    </div>
                    <div style={{marginTop:"10px"}}>
                        <img src="../../imgs/church.jpg" style={{width: "100%", height:"100%"}}/>
                    </div>
                </Card>
            )
        })
    )
};
