
import React, { useState } from 'react'
import './App.css'



function SecretComponent(){
  return <h1>Super secret information for authorized users only</h1>
}

function RegularComponent(){
  return <h1>Everyone can see this component</h1>
}


function App() {

  const [emotion, setEmotion] = useState("happy");
  console.log(emotion);

  return(
    <>
      <h1>Current emotion is {emotion}.</h1>
      <button onClick={()=>setEmotion('happy')}>Happy</button>
      <button onClick={()=>setEmotion('frustrated')}>Frustrate</button>
      <button onClick={()=>setEmotion('enthusiastic')}>Enthuse</button>
    </>
  )

  // return(
  //   <>
  //     {authorized ? <SecretComponent/> : <RegularComponent/>}
  //   </>
  // )
  // return props.authorized ? <SecretComponent/> : <RegularComponent/>

  // if(props.authorized){
  //   return <SecretComponent/>
  // }else{
  //   return <RegularComponent/>
  // }
}

export default App
