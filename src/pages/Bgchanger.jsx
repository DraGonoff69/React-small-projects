import React, { useState } from 'react';

const Bgchanger = () => {
    const [color, setColor] = useState("black");
    console.log(color);
    return (
        <div className={"w-full h-screen duration-200"} style={{ backgroundColor: color }}>
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                <div className="flex flex-wrap justify-center gap-2 shadow-xl bg-white rounded-xl px-3 py-2">
                    <button onClick={() => setColor("red")} className="outline-none px-4 rounded-full shadow-md" style={{ backgroundColor: "red" }}>Red</button>
                    <button onClick={() => setColor("green")} className="outline-none px-4 rounded-full shadow-md" style={{ backgroundColor: "green" }}>Green</button>
                    <button onClick={() => setColor("blue")} className="outline-none px-4 rounded-full shadow-md" style={{ backgroundColor: "blue" }}>Blue</button>
                </div>
            </div>
        </div>
    );
}

export default Bgchanger;
