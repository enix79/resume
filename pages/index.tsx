import JobPositionCard from '../components/JobPositionCard';
import hmmh_logo from '../assets/hmmh_logo.png';
import sonepar_logo from '../assets/sonepar_logo.svg';
import me from '../assets/me.jpg';
import Image from 'next/image';
import { Layout, Timeline, Card, Typography } from 'antd';
const { Text } = Typography;
const { Header, Footer, Content } = Layout;

export default function Home() {
  const profileTitle = (
    <>
        <Text>Igor Gonak</Text><br/>
        <Text type="secondary">Frontend Developer</Text>
    </>
);
  return (
    <Layout style={{ height: "100vh"}}>
        <Header style={{ background: "#f0f2f5", border: "1px solid black"}}>Header</Header>
        <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{ display: "flex"}}>
            <Card title={profileTitle} style={{margin: 50}}>
                <Image alt="me" src={me} width="200" height="200" layout="fixed" className="profilePicture" />
              <Timeline style={{marginLeft: 10, marginTop: 20}}>
                <Timeline.Item style={{fontSize: "12px"}}>Geburtstag: 10.05.1988</Timeline.Item>
                <Timeline.Item style={{fontSize: "12px"}}>Herkunft: Russische Föderation</Timeline.Item>
                <Timeline.Item style={{fontSize: "12px"}}>Staatsangehörigkeit: Deutsch</Timeline.Item>
              </Timeline>
            </Card>
            <JobPositions />
          </div>
        </Content>
        <Footer style={{ border: "1px solid black"}}>Footer</Footer>
      
    </Layout>
  )
}


const JobPositions = () => {
  return (
    <div>
      <JobPositionCard
        company='hmmh'
        companyLogo={<Image src={hmmh_logo} alt="hmmh"/>}
        position='Frontend Developer'
        period='Juni 2021 - heute'
        tasks={[
          "Webshopmondernisierung & -weiterentwicklung",
          "Neuentwicklung der Backoffice-Tools"
        ]}
      />
      <JobPositionCard
        company='hmmh'
        companyLogo={<Image src={hmmh_logo} alt="hmmh"/>}
        position='IT-Spezialist für PIM/MAM-Systeme'
        period='Juni 2019 - Juni 2021'
        tasks={[
          "Konfiguration des PIM-Systems Contentserv",
          "Schnittstellenentwicklung & ETL",
          "Automatisierung der Prozesse",
          "Projektmanagement, Kundenberatung, Support, Schulungen"
        ]}
      />
      <JobPositionCard
        company='Sonepar PIM solutions'
        companyLogo={<Image src={sonepar_logo} alt="sonepar"/>}
        position='Software Developer'
        period='Februar 2017 - Juni 2019'
        tasks={[
          "ETL & Datenbanken",
          "Monitoring & Reporting",
          "Datenanalysen"
        ]}
      />
    </div>
  );
}