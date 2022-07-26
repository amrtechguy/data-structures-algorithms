// imports
import {log} from './helpers.js';

/**
 * Big O notation rules:
 * 1. Worst case
 * 2. Remove constants
 * 3. Different terms (operations) for inputs (multiple)
 * 4. Drop non dominants
 */

// O(1)
const names = ['Amr', 'Ahmed', 'Aly'];
function logFirstElementOfArray(array)
{
    log(array[0]);

    /**
     * Complexity = Constant time (وقت ثابت)
     * O(1)
     * Operations = (1)
     **/ 
}
logFirstElementOfArray(names);

log('------------------------------');

// O(n)
const letters = ['a', 'b', 'c', 'd', 'e'];
function logAllElementsOfArray(array)
{
    for(let x of array)
    {
        log(x);
    }

    /**
     * Complexity = Linear time (وقت خطى)
     * O(n)
     * Operations = (Number of Elements)
     **/ 
}
logAllElementsOfArray(letters);

log('------------------------------');

// O(a + b)
const AfricanCountries = ['Egypt', 'Sudan', 'Morocco'];
const AsianCountries = ['Japan', 'China'];
function logAllElementsOfTwoArrays(array1, array2)
{
    for(let x of array1)
    {
        log(x);
    }

    for(let y of array2)
    {
        log(y);
    }

    /**
     * Complexity = ...
     * O(a + b)
     * Operations = (Number of  of first array + Number of  of second array)
     **/ 
}
logAllElementsOfTwoArrays(AfricanCountries, AsianCountries);

log('------------------------------');

// O(n^2)
const boxes = [1, 2, 3];
function logAllPairsOfArray(array)
{
    for(let x of boxes) // O(n)
    {
        for(let y of boxes) // O(n)
        {
            log(x + ', ' + y);
        }
    }

    /**
     * Complexity = Quadratic time (وقت تربيعى)
     * O(n * n) = O(n^2)
     * Operations = (Number of Elements * Number of Elements)
     **/ 
}

logAllPairsOfArray(boxes);

log('------------------------------');

// The most dominant item
function printAllNumbersThenAllPairSums(numbers)
{
    log('The numbers:');
    // O(n)
    numbers.forEach(number => { 
        log(number);
    });

    // O(n^2)
    numbers.forEach(x => {
        numbers.forEach(y => {
            log(x + y);
        });
    });

    /**
     * Complexity = the most dominant = Quadratic time (وقت تربيعى)
     * O(n + n^2) = O(n^2)
     * o(n^2) is the most dominant
     **/ 
}

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]);

log('------------------------------');

// The worst case ever (Factorial n) = O(n!)
// adding a loop for every element in the array


/**
 * Space complexity
 * 1. Ignore parameters
 * 2. What causes space complexity?
 * - Variable = 1
 * - Data Structure = 1
 * - Function Calls = 1
 * - Memory Allocation (Heap) = 1
 * 3. Ignore constant time
 */

function booo(n)
{
    for(let i = 0; i < n.length; i++)
    {
        log("Booo!");
    }

    /**
     * Space complexity = O(1)
     * space of variable i (let i = 0);
     */
}

booo([1, 2, 3, 4, 5]);

function arrayOfNTimes(n)
{
    let hiArray = [];

    /**
     * loop is O(n)
     * Fill the array with 'hi' of n times
     * Igonre the constant time of i = 0
     */
    for(let i = 0; i < n; i++)
    {
        /**
         * each item is considered a memory space
         */
        hiArray[i] = 'hi';
    }

    return hiArray;
}

arrayOfNTimes(5);   // O(n)