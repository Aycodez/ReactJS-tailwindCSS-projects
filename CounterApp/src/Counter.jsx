import { useState, useEffect } from "react";
function Counter({isValid}){
    const [count, setCount] = useState(0);
    const increase =  () => {
        setCount(count + 1)
    }
    const decrease =  () => {
        setCount(count - 1)
    }


    return (
        <>
            <div className="text-white p-20">
                <h1 className="text-9xl font-bold">{count}</h1>
            </div>

            <section className="flex mt-20 justify-around w-[40rem] text-white">
                <button onClick={decrease} className="text-2xl rounded-[100px] px-[20px] py-[10px] bg-[#141517]">-</button>
                <button onClick={increase} className="text-4xl rounded-[100px] px-[20px] py-[10px] bg-[#141517]">+</button>

            </section>
        </>
    )
    
}
export default Counter;