import React, { useState } from 'react';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import { SelectField, SelectContainer} from './styled';
//import data from '../data/animals.json';

const Categories = () => {
    const[value, setValue] = useState(null);

    return (
        <SelectContainer>
           <Dropdown 
            prompt='Select genre'
            options={data} 
            id='id'   
            label='name'         
            value={value}
            onChange={val => setValue(val)}
           />
        </SelectContainer>
    )
}

export default Categories
