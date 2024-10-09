import { useState } from 'react'
import './App.css'

const url = "https://moxoai.com/medium?query="

function App() {
    const [state,setState] = useState()

    const onClickhandler = () => {
      window.open(`${url}${state}`)
    }

  return (
    <div style={{display:"flex",flexDirection:"column",gap:"5rem",justifyContent:"center",alignItems:"center"}}>
      <h1 style={{fontSize:"20px",fontWeight:"bold",}}>Medium Bypasser</h1>
      <input style={{height:"100px"}} type="text" value={state} onChange={(e)=>setState(e.target.value)} />
      <button onClick={onClickhandler}>Submit</button>
    </div>
  )
}

export default App
