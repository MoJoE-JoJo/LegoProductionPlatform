// import Image from "next/image";

import { Column,  } from "@/Components/Containers";

export default async function Home() {
  const data = await fetch('http://localhost:5250/api/equipment/get-equipment-graph')
  // const posts = await data.json()
  const yolo = await data.json();
  console.log(yolo);
  // const forecasts: WeatherForecast[] = yolo
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
      {/* {forecasts.map((forecast, index) => (
        <Row key={index}>
          <span>{forecast.date}</span>
          <span>{forecast.temperatureC}</span>
          <span>{forecast.summary}</span>
          <span>{forecast.temperatureF}</span>
           </Row>
      ))} */}
      </Column>
      </>
  )
}
