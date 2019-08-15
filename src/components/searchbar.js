import React from 'react';
import {InputGroup, Button, FormControl} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';

import {change} from '../ducks/term';
import {mode} from '../ducks/searchMode';

const Search = () => {

    const dispatch = useDispatch();
    const term = useSelector((state) => state.termData);
    const modeValue = useSelector((state) => state.mode);

    const onSearch = (e) => {
        const value = e.target.value.toLowerCase();
        dispatch(change(value))
    };

    const reset = () => {
        dispatch(change(''))
    };

    const onChange = () => {
        dispatch(mode())
    };

    return (
        <div style={{display: 'flex', alignItems: 'center', marginTop: '20px'}}>
            <InputGroup className="mb-3" style={{width: '76vw'}}>
                <InputGroup.Prepend>
                    <Button variant='outline-secondary' onClick={onChange}>
                        {modeValue === true ? 'or' : 'and'}
                    </Button>
                </InputGroup.Prepend>
                <FormControl aria-describedby="basic-addon1" onChange={onSearch} value={term}
                />
                <InputGroup.Prepend>
                    <Button variant="outline-secondary" onClick={reset}>Reset</Button>
                </InputGroup.Prepend>
            </InputGroup>
        </div>
    )
};

export default Search;
