import React from 'react'
import Chart from '../components/Chart'
import ChooseLine from '../components/ChooseLine'

const lines = [
  {
    type: 'isolate.studentTotal',
    color: '#8884d8',
    text: '隔離中學生：'
  },
  {
    type: 'confirmedCase.total',
    color: '#82ca9d',
    text: '每日確診人數：'
  },
  {
    type: 'confirmedCase.zoneDetail.Sanxia',
    color: '#e5bf4d',
    text: '三峽校區確診人數：'
  },
  {
    type: 'confirmedCase.zoneDetail.Taipei',
    color: '#245456',
    text: '台北校區確診人數：'
  },
  {
    type: 'isolate.studentZoneDetail.Sanxia',
    color: '#343955',
    text: '三峽校區學生隔離人數：'
  },
  {
    type: 'isolate.studentZoneDetail.Taipei',
    color: '#61445f',
    text: '台北校區學生隔離人數：'
  },
  {
    type: 'isolate.teacher',
    color: '#a6b2f2',
    text: '教師隔離人數：'
  },
  {
    type: 'isolate.staff',
    color: '#2d1306',
    text: '職員隔離人數：'
  },
  {
    type: 'selfHealthManagement.studentTotal',
    color: '#acf2a6',
    text: '學生自主健康管理人數：'
  },
  {
    type: 'selfHealthManagement.studentZoneDetail.Sanxia',
    color: '#261386',
    text: '三峽校區學生自主健康管理人數：'
  },
  {
    type: 'selfHealthManagement.studentZoneDetail.Taipei',
    color: '#994de5',
    text: '台北校區學生自主健康管理人數：'
  },
  {
    type: 'selfHealthManagement.teacher',
    color: '#861d13',
    text: '教師自主健康管理人數：'
  },
  {
    type: 'selfHealthManagement.staff',
    color: '#698613',
    text: '職員自主健康管理人數：'
  }
]

const Home = ({ data }) => {
  const [choices, setChoices] = React.useState([lines[1]])
  return (
      <div className={'w-full flex flex-col p-4 md:p-14 items-center'}>
        <Chart data={data} lines={choices} />
        <ChooseLine choices={choices} setChoices={setChoices} lines={lines} />
      </div>
  )
}

export const getStaticProps = async () => {
  const response = await fetch('http://34.145.73.14:5000/api/ntpu_cdc')
  const statistic = await response.json()
  const data = statistic.reverse()
  return {
    props: { data },
    revalidate: 600
  }
}

export default Home
