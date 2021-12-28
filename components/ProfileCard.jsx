import React from 'react';
import me from '../assets/me.jpg';
import { Timeline, Card, Typography } from 'antd';
import Image from 'next/image';
const { Text } = Typography;

export default function ProfileCard() {
    const profileTitle = (
        <>
            <Text>Igor Gonak</Text><br/>
            <Text type="secondary">Frontend Developer</Text>
        </>
    );
    return (
        <Card title={profileTitle}>
            <div style={{borderRadius: '50%', width: 200, height: 200, overflow: 'hidden'}}>
                <Image alt="me" src={me} width="200" height="200" layout="fixed" className="profilePicture" />
            </div>
            <Timeline style={{marginLeft: 10, marginTop: 20}}>
                <Timeline.Item style={{fontSize: "12px"}}>Geburtstag: 10.05.1988</Timeline.Item>
                <Timeline.Item style={{fontSize: "12px"}}>Herkunft: Russische Föderation</Timeline.Item>
                <Timeline.Item style={{fontSize: "12px"}}>Staatsangehörigkeit: Deutsch</Timeline.Item>
            </Timeline>
    </Card>
    );
}