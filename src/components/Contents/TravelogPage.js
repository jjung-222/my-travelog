import styles from "../../../styles/Home.module.css";
import React, {useState} from "react";
import plannerStyles from "../../../styles/Planner.module.css";
import { Radio, Timeline } from 'antd';

export default function TravelogPage() {

    const [mode, setMode] = useState('left');

    const onChange = (e) => {
        setMode(e.target.value);
    };


    return (
        <main className={styles.main2}>
            <main className={styles.main2}>
                <div>
                    <Radio.Group
                        onChange={onChange}
                        value={mode}
                        style={{
                            marginBottom: 20,
                        }}
                    >
                        <Radio value="left">Left</Radio>
                        <Radio value="right">Right</Radio>
                        <Radio value="alternate">Alternate</Radio>
                    </Radio.Group>
                    <Timeline
                        mode={mode}
                        items={[
                            {
                                label: '2015-09-01',
                                children: 'Create a services',
                            },
                            {
                                label: '2015-09-01 09:12:11',
                                children: 'Solve initial network problems',
                            },
                            {
                                children: 'Technical testing',
                            },
                            {
                                label: '2015-09-01 09:12:11',
                                children: 'Network problems being solved',
                            },
                        ]}
                    />
                </div>
            </main>
        </main>
    )
}