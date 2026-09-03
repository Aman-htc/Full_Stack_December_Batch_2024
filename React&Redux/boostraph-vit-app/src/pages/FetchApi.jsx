import React, { Fragment, useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'

const FetchApi = () => {
  const [products, setProducts] = useState([])

  const [loading, setLoading] = useState(false)

  const [error, setError] = useState(null)

  // Without async await fetch aapi
  useEffect(() => {
    setLoading(true)

    fetch("https://dummyjson.com/products1")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [])



  // async await methods
  // const fetchProducts = async () => {
  //   try {
  //     setLoading(true)
  //     setError(null)

  //     const response = await fetch("https://dummyjson.com/products1")

  //     if (!response.ok) {
  //       throw new Error("please wait technical issue ")
  //     }

  //     const data = await response.json()
  //     setProducts(data.products)

  //   } catch (error) {
  //     setError(error)
  //   } finally {
  //     setLoading(false)
  //   }
  // }
  // useEffect(()=>{
  //   fetchProducts()
  //   setTimeout(()=>setLoading(false),3000)

  // },[])

  return (
    <div>
      {loading ? (
        <div>
          <Spinner size={10} /> please wait products are loading...
        </div>
      ) : (
        <>
          {error ? (
            <p>{JSON.stringify(error, null, 2)}</p>
          ) : (
            <pre>{JSON.stringify(products, null, 2)}</pre>
          )}
        </>
      )}
    </div>
  )
}

export default FetchApi
