import React, {Component} from "react";
import {render} from "react-dom";
import Button from "./Button";
import Upgrade from './Upgrade'

class Increment extends Component{

    constructor(){
        super();
        this.state = {
            counter: 0,
            cookiesPerSecond:0,
            upgrades: [
                {
                    name: "Cursor ",
                    number: 0,
                    cost: 10, 
                    income: 1,
                },
                {
                    name: "Grandma ", 
                    number: 0,
                    cost: 20,
                    income: 2,
                },
                {
                    name: "Oven ", 
                    number: 0,
                    cost: 40,
                    income: 4,
                },
                {
                    name: "Mine ", 
                    number: 0,
                    cost: 500,
                    income: 20,
                },
                {
                    name: "Santa Claus ", 
                    number: 0,
                    cost: 1000,
                    income: 69,
                },
            ]     
        };
        this.onIncrement=this.onIncrement.bind(this); // what the fuck is this?
        // this.hireGrandma=this.hireGrandma.bind(this);
        // this.buyOven=this.buyOven.bind(this)
        this.refresh=this.refresh.bind(this);

        this.interval = setInterval(this.refresh, 100);
    }

    componentDidUpdate(previousProps, previousState){
        //run function when update changes

        if(this.areDifferentArrays(previousState.upgrades, this.state.upgrades)){
            
            let cookiesPerSecond1 = 0;
            this.state.upgrades.forEach(upgrade => {
                cookiesPerSecond1 += upgrade.income * upgrade.number
                console.log('cookiesPerSecond1:', cookiesPerSecond1)
            })
            
            // update the cookies per second depending on the "state" of upgrades
            this.setState({
                cookiesPerSecond: cookiesPerSecond1,
            })
        }

    }
    //compares 2 arrays, return true if they are different, and false if they are the same  
    areDifferentArrays(array1, array2){

        for (let i =0; i<array1.length; i++){
            //if the numbers are not the same, return true 
            if(array1[i].number !== array2[i].number){
                return true 
            }
        }
    return false     
    }

    render(){
        return(
            <div className="App">
                <h2 className="App_title">Counter: {Math.round(this.state.counter)}</h2>
                <h4 className="App_subtitle">Cookies /second: {this.state.cookiesPerSecond}</h4>
                <button className="cookieBtn" onClick={this.onIncrement}>Click Me</button>
                <div className="UpgradeList">
                {this.state.upgrades.map((upgrade, index) => (
                    <Upgrade 
                        key={index} 
                        upgrade={upgrade} 
                        onPurchase={() => this.hire(index)} 
                        counter={this.state.counter} 
                    />
                ))}
                </div>
            </div>     
        )
    }
//_________________________________________________________________

    //adds nr. of grandmas to counter
    refresh(){
        this.setState({
            // counter: this.state.counter + this.state.grandma.number /10 + ovenIncome,
            counter: this.state.counter + this.state.cookiesPerSecond / 10
        })
    }
//_________________________________________________________________
    //hire an upgrade of which the position is called through the index

    hire(index){
        //identify the upgrade to buy
        
        const upgradeList=[...this.state.upgrades];
        const upgrade = {...upgradeList[index]};


        // verify if we have enough cookies to buy
        if (this.state.counter >= upgrade.cost){

            const expense = this.state.counter - upgrade.cost

            upgrade.cost = Math.round(upgrade.cost*1.2);
            upgrade.number++;

            upgradeList[index] = upgrade;
        
            //update the state for:
                //spending the cookies
                //update our upgrade table 
           
            this.setState({
                counter: expense,
                upgrades: upgradeList,
                // cookiesPerSecond: this.calculateCookiesPerSecond(),
    
            })
        }
    }

//_________________________________________________________________
    // buy an oven
//     buyOven(){
        
//         const {oven} = this.state

//         if(this.state.counter > oven.cost){
//             this.setState({
//                 counter: this.state.counter - oven.cost,
//                 oven: {
//                     cost: Math.round(oven.cost * 1.2),
//                     number: oven.number + 1
//                 }
                
//             })
//         }
//     }
// //_________________________________________________________________
//     // hire a grandma
//     hireGrandma(){
        
//         const {grandma} = this.state

//         if(this.state.counter > grandma.cost){
//             this.setState({
//                 counter: this.state.counter - grandma.cost,
//                 grandma: {
//                     cost: Math.round(grandma.cost * 1.2),
//                     number: grandma.number + 1
//                 }
                
//             })
//         }
//     }
//_________________________________________________________________

    //will increment the state
    onIncrement(){
        this.setState({
            counter: this.state.counter +1,
        })
    }
}
export default Increment;