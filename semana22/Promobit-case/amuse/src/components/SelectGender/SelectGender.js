import React, {useContext, useState} from 'react';
import { SelectField, SelectContainer} from './styled';
import { GlobalStateContext } from "../../global/GlobalStateContext";

const SelectGender = (props) => {
    const { setCurrentCategory, genres} = useContext(GlobalStateContext);    
    const [selectedCategoryId, setSelectedCategoryId] = useState([]); 
    
    const onSelectCategory = (id) => {
        setSelectedCategoryId(id);
    }  

    return (
        <SelectContainer>         
            <SelectField>
                <option disable selected>Select by genre:</option>
                {genres.map(genre=>(                 
                   <option 
                    key={genre.id} value={genre.id}  
                    onClick={() => onSelectCategory(27)}                              
                    >                   
                      {genre.name}                   
                   </option>
                   
                ))}                                   
            </SelectField>
        </SelectContainer>
    )
}

export default SelectGender
