import { useQuery } from '@tanstack/react-query'
import {useState} from 'react'
import {restClient} from '@polygon.io/client-js'

function useStockAPI() {
  const rest = restClient(process.env.REACT_APP_POLYGON_API_KEY)
  const [inputData, setInputData] = useState("")

  const {data, isLoading, isError, refetch} = useQuery(['stock'], async () => getData(), {enabled: false})

  const getData = async () => {
    if (inputData){
      return rest.stocks.previousClose(inputData).then((res) => {return res.results?.[0]?.v})
    }
  }

  const updateData = (input: string) => {
    setInputData(input)
  }

  const refetchData = () => {
    refetch()
  }

  return {data, isLoading, isError, refetchData, updateData}

}

export default useStockAPI