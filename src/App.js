import React ,{useState}from 'react'
import "./App.css"



const App=()=> {
  const [result,setResult]=useState(" ");

  const handleClick =(e) =>{
    setResult(result.concat(e.target.name));

    }
    const Clear = () => {
      setResult("");
    }
    const backspace = () => {
      setResult(result.slice(0, result.length -1));
    }

    const Calculate = () => {
      try {
      setResult(eval(result).toString());
    } catch(err) {
      setResult("Error");
    }
  };

  return (
    <>
    <div className="container">
      <form>
        <input type="text" value={result}></input>
      </form>
      <div className="keypad" >
        <button  className='heighlight' onClick={Clear} id="Clear">Clear</button>
        <button  className='heighlight' onClick={backspace} id ="backspace">Delete</button>
        <button  className='heighlight' name="."onClick={handleClick}>.</button>

        <button  className='heighlight' name="/" onClick={handleClick}>/ </button>

        <button  className='heighlight' name="7" onClick={handleClick}>7</button>
        <button  className='heighlight' name="8" onClick={handleClick}>8</button>
        <button  className='heighlight' name="9" onClick={handleClick}>9</button>
        <button  className='heighlight' name="*"onClick={handleClick}>&times; </button>
        <button  className='heighlight' name="4" onClick={handleClick}>4</button>
        <button  className='heighlight' name="5"onClick={handleClick}>5</button>
        <button  className='heighlight' name="6" onClick={handleClick}>6</button>
        <button  className='heighlight' name="-"onClick={handleClick}>&ndash;</button>
        <button  className='heighlight' name="1"onClick={handleClick}>1</button>
        <button  className='heighlight' name="2" onClick={handleClick}>2</button>
        <button  className='heighlight' name="3"onClick={handleClick}>3</button>
        <button  className='heighlight' name="+"onClick={handleClick}>+</button>
        <button  className='heighlight' name="0"onClick={handleClick} id ="zero">0</button>
        <button  className='heighlight' onClick={Calculate} id ="result">=</button>



      </div>
    </div>
    </>
  );
};

export default App