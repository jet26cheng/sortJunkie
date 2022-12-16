

function merge(arr1, arr2) {
    const results = [];
    let i = 0;
    let j = 0;

    // if(arr1[i] < arr2[j]) {
    //     results.push(arr1[i]);
    //     i++
    // } else {
    //     results.push(arr2[j]);
    //     j++
    // }
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
          results.push(arr1[i])
          i++
        } else {
          results.push(arr2[j]);
          j++
        }
    }
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

// CHECK IT OUT
console.log(merge([5, 8, 8, 8, 8, 20], [1, 3, 6, 7, 7, 7, 7, 7]))

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr // We don't need to split it any further.
      }

      const mid = Math.floor(arr.length / 2)

      const left = mergeSort(arr.slice(0, mid)) 
              
      const right = mergeSort(arr.slice(mid))
      return merge(left, right)
}


console.log(mergeSort([43, 232, 24, 42, 5, 43, 3, 2, 33, 4, 32, 34, 366, 97, -4, -77]))

mergeSort([3, 2, 70, 48])

