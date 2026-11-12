console.log (" Lab 2 Java ");
// Bài 1 Kiem tra so chan le 
console.log (" Bai 1 "); {
    let n = 7;

    if (n % 2 == 0){
        console.log(n + "là số chẵn");
    } else {
        console.log(n + "là số lẻ");
    }
}

// Bài 2 Tính Tich Dien 
console.log(" Bai 2 "); {

    let soKWh = 120;
    let tienDien = 0;

    if (soKWh <= 50) {
        tienDien = soKWh * 1800;
    } else if (soKWh <= 100) {
        tienDien = 50 * 1800 + (soKWh - 50) * 2300;
    } else {
        tienDien = 50 * 1800 + 50 * 2300
            + (soKWh - 100) * 3000;
    }

    console.log("So dien: " + soKWh + " kWh");
    console.log("Tien dien: " + tienDien + " VND");


    // Tinh Nguoc Tich Dien

    let hoaDon = 910000;
    let soDien = 0;

    if (hoaDon <= 50 * 1800) {
        soDien = hoaDon / 1800;
    } else if (hoaDon <= 50 * 1800 + 50 * 2300) {
        soDien = 50 + (hoaDon - 50 * 1800) / 2300;
    } else {
        soDien = 100 + (hoaDon - 50 * 1800 - 50 * 2300) / 3000;
    }

    console.log("Hoa don: " + hoaDon + " VND");
    console.log("So dien su dung: " + soDien + " kWh");
}


// Bai 3
console.log(" Bai 3 ");

{
    let chucVu = "staff";
    let ngayCong = 24;
    let luongCoBan = 5000000;
    let heSo = 0;

    switch (chucVu) {
        case "intern":
            heSo = 1.0;
            break;

        case "staff":
            heSo = 1.5;
            break;

        case "senior":
            heSo = 2.0;
            break;

        case "manager":
            heSo = 3.0;
            break;

        default:
            console.log("Chuc vu khong hop le");
    }

    if (heSo > 0) {
        let luong = heSo * ngayCong * luongCoBan / 24;

        console.log("Chuc vu: " + chucVu);
        console.log("Ngay cong: " + ngayCong);
        console.log("He so: " + heSo);
        console.log("Luong: " + luong + " VND");
    }
}


// Bai 4

console.log(" Bai 4 ");

{
    for (let i = 2; i <= 9; i++) {

        console.log("Bang cuu chuong " + i);

        for (let j = 1; j <= 10; j++) {
            console.log(i + " x " + j + " = " + (i * j));
        }

        console.log("---------");
    }
}


// Bai 5 

console.log("Bai 5");

{
    let n = 7;
    let laSoNguyenTo = true;

    if (n <= 1) {
        laSoNguyenTo = false;
    } else {
        for (let i = 2; i <= Math.sqrt(n); i++) {

            if (n % i == 0) {
                laSoNguyenTo = false;
                break;
            }
        }
    }

    if (laSoNguyenTo) {
        console.log(n + " la so nguyen to");
    } else {
        console.log(n + " khong phai so nguyen to");
    }
}

