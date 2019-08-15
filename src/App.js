import React, {useEffect} from 'react';
import styled from 'styled-components';

import {Users, Search} from './components/index';
import {start} from './ducks/users'

const Wrapper = styled.section`
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const App = () => {

    useEffect(() => {
        start()
    });

    return (
        <Wrapper>
            <Search/>
            <Users/>
        </Wrapper>
    );
};

export default App;

