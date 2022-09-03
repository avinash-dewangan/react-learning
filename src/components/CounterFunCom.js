import React, { useState } from 'react'
import { useEffect } from 'react'

export default function CounterFunCom(props) {

    const [phase, setPhase] = useState('')

    useEffect(()=>{
        console.info("Functional Mounting : When first time Render")
        setPhase('When render')
    },[])

    useEffect(()=>{
        console.info("Functional DidMount : When update")
        setPhase('when update')
    },[props.number])

    useEffect(()=>{

        //cleanup Code
        return function cleanup() {
            setPhase('when Unmounting')
            console.info("ComponentWillUnmount Functional")  
        };
    },[])

  return (
    <>
    <h1>CounterFunCom Functional Based Component</h1>
    <hr/>
    <h2> Counter : {props.number}</h2>
    <h3>Phase : {phase}</h3>
    </>
  )
}
