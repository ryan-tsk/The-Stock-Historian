import { useQuery } from '@tanstack/react-query'
import {useState} from 'react'
import {restClient, ITickerNewsQuery} from '@polygon.io/client-js'

function useStockAPI() {
  const rest = restClient(process.env.REACT_APP_POLYGON_API_KEY)
  const date = new Date().toISOString().substring(0, 10)
  const [inputData, setInputData] = useState<string>("")

  const {data, isLoading, isError, refetch} = useQuery(['stock'], async () => getData(), {enabled: Boolean(inputData)})

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
    const prevClose = await rest.stocks.previousClose(symbol).then(res => {return res.results?.[0]})
    return {daily, prevClose}
  }

  const updateData = (symbol: string) => {
    setInputData(symbol)
  }

  const refetchData = () => {
    refetch()
  }

  return {data, isLoading, isError, refetchData, updateData}

}

export default useStockAPI