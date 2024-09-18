import { useState,useEffect } from "react";

function Hello(){
    /* const [name,setname] = useState('joey')
    const changename = () =>{
        setname('top');
    }
    return <>
    <div> hello React by {name} </div>
    <button onClick={changename}>click here</button>
    </> */


   /*  const [product,setProduct] = useState(['java','php','c#','react','node.js'])
    
    return <>
    {product.length > 0 ? <div>มีข้อมูล</div> : <div>ไม่มีข้อมูล</div>}
    {product.map(item =>
        <div>{item}</div>
    )}
    </> */

    /* const [name , setname] = useState('');
    const showname = () =>{
        console.log(name)
    }
    return <>
        <input onChange={e=> setname(e.target.value)}/>
        <button onClick={showname}>
            show name
        </button>
    </> */

    /* const [value , setvalue] = useState('100')
    return <>
    <select onChange={e=>setvalue(e.target.value)}>
        <option value="100">Java</option>
        <option value="200">PHP</option>
        <option value="300">Nobe.js</option>
    </select>
    <div>{value}</div>
     </> */

    /*  const [value,setvalue] =useState();

     return<>
     <input type="checkbox" onClick={e=>setvalue(e.target.checked)}/> 
     {value ? <div> checkbox</div> : <div> unchecked </div>     }
     </> */

   /* const [items , setItems ] = useState([])
    useEffect(()=>{
        console.log('start page')
    },[])
    return<>
        <div> useEffect example </div>
    </> */
    const [items,setItems] = useState([]);
    useEffect(() => {
        console.log('start page');

    },[items]);

    const newItem = () => {
        setItems([1,3,5,7,9])
    }

    return <>
    <div>useEffect example</div>
    <button onClick={newItem}>
        add item
    </button>

    
    </>


}
export default Hello;