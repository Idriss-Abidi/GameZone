// import React from 'react'
import Codenames from "../components/Codenames"
import Cryptage from "../components/Cryptage"
import Pwd from "../components/Pwd"
import Mirror from "../components/Mirror"
const Games = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div> 

     <div id="FirstDiv" className="container mx-auto px-20  mb-2 flex flex-col items-center py-30">
     <Cryptage/>
     <Mirror/>
     <Codenames />
     <Pwd/>
     </div>

    </div>
  )
}

export default Games