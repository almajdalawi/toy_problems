/**
 * adding custom functions into native array
 * 1- sort function
 * 2- get first element
 * 3- get last element
 * 4- search for value
 */

//  TODO

emptyArrayError = 'Empty Array!'


Array.prototype.customSort = function () {
    // https://www.geeksforgeeks.org/insertion-sort/

    let n = this.length
    if (n == 0) return Promise.reject(new Error(emptyArrayError))

    let i, key, j;
    for (i = 1; i < n; i++) {
        key = this[i];
        j = i - 1;

        while (j >= 0 && this[j] > key) {
            this[j + 1] = this[j];
            j = j - 1;
        }
        this[j + 1] = key;
    }
    return this
}


Array.prototype.getFirstElement = function () {
    if (!this.length) return Promise.reject(new Error(emptyArrayError))

    return this[0]
}


Array.prototype.getLastElement = function () {
    if (!this.lingth) return Promise.reject(new Error(emptyArrayError))

    return this[this.length - 1]
}


Array.prototype.search = function (wanted) {
    if (!this.length) return Promise.reject(new Error(emptyArrayError))

    let allResults = []
    this.forEach((element, index) => {
        if (element === wanted) {
            let result = {}
            result.index = index
            result.value = element
            allResults.push(result)
        }
    })

    if (!allResults.length) return Promise.reject(new Error('Not Found!'))
    else return allResults
}

Array.prototype.searchArrOfObj = function (key, value) {
    if (!this.length) return Promise.reject(new Error(emptyArrayError))

    let allResults = []
    this.forEach((element) => {
        if (element[key] === value) {
            allResults.push(element)
        }
    })

    if (!allResults.length) return Promise.reject(new Error('Not Found!'))
    else return allResults
}



///////////////////////////////////



arr = [2, 6, 8, 4, 9, 2, 0, 4, 93, - 1]
arr2 = [1]
arr3 = []
arr4 = [true, 1, 'word']
arr5 = [1, 2, 3, 'word', 4, 2]
arr6 = [
    { 'brand': 'BMW', 'Year': 2015, 'price': 25000 },
    { 'brand': 'Audi', 'Year': 2012, 'price': 15000 },
    { 'brand': 'Mercedes', 'Year': 2020, 'price': 45000 },
    { 'brand': 'Porsche', 'Year': 2022, 'price': 70000 },
    { 'brand': 'BMW', 'Year': 2012, 'price': 18000 },
]

describe('customSort', () => {
    it('sorts the array', () => {
        expect(arr.customSort()).toEqual([-1, 0, 2, 2, 4, 4, 6, 8, 9, 93]);
        expect(arr2.customSort()).toEqual([1]);
    });
    it('throws an error', () => {
        expect(arr3.customSort()).rejects.toThrow(emptyArrayError);
    });
})

describe('getFirstElement', () => {
    it('returns the first element of the array', () => {
        expect(arr5.getFirstElement()).toEqual(1);
        expect(arr4.getFirstElement()).toEqual(true);
    })
    it('throws an error', () => {
        expect(arr3.getFirstElement()).rejects.toThrow(emptyArrayError);
    })
})

describe('getLastElement', () => {
    it('returns the last element of the array', () => {
        expect(arr5.getLastElement()).toEqual(2);
        expect(arr4.getLastElement()).toEqual('word');
    })
    it('throws an error', () => {
        expect(arr3.getLastElement()).rejects.toThrow(emptyArrayError);
    })
})

describe('getSearchElement', () => {
    it('returns an array of objects with the keys (value, index)', () => {
        expect(arr5.search(2)).toEqual([{ index: 1, value: 2 }, { index: 5, value: 2 }]);
        expect(arr5.search(1)).toEqual([{ index: 0, value: 1 }]);
        expect(arr5.search('word')).toEqual([{ index: 3, value: 'word' }]);
        expect(arr2.search(1)).toEqual([{ index: 0, value: 1 }]);
    })
    it('throws an error', () => {
        expect(arr5.search('1')).rejects.toThrow('Not Found!');
        expect(arr3.search(1)).rejects.toThrow(emptyArrayError);
    })
})

describe('searchArrOfObj', () => {
    it('returns the last element of the array', () => {
        expect(arr6.searchArrOfObj('Year', 2022)).toEqual([
            { 'brand': 'Porsche', 'Year': 2022, 'price': 70000 }
        ]);
        expect(arr6.searchArrOfObj('brand', 'BMW')).toEqual([
            { 'brand': 'BMW', 'Year': 2015, 'price': 25000 },
            { 'brand': 'BMW', 'Year': 2012, 'price': 18000 }
        ]);
    })
    it('throws an error', () => {
        expect(arr3.searchArrOfObj()).rejects.toThrow(emptyArrayError);
    })
})
