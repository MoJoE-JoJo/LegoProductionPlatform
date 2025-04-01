import { Graph } from "@/Components/Graph";
import { GetEquipmentGraphResult } from "@/utils/types";
import "vis-network/styles/vis-network.css";


export default async function Home() {
  const data = await fetch('http://localhost:5250/api/equipment/get-equipment-graph')
  
  const result: GetEquipmentGraphResult = await data.json()
  
  return (
    <Graph equipmentItems={result.equipments} equipmentConnections={result.connections}/>

  )
}
