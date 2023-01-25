import {useState} from 'react'
import {useStockAPI} from "../Hooks/useStockAPI"

const SearchBar = () => {
  const [inputField, setInputField] = useState<string>("")
  const [inputData, setInputData] = useState<string>("")
  const {data, isLoading, isError, refetch} = useStockAPI(inputData)

  const getPreviousClose = () => {
    setInputData(inputField)
    refetch()
    console.log(data)
  }

  return (
    <div className = "SearchBar"> 
      <div className= "SearchField">
        <input onChange={(event) => setInputField(event?.target.value)}></input>
      </div>
      <div className = "SearchButton">
        <button onClick={getPreviousClose}> Submit </button>
        <p> {}</p>
      </div>
    </div>
  )
}   

export default SearchBar



 /*
  const rest = restClient(process.env.REACT_APP_POLYGON_API_KEY)
  const getPreviousClose = () => {
    setInputData(inputField)
    rest.stocks.previousClose(inputData).then((res) => setOutputData(res.results?.[0]?.v))
    console.log(outputData)
  }*/
