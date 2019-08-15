export const search = (items, term, modeValue) => {
    if (term.length === 0 || term === ' ') {
        return items;
    } else if (term.indexOf(' ') !== -1) {
        const query = term.split(' ');
        let result = items;
        let resultForOr = items;
        let orResult = [];

        orResult = resultForOr.filter((item) =>
            item.name.toLowerCase().indexOf(query[0]) > -1
            || item.role.toLowerCase().indexOf(query[0]) > -1
            || item.date.toLowerCase().indexOf(query[0]) > -1
            || item.status.toLowerCase().indexOf(query[0]) > -1
            || item.name.toLowerCase().indexOf(query[1]) > -1
            || item.role.toLowerCase().indexOf(query[1]) > -1
            || item.date.toLowerCase().indexOf(query[1]) > -1
            || item.status.toLowerCase().indexOf(query[1]) > -1
            || item.name.toLowerCase().indexOf(query[2]) > -1
            || item.role.toLowerCase().indexOf(query[2]) > -1
            || item.date.toLowerCase().indexOf(query[2]) > -1
            || item.status.toLowerCase().indexOf(query[2]) > -1
            || item.name.toLowerCase().indexOf(query[3]) > -1
            || item.role.toLowerCase().indexOf(query[3]) > -1
            || item.date.toLowerCase().indexOf(query[3]) > -1
            || item.status.toLowerCase().indexOf(query[3]) > -1
        );

        query.forEach((terms) => {
                result = result.filter((item) =>
                    item.name.toLowerCase().indexOf(terms) > -1
                    || item.role.toLowerCase().indexOf(terms) > -1
                    || item.date.toLowerCase().indexOf(terms) > -1
                    || item.status.toLowerCase().indexOf(terms) > -1
                );
            }
        );
        return modeValue === true ? orResult : result;
    } else {
        return items.filter((item) => {
            return item.name.toLowerCase().indexOf(term) > -1
                || item.role.toLowerCase().indexOf(term) > -1
                || item.date.toLowerCase().indexOf(term) > -1
                || item.status.toLowerCase().indexOf(term) > -1
        })
    }
};
