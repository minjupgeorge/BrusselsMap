import "./App.css";
import Header from "./components/header/Header";
import Mapbar from "./components/mapbar/Mapbar";
import { useEffect, useState } from "react";
import { SearchBar } from "./components/searchbar/SearchBar";
import { Searchform } from "./components/SearchForm";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [SelectData, setSelectData] = useState([]);


 useEffect(()=> {
  const getData = async() => {
    try{
    const response= await fetch(
      "data.json")

        const data = await response.json();
        console.log("inside fetch",data);
        setSearchResults(data);
      }
      catch(error)
      {console.log(error)}
    };
    getData();
    return()=>{

    };
  }, [searchQuery]);

const handleResultClick = () => {
    const selection = searchResults.find(
      (result) => result.distrfr === searchQuery
    );
    setSelectData(selection);
  };

  console.log("outside",SelectData);

  return (
    
    <div className="main-container">
      <Header />
      <Searchform
        setSearchQuery={setSearchQuery} 
        handleResultClick={handleResultClick}
      />

      <Mapbar searchResults={searchResults} SelectData={SelectData} />
    </div>
  );
}

export default App;

   
