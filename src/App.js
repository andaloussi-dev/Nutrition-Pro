import React , { useEffect, useState } from 'react';
import styles from './App.module.css'
import {Header , Search , Cards , Tabel} from './Components'
import { fetchData } from './Api/';
import "@fontsource/plus-jakarta-sans"

function App() {
  const [data,setData] = useState([]);
  const [query,setQuery] = useState('');

   useEffect(() => {
    if(query!==''){
      const fetchMyApi=async ()=>{
        let fetchedData =await fetchData(query);
        setData(fetchedData);
      }
       fetchMyApi();
    }
  }, [query]);

  return (
    <div className={styles.container}>
      <Header></Header>
      <Search changeQuery={setQuery} ></Search>
      <Cards data={data}></Cards>
      <Tabel  data={data} ></Tabel>
    </div>
  );
}

export default App;
