import React from 'react';
import { SelectField, SelectContainer} from './styled';

function SelectGender() {
    return (
        <SelectContainer>
            <SelectField>
                <option value="0">Select by genre:</option>
                <option value="1">Romances</option>
                <option value="2">Comedies</option>
                <option value="3">Horror</option>
                <option value="4">Documentaries</option>
                <option value="5">Action</option>                   
            </SelectField>
        </SelectContainer>
    )
}

export default SelectGender
