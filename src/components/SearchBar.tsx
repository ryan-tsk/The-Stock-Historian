import {useState} from 'react'
import { polygonClient, restClient, websocketClient } from "@polygon.io/client-js";
import { config } from "process";


const SearchBar = () => {
  const [inputField, setInputField] = useState<string>("")
  const [inputData, setInputData] = useState<string>("")
  const [outputData, setOutputData] = useState<number>()

  const rest = restClient(process.env.REACT_APP_POLYGON_API_KEY)
  const getPreviousClose = () => {
    setInputData(inputField)
    rest.stocks.previousClose(inputData).then((res) => setOutputData(res.results?.[0]?.v))
    console.log(outputData)
  }

  const updateData = () => {
  }

  return (
    <div className = "SearchBar"> 
        <div className= "SearchField">
            <input onChange={(event) => setInputField(event?.target.value)}></input>
        </div>
        <div className = "SearchButton">
            <button onClick={getPreviousClose}> Submit </button>
            <p> {outputData}</p>
        </div>
    </div>
  )
}   

export default SearchBar