import JobPositionCard from '../components/JobPositionCard';
import hmmh_logo from '../assets/hmmh_logo.png';
import sonepar_logo from '../assets/sonepar_logo.svg';
import Image from 'next/image';

// TODO: use next/image
export default function Home() {
  return (
    <main>
      
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
        position='Software Debeloperr'
        period='Februar 2017 - Juni 2019'
        tasks={[
          "ETL & Datenbanken",
          "Monitoring & Reporting",
          "Datenanalysen"
        ]}
      />
    </main>
  )
}