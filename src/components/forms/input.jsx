import { useId } from "react"

/**
 * 
 * @param {string} placeholder
 * @param {string} value
 * @param {string} label
* @param {(s: string) => void} onchange
 * 
 
 */
export function Input ({placeholder, value, onchange, label}) {
    const id = useId()
return <div>
    <label className="form-label" htmlFor={id}>{label}</label>
    <Input
    id={id}
    className="form-control"
    value={value}
    placeholder={placeholder}
    onchange={(e) => onchange(e.target.value)} 
    />
</div>

}