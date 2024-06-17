import { useState, forwardRef, useImperativeHandle } from "react"


const Toggleable = forwardRef((props, refs) => {

    const [visible, setVisible] = useState(false)

    const hideWhenVisible = {display: visible ? 'none' : ''}
    const showWhenVisible = {display: visible ? '' : 'none'}

    const toggleVisibility = () => {
        setVisible(!visible)
    }

    useImperativeHandle(refs, () => {
        return {toggleVisibility}
    })

    return (
        <div className="mb-9">
            <div style={hideWhenVisible}>
                <button className="button" onClick={toggleVisibility}>{props.buttonLabel}</button>
            </div>
            <div style={showWhenVisible} className="flex items-center flex-col">
                {props.children}
                <button className="button" onClick={toggleVisibility}>Cancel</button>
            </div>
        </div>
    )
})

Toggleable.displayName = 'Toggleable'

export default Toggleable