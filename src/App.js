import React,{useEffect,useState} from 'react';
import './App.css';
import Recipes from './Recipes';

const App = () => {

  const APP_ID = '003626ec';
  const APP_KEY = 'c68443af69d6aaaf4acf34b8dd7fade0';
  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] = useState("");
  const [query,setQuery] = useState("chicken");
 
  useEffect(() => {
      getReceipe();
  },[query]);

  const getReceipe = async () =>{
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
  }

  const updateSearch = (e) =>{
      setSearch(e.target.value);
      console.log(search);
  }

  const getSearch = (e) =>{
      e.preventDefault();
      setQuery(e.target.value);
      setSearch('');
  }

  return (
    <div className="App">
      <form className='search-form' onSubmit={(e) => getSearch(e)}>
          <input className='search-bar' type="text" value={search} onChange={(e) => updateSearch(e)} />
          <button className="search-button" type='submit'>Search</button>
      </form>
        <div className="recipes">
        {recipes.map(recipe => (
            <Recipes key={recipe.recipe.label} 
                      title={recipe.recipe.label} 
                      image={recipe.recipe.image} 
                      ingredients={recipe.recipe.ingredients}/>
        ))}
        </div>
    </div>
  );
}

export default App;
