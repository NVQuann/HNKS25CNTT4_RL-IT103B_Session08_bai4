/*
1. Bảng so sánh độ phức tạp:

| Phương thức         | Vị trí thao tác | Độ phức tạp | Lý do |
|---------------------|-----------------|-------------|-------|
| push() / pop()      | Cuối mảng       | O(1)        | Thao tác ở cuối mảng |
| shift() / unshift() | Đầu mảng        | O(N)        | Phải đánh lại chỉ số các phần tử phía sau |
| splice()            | Giữa mảng        | O(N)        | Có thể phải dịch chuyển các phần tử phía sau |

2. Cơ chế Re-indexing:
Khi sử dụng shift(), các phần tử phía sau phần tử đầu tiên
phải được đánh lại chỉ số index. Vì vậy, khi mảng lớn,
thao tác này có thể tốn nhiều thời gian

3. Giải pháp:
Sử dụng headIndex để đánh dấu vị trí xe đầu hàng đợi.
Khi lấy xe, tăng headIndex thay vì xóa phần tử bằng shift().
Cách này giúp thao tác lấy xe có độ phức tạp O(1).
*/

const queue = ["30A-98765", "29B-12345", "51C-45678"];
let headIndex = 0;

queue.push("43D-88888");

if (headIndex < queue.length) {
  console.log("Xe tiếp theo:", queue[headIndex]);
  headIndex++;
}

if (headIndex < queue.length) {
  console.log("Xe tiếp theo:", queue[headIndex]);
  headIndex++;
}

console.log("Số xe còn chờ:", queue.length - headIndex);
