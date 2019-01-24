let isASC = sortType => {
    return sortType.toUpperCase() === 'ASC'
};

let isDESC = sortType => {
    return sortType.toUpperCase() === 'DESC'
};

/**
 * 
 * @param {number} prevValue 
 * @param {number} nextValue 
 * @param {string} sortType - asc/desc 
 */
let sortByString = (prevValue, nextValue, sortType = 'asc') => {
    if (isASC(sortType)) {
        return prevValue > nextValue;
    }

    if (isDESC(sortType)) {
        return prevValue < nextValue;
    }

    return prevValue > nextValue;
};

/**
 * 
 * @param {number} prevValue 
 * @param {number} nextValue 
 * @param {string} sortType - asc/desc 
 */
let sortByNumber = (prevValue, nextValue, sortType = 'asc') => {
    if (isASC(sortType)) {
        return prevValue - nextValue;
    }

    if (isDESC(sortType)) {
        return nextValue - prevValue;
    }

    return prevValue - nextValue;
};

/**
 * Return function responsible to sort values
 * @param {string} attribute 
 */
let proxySort = attribute => {
    if (typeof attribute === 'string') {
        return sortByString;
    }
    return sortByNumber;
};

let sort = (list, attribute, sortType) => {
    return list.sort((prev, next) => {
        const doSort = proxySort(prev[attribute]);
        return doSort(prev[attribute], next[attribute], sortType);
    });
};

const list = [{
    name: 'Daniel',
    ranking: 10
}, {
    name: 'Livia',
    ranking: 8
}, {
    name: 'Vera',
    ranking: 3
}, {
    name: 'Eudes',
    ranking: 11
}];

const result = sort(list, 'name', 'asc');
console.log(result);