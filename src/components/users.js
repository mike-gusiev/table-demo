import React from 'react';
import {Table, Dropdown} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';

import {changeStatus} from '../ducks/users'
import {search} from '../utils';

const Users = () => {

    const term = useSelector((state) => state.termData);
    const people = (useSelector((state) => state.people));
    const modeValue = useSelector((state) => state.mode);
    const dispatch = useDispatch();

    const filtered = search(people, term, modeValue);
    const items = filtered.map((item) => {
        return (
            <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.role}</td>
                <td>{item.date}</td>
                <td>{<Dropdown>
                    <Dropdown.Toggle variant="outline-secondary" style={{width: '100%'}} id="dropdown-basic">
                        {item.status}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => {
                            dispatch(changeStatus('Screen', item.id))
                        }}>Screen</Dropdown.Item>
                        <Dropdown.Item onClick={() => {
                            dispatch(changeStatus('Scheduled', item.id))
                        }}>Scheduled</Dropdown.Item>
                        <Dropdown.Item onClick={() => {
                            dispatch(changeStatus('Explored', item.id))
                        }}>Explored</Dropdown.Item>
                        <Dropdown.Item onClick={() => {
                            dispatch(changeStatus('Hire', item.id))
                        }}>Hire</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>}</td>
            </tr>
        )
    });

    const statistics = (x) => {
        const word = x;
        const result = people.filter((x) => x.status === word);
        return result.length;
    };

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <h6>hire: {statistics("Hire")}</h6>
                <h6>Screen: {statistics("Screen")} </h6>
                <h6>Scheduled: {statistics("Scheduled")} </h6>
                <h6>Explored: {statistics("Explored")} </h6>
            </div>
            <Table striped bordered hover style={{width: '70vw'}}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Connected on</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {items}
                </tbody>
            </Table>
        </div>
    )
};

export default Users;