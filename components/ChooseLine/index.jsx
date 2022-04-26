import React from 'react'
import CheckBox from './components/CheckBox'

const checkBoxMap = [
  {
    type: 'confirmedCase.total',
    text: '每日確診人數',
    defaultChecked: true
  },
  {
    type: 'confirmedCase.zoneDetail.Sanxia',
    text: '三峽校區確診人數',
    defaultChecked: false
  },
  {
    type: 'confirmedCase.zoneDetail.Taipei',
    text: '台北校區確診人數',
    defaultChecked: false
  },
  {
    type: 'isolate.studentTotal',
    text: '學生隔離人數',
    defaultChecked: false
  },
  {
    type: 'isolate.studentZoneDetail.Sanxia',
    text: '三峽校區學生隔離人數',
    defaultChecked: false
  },
  {
    type: 'isolate.studentZoneDetail.Taipei',
    text: '台北校區學生隔離人數',
    defaultChecked: false
  },
  {
    type: 'isolate.teacher',
    text: '教師隔離人數',
    defaultChecked: false
  },
  {
    type: 'isolate.staff',
    text: '職員隔離人數',
    defaultChecked: false
  },
  {
    type: 'selfHealthManagement.studentTotal',
    text: '學生自主健康管理人數',
    defaultChecked: false
  },
  {
    type: 'selfHealthManagement.studentZoneDetail.Sanxia',
    text: '三峽校區學生自主健康管理人數',
    defaultChecked: false
  },
  {
    type: 'selfHealthManagement.studentZoneDetail.Taipei',
    text: '台北校區學生自主健康管理人數',
    defaultChecked: false
  },
  {
    type: 'selfHealthManagement.teacher',
    text: '教師自主健康管理人數',
    defaultChecked: false
  },
  {
    type: 'selfHealthManagement.staff',
    text: '職員自主健康管理人數',
    defaultChecked: false
  }

]

const ChooseLine = ({ choices, setChoices, lines }) => {
  const changeHandler = (e) => {
    if (e.target.checked === false) {
      setChoices(choices.filter(line => (line.type !== e.target.id)))
    }
    if (e.target.checked === true) {
      setChoices([lines.find(line => (line.type === e.target.id)), ...choices])
    }
  }

  return (
      <form onChange={changeHandler} className={'flex flex-wrap space-x-3 justify-center'}>
        {
          checkBoxMap.map(checkBox => (<CheckBox key={checkBox.type} value={checkBox.type} text={checkBox.text} defaultChecked={checkBox.defaultChecked} />))
        }
      </form>
  )
}

export default ChooseLine
