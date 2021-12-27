import { Card, Avatar, Typography } from 'antd';
const { Text } = Typography;

interface JobPositionCardProps {
    position: string,
    period: string,
    company: string,
    companyLogo?: React.ReactNode,
    tasks: string[]
}

export default function JobPositionCard({position, period, company, companyLogo, tasks}: JobPositionCardProps) {
    const cardTitle = (
        <>
            <Text>{`${position} @${company}`}</Text><br/>
            <Text type="secondary" style={{fontSize: "10px"}}>{period}</Text>
        </>
    );
    return (
    <Card 
        title={cardTitle}
        extra={
          <Avatar
            alt="hmmh"
            src={companyLogo}
            style={{ border: "1px solid gray"}}
            size="large"
            />
        }
        style={{ width: 450, borderRadius: "5px" }} 
      >
        <ul style={{paddingLeft: 15}}>
            { tasks.map((task, index) => <li key={index} style={{fontSize: "12px"}}>{task}</li>)}
        </ul>
      </Card>
    );
}