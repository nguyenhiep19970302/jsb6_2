function btnHandlePrimeNumber() {
    //input tao bien chua so nhap vao
    var number = document.getElementById("number").value * 1;
    //khi nhap so be hon 2 se bao loi
    if (number < 2) {
        alert("Bạn đã nhập sai,hãy nhập số lớn hơn hoặc bằng hai");
    } else {
        //output xuat ket qua ra man hinh
        document.getElementById("infoPrimeNumber").innerHTML = lk_ngto(number);
    }
    

}
//handle lk_so_ngto
function lk_ngto(n)
{
    
  let i=2;
  let count =1;
  let rs = "";
  while(count<n)
  { 
     if (kt_ngto(i) == 1) {
        
          rs += " " + i;
      };
      count++; 
      i++;
  }
    return rs;
}
/*
Giải thích:
-Khời tạo biến i là một số để kiểm tra có phải là số nguyên tố hay không, bắt đầu từ 2
-Khởi tạo biến count để đếm số lần thực hiện vòng lặp đến $n lần, bắt đầu đếm từ 1
-Và khởi tạo biến rs để lưu chuỗi danh sách số nguyên tố mà ta thu được 
-Thuật toán đơn giản là dùng vòng lặp while kiểm tra biến count bao giờ chạy đến bằng n
 thì dừng lại.
Bên trong while kiểm tra số i có phải là số nguyên tố hay không, dùng hàm kt_ngto() ở
 trên.
 +Nếu i là số nguyên tố thì gán i vào chuỗi danh sách rs, lưu vào rs, sau 
  đó tăng biến count lên 1 giá trị.
 +Tiếp theo ra ngoài vòng kiểm tra (if) tăng i lên 1 giá trị.
 +Và cuối cùng trả về chuỗi rs. 
*/

//handle check_so_ngto
function kt_ngto(n)
{
    let rs = 1;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0 && n > 2) {
            rs = 0;
        };
    };
    return rs;
};
/*
Giải thích đoạn code trên:
-Số nguyên tố là những số chỉ chia hết cho 1 và chính nó, vậy thuật toán đơn giản là 
chúng ta kiểm tra tất cả các số trong khoảng từ 2 đến căn bậc 2 của số cần kiểm tra 
(số n).
-Nếu số n chia hết cho một trong những số trong khoảng trên thì n không phải 
là số nguyên tố => trả về giá trị biến kiểm tra rs = 0; 
-Ngược lại là số nguyên tố => rs = 1;
*/