import React,{useState} from 'react'
import './Layout.css';
import Output from './Output';

const Layout = (props) => {
    const [input, setinput] = useState('')
    const [result, setResult] = useState('')

    const handleClick=(event)=>{
    const value = event.target.value
    if(value === '='){
    if(input !== ' '){
    let result = ''
    try{
        result= eval(input)
    }
    catch(err){
        setResult('MATH ERROR')
    }
    if(result === undefined){
        setResult('MATH ERROR')
    }
    else{
    setResult(input + '=') 
    setinput(result)
    }
    }
    }
    else if (value === 'C'){
    setResult('');
    setinput('')
    }
    else if(value === 'DEL'){
    let str = input
    str= str.substr(0 , str.length - 1 )
    setinput(str)
    }
    else{
        setinput(input + value)
    }
    }
    return (
        <div className="calculator-body">
            <Output user={input} answer={result} />
        <div>
            <input type="button" value={'C'} onClick={handleClick} className="buttonC"></input>
            <input type="button" value={'DEL'} onClick={handleClick}  className="buttonC"></input>
            <input type="button" value={'('} onClick={handleClick}  className="buttonS"></input>
            <input type="button" value={')'}  onClick={handleClick} className="buttonS"></input>

            <input type="button" value={'7'} onClick={handleClick}  className="button"></input>
            <input type="button" value={'8'} onClick={handleClick}  className="button"></input>
            <input type="button" value={'9'} onClick={handleClick}  className="button"></input>

            <input type="button" value={'*'} onClick={handleClick}  className="buttonS"></input>
            
            <input type="button" value={'4'} onClick={handleClick}  className="button"></input>
            <input type="button" value={'5'} onClick={handleClick}  className="button"></input>
            <input type="button" value={'6'}  onClick={handleClick} className="button"></input>

            <input type="button" value={'-'} onClick={handleClick}  className="buttonS"></input>
        
            <input type="button" value={'1'} onClick={handleClick}  className="button"></input>
            <input type="button" value={'2'} onClick={handleClick}  className="button"></input>
            <input type="button" value={'3'} onClick={handleClick}  className="button"></input>
            
            <input type="button" value={'+'}  onClick={handleClick} className="buttonS"></input>

            <input type="button" value={'0'}  onClick={handleClick} className="button"></input>
            <input type="button" value={'.'}  onClick={handleClick} className="button"></input>
            <input type="button" value={'='}  onClick={handleClick} className="buttonE"></input>
            <input type="button" value={'%'}  onClick={handleClick} className="buttonS"></input>
            <input type="button" value={'/'}  onClick={handleClick} className="buttonS"></input>

        </div>
        </div>
    )
}

export default Layout
