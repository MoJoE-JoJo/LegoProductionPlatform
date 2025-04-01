export function Row(props:{gap?: string, position?: "start" | "center" | "end", children: React.ReactNode}) {
    return (
        <div className={`flex-row ${props.gap} ${props.position}`}>
            {props.children}
        </div>
    )
}

export function Column(props:{gap?: string, position?: "start" | "center" | "end", children: React.ReactNode}) {
    return (
        <div className={`flex-col ${props.gap} ${props.position}`}>
            {props.children}
        </div>
    )

}