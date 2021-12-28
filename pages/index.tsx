import JobPositionCard from '../components/JobPositionCard';
import hmmh_logo from '../assets/hmmh_logo.png';
import sonepar_logo from '../assets/sonepar_logo.svg';
import Polywork from '../assets/polywork-rubix-icon-black.svg';
import xing from '../assets/xing.svg';

import Image from 'next/image';
import { Layout, Tabs, Card, Avatar } from 'antd';
import ProfileCard from '../components/ProfileCard'
import { LinkedinFilled } from '@ant-design/icons';
import styles from './index.module.scss';
const { Header, Footer, Content } = Layout;
const { TabPane } = Tabs;


// https://www.linkedin.com/in/igor-gonak-81319b142/
export default function Home() {
  return (
    <Layout className={styles.container}>
        <Header className={styles.header}>
          Lass uns verbinden über
          <LinkedinFilled style={{fontSize: 25}} />
          {/* <div className={styles.socialMediaIcon}><Image src={polywork} height={25} width={25} alt="polywork"/></div> */}
          <Image src={xing} height={25} width={25} alt="xing" className={styles.socialMediaIcon}/>
          <Image src={polywork} height={25} width={25} alt="polywork" className={styles.socialMediaIcon}/>
        </Header>
        <Content className={styles.mainContent}>
            <Tabs defaultActiveKey='Test1' tabBarGutter={50} style={{width: 750, height: 750}} centered>      
              <TabPane tab="About" key="Test1">
                <div style={{display: "flex", gap: 40}}>
                  <ProfileCard />
                  <Card>Hi, mein Name ist Igor und ich bin ein Frontend Developer. Das Web Development bringe ich mir seit etwa 2 Jahren selbst bei. Als JS-Framework habe ich mich auf React committed.</Card>
                </div>
                </TabPane>
              <TabPane tab="Arbeitsstellen" key="Test2">
              <div style={{display: "flex", gap: 40}}>
                  <ProfileCard />
                  <JobPositions />
                </div>
                </TabPane>
              <TabPane tab="Projekte" key="Test3">
                <div style={{display: "flex", gap: 40}}>
                  <ProfileCard />
                  <JobPositions />
                </div>
              </TabPane>
              <TabPane tab="Skills" key="Test4">
                <div style={{display: "flex", gap: 40}}>
                  <ProfileCard />
                  Test4 Content
                </div>
                </TabPane>
            </Tabs>  
        </Content>
        <Footer style={{ border: "1px solid black"}}>Footer</Footer>    
    </Layout>
  )
}


const JobPositions = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", gap: 20}}>
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