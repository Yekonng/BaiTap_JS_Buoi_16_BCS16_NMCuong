// Chức năng nhập và hiển thị số đã nhập
let userInput = []
document.getElementById("btnThemSo").onclick = function () {
    const inputNumber = Number(document.getElementById("inputNumber").value); // Lấy số người dùng nhập (set cứng dạng Number)
    console.log("Người dùng nhập vào số: ", inputNumber); // Kiểm tra số người dùng nhập
    userInput.push(Number(inputNumber)); // Đẩy số người dùng nhập vào chuỗi userInput
    console.log("Dãy số người dùng đã nhập là: ", userInput); // Kiểm tra dãy số người dùng đã nhập
    document.getElementById("daySo").innerHTML = `Dãy số đã nhập: ${userInput}`; // Hiển thị dãy số người dùng đã nhập
}

import { tinhTongDuong, demSoDuong, timSoNhoNhat, timSoDuong, soChanCuoiCung, doiViTri, sapXepTangDan, timSoNguyenTo, demSoNguyen, demSoAm } from "./method.js"

/* 1. Tổng các số dương trong mảng
Input: Mảng số (userInput)
Process: Duyệt mảng → Cộng các số > 0
Output: Tổng số dương
*/

document.getElementById("btnTongSoDuong").onclick = function (){
    let tongSoDuong = tinhTongDuong(userInput);
    console.log("Tổng số dương là: ", tongSoDuong)
    document.getElementById("res1").innerHTML = `Tổng số dương là: ${tongSoDuong}`;
}

/* 2. Đếm có bao nhiêu số dương trong mảng.
Input: Mảng số (userInput)
Process: Duyệt mảng → Đếm số > 0
Output: Số lượng số dương
*/

document.getElementById("btnDemSoDuong").onclick = function (){
    let countSoDuong = demSoDuong(userInput);
    console.log("Có tổng cộng ", countSoDuong, "số dương")
    document.getElementById("res2").innerHTML = `Có tổng cộng ${countSoDuong} số dương`;
}

/* 3. Tìm số nhỏ nhất trong mảng.
Input: Mảng số (userInput)
Process: Duyệt mảng → So sánh để tìm số nhỏ nhất
Output: Giá trị nhỏ nhất
*/

document.getElementById("btnTimSoNhoNhat").onclick = function (){
    let soNhoNhat = timSoNhoNhat(userInput);
    console.log("Số nhỏ nhất là số: ", soNhoNhat)
    document.getElementById("res3").innerHTML = `Số nhỏ nhất là số: ${soNhoNhat}`;
}

/* 4. Tìm số dương nhỏ nhất trong mảng
Input: Mảng số (userInput)
Process: Lọc số dương → Tìm số nhỏ nhất trong các số dương
Output: Số dương nhỏ nhất
*/
document.getElementById("btnTimSoDuongNhoNhat").onclick = function (){
let danhSachSoDuong = timSoDuong(userInput);
console.log("Danh sách số dương sau khi đã lọc: ", danhSachSoDuong);
if (danhSachSoDuong.length == 0) {
    document.getElementById("res4").innerHTML = `Không tồn tại số dương trong mảng`;
} else {
let soDuongNhoNhat = timSoNhoNhat(danhSachSoDuong); // Tận dụng lại Hàm timSoNhoNhat trong Bài 3
console.log("Số dương nhỏ nhất là: ", soDuongNhoNhat);
document.getElementById("res4").innerHTML = `Số dương nhỏ nhất là: ${soDuongNhoNhat}`;
}
}

/* 5. Tìm số chẵn cuối cùng trong mảng
Input: Mảng số (userInput)
Process: Duyệt từ cuối mảng → Tìm số chia hết cho 2
Output: Số chẵn cuối cùng hoặc -1 nếu không có
*/
document.getElementById("btnTimSoChanCuoi").onclick = function (){
    let soChanCuoi = soChanCuoiCung(userInput);
    if (soChanCuoi === -1) {
        document.getElementById("res5").innerHTML = `Không có bất kỳ số chẵn nào trong mảng`;
    } else {
        document.getElementById("res5").innerHTML = `Số chẵn cuối cùng trong mảng là: ${soChanCuoi}`;
    }
}

/* 6. Đổi chỗ 2 giá trị trong mảng theo vị trí
Input: Mảng số (userInput), 2 vị trí index1, index2
Process: Kiểm tra hợp lệ → Đổi chỗ 2 phần tử
Output: Mảng sau khi đổi
*/

document.getElementById("btnDoiCho").onclick = function (){
const index1 = Number(document.getElementById("viTri1").value);
const index2 = Number(document.getElementById("viTri2").value);

let arrDoiCho = doiViTri(userInput, index1, index2)

if (arrDoiCho === null) {
    document.getElementById("res6").innerHTML = `Không tồn tại vị trí cần đổi trong mảng`
} else {
    document.getElementById("res6").innerHTML = `Mảng sau khi đổi: ${arrDoiCho}`
}

}

/* 7. Sắp xếp mảng theo thứ tự tăng dần.
Input: Mảng số (userInput)
Process: Dùng thuật toán sắp xếp (VD: .sort())
Output: Mảng tăng dần
*/
document.getElementById("btnSapXepTangDan").onclick = function () {
    let mangDaSapXep = sapXepTangDan(userInput);

    document.getElementById("res7").innerHTML =
        `Mảng sau khi sắp xếp tăng dần: ${mangDaSapXep}`;
};

/* 8. Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1.
Input: Mảng số (userInput)
Process: Duyệt mảng → Kiểm tra số nguyên tố
Output: Số nguyên tố đầu tiên hoặc -1 nếu không có
*/
document.getElementById("btnSoNguyenTo").onclick = function () {
let soNguyenTo = timSoNguyenTo(userInput);
if (soNguyenTo === -1) {
    document.getElementById("res8").innerHTML = `Không tồn tại số nguyên tố trong mảng`;
} else {
document.getElementById("res8").innerHTML = `Số nguyên tố đầu tiên trong mảng là: ${soNguyenTo}`;
}
}

/* 9. Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
Input: Mảng số thực (userInputNguyen)
Process: Duyệt mảng → Dùng Number.isInteger()
Output: Số lượng số nguyên
*/
// Chức năng nhập và hiển thị số đã nhập (Dành riêng bài 9)
let userInputNguyen = []
document.getElementById("btnThemSoBai9").onclick = function () {
    const inputNguyen = Number(document.getElementById("inputNguyen").value); 
    console.log("Người dùng nhập vào số: ", inputNguyen); 
    userInputNguyen.push(Number(inputNguyen)); 
    console.log("Dãy số người dùng đã nhập là: ", userInputNguyen); 
    document.getElementById("dsNguyen").innerHTML = `Danh sách số nguyên: ${userInputNguyen}`; 
}

document.getElementById("btnDemSoNguyen").onclick = function () {
let countSoNguyen = demSoNguyen(userInputNguyen)
document.getElementById("res9").innerHTML = `Số nguyên: ${countSoNguyen}`;
}

/* 10. So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
Input: Mảng số (userInput)
Process: Đếm số > 0 và < 0 → So sánh
Output: Dương > Âm, Âm > Dương hoặc bằng nhau
*/
document.getElementById("btnSoSanh").onclick = function () {
let countSoDuong = demSoDuong(userInput); // Tận dụng lại hàm của Bài 2
    console.log("Có tổng cộng ", countSoDuong, "số dương")
    let countSoAm = demSoAm(userInput);
    console.log("Có tổng cộng ", countSoAm, "số âm")
    if (countSoAm < countSoDuong) {
        document.getElementById("res10").innerHTML = `Số Dương nhiều hơn Số Âm`;
    } if (countSoAm > countSoDuong) {
        document.getElementById("res10").innerHTML = `Số Âm nhiều hơn Số Dương`;
    } if (countSoAm === countSoDuong) {
        document.getElementById("res10").innerHTML = `Số Dương và Số Âm bằng nhau`;
    } 
}
