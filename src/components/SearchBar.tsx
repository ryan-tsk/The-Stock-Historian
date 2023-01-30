import {useState} from 'react'
import useStockAPI from '../hooks/useStockAPI'

const SearchBar = () => {
  const [inputField, setInputField] = useState<string>("")
  const {data: stockData, isLoading, isError, updateData} = useStockAPI()


  const getPreviousClose = () => {
    updateData(inputField)
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