export type Equipment={
    id: number;
    name: string;
    state: State;
}

export type EquipmentConnection = {
    fromId: number;
    toId: number;
}

export type State = "Running" | "Starting" | "Stopping" | "Stopped" | "Error";

export type GetEquipmentGraphResult = {
    equipments: Equipment[];
    connections: EquipmentConnection[];
}