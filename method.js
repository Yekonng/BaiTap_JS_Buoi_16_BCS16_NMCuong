// 1

export function tinhTongDuong(arr) {
  // Tạo hàm tính Tổng số dương với giá trị nhập vào hàm là mảng (arr)
  let tongSoDuong = 0; // Đặt giá trị của biến ban đầu là 0
  for (let so of arr) {
    // Dùng vòng lặp for... of để duyệt qua từng phần tử trong mảng
    if (so > 0) {
      tongSoDuong += so; // Nếu phần tử được duyệt có giá trị > 0 (số Dương), cộng giá trị của phần tử đó vào tongSoDuong
    }
  }
  return tongSoDuong;
}

// 2
export function demSoDuong(arr) {
  let countSoDuong = 0;
  for (let so of arr) {
    if (so > 0) {
      countSoDuong += 1;
    }
  }
  return countSoDuong;
}

// 3
export function timSoNhoNhat(arr) {
  let soNhoNhat = arr[0];
  for (let so of arr) {
    if (so < soNhoNhat) {
      soNhoNhat = so;
    }
  }
  return soNhoNhat;
}

// 4
export function timSoDuong(arr) {
  let danhSachSoDuong = [];
  for (let so of arr) {
    if (so > 0) {
      danhSachSoDuong.push(so);
    }
  }
  return danhSachSoDuong;
}

// 5
export function soChanCuoiCung(arr) {
  for (let so = arr.length - 1; so >= 0; so--) {
    if (arr[so] % 2 === 0) {
      return arr[so];
    }
  }
  return -1;
}

// 6
export function doiViTri(arr, index1, index2) {
  if (
    index1 < 0 ||
    index1 >= arr.length ||
    index2 < 0 ||
    index2 >= arr.length
  ) {
    return null;
  }
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;

  return arr;
}

// 7
export function sapXepTangDan(arr) {
  let mangSapXep = [...arr];

  mangSapXep.sort(function (a, b) {
    return a - b;
  });

  return mangSapXep;
}

// 8
export function timSoNguyenTo(arr) {
    function laSoNguyenTo(n) {
        if (n < 2 || !Number.isInteger(n)) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    for (let so of arr) {
        if (laSoNguyenTo(so)) {
            return so; 
        }
    }
    return -1; 
}

// 9
 export function demSoNguyen(arr) {
  let countSoNguyen = 0;
  for (let so of arr) {
    if (Number.isInteger(so)) {
      countSoNguyen++;
    }
  }
return countSoNguyen
 }

 // 10
 export function demSoAm(arr) {
  let countSoAm = 0;
  for (let so of arr) {
    if (so < 0) {
      countSoAm += 1;
    }
  }
  return countSoAm;
}
