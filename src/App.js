import logo from './logo.svg';
import './App.css';

function App() {
  
 // const student1 ={
 //   name:"raman",
 //   age:12,
  //  city:"jamshedpur",

 // };
 //const student2 ={
  //name:"raman",
  //age:12,
  //city:"jamshedpur",

 //};
 // const fun1 = () => {
 //   const num1 = 1;
 //   const num2 = 2;
  //  const sum= num1 + num2;
 //   console.log(sum);

 // };
 // if(student1.name === student2.name){
 //   fun1();
 // }else{

//  }

//let obj={}
//console.log(obj);
//for(let i=0;i<=5;i++){
 // obj[i]=value[i];
  
//}



//const arr1 = [1,2,3,4,5,6];
//for (let item of arr1){
 // console.log(item);
//}
//{
 // const people =[
   // {name:"jasmine",age:30},
   // {name:"john",age:25},
   // {name:"rana",age:32},
 // ];
 // student.forEach((people)=>
// {});

  //const employee={
    //name:"jasmine",
   //age:30,
    //occupation:"Engineer",
  //};

 //for (const key in employee){
    //if(employee.hasOwnproperty(key)){
     // console.log('${key}: ${employee[key]}');
   // }
  //}
//}

//const employee= [
 // { name:"Alice",age:30,salary:50},
 // {name:"Bob",age:25,salary:45},
 // {name:"Charlie",age:35,salary:55},
  //{name:"David",age:28,salary:48},
//];
//const mappedEmployees= employee.map((item)=>({
   // ...item,
    //salary:item.salary+100,
//}));
//console.log("employee",employee);
//console.log("mappedEmployees",mappedEmployees);


const products=[
  { id:1001,name:"Laptop",price:1000,category:"Electronics"},
  { id:1002,name:"Shirt",price:50,category:"Clothing"},
  { id:1003,name:"Coffee Maker",price:80,category:"Home Appliances"},
  { id:1004,name:"Headphones",price:200,category:"Electronics"},
  { id:1005,name:"Pants",price:60,category:"Clothing"},
];
const filteredProducts =products.filter((item)=> {
  return item.category ==="Clothing";
});
console.log("filteredProducts", FilteredProducts);

const foundProducts =products.find((item) => {
  return item.id === 1002;
});



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
