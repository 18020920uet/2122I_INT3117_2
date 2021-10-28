# Bài toán dự đoán hành động của bạn X

## 1. Mô tả bài toán

Xác định hành động mà người chơi đưa ra nhờ vào các thông tin được quan sát như sau:

    Nếu người chơi đạt 100 điểm trở xuống
      Trạng thái của người chơi
        - Vui
            Nếu trước 12 giờ đêm: Chơi tiếp
            Nếu sau 12 giờ đêm: Nghỉ
        - Bình thường
            Nếu trước 12 giờ đêm: Nghỉ
            Nếu sau 12 giờ đêm: Nghỉ
        - Chán
            Nếu trước 12 giờ đêm: Xóa game
            Nếu sau 12 giờ đêm: Nghỉ
    Nếu người chơi đạt từ 100 điểm đến 899 điểm
      Trạng thái của người chơi
        - Vui
            Nếu trước 12 giờ đêm: Chơi tiếp
            Nếu sau 12 giờ đêm: Chơi tiếp
        - Bình thường
            Nếu trước 12 giờ đêm: Chơi tiếp
            Nếu sau 12 giờ đêm: Nghỉ
        - Chán
            Nếu trước 12 giờ đêm: Nghỉ
            Nếu sau 12 giờ đêm: Nghỉ
    Nếu người chơi đạt từ 900 điểm đến 999
      Trạng thái của người chơi
        - Vui
            Nếu trước 12 giờ đêm: Đi đọc sách
            Nếu sau 12 giờ đêm: Nghỉ
        - Bình thường
            Nếu trước 12 giờ đêm: Nghỉ
            Nếu sau 12 giờ đêm: Nghỉ
        - Chán
            Nếu trước 12 giờ đêm: Đi xem phim
            Nếu sau 12 giờ đêm: Nghỉ
    Nếu người chơi đạt 1000 điểm
      Trạng thái của người chơi
        - Vui
            Nếu trước 12 giờ đêm: Xóa game
            Nếu sau 12 giờ đêm: Nghỉ
        - Bình thường
            Nếu trước 12 giờ đêm: Viết đánh giá game
            Nếu sau 12 giờ đêm: Nghỉ
        - Chán
            Nếu trước 12 giờ đêm: Xóa game
            Nếu sau 12 giờ đêm: Xóa game

Biết rằng game có điểm tối đa là 1000 điểm

## 2. Phân tích

Đầu vào

    Các thông tin đầu vào
    - Điểm của người chơi
    - Trạng thái của người chơi
    - Thời gian lúc người chơi hoàn thành game

Đầu ra:

    Hành động của người chơi sau khi chơi game
    - Nghỉ
    - Đi đọc sách
    - Viết đánh giá game
    - Xóa game
    - Đi xem phim
    - Chơi tiếp

Yêu cầu chức năng:

    Điểm số của người chơi
      [0, 1000] (int)
    Trạng thái của người chơi
      Vui, Bình thường, Chán (string)
    Thời điểm kết thúc game
      Trước 12 giờ đêm, sau 12 giờ đêm (boolean)

Dựa vào các thông tin của người dùng hãy phán đoán xem người chơi sẽ làm gì tiếp theo

|Điểm|Trạng thái|Thời điểm kết thúc game|Hành động|
|:-------------:|:-:|:-:|:-:|
| (intMin,0)     |--------------|-------------------|Không có hành động phù hợp với điểm số|
| [0, 100)   | Vui          | Trước 12 giờ đêm  | Chơi tiếp                            |
| [0, 100)   | Vui          | Sau 12 giờ đêm    | Nghỉ                                 |
| [0, 100)   | Bình thường  | Trước 12 giờ đêm  | Nghỉ                                  |
| [0, 100)   | Bình thường  | Sau 12 giờ đêm    | Nghỉ                                  |
| [0, 100)   | Chán         | Trước 12 giờ đêm  | Xóa game                             |
| [0, 100)   | Chán         | Sau 12 giờ đêm    | Nghỉ                                  |
| [100, 899] | Vui          | Trước 12 giờ đêm  | Chơi tiếp                            |
| [100, 899] | Vui          | Sau 12 giờ đêm    | Chơi tiếp                            |
| [100, 899] | Bình thường  | Trước 12 giờ đêm  | Chơi tiếp                             |
| [100, 899] | Bình thường  | Sau 12 giờ đêm    | Nghỉ                                  |
| [100, 899] | Chán         | Trước 12 giờ đêm  | Nghỉ                                  |
| [100, 899] | Chán         | Sau 12 giờ đêm    | Nghỉ                                  |
| [900, 999] | Vui          | Trước 12 giờ đêm  | Đi đọc sách                           |
| [900, 999] | Vui          | Sau 12 giờ đêm    | Nghỉ                                  |
| [900, 999] | Bình thường  | Trước 12 giờ đêm  | Nghỉ                                   |
| [900, 999] | Bình thường  | Sau 12 giờ đêm    | Nghỉ                                  |
| [900, 999] | Chán         | Trước 12 giờ đêm  | Đi xem phim                           |
| [900, 999] | Chán         | Sau 12 giờ đêm    | Nghỉ                                  |
| 1000       | Vui          | Trước 12 giờ đêm  | Xóa game                              |
| 1000       | Vui          | Sau 12 giờ đêm    | Nghỉ                                  |
| 1000       | Bình thường  | Trước 12 giờ đêm  | Viết đánh giá game                    |
| 1000       | Bình thường  | Sau 12 giờ đêm    | Nghỉ                                   |
| 1000       | Chán         | Trước 12 giờ đêm  | Xóa game                              |
| 1000       | Chán         | Sau 12 giờ đêm    | Nghỉ                                  |
| (1000, intMax) |--------------|-------------------|Không có hành động phù hợp với điểm số |

## 3. Dùng 2 kĩ thuật kiểm thử hộp đen

Trạng thái của người chơi
- Vui: 3
- Bình thường: 2
- Chán: 1

Thời điểm kết thúc game trước 12 giờ đêm:
- False
- True

Điểm của người chơi
- (intMin,0)
- [0, 100)
- [100, 899]
- [900, 999]
- 1000
- (1000, intMax)

Kết quả sau khi chơi xong
- Chơi tiếp
- Nghỉ
- Xóa game
- Đi đọc sách
- Đi xem phim
- Viết đánh giá game

### A. Kiểm thử giá trị biên

|Giá trị|Trạng thái của người chơi|Trước 12 giờ đêm|Điểm của người chơi|
|-|-|-|-|
|min|1|False|0|
|min+|2|True/False|1|
|nom|2|True/False|500|
|max-|2|True/False|999|
|max|3|True|1000|



|Test|Giá trị|Trạng thái của người chơi|Trước 12 giờ đêm|Điểm của người chơi|Expected output|
|-|-|-|-|-|-|
|1|min|1|False|0|Nghỉ|
|2|min+|2|True|1|Nghỉ|
||min+|2|False|1|Nghỉ|
|3|nom|2|True|500|Chơi tiếp|
||nom|2|False|500|Nghỉ|
|4|max-|2|True|999|Nghỉ|
||max-|2|False|999|Nghỉ|
|5|max|3|True|1000|Xóa game|

### B. Kiểm thử lớp tương đương

Trạng thái của người chơi
- Vui: 3
- Bình thường: 2
- Chán: 1
- Còn lại: 0

|Test|Trạng thái của người chơi|Trước 12 giờ đêm|Điểm của người chơi|Expected output|
|-|-|-|-|-|
|1|1|False|(intMin,0)|Không có hành động đầu ra hợp lệ|
|2|1|False|[0, 100)|Nghỉ|
|3|1|False|[100, 899]|Nghỉ|
|4|1|False|[900, 999]|Nghỉ|
|5|1|False|1000|Nghỉ|
|6|1|False|(1000, intMax)|Không có hành động đầu ra hợp lệ|
|7|1|True|(intMin,0)|Không có hành động đầu ra hợp lệ|
|8|1|True|[0, 100)|Xóa game|
|9|1|True|[100, 899]|Nghỉ|
|10|1|True|[900, 999]|Đi xem phim|
|11|1|True|1000|Xóa game|
|12|1|True|(1000, intMax)|Không có hành động đầu ra hợp lệ|
|13|2|False|(intMin,0)|Không có hành động đầu ra hợp lệ|
|14|2|False|[0, 100)|Nghỉ|
|15|2|False|[100, 899]|Nghỉ|
|16|2|False|[900, 999]|Nghỉ|
|17|2|False|1000|Nghỉ|
|18|2|False|(1000, intMax)|Không có hành động đầu ra hợp lệ|
|19|2|True|(intMin,0)|Không có hành động đầu ra hợp lệ|
|20|2|True|[0, 100)|Nghỉ|
|21|2|True|[100, 899]|Chơi tiếp|
|22|2|True|[900, 999]|Nghỉ|
|23|2|True|1000|Viết đánh giá game|
|24|2|True|(1000, intMax)|Không có hành động đầu ra hợp lệ|
|25|3|False|(intMin,0)|Không có hành động đầu ra hợp lệ|
|26|3|False|[0, 100)|Nghỉ|
|27|3|False|[100, 899]|Chơi tiếp|
|28|3|False|[900, 999]|Nghỉ|
|29|3|False|1000|Nghỉ|
|30|3|False|(1000, intMax)|Không có hành động đầu ra hợp lệ|
|31|3|True|(intMin,0)|Không có hành động đầu ra hợp lệ|
|32|3|True|[0, 100)|Chơi tiếp|
|33|3|True|[100, 899]|Chơi tiếp|
|34|3|True|[900, 999]|Đi đọc sach|
|35|3|True|1000|Xóa game|
|36|3|True|(1000, intMax)|Không có hành động đầu ra hợp lệ|
|37|0|True|(intMin,0)|Không có hành động đầu ra hợp lệ|
|38|0|True|[0, 100)|Không có hành động đầu ra hợp lệ|
|39|0|True|[100, 899]|Không có hành động đầu ra hợp lệ|
|40|0|True|[900, 999]|Không có hành động đầu ra hợp lệ|
|41|0|True|1000|Không có hành động đầu ra hợp lệ|
|42|0|True|(1000, intMax)|Không có hành động đầu ra hợp lệ|
|43|0|False|(intMin,0)|Không có hành động đầu ra hợp lệ|
|44|0|False|[0, 100)|Không có hành động đầu ra hợp lệ|
|45|0|False|[100, 899]|Không có hành động đầu ra hợp lệ|
|46|0|False|[900, 999]|Không có hành động đầu ra hợp lệ|
|47|0|False|1000|Không có hành động đầu ra hợp lệ|
|48|0|False|(1000, intMax)|Không có hành động đầu ra hợp lệ|
