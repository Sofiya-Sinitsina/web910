'use client'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Labs() {
    const [temp_k, setTemp_k] = useState<string>("loading")
    const [wind_k, setWind_k] = useState<string>("loading")
    const [temp_p, setTemp_p] = useState<string>("loading")
    const [wind_p, setWind_p] = useState<string>("loading")
    const [temp_r, setTemp_r] = useState<string>("loading")
    const [wind_r, setWind_r] = useState<string>("loading")
    const [city1, setCity1] = useState<string>()
    const [city2, setCity2] = useState<string>()
    const [city3, setCity3] = useState<string>()

    const openmeteo = async () => {
        const response_k = await axios.get("https://api.open-meteo.com/v1/forecast?latitude=55.3333&longitude=86.0833&hourly=temperature_2m&current=temperature_2m,wind_speed_10m")
        const data_temp_k = response_k.data.current.temperature_2m
        const data_wind_k = response_k.data.current.wind_speed_10m
        setTemp_k(data_temp_k)
        setWind_k(data_wind_k)

        const response_p = await axios.get("https://api.open-meteo.com/v1/forecast?latitude=54.8667&longitude=69.15&hourly=temperature_2m&current=temperature_2m,wind_speed_10m")
        const data_temp_p = response_p.data.current.temperature_2m
        const data_wind_p = response_p.data.current.wind_speed_10m
        setTemp_p(data_temp_p)
        setWind_p(data_wind_p)

        const response_r = await axios.get("https://api.open-meteo.com/v1/forecast?latitude=52.9724&longitude=63.1106&hourly=temperature_2m&current=temperature_2m,wind_speed_10m")
        const data_temp_r = response_r.data.current.temperature_2m
        const data_wind_r = response_r.data.current.wind_speed_10m
        setTemp_r(data_temp_r)
        setWind_r(data_wind_r)
    }

    const fetching = async ()=> {
        const response = await axios.get("http://localhost:8080/api/cities/petro/rudny/kemerovo", { responseType: 'json'})
        const data_c_1 = response.data[0]
        const data_c_2 = response.data[1]
        const data_c_3 = response.data[2]
        setCity1(data_c_1)
        setCity2(data_c_2)
        setCity3(data_c_3)

    }

    useEffect(()=> {
        fetching()
        openmeteo()

        const interval = setInterval(() => {
            openmeteo()
        }, 1000)

        return ()=> clearInterval(interval)
    }, [])

    return (
        <div className='bg-[#EDEDE9] min-h-screen'>
            <div className='flex flex-row gap-4 justify-center py-10'>
                <div className='flex flex-col items-center mt-3 gap-2 text-xl'>
                    <img src = {`/images/${city1}.jpg`} className='w-[250px] h-[150px]'></img>
                    <p>The current temperature in Petropavl is {temp_p}</p>
                    <p>The current wind speed in Petropavl is {wind_p}</p>
                </div>
                <div className='flex flex-col items-center mt-3 gap-2 text-xl'>
                    <img src = {`/images/${city2}.jpg`} className='w-[250px] h-[150px]'></img>
                    <p>The current temperature in Rudny is {temp_r}</p>
                    <p>The current wind speed in Rudny is {wind_r}</p>
                </div>
                <div className='flex flex-col items-center mt-3 gap-2 text-xl'>
                    <img src = {`/images/${city3}.jpg`} className='w-[250px] h-[150px]'></img>
                    <p>The current temperature in Kemerovo is {temp_k}</p>
                    <p>The current wind speed in Kemerovo is {wind_k}</p>
                </div>
            </div>
        </div>
    )
}