import { restClient } from "@polygon.io/client-js";
import { useQuery } from "@tanstack/react-query";

export const useStockAPI = (inputData: string) => {
  const rest = restClient(process.env.REACT_APP_POLYGON_API_KEY)

  const {data, 
    isLoading, 
    isError, 
    refetch
  } = useQuery(["stock"], async () => {
    return rest.stocks.previousClose(inputData).then((res => {return res.results?.[0]}))
  }, {enabled: false}) 

  /*const {
    data, 
    isLoading, 
    isError, 
    refetch,
  } = useQuery(["stock"], () => {
    return rest.stocks.previousClose(inputData).then((res) =>  {return res.results?.[0]})}, {
      refetchOnWindowFocus: false,
      enabled: false
    })
  }*/

  const getData = () => {
    
  }

  const refetchData = () => {
    refetch()
  }

  return {data, isLoading, isError, refetch}
}