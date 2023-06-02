//간단하지만 비효율적인 선택정렬.. Selection Sort!
//

let a = [2, 4, 3, 1, 9, 6, 8, 7, 5];

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i; // 가장 작은 원소의 인덱스
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    // 스와프(swap)
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}
console.log(selectionSort(a));
