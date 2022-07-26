// imports
import {log} from './helpers.js';

/**
 * Data Structure: Array (Static & Dynamic)
 */
const friends = ['Amr', 'Mahmoud', 'Hatem', 'Hassan'];

log('-----------------------------------------------------------');
log('- Array Operations');
log('-----------------------------------------------------------');

/**
 * Operations
 */
log(friends);

// Looking up
// O(1)
log(`The third friend is: ${friends[2]}`);

// add to the end
// Static array -> O(1)
// Dynamic array -> O(n)
friends.push('MUhammed');

// delete from the end
// O(1)
friends.pop();

// add to the beginning
// O(n)
friends.unshift('Essam');

// add at the middle
// O(n/2) -> O(n)
friends.splice(1, 0, 'Hossam');

// delete from the beginning
// O(n)
friends.shift();

// delete & add to the middle
// O(n)
friends.splice(1, 1, ['Aly','Ahmed']);

// print the array
log(friends);

log('-----------------------------------------------------------');
log('- Array Implementation');
log('-----------------------------------------------------------');

/**
 * Array Implementation
 */
class MyArray
{
    constructor()
    {
        this.length = 0;
        this.data = {};
    }

    at(index)
    {
        return this.data[index];
    }

    push(item)
    {
        this.data[this.length] = item;
        return ++this.length;
    }

    pop()
    {
        if(this.length > 0)
        {
            const lastItem = this.data[this.length - 1];
            delete this.data[this.length - 1];
            this.length--;
            return lastItem;
        }
    }

    shiftItems(index)
    {
        for(let i = index; i < this.length - 1; i++)
        {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;  
    }

    delete(index)
    {
        const itemToDelete = this.data[index];
        this.shiftItems(index);
        return itemToDelete;
    }
}

const newArray = new MyArray();
newArray.push("Amr");
newArray.push("Alaa");
newArray.push("Hatem");
newArray.delete(0);
log(JSON.stringify(newArray));

log('-----------------------------------------------------------');
log('- Challenge1: Reverse a string');
log('-----------------------------------------------------------');

/**
 * Create a function that reverses a string:
 * input: 'Hi my name is Amr'
 * output: 'rmA si eman ym iH'
 */
function reverseString(str)
{
    // validation
    if(!str || str.length < 2 || typeof str !== 'string')
    {
        return 'Invalid string';
    }

    const backwards = [];
    const lastIndex = str.length - 1;
    for(let i = lastIndex; i >= 0; i--)
    {
        backwards.push(str[i]);
    }
    return backwards.join('');
}

function reverseString2(str)
{
    return str.split('').reverse().join('');
}

const reversedString3 = str => [...str].reverse().join('');
log('input: Hi my name is Amr');
log('output: ' + reversedString3('Hi my name is Amr'));

log('-----------------------------------------------------------');
log('- Challenge1: Merge sorted arrays');
log('-----------------------------------------------------------');

/**
 * Merge 2 sorted arrays:
 * input: ([0, 3, 4, 31], [4, 6, 30])
 * output: [0, 3, 4, 4, 6, 30, 31]
 */
function mergeSortedArrays(arr1, arr2)
{
     
}

log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));