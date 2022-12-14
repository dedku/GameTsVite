type Props = {
    player?: string
}

function Square({ player }: Props) {
    const scale = player ? "scale-100  " : "scale-0 "
    const textColor = player === "X" ? "text-yellow-200 " : "text-fuchsia-300 "
    const hoverStyle = "transition duration-500 hover:scale-105 transform"

    return (
        <div className={`h-36 border-solid border-4 border-skate-200 font-display text-7xl flex justify-center items-center cursor-pointer ${hoverStyle}`}>
            <span className={`transform transition-all duration-100 ease-out ${scale}${textColor}`}>{player}</span>
        </div >
    )
}

export default Square