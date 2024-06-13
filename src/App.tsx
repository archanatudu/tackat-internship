import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data,setData] = useState<number>(0);
  const [numberData,setNumberData] =useState<number>(0);

  const numberArray = [1,2,3,4,5,6,7,8];

  const people = [
    { name: "john", age:32,status:"active"},
    { name: "mike", age:30,status:"inactive"},
    { name: "nick", age:31,status:"active"},
  ];

  useEffect(() => {
    addData();
  },[numberData]);

  const addData =()=> {
    const oldData = data;
    const newData = oldData + 1;
    setData(newData);
    console.log(newData);
  };

  const decrementData = () => {
    setNumberData(numberData-1);
  };

  return (
    <>
    <button  title="title" onClick={addData} className={'number ${data}'}>
      add Data 
    </button>

          <div>incremented Data: {data}</div>
          <br/>

          <button onClick={decrementData} className={'decrement ${numberData}'}>
            decrement
          </button>
          <div>decremented Data:{numberData}</div>
          {/*map method start*/}

          {numberArray.map((item,i)=>{
            return(
            <div key={i}>
              <div>{item}</div>
            </div>
            );
          })}

          {/* map with object array*/}

          {people.map((item,i) =>{
            return (
              <div key={i}>
                {item.status === "active" && (
                  <>
                    <div>name: {item.name}</div>
                    <div>Age: {item.age}</div>
                    <br/>
                  </>
                )}
              </div>
            );
          })}
          <hr />

          {people.map((item,i) =>{
            return (
              <div key={i}>
                {item.status === "active" ? (
                  <>
                    <div>name: {item.name}</div>
                    <div>Age: {item.age}</div>
                    <br/>
                  </>
                ):
                <>
                <div>inactive</div>
                <br />
                </>}
              </div>
            );
          })}
    </>
  );
}

export default App;
