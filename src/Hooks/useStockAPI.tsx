import { useQuery } from '@tanstack/react-query'
import {useState} from 'react'
import {restClient} from '@polygon.io/client-js'
import axios from 'axios'

function useStockAPI() {
  const rest = restClient(process.env.REACT_APP_POLYGON_API_KEY)
  const [inputData, setInputData] = useState<string>("")

  const {data, isLoading, isError} = useQuery(['stock'], async () => getData(), {enabled: Boolean(inputData)})

  const getPrevDate = () : string => {
    const event = new Date()
    event.setDate(event.getDate()-1)
    return (event.toISOString().substring(0,10))
  }

  const getData = async () => {
    const symbol = inputData
    const date = getPrevDate()
    setInputData("")

    const daily = await rest.stocks.dailyOpenClose(symbol, date).then(res => {return res})
    const news = await axios.get(`https://api.polygon.io/v2/reference/news?ticker=${symbol}&apiKey=${process.env.REACT_APP_POLYGON_API_KEY}`).then(
    res => {return res.data.results?.[0]})
    return {daily, news}
  }

  const updateData = (symbol: string) => {
    setInputData(symbol)
  }

  return {data, isLoading, isError, updateData}

}

export default useStockAPI