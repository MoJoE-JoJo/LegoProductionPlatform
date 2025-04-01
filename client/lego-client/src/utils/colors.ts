import { State } from "./types";

export const runningColor = "#237841";
export const stoppedColor= "#C91A09";
export const changingColor = "#F2CD37";

export function getColor(state: State): string {
    switch (state) {
        case "Running":
            return runningColor;
        case "Starting":
        case "Stopping":
            return changingColor;
            case "Error":
        case "Stopped":
            return stoppedColor;
        default:
            return "#000000"; // Default color for unknown state
    }
}