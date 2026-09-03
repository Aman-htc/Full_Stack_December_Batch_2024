import React, { Fragment, useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'

import axios from 'axios'

const Axios = () => {

    const [products, setProducts] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()


    // useEffect(() => {
    //     setLoading(true);

    //     axios.get("https://dummyjson.com/products")
    //         .then((response) => {
    //             setProducts(response.data.products);
    //         })
    //         .catch((error) => {
    //             setError(error);
    //         })
    //         .finally(() => {
    //             setTimeout(() => {
    //                 setLoading(false);
    //             }, 1000);
    //         });

    // }, []);

    // Methods 2 async wait
    const getproducts = async () => {

        const reponse = await axios.get("https://dummyjson.com/products")
        setProducts(reponse)
    }
    useEffect(() => {
        setLoading(true)
        getproducts();
        
        setTimeout(() => setLoading(false), 1000)

        }, [])
        return (
            <div>
                {loading ? <div><Spinner /> plese wait products are loading...</div> :
                    <Fragment>
                        {error ? (<p>{error?.message}</p>) : <p>{JSON.stringify(products, null, 2)}</p>}
                    </Fragment>



                }


            </div>
        )
    }

export default Axios
