import {useState, useEffect} from 'react'
import { setConstantValue } from 'typescript'
import useStockAPI from '../Hooks/useStockAPI'

const SearchBar = () => {
  const [inputField, setInputField] = useState<string>("")
  const [submitSearch, setSubmitSearch] = useState<boolean>(false)
  const {data: stockData, isLoading, isError, refetchData, updateData} = useStockAPI()

  useEffect (() => {
    refetchData()
    setSubmitSearch(previousState => !previousState)
    console.log(stockData)
  }, [setSubmitSearch])


  const getPreviousClose = () => {
    updateData(inputField)
    setSubmitSearch(previousState => !previousState)
  }

  return (
    <div className = "SearchBar"> 
      <div className= "SearchField">
        <input onChange={(e) => {setInputField(e.target.value)}}></input>
      </div>
      <div className = "SearchButton">
        <button type="submit" onClick={getPreviousClose}> Submit </button>
        <p> {stockData}</p>
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
