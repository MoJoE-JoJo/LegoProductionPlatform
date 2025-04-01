// import Image from "next/image";

import { Column, Row } from "@/Components/Containers";
import { WeatherForecast } from "@/utils/types";

export default async function Home() {
  const data = await fetch('http://localhost:5250/api/hejsa/get-forecast')
  // const posts = await data.json()
  const forecasts: WeatherForecast[] = await data.json()
  // console.log(await data.json())
    // .then((data) => {
    //   console.log(data);
    //   return data;
    // }
    // );


  return (
    <>
    <Column> 
    <span>hejsa</span>
      {forecasts.map((forecast, index) => (
        <Row key={index}>
          <span>{forecast.date}</span>
          <span>{forecast.temperatureC}</span>
          <span>{forecast.summary}</span>
          <span>{forecast.temperatureF}</span>
           </Row>
      ))}
      </Column>
      </>
  )
}
