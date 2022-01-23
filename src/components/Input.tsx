
type mode = 'text' | 'number'

interface InputProps{
    type?: mode
    text: string
    value : any
    className? : string
    disable?: boolean
    onchange?: (value : any) =>void
}

export default function Input(props: InputProps){

    return (
        <div className={`flex flex-col  ${props.className}`}>
             <label className="mb-2">
                    {props.text}
             </label>
             <input type={props.type ?? 'text'} 
             value={props.value}
             readOnly={props.disable}
             onChange={e => props.onchange?.(e.target.value)}
             className={`
                border border-purple-500 rounded-lg
                focus:outline-none bg-gray-100
                px-4 py-2
                ${props.disable ? ' ' : 'focus:bg-white'}
             `}
             />

        </div>
    )
}