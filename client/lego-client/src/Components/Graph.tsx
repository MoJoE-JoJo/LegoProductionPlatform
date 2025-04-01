'use client'

import { useVisNetwork } from "@/app/useVisNetwork";
import { getColor } from "@/utils/colors";
import { Equipment, EquipmentConnection } from "@/utils/types";
import { Edge, Node, Options,} from "vis-network/esnext";
import "vis-network/styles/vis-network.css";

type GraphProps = {
    equipmentItems: Equipment[];
    equipmentConnections: EquipmentConnection[];
}

export function Graph(props: GraphProps){

    const nodes: Node[] = props.equipmentItems.map((item) => ({
        id: item.id,
        label: item.name,
        title: item.state,
        color: getColor(item.state),
        level: 1,
        shape: "box",
    }))
      
    const edges: Edge[] = props.equipmentConnections.map((connection) => ({
        from: connection.fromId,
        to: connection.toId,
    }))
    
    const options: Options = {
        edges: {
            smooth: false, 
            arrows: {
                to: {
                    enabled: true, 
                    scaleFactor: 0.5
                }
            }
        },
        layout: {
            randomSeed: 1,
            improvedLayout: true,
        }
    };

    const { ref } = useVisNetwork({
        options,
        edges,
        nodes
      });

      

    return (
        <div style={{ height: 700, width: "100%" }} ref={ref} />
      )
}

