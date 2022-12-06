import { Component } from "react";
import check from './check.png'

export class GroceryList extends Component{
    state = {
        userInput: '',
        groceryList: []
    }
    onChandeEvent(e){
        this.setState({userInput: e})
    }
    addItem(listItem){
        if(listItem === ""){
            alert('Please, enter an item!')
        }
        else{
            let listArray = this.state.groceryList;
            listArray.push(listItem);
            this.setState({groceryList: listArray, userInput: ''})
        }
    }
    crossedWord(event){
        const li = event.target;
        li.classList.toggle('crossed')
    }
    deleteItem(){
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState({groceryList: listArray})
    }
    keyEnter(event){
    event.preventDefault();
    }
    render(){
        return(
            <div>
                <form onSubmit={this.keyEnter}>
                <div className="block">
                <input type="text"
                placeholder="What would you like to buy today?"
                onChange={(e) => {this.onChandeEvent(e.target.value)}}
                value={this.state.userInput}/>
            </div>

                <div className="block">
                <button className="btn add" onClick={() => this.addItem(this.state.userInput)}>ADD</button>
                </div>
                <ul>
                {this.state.groceryList.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}>
                        <img src={check} width="20px" alt="checkmark"/>
                        {item}
                    </li>
                )
                )}
                </ul>

                <div className="block">
                <button className="btn delete" onClick={() => this.deleteItem()}>DELETE</button>
                </div>
                </form>
            </div>
        )
    }
}