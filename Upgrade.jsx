import React from 'react'
import {render} from 'react-dom'
import Button from './Button'

export default function Upgrade(props){
        return(
            <div className="Upgrade">
                {props.upgrade.name} (x{props.upgrade.income} cookies/s)
                <Button  
                text={`Buy (${props.upgrade.cost})`}
                onClick={props.onPurchase}
                isDisabled={props.counter<props.upgrade.cost}
                />
            </div>
        )
}

