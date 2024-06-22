import React ,{useState,useEffect} from 'react'

const Test1 = () => {
    const[val,setVal] =useState(0);
    useEffect(() => {
    console.log("value changed");
    },[]);

  return (
    <>
    <h1>Student</h1>
    <div>Test1</div>
    <button onClick ={() => {setVal(val+1)}}
    >Click{val}
    </button>
    </>
  )
}

export default Test1