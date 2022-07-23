import {useState} from 'react'


const Button = (props) => {
    
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )

}

const StatisticsLine = (props) => {

  if(props.text === "positive") {
    return (
        <tr>
        <td>{props.text}</td>
        <td>{props.value} %</td> 
        </tr>

    )
  }

  return (
    <tr>
      <td>{props.text}</td> 
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  
  if(props.total === 0) {
    return (
      <div>
      <h1>statistics</h1>
      <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
      <StatisticsLine text="good" value={props.good}/>
      <StatisticsLine text="neutral" value={props.neutral}/>
      <StatisticsLine text="bad" value={props.bad}/>
      <StatisticsLine text="all" value={props.total}/>
      <StatisticsLine text="average" value={(props.good - props.bad)/props.total}/>
      <StatisticsLine text="positive" value={props.good / props.total * 100 }/>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {

  const [good,setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let total = good + bad + neutral


  return (

    <div>
      <h1>give feedback</h1>
      <Button text="good" onClick={()=>{setGood(good + 1)}} />
      <Button text="neutral" onClick={()=>{setNeutral(neutral + 1)}} />
      <Button text="bad" onClick={()=>{setBad(bad + 1)}} />
     
      <Statistics good={good} bad={bad} neutral={neutral} total={total} />


    </div>
  )

}


export default App
