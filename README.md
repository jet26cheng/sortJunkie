# Sorting Algorithms:

Lots of ways to sort data. 
Lots of sorting algorithms.

Core problem is that there are so many ways to sort data.

### Goals
- [x] Explore a more basic sorting algorithm
- [x] Explore a more complex sorting algorithm
- [x] See where to learn more.

You do not need to go into this section feeling like you've got to master from memory 10 different sorting algorithms.

We'll take a look at some of them and then we'll implement two. One of the simpler ones and one of the not so simpler ones.

#### What is sorting?
Rearraging items in a collection so that the items are in some kind of order.
Examples:
- [x] Sorting numbers from smallest to largest
- [x] Sorting names alphabetically
- [x] Sorting movies based on release year.
- [x] Sorting movies based on revenue.

There are many approaches to sort a stack of soccer cards.

#### Why Care?
- [x] Long-term area of computer science study
- [x] Great place to understand runtime
- [x] Great place to learn algorithm design
- [x] Common interview questions.

#### Why are there different algorithms?
Why isn't there one master sorting algorithm to rule them all?
- [] Different runtimes: O(n^2), O(n log n)
- [] Some perform better with different input:
  - eg, Some can sort almost-sorted data much faster
- [] Some are easier/harder to write/understand

Show students this website and play around with it.
[Sorting Algorithms Animations](https://www.toptal.com/developers/sorting-algorithms)

### Intro to Bubble Sort:
- Simple Algorithms. Quadratic time algos. Insertion, selection, bubble etc...
- Insertion, selection, bubble are not terribly efficient, but are easy to implement.
  
#### BubbleSort
A sorting algo where the largest values bubble up to the top.
Bubble in a soda can?
```js
[5, 3, 4, 1, 2]
```
```js
[3, 5, 4, 1, 2]
```
```js
[3, 4, 5, 1, 2]
```
```js
[3, 4, 1, 5, 2]
```
```js
[3, 4, 1, 2, 5]
```
There are some quirky sorts that don't involve comparing, but we're gonna focus on comparing here.

[Visual Algo Bubble Sort](https://visualgo.net/en/sorting)
What happens when an element (that is bubbling up) is no longer the big guy?
What happens if no swaps happen? There's a short circuit ending to stop the algo.
We know that the end of the array is sorted (sorted from the back), so we only need to repeat this process 1 fewer times (whatever the length of the array is -1).
We dont' have to go across the ENTIRE array every single time, but it's still not very efficient.

### BubbleSort Pseudocode:
- Loop with i from end of array towards beginning.
  - Loop with j from the beginning until i - 1
  - Check if arr[j] > arr[j+1], swap those two values!
- Return the sorted array.

Bubbling up to the top! Well, actually, sideways, but you know what I mean. 

### Writing Bubble Sort:
```js
function bubbleSort(arr) {
  // We are sorting in place. We are NOT making a new copy and sorting that.
  for (let i=0; i<arr.length; i++) {
    for (let j=0; j<arr.length; j++) {
      // Why are we looping twice?
      // Our i=0 loop will run 8 times, but that's not enough. Our first loop will only get ONE number to the top. We need to repeat that process.
    }
  }
}

console.log(bubbleSort([34, 5, 6, 2, 1, 99, 30]))
```
We can actually start without the j=0 loop and just write our logic in the i=0 loop.

```js
function bubbleSort(arr) {
  // We are sorting in place. We are NOT making a new copy and sorting that.
  for (let i=0; i<arr.length; i++) {
    // Let's take whatever element is at index of i and compare it to index of i+1 and see which one is greater.
    if (arr[i] > arr[i+1]) {
      // We want to swap if current element is greater than next element.
      // Old fashion way to swap (Pythonic way)...
      let temp = arr[i];
      arr[i] = arr[i+1]
      arr[i+1] = temp;
    }
    console.log("The current state of the arr", arr)
  }
  return arr;
}
// Let's see what this looks like.
console.log(bubbleSort([99, 34, 5, 6, 2, 1, 30]))
```

Word. 99 bubbled up to the top. Now we need to repeat that process again.
The ENTIRE for loop & if process needs to happen again. So, we'll write a nested loop.
Replace i with j...
```js
function bubbleSort(arr) {
  
  for (let i=0; i<arr.length; i++) {
    for (let j=0; j<arr.length; j++) {
      console.log("The current state of the arr", arr)
      // Replacing i with j...
      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1]
        arr[j+1] = temp;
      }
    }
    
  }
  return arr;
}
// Let's see what this looks like.
console.log(bubbleSort([99, 34, 5, 6, 2, 1, 30]))
```
Look at the how it was already sorted after n iterations, but our algos keeps running.
For every single element in the array, our i will run. And then we run again for every single element in the array with j.
Every time the outer loop runs, we end up with ONE element in the correct position. Example... 99 ends up in the correct spot.
So, now we don't need to compare anything to 99. 

Show students that we're trying to sort a sub version of the array (without 99, b/c 99 is in the right spot).
We want to sort a smaller piece each time. We want to prevent unnecessary iterations at the very end as well.

```js
function bubbleSort2(arr) {
  for (let i=0; i<arr.length; i++) {
    // arr.length-i
    for (let j=0; j<arr.length-i; j++) {
      console.log("The current state of the arr", arr)
      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1]
        arr[j+1] = temp;
      }
    }
    
  }
  return arr;
}
// Let's see what this looks like.
console.log(bubbleSort2([99, 34, 5, 6, 2, 1, 30]))
```

0
  0, 1, 2, 3
1
  0, 1, 2
2
  0, 1
3
  0

Let's see this tiny change.
Compare bubbleSort vs bubbleSort2.
We can add a count variable. Inside inner loop, count++
Make array longer. Test count.


```js
function bubbleSort3(arr) {
  // let swapped = false
  // while we have swapped something, keep running.
  // if we swapped, swapped = true and make sure the loop runs again.
  // if we never swapped anything, break out of the loop early.
}
console.log(bubbleSort3([99, 34, 5, 6, 2, 1, 30]))
```

Nirvana Nevermind. Bubble Sort Quick Optimization here we go.
```js
function bubbleSort3(arr) {
  let count = 0;
  for (let i=0; i<arr.length; i++) {
    let swapped = false;
    for (let j=0; j<arr.length-i; j++) {
      count++
      console.log("The current state of the arr", arr)
      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1]
        arr[j+1] = temp;
        swapped = true;
      }
    }
    if (swapped === false) break;
  }
  console.log("Total Count: ", count)
  return arr;
}
// Data that's close to be sorted
console.log(bubbleSort3([99, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
```

So, bubble sort can perform pretty well when data is NEARLY sorted if you have 
all the optimizations, but overall. It's WEMMY. 

### Other Quadratic Sorts:
- [x] Bubble sort is O(n^2) (quadratic)
Run bubbleSort, bubbleSort2, bubbleSort3 with [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] and check total count.
- [x] Other common O(n^2) sorts
  - Selection sort https://visualgo.net/en/sorting
  - Insertion sort https://visualgo.net/en/sorting
Insertion sort is slightly faster than bubble sort when our data is nearly sorted.
This is true because we don't have to make another iteration to tell if the data is sorted. Still quadratic. Worst case O(n^2). This info is truly useless though. 

Quadratic sorts don't scale well at all. Any time we're dealing with n^2 ANYTHING, scaling is not preferable.

Check out Big O graph and see n^2 scaling.
Try out bubble sort with 10,000,000 elements - it'll take some time.

We're gonna see a better algorithm NOW! 

# Intro to Merge Sort

### Intermediate Sorting Algos
- O(n log n) is fastest possible runtime
- (for a comparative sort, which is what we typically mean). Tangent: Radix...
- n because you have to touch every item in list once.
- log n because best possible strategy is divide and conquer method.
- Both merge sort and quick sort use this strategy.
- This has been proven with a mathematical proof - no COMPARATIVE sorting algo will be faster than O(n log n).

### Merge (not very intuitive)
- [x] It's a combination of two things: merging and sorting!
- [x] Exploits the fact that arrays of 0 or 1 element (in length) are always sorted. Example: [], [7]
- [x] Strategy: 
  - Decomposing array into smaller arrays of 0 or 1 elements
  - Building up a newly sorted array from those. 
  - Merging two sorted arrays is easy. How do we merge these two sorted arrays below???
  - [1, 3, 5] & [4, 6, 8]
  - https://visualgo.net/en/sorting
  - Very performant

### Implementing Merge Sort:

#### Merging Arrays:
- To implement merge sort, we first need a helper function.
- This helper should take in two sorted arrays and return a new array with all elements in sort order.
- Should run in O(n + m) time/space and be pure.

#### Merging Arrays Pseudocode
- Create empty out array.
- Start pointers at beginnings of arrays a and b
  - if a value <= b, push a value to out & increase a pointer
  - Else, push b value to out & increase b pointer.
Example: 
```js
// sorted arrays
 i          j
[5, 9, 20] [1, 3, 6]
[1]
 i             j
[5, 9, 20] [1, 3, 6]
[1, 3]
 i                j
[5, 9, 20] [1, 3, 6]
[1, 3, 4]
// etc...]
// Once j is exhausted, just tack on the rest of what's left of i...
```

Here we go! 
```js
function merge(arr1, arr2) {
  const results = [];
  let i = 0;
  let j = 0;
  // This is only gonna happen 1 time.
  if (arr1[i] < arr2[j]) {
    results.push(arr1[i])
    i++
  } else {
    results.push(arr2[j]);
    j++
  }
  return results;
}

// CHECK IT OUT
console.log(merge([5, 8, 20], [1, 3, 6]))
```

Since the above only happens one time... Let's slap a while loop on it.

```js
function merge(arr1, arr2) {
  const results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i])
      i++
    } else {
      results.push(arr2[j]);
      j++
    }
  }

  return results;
}

// CHECK IT OUT
console.log(merge([5, 8, 20], [1, 3, 6]))
```

Now we're ALMOST there. We've got some left overs.
Let's tack on the left overs into the results array.

```js
function merge(arr1, arr2) {
  const results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i])
      i++
    } else {
      results.push(arr2[j]);
      j++
    }
  }

  // Only ONE of these while loops will run.
  // If i broke the top while loop, j will run.
  // If j broke the top while loop, i will run.
  // Dealing with leftovers for arr1
  while (i < arr1.length) {
    results.push(arr1[i])
    i++
  }
  // Dealing with leftovers for arr2
  while (j < arr2.length) {
    results.push(arr2[j])
    j++
  }
  return results;
}
// WINNER WINNER CHICKEN DINNER
console.log(merge([5, 8, 20], [1, 3, 6]))
```

What if we had duplicates?
```js
// Test this to see if our merge algo works.
console.log(merge([5, 8, 8, 8, 8, 20], [1, 3, 6, 7, 7, 7, 7, 7]))
```

This merge algo will NOT work if our data is NOT SORTED.
This is our first step to implenting our merge - sort algo.
O(n + m).
[3 item array], [54 item array] = O(57)...

#### mergeSort Pseudocode
- [x] Recursively:
  - Split array into halves until you have arrays that have length of 0 or 1
  - Merge split arrays and return the merged & sorted array.


```js
// Attacking this with RECURSION.
function mergeSort(arr) {
  // base case
  // We stop trying to split when we have an array of length 0 or 1.
  if (arr.length <= 1) {
    return arr // We don't need to split it any further.
  }
  // typical case
  // arr has 2 or more elements, split it into two new arrays. Using slice to help.
  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid) // 0 to mid
  const right = arr.slice(mid) // mid to end

}

console.log(mergeSort(arr))
```

Okay. Let's take a look at Merge Sort in an Image:
![]()

Okay. So we need to make sure we're recursively calling mergeSort on the left and on the right.

```js
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr 
  }
  const mid = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid)) 
  const right = mergeSort(arr.slice(mid))
  return merge(left, right);
}

console.log(mergeSort(arr))
```

I know this looks crazy. *breathe*  We'll walk through it, but let's verify that it works.
```js
console.log(mergeSort([43, 232, 24, 42, 5, 43, 3, 2, 33, 4, 32, 34, 366, 97, -4, -77]))
```

Now, let's try and understand what's going on.
Example: Let's start off with a small array.
```js
mergeSort([3, 2, 70, 48])
```
1. arr.length is not 0 or 1.
2. Let's pick a midpoint. It would be arr.length (which is 4) / 2 will give us the index of 2.
3. We're gonna call mergeSort on the left and on the right.
4. Whatever we eventually get back from that will be passed into merge(left, right)
```js
mergeSort([3, 2, 70, 48])
  // Left             // Right
  mergeSort([3, 2])   mergeSort([70, 48])
  // Remember that this is RECURSIVE, so left is gonna run before right is even processed/added to the call stack!
```
In reality, right hasn't even happened yet!
So let's break it down again.
```js
mergeSort([3, 2, 70, 48])      
  mergeSort([3, 2])
    mergeSort([3]) // appropriate sized array. 
```
Now we have an array that is the appropriate size! We will return that array.
We will return [3].
```js
mergeSort([3, 2, 70, 48])      
  mergeSort([3, 2])
    [3]   mergeSort([2]) // [2] is now the appropriate size.
```

So now...
```js
mergeSort([3, 2, 70, 48])      
  mergeSort([3, 2])
  //left  //right
    [3]   [2] 
```

Now we're at the FINAL line.
```js
// Good ol' merge function we wrote earlier.
return merge(left, right)
// Above is essentially the same thing as below.
return merge([3], [2])
```
merge is Not a recursive function. It's just a regular old iterative function.
What will it return to us?
```js
[2, 3]
```
Okay. Now we get to do the right side...

7:19....