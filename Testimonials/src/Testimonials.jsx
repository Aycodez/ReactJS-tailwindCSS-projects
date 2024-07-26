import { useState } from "react";
const Testimonials = () => {
    const [index, setIndex] = useState(0);
    const data = [
        {
            name: "Victor Nwafor",
            testimonial: "I highly recommend this product to everyone!"
        },
        {
            name: "Eddy Ogogo",
            testimonial: "This product has completely changed my life!"
        },
        {
            name: "Nate Vincent",
            testimonial: "I love this product so much, its the best i've ever had!"
        },

  ]
  function next(){
    setIndex((index + data.length -1) % data.length)   
  }
  function prev(){
    setIndex((index + 1) % data.length)
  }
  return (
    <div className="flex flex-col text-xl justify-between p-8
    items-center shadow-2xl">
        <p className="py-5 italic font-sans font-light">{data[index].testimonial}</p>
        <b className="text-center my-5">-{data[index].name}</b>
        <div className="flex w-full justify-between items-center">
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
        </div>
    </div>
  )
}

export default Testimonials;
