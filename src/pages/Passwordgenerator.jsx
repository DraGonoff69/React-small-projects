import React, { useState, useCallback,useEffect,useRef } from 'react';

const Passwordgenerator = () => {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [symAllowed, setSymAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numAllowed) str += '0123456789';
    if (symAllowed) str += '!@#$%^&*()_+~`[]{}';

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, symAllowed, setPassword]);

  const copyToClipboard = useCallback(() => {
    alert('Password copied to clipboard');
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {passwordGenerator()}, [length, numAllowed, symAllowed, setPassword]);
  return (
    <div className="flex items-center justify-top min-h-screen bg-black">
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3 text-2xl">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder="Password" readOnly 
          ref={passwordRef}
          />
          <button className="outline-none bg-blue-600 text-white px-3 py-0.5 shrink hover:bg-blue-300 hover:cursor-pointer" onClick={copyToClipboard}>Copy</button>
        </div>
        <div className="flex text-sm gap-x-3">
          <div className="flex items-center gap-x-1">
            <input type="range" min={8} max={100} value={length} className='cursor-pointer' onChange={(e) => setLength(e.target.value)} />
            <label htmlFor="">Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={numAllowed}
              id='num'
              onChange={() => setNumAllowed((prev) => !prev)} //for true or false
            />
            <label htmlFor="num">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={symAllowed}
              id='sym'
              onChange={() => setSymAllowed((prev) => !prev)} //for true or false
            />
            <label htmlFor="sym">Symbols</label>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Passwordgenerator;
