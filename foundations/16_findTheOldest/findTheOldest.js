const findTheOldest = function(arr) {
    arr.sort((item, nextItem) => {
        if (item.yearOfDeath === undefined) item.yearOfDeath = 2026;
        if (nextItem.yearOfDeath === undefined) nextItem.yearOfDeath = 2026;
        return (item.yearOfBirth - item.yearOfDeath) > (nextItem.yearOfBirth - nextItem.yearOfDeath) ? 1 : -1;
    });
    return arr[0]
};

// Do not edit below this line
module.exports = findTheOldest;
