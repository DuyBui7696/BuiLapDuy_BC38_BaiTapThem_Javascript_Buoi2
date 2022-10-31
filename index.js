// toán tử so sánh
// biểu thức so sánh => true/false
console.log(5 > 2); //true
console.log(5 < 2); //false
console.log(5 >= 2); //true
console.log(5 <= 2); //false
console.log(5 == 5); //true
console.log(5 != 2); //true: so sánh khác
console.log(5 == "5"); //true
// so sánh bằng trong js luôn luôn sử dụng === ko nên xài ==
console.log(5 === "5"); //false
// so sánh khác trong js luôn luôn sử dụng !== ko nên xài !=
console.log(5 !== "5"); //true

//toán tử logic (!, &&, ||)

console.log(!!!true);
console.log(!(5 > 2));

//biểu thức logic

console.log(5 > 2 && 5 < 3 && 4 > 1);

console.log(5 > 2 || 5 < 3 || 4 > 1);
// biểu thức điều kiện: phép so sánh, biểu thức logic

// if(biểu thức điều kiện){
//     code sẽ thực thi nếu điều kiện đúng}
// else{
//     code sẽ thực thi nếu điều kiện ko đúng
// }

var d = -4;
if (d < 0) {
  d = -d;
  console.log(d);
} else {
  console.log(d + "đã là số dương");
}

var creditBalance = 1000;
var payment = 700;
var penalty = 0;

var debit = creditBalance - payment;
if (debit > 0) {
  penalty = (1.5 / 100) * debit;
  console.log(penalty);
} else {
  console.log("Dư nợ hiện tại là 0.");
}
//15
var hour = 45;
var salaryPerHour = 18;

var salaryOT = 0;
var hourPerWeek = 40;
var alpha = 1.5;
var extraHour = hour - hourPerWeek;

if (extraHour > 0) {
  salaryOT = extraHour * alpha;
  console.log("Tiền tăng ca tuần này là: ", salaryOT);
} else {
  console.log("Tuần này không có tăng ca");
}
//25
var name = "Bui Lap Duy";
var math = 1;
var physic = 2;
var chemistry = 8.5;
var TB = (math + physic + chemistry) / 3;
if (TB >= 8.5) {
  console.log("Gioi");
} else if (TB < 8.5 && TB >= 6.5) {
  console.log("Khá");
} else if (TB < 6.5 && TB >= 5) {
  console.log("Trung bình");
} else {
  console.log("Yếu");
}
//22
var name = "DUY";
var qty = 40;
var price = 150;
var payment = 0;
if (qty < 100 && qty >= 50) {
  payment = price * 50 + 0.92 * price * (qty - 50);
  console.log("Số tiền phải trả là: ", payment);
} else if (qty >= 100) {
  payment = price * 50 + 0.92 * price * 50 + 0.88 * price * (qty - 100);
  console.log("Số tiền phải trả là: ", payment);
} else {
  payment = price * qty;
  console.log("Số tiền phải trả là: ", payment);
}
// 32/1
var a = 10;
var b = 4;
var c = 8;
if (a < b && a < c && b < c) {
  console.log("3 số theo thứ tự tăng dần là: ", a, b, c);
} else if (b < a && b < c && a < c) {
  console.log("3 số theo thứ tự tăng dần là: ", b, a, c);
} else if (c < a && c < b && b < a) {
  console.log("3 số theo thứ tự tăng dần là: ", c, b, a);
} else if (a < b && a < c && c < b) {
  console.log("3 số theo thứ tự tăng dần là: ", a, c, b);
} else if (c < a && c < b && a < b) {
  console.log("3 số theo thứ tự tăng dần là: ", c, a, b);
} else if (b < a && b < c && c < a) {
  console.log("3 số theo thứ tự tăng dần là: ", b, c, a);
}
// 32/2
var B = "Bố";
var M = "Mẹ";
var A = "Anh trai";
var E = "Em gái";
var who = A;
if (who === B) {
  console.log("Chào bố");
} else if (who === M) {
  console.log("Chào mẹ");
} else if (who === A) {
  console.log("Chào anh trai");
} else if (who === E) {
  console.log("Chào em gái");
} else {
  console.log("Chào mọi người");
}
// 32/3
var a = 8;
var b = 6;
var c = 4;
var count = 0;
var count_1 = 0;
if (a % 2 === 0) {
  count === ++count;
  console.log("a là số chẵn");
 
} else {
  console.log("a là số lẻ");
 count_1 === 3 - count;
}

if (b % 2 === 0) {
  count === ++count;
  console.log("b là số chẵn");
 
} else {
  console.log("b là số lẻ");
  count_1 === 3 - count;
}

if (c % 2 === 0) {
  console.log("c là số chẵn");
  count === ++count;
} else {
  console.log("c là số lẻ");
  count_1 === 3 - count;
}
console.log("Có " + count + " số chẵn");
console.log("Có " + count_1 + " số lẻ");


//toán tử 3 ngôi
// var a = 4;

// a % 2 === 0 ? console.log(a, "là số chẵn") : console.log(a, "là số lẻ");

// // switch case, chỉ dành cho so sánh bằng

// var month = 9;
// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log(31);
//     break;
//   case 2:
//     console.log(28);
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log(30);
//     break;
//   default:
//     console.log("Tháng không hợp lệ");
// }

// 32/4


var a = 4;
var b = 2;
var c = 3;

if((a + b < c) || (a + c < b) || (b + c < a)){
  console.log("3 cạnh đã cho không tạo thành tam giác");
}else{
  if(a === b && b === c && c === a){
    console.log("Đây là tam giác đều");
  }else if((a*a === b*b + c*c) || (b*b === a*a + c*c) || (c*c === b*b + a*a)){
    console.log("Đây là tam giác vuông");
  }else if((a === b) || (b === c) || (a === c)){
    console.log("Đây là tam giác cân");
  }else{
    console.log("Đây là tam giác thường");
  }
}

