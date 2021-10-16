# learnit
https://youtu.be/rgFd17fyM4A
# Cài đặt:
- Đầu tiên tạo thư mục server và tải package:
    > cd server
    > npm install argon2 cors dotenv express jsonwebtoken mongoose 
    > npm install nodemon --save-dev
    - Trong package.json mục script thêm "server":"nodemon index" để chạy node live code
- Tạo thư mực client và tải package:
> cd client
>npx create-react-app .  
# Server:
- Sau khi cài package viết route, tạo model(lớp schema của mongoose) tạo mongodb và kết nối, tạo middleware auth bởi jwt token verify 
- Tạo Restful API cho route Post

