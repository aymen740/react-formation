/**
 * 
 * @param {string} url 
 * @param {FetchEventInit} options 
 */

import { useEffect, useState } from "react";

export function useFetch (url, options = {}) {

    const [loading, setloading] = useState(true)
    const [data, setData] = useState(null)
    const [errors, setErrors] = useState(null)
   
    useEffect(() => {
        fetch(url, {
            ...options,
            headers: {
                'Accept' : 'application/json; charset=UTF-8',
                ...options.headers
            }
        }).then(r => r.json()).then(data => {
            setloading(false)
            setData(data)
        }).catch((e) => {
            setErrors(e)
        }).finally(() => {
            setloading(false)
        })
    }, []);



return {
    loading, data, errors
}


}