import { useState } from "react";

const Accordian = ({content}) => {
    const [isActive, setActive] = useState(false);

    function open(){
        setActive(!isActive);
    }
    return(
        <div className="relative py-6 pr-10 border-b-2 border-b-slate-700">
            <h1 className="text-lg font-bold">{content}</h1>
            <div className="content w-[80%]">
                 {isActive && <p >Lorem ipsum dolor sit amet
                consectetur adipisicing elit. 
                Id quas eos iusto natus?Lorem ipsum dolor sit amet consectetur 
                adipisicing elit..</p>}
            </div> 
            <button onClick={open} className="text-4xl absolute -top-2 right-4">{isActive === true ? "-": "+" }</button>
        </div>
    )
    

           
  
}

export default Accordian;