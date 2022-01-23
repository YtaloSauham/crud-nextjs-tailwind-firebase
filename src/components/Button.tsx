

interface ButtonProps {
    className?: string
    children: any
}

export default function Button(props:ButtonProps) {

 
    return (
        <button className={`
            px-4 py-2
            rounded-md text-white
            ${props.className}
        `}> {props.children}</button>
    )
}