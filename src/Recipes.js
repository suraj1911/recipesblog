import React from 'react';
import style from './recipes.module.css';

const Recipes = ({title,image,ingredients}) => {


    return(
        <div className={style.recipes}>
            <h4>{title}</h4>
            <ol>
             {ingredients.map((ing,index) => (
                    <li key={index}>{ing.text}</li>
                ))} 
            </ol>
            <img className={style.image} src={image} alt={title} />
        </div>
    );

   
}

export default Recipes;