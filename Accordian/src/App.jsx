import Accordian from "./Accordian";

function App() {
  const writeup = ["Is the app available on all devices?",
    "How does the contact management feature help me keep track of clients?",
    "Can i customize the dashboards and reporting feature to display the metrics that are most important to my businees",
    "Can i collaborate with my team in real-time using all tools?",
    "How does the task management delegate tasks to my team and track progress?"
  ]

  return (
    <div className="container px-3 shadow-2xl bg-[#161616] text-white">
      <h1 className="text-center text-4xl py-4">Frequently Asked Questions</h1>
    {writeup.map((content) => (
      
        <Accordian content={content}/>   
      

    ))}
    </div> 
      

   
   
   
  )
}

export default App;
