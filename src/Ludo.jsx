import { useState } from "react";
export default function Ludo(){
    let[Moves,SetMoves] = useState({blue : 0 , yellow : 0,green :0,red :0});
    let blueMoves = ()=>{
        SetMoves({...Moves,blue:Moves.blue+1});
    }
    let yellowMoves = ()=>{
        SetMoves({...Moves, yellow : Moves.yellow+1});
    }
    let greenMoves = ()=>{
        SetMoves({...Moves, green : Moves.green +1});
    }
    let redMoves = ()=>{
        SetMoves({...Moves,red: Moves.red+1});
    }
    return (
        <div>
            <h3>&hearts; Board &hearts;</h3>
            <p>Blue Moves = {Moves.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={blueMoves}>+1</button>
            <br />
            <p>Yellow Moves = {Moves.yellow}</p>
            <button style={{backgroundColor:"yellow",color:"black"}} onClick={yellowMoves}>+1</button>
            <br />
            <p>Green Moves = {Moves.green}</p>
            <button style={{backgroundColor:"green"}} onClick={greenMoves}>+1</button>
            <br />
            <p>Red Moves = {Moves.red} </p>
            <button style={{backgroundColor:"red"}} onClick={redMoves}>+1</button>
        </div>
    );
}