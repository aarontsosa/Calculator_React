import React from "react"
import Input from "./Input.js"

const Keypad = ({display, clear, opperand, equals}) => {
    return(
    <div>
        <div className="row">
            <div className="col-lg-9">
                <Input value="Clear" func={clear}/>
            </div>
            <div className="col-lg-3">
                <Input value="/" func={opperand}/>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-3">
                <Input value="7" func={display}/>
            </div>
            <div className="col-lg-3">
                <Input value="8" func={display}/>
            </div>
            <div className="col-lg-3">
                <Input value="9" func={display}/>
            </div>
            <div className="col-lg-3">
                <Input value="*" func={opperand}/>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-3">
                <Input value="4" func={display}/>
            </div>
            <div className="col-lg-3">
                <Input value="5" func={display}/>
            </div>
            <div className="col-lg-3">
                <Input value="6" func={display}/>
            </div>
            <div className="col-lg-3">
                <Input value="-" func={opperand}/>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-3">
                <Input value="1" func={display}/>
            </div>
            <div className="col-lg-3">
                <Input value="2" func={display}/>
            </div>
            <div className="col-lg-3">
                <Input value="3" func={display}/>
            </div>
            <div className="col-lg-3">
                <Input value="+" func={opperand}/>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6">
                <Input value="0" func={display}/>
            </div>
            <div className="col-lg-3">
                <Input value="." func={display}/>
            </div>
            <div className="col-lg-3">
                <Input value="=" func={equals}/>
            </div>
        </div>
    </div>
    )
}

export default Keypad