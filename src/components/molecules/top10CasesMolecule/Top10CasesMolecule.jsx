import React from 'react'
import Card_top10 from '../../atoms/card_top10/Card_top10'
import './top10CasesMolecule.css'
function Top10CasesMolecule() {
  
  return (
    <div className="top10casesmolecule">
      <Card_top10 type="cases" tittle_top10="Top Cases"/>
      <Card_top10 type="deaths" tittle_top10="Top Deaths"/>
      <Card_top10 type="recovered" tittle_top10="Top Recover"/>
      <Card_top10 type="active" tittle_top10="Top Active"/>
      <Card_top10 type="todayDeaths" tittle_top10="Today Deaths"/>
      
      
    </div>
  )
}

export default Top10CasesMolecule