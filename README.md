# :movie_camera: HYEONCINEMA : 영화 웹 서비스

---

# :hammer: Using

<img src="https://img.shields.io/badge/React ^18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" style="border-radius: 10px;" /> <img src="https://img.shields.io/badge/React Dom ^18.2.0-0088CC?style=for-the-badge&logo=ReactOS&logoColor=white" style="border-radius: 10px;" /> <img src="https://img.shields.io/badge/React Router Dom ^6.3.0-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" style="border-radius: 10px;" /> <img src="https://img.shields.io/badge/Styled Components ^5.3.5-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" style="border-radius: 10px;" /> <img src="https://img.shields.io/badge/Swiper ^8.3.0-6332F6?style=for-the-badge&logo=Swiper&logoColor=white" style="border-radius: 10px;" /> <img src="https://img.shields.io/badge/Axios ^0.27.2-222222?style=for-the-badge&logoColor=white" style="border-radius: 10px;" />

---

# 💻 Responsive

## 1. pc

![screen-pc](./src/assets/images/movie-pc.png)

## 2. tablet

![screen-tablet](./src/assets/images/movie-tablet.png)

## 3. mobile

![screen-mobile](./src/assets/images/movie-mobile.png)

---

# :open_file_folder: 각 페이지 별 기능

## 1. Home Page

(1) Navbar

- ① Home으로 이동 할 수 있는 로고
- ② 클릭시 각 페이지로 이동(상영중인 영화, 인기 영화, 영화 평점순, 상영예정작)
- ③ 클릭시 회원가입과 로그인form modal 팝업
- ④ window.scrollY가 50이상일 경우 배경색이 검정색이 되도록 만듦

![header-desc](./src/assets/images/header-1.png)

(2) MainSlider

- ① react swiper를 사용하여 현재 상영중인 영화 6편을 slider로 만듦
- ② axios를 사용하여 The Movie Database(TMDB)사이트의 API를 가져와서 slide에 넣어줌

![main-slider](./src/assets/images/main-slider.gif)

(3) TopRatedSlider, UpComingSlider

- ① react swiper를 사용하여 영화 평점순, 상영예정작인 영화 20편을 slider로 만듦
- ② 영화 포스터를 hover시 영화제목과 평점이 나오며 클릭하면 해당 영화의 상세 페이지로 이동

![sub-slider](./src/assets/images/sub-slider.gif)

---

## 2. Detail Page

- Detail Page도 반응형으로 제작 (크기에 따른 글자수 크기 제한)
- 뒤로가기 버튼

### 1. pc

![screen-pc](./src/assets/images/detail-pc.png)

### 2. tablet

![screen-tablet](./src/assets/images/detail-tablet.png)

### 3. mobile

![screen-mobile](./src/assets/images/detail-mobile.png)

---

## 3. 상영중인 영화 / 인기 영화 / 영화 평점순 / 상영예정작

- 상영중인 영화를 클릭했을 경우

![menu-nowplaying](./src/assets/images/now-playing.png)

## 👩‍💻 추가해야 될 것

- 각 메뉴 페이지의 Pagination 추가

---
