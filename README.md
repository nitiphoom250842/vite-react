# Getting Started with Create Vite+React+Tailwindcss by TypeScript App

## ใน repository นี้มีการติดตั้ง

### Vite+React

### Tailwindcss

### Dockerfile สำหรับการ Deploy

## ขั้นตอนการติดตั้ง

1. clone repository
2. ติดตั้ง lib ใน file package.json ใช้คำสั่ง yarn install หรือ npm install (ตอนใช้คำสั่ง yarn install หรือ npm install เช็คด้วยนะครับว่าตอนนี้ได้อยู่ใน path flie ในระดับเดียวกันกับ file package.json หรือไม่)
3. คำสั่งในการรันโปรเจ็ค yarn dev หรือ npm run dev

## โครงสร้าง file

|-public -fonts\
|---------images\
|\
|-src | -assets\
|-----| -pages |-content |-components\
|-----|---------|----------|-page |-content.page.tsx\
|-----|---------|\
|-----|---------|-home |-components\
|-----|---------|--------|-page |-home.page.tsx\
|-----|---------|\
|-----|---------|-login |-components\
|-----|---------|-------|-page |-login.page.tsx\
|-----|---------|\
|-----|---------|-page404 |-components\
|-----|---------|-----------|-page |-page404.page.tsx\
|-----|---------| \
|-----|-App.tsx --> ส่วนการจัดการ Router ของแต่ละหน้า

# หากท่านใดไม่ชอบ TypeScript

npm create vite@latest my-react-app -- --template react (๋สร้างโปรเจ็คด้วย JavaScript)\
npm create vite@latest my-react-app -- --template react-ts (สร้างโปรเจ็คด้วย TypeScript)
