# Learn It
https://youtu.be/rgFd17fyM4A
# Cài đặt:
- Đầu tiên tạo thư mục server và tải package:
    > cd server
    > npm install argon2 cors dotenv express jsonwebtoken mongoose 
        - argon2 mã hóa password, dotenv sử dụng global biến process, express framework vận hành, jsonwebtoken tạo,đọc và duyệt mã hóa nội dung để api đọc trên header xác nhận thông tin người dùng, mongoose tương tác với mongodb
    > npm install nodemon --save-dev
    - Trong package.json mục script thêm "server":"nodemon index" để chạy node live code
- Tạo thư mực client và tải package:
    > cd client
    - Cài React:
        > npx install create-react-app .  
    - Cài Bootstrap css/js:
        > npm install react-bootstrap bootstrap
    - Cài Axios để tương tác với API phía server:
        > npm install axios
    - Cài react-router-dom để tạo liên kết chuyển màn hình các component:
        > npm install react-router-dom
    - Cài Cookie
        > npm i js-cookie
# Server:
- Sau khi cài package viết route
- Tạo model(lớp schema của mongoose) 
- Tạo mongodb và kết nối
- Tạo middleware auth bởi jwt token verify 

- Tạo Restful API cho route Post

# Client
- Tạo commponent
- Tạo View chứa component
- Tạo Router để Switch chứa view thông qua route
- Tạo context, để reducer quản lý context và để contextprovider bao vùng nó muốn truyền biến cục bộ
- Tạo context cho login để thực hiện gửi form từ trong component có formlogin tới context để xử lý login rồi sau đó thông tin user(accessToken) sẽ được cục bộ trong tất cả view mà context provider chứa chúng nó
- Trong login form sử dụng localstorage hoặc cookie để lưu accessToken trong trình duyệt
- Biến cục bộ của AuthContext:
    - isAuthendicated: Biến xác nhận xem người dùng đã login hay chưa, login rồi trả về true
    - authLoading:
    - user:
- Tạo thư mục utils nhằm tạo ra các hàm tiện ích sử dụng lại trong hệ thống