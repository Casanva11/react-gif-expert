import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['One Punch']);

    // console.log(categories);

    const onAddCategory = (newCateroy) => {
        // console.log('Valorant');
        console.log(newCateroy);        
        if ( categories.includes(newCateroy)) return;        
        // categories.push('Valorant'); No se hace así
        setCategories([newCateroy, ...categories]);
        // setCategories(cat => [...cat, 'Valorant']);
    }

    return(
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                // setCategories={ setCategories }
                onNewCategory= { (value ) => onAddCategory(value) }
            />

            <ol>
                {categories.map( category => (<GifGrid key={ category } category={category}/>))}
            </ol>

        </>
    )

};