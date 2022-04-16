/*
Làm việc với mảng Array:
 1. toString: chuyển sang kiểu dữ liệu string;
 2. join  
 3. pop: xóa element cuối mảng và trả về phần tử đã xóa;
 4. push: thêm 1 or nhiều phần tử cuối mảng và trả về mảng mới;
 5. shift:xóa phần tử đầu mảng và trả về mảng mới;
 6. unshift:  thêm phần tử vào đầu mảng và trả về mảng mới;
 7. splice: xóa phần tử trong mảng;
 8. concat:  nối mảng;
 9. slicing: cắt mảng ,lấy ra mảng cắt; 

 */






/*
let arrays = ['JavaScript', 'PHP', 'Ruby', 26];

console.log(arrays.slice(1, 2));

console.log(arrays);*/


const fruits = ["Banana", "Orange", "Apple", 266, 277];
let fruits2 = fruits.slice(0, 2);

console.log(fruits.concat(fruits2));
console.log(fruits);