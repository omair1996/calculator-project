import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('0');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {

        const sanitizedInput = input.replace(/([+\/*]|\-\-)+/g, (match) =>
          match.slice(-1)
        );
        setResult(eval(sanitizedInput));
        setInput(String(eval(sanitizedInput)));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('0');
    } else if (value === '.') {
      if (input.endsWith('.')) {
        return input
        
      } else {
      setInput((prevInput) => prevInput + value);
      }
    } else {
      setInput((prevInput) => prevInput + value);

    }
   
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
          <h1>Calculate With Umair Calculator</h1>
            <div className="card-body"  style={{backgroundColor:"green"}}>
            <input
                type="text"
                className="form-control mb-2"
                value={input}
                readOnly
              />
              <div id = "display"className="text-right mb-2">
                <strong>{result}</strong>
              
              </div>
              <div className="row">
                <div className="col-md-3" style={{margin:'10px 0'}}>
                  <button
                  id="zero"
                    className="btn btn-secondary  btn-block"
                    onClick={() => handleButtonClick('0')}
                  >
                    0
                  </button>
                </div>
                <div className="col-md-3" style={{margin:'10px 0'}} >
                  <button
                  id="nine"
                    className="btn btn-secondary btn-block"
                    onClick={() => handleButtonClick('9')}
                  >
                    9
                  </button>
                  </div>
                  <div className="col-md-3" style={{margin:'10px 0'}}>
                  <button
                  id="eight"
                    className="btn btn-secondary btn-block"
                    onClick={() => handleButtonClick('8')}
                  >
                    8
                  </button>
                  </div>
                <div className="col-md-3" style={{margin:'10px 0'}}>
                  <button
                  id="seven"
                    className="btn btn-secondary btn-block"
                    onClick={() => handleButtonClick('7')}
                  >
                    7
                  </button>
                  </div>
                <div className="col-md-3" style={{margin:'10px 0'}}>
                  <button
                  id="six"
                    className="btn btn-secondary btn-block"
                    onClick={() => handleButtonClick('6')}
                  >
                    6
                  </button>
                  </div>
                <div className="col-md-3" style={{margin:'10px 0'}}>
                  <button
                  id="five"
                    className="btn btn-secondary btn-block"
                    onClick={() => handleButtonClick('5')}
                  >
                    5
                  </button>
                  </div>
                <div className="col-md-3" style={{margin:'10px 0'}}>
                  <button
                  id="four"
                    className="btn btn-secondary btn-block"
                    onClick={() => handleButtonClick('4')}
                  >
                    4
                  </button>
                  </div>
                <div className="col-md-3" style={{margin:'10px 0'}}>
                  <button
                  id="three"
                    className="btn btn-secondary btn-block"
                    onClick={() => handleButtonClick('3')}
                  >
                    3
                  </button>
                  </div>
                <div className="col-md-3" style={{margin:'10px 0'}}>
                  <button
                  id="two"
                    className="btn btn-secondary btn-block"
                    onClick={() => handleButtonClick('2')}
                  >
                    2
                  </button>
                </div>
                <div className="col-md-3" style={{margin:'10px 0'}}>
                  <button
                  id="one"
                    className="btn btn-secondary btn-block"
                    onClick={() => handleButtonClick('1')}
                  >
                    1
                  </button>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-3" style={{margin:'10px 0'}}>
                  <button
                  id="add"
                    className="btn btn-primary btn-block"
                    onClick={() => handleButtonClick('+')}
                  >
                    +
                  </button>
                </div>
                <div className="col-md-3" style={{margin:'10px 0'}}>
                  <button
                  id="subtract"
                    className="btn btn-primary btn-block"
                    onClick={() => handleButtonClick('-')}
                  >
                    -
                  </button>
                </div>
                <div className="col-md-3" style={{margin:'10px 0'}}>
                  <button
                  id="divide"
                    className="btn btn-primary btn-block"
                    onClick={() => handleButtonClick('/')}
                  >
                    /
                  </button>
                </div>
                <div className="col-md-3" style={{margin:'10px 0'}}>
                  <button
                  id="multiply"
                    className="btn btn-primary btn-block"
                    onClick={() => handleButtonClick('*')}
                  >
                    *
                  </button>
                </div>
                <div className="col-md-3" style={{margin:'10px 0'}}>
                  <button
                  id="decimal"
                    className="btn btn-primary btn-block"
                    onClick={() => handleButtonClick('.')}
                  >
                    .
                  </button>
                </div>
                
                <div className="col-md-3" style={{margin:'10px 0'}}>
                  <button id="equals"
                    className="btn btn-danger btn-block"
                    onClick={() => handleButtonClick('=')}
                  >
                    =
                  </button>
                </div>
                <div className="col-md-3" style={{margin:'10px 0'}}>
                  <button
                  id="clear"
                    className="btn btn-light btn-block"
                    onClick={() => handleButtonClick('C')}
                  >
                    C
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
