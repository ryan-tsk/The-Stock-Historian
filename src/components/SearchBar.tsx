import {useState, useEffect} from 'react'
import { setConstantValue } from 'typescript'
import useStockAPI from '../Hooks/useStockAPI'

const SearchBar = () => {
  const [inputField, setInputField] = useState<string>("")
  const [submitSearch, setSubmitSearch] = useState<boolean>(false)
  const {data: stockData, isLoading, isError, refetchData, updateData} = useStockAPI()


  const getPreviousClose = () => {
    console.log("Updating:" + inputField)
    updateData(inputField)
    console.log(stockData)
  }

  return (
    <div className = "SearchBar"> 
      <div className= "SearchField">
        <input onChange={(e) => {setInputField(e.target.value)}}></input>
      </div>
      <div className = "SearchButton">
        <button type="submit" onClick={getPreviousClose}> Submit </button>
        <p> Closing: {stockData?.daily.close}</p>
        <p> High: {stockData?.daily.high} </p>
        <p> Low: {stockData?.daily.low}</p>
        <p> Open: {stockData?.daily.open} </p>
        <p> Volume: {stockData?.daily.volume} </p>
        <p> News Title: {stockData?.news.title}</p>
        <p> Link: {stockData?.news.article_url}</p>
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
