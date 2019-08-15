/* Types */
export const START = 'START';
export const STATUS = 'STATUS';

const users = [
    {id: 0, name: 'Andy', role: 'Manager', date: "2019-08-14", status: "Hire"},
    {id: 1, name: 'Andy', role: 'Engineer', date: "2019-08-24", status: "Screen"},
    {id: 2, name: 'Mike', role: 'Sales', date: "2019-08-04", status: "Hire"},
    {id: 3, name: 'Andrew', role: 'Engineer', date: "2018-08-14", status: "Screen"},
    {id: 4, name: 'Dasha', role: 'Manager', date: "2012-05-14", status: "Scheduled"},
    {id: 5, name: 'Masha', role: 'Customer Support', date: "2019-08-14", status: "Hire"},
    {id: 6, name: 'Randy', role: 'Engineer', date: "2019-08-17", status: "Explored"},
    {id: 7, name: 'Oleg', role: 'Manager', date: "2019-03-14", status: "Hire"},
    {id: 8, name: 'Pavel', role: 'Sales', date: "2017-08-14", status: "Explored"},
    {id: 9, name: 'Dima', role: 'Engineer', date: "2019-08-15", status: "Hire"},
];


/* Reducers */
export const usersReducer = (state = users, action) => {
    switch (action.type) {
        case START:
            return state;
        case STATUS: {
            let {status, id} = action.payload;
            let stateCopy = [...state];
            stateCopy[id].status = status;
            return [
                ...stateCopy
            ];
        }
        default:
            return state;
    }
};

/* Actions */
export const changeStatus = (status, id) => {
    return {
        type: STATUS,
        payload: {status: status, id: id}
    }
};

export const start = () => {
    return {
        type: START
    }
};
