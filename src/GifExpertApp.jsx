
import {useState} from 'react';
import { AddCategory, GifGrid } from './components';
export const GifExpertApp = () => {
  const [categories, setcategories] = useState(['One Puch']);
  const onAddCategory = (newCategory) =>{
    if (categories.includes(newCategory)) return;
    setcategories(cat=> [ newCategory , ...cat]);
  }
  return (
    <>
        <h1> GIFT EXPERT APP  </h1>
        <AddCategory 
        onNewCategory ={(event) =>onAddCategory(event)} 
        // setcategories={setcategories} 
        />
        {/* <button onClick={onAddCategory}>Agregar</button> */}
          {
            categories.map(category =>(
              <GifGrid 
                    key={category} 
                    category={category}/>
            ))
          }
    </>
  )
}
