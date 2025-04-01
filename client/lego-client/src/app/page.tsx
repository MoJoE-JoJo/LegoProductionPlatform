// import Image from "next/image";

import { Graph } from "@/Components/Graph";
import { GetEquipmentGraphResult } from "@/utils/types";
import "vis-network/styles/vis-network.css";


export default async function Home() {
  const data = await fetch('http://localhost:5250/api/equipment/get-equipment-graph')
  
  const result: GetEquipmentGraphResult = await data.json()
  
  // // const posts = await data.json()
  // const yolo = await data.json();
  // console.log(yolo);
  // const forecasts: WeatherForecast[] = yolo
  // console.log(await data.json())
    // .then((data) => {
    //   console.log(data);
    //   return data;
    // }
    // );

    // all peer dependencies have to be installed
// even if you don't import them yourself

// create an array with nodes

  return (
    <Graph equipmentItems={result.equipments} equipmentConnections={result.connections}/>

  )
}
