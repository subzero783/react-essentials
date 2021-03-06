
import React, { useState, useEffect, useReducer } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import {
  Home, 
  About,
  Events,
  Contact,
  Services,
  CompanyHistory, 
  Location,
  Whoops404
} from './pages'



function SecretComponent(){
  return <h1>Super secret information for authorized users only</h1>
}

function RegularComponent(){
  return <h1>Everyone can see this component</h1>
}


function App({login}) {

  // const [data, setData] = useState(null)
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(null)

  // useEffect(()=>{
  //   if(!login) return
  //   setLoading(true)
  //   fetch(`https://api.github.com/users/${login}`)
  //     .then((response)=> response.json())
  //     .then(setData)
  //     .then(()=>setLoading(false))
  //     .catch(setError)
  // }, [login])

  // if(loading) return <h1>Loading...</h1>

  // if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>

  // if(!data) return null

  // return(
  //   <div>
  //     <h1>
  //       {data.name}
  //     </h1>
  //     <p>{data.location}</p>
  //     <img alt={data.login} src={data.avatar_url} />
  //   </div>
  // )

  
    
  

  // const [emotion, setEmotion] = useState("happy");
  // const [secondary, setSecondary] = useState("tired");

  // useEffect(()=>{
  //   console.log(`It's ${emotion} around here!`)
  // }, [emotion])
  
  // useEffect(()=>{
  //   console.log(`It's ${secondary} around here!`)
  // }, [secondary])

  // const [checked, setChecked] = useState(false)

  // const [checked, toggle] = useReducer(
  //   (checked) => !checked,
  //   false
  // )


  // return(
  //   <>
  //     <input 
  //       type="checkbox" 
  //       onChange={toggle}
  //     />
  //     <p>
  //       {checked ? "checked" : "not checked"}
  //     </p>
  //   </>
  // )

  // return(
  //   <>
  //     <h1>Current emotion is {emotion} and {secondary}.</h1>
  //     <button onClick={()=>setEmotion('happy')}>Make Happy</button>
  //     <button onClick={()=>setSecondary('crabby')}>Make Crabby</button>
  //     <button onClick={()=>setEmotion('frustrated')}>Frustrate</button>
  //     <button onClick={()=>setEmotion('enthusiastic')}>Enthuse</button>
  //   </>
  // )

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

  return(
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}>
          <Route path="services" element={<Services/>} />
          <Route path="history" element={<CompanyHistory/>} />
          <Route path="location" element={<Location/>} />
        </Route>
        <Route path="/events" element={<Events />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<Whoops404 />}/>
      </Routes>
    </div>
  )
}

export default App
