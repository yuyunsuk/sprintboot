const url = "http://localhost:8080/lecture";

// 각 페이지별 #header와 #footer에 html파일 넣기
function loadHtml() {
  axios
    .get("header.html")
    .then((response) => {
      document.getElementById("header").innerHTML = response.data;
    })
    .catch((error) => {
      console.error("Header loading error:", error);
    });
  axios
    .get("footer.html")
    .then((response) => {
      document.getElementById("footer").innerHTML = response.data;
    })
    .catch((error) => {
      console.error("footer loading error:", error);
    });
}
// 페이지가 로드될 때 header와 footer를 로드
window.onload = loadHtml;

axios
  .get(url)
  .then((response) => {
    console.log("응답 Response : ", response);
    lectureSearch(response.data);
  })
  .catch((error) => {
    console.log("에러", error);
  });

function lectureSearch(data) {
  if (Array.isArray(data) && data.length > 0) {
    const content = document.querySelector(".content");
    const maxItemsToShow = 8; // 최대 표시할 항목 수

    data.slice(0, maxItemsToShow).forEach((lectureData) => {
      const lecture = createLectureElement(lectureData);
      content.appendChild(lecture);
    });

    // "더 보기" 버튼에 클릭 이벤트를 추가합니다.
    const moreBtn = document.querySelector(".moreBtn");
    moreBtn.addEventListener("click", () => {
      content.innerHTML = ""; // 기존 항목을 모두 지웁니다.
      data.forEach((lectureData) => {
        const lecture = createLectureElement(lectureData);
        content.appendChild(lecture);
      });
      moreBtn.style.display = "none"; // "더 보기" 버튼을 숨깁니다.
    });
  }
}

function createLectureElement(data) {
  const lecture = document.createElement("div");
  lecture.classList.add("lecture");

  const lectureImg = document.createElement("img");
  lectureImg.classList.add("lectureImg");
  lectureImg.src = data.imagePath;

  const period = document.createElement("p");
  const hours = document.createElement("p");
  const date = document.createElement("p");
  const price = document.createElement("p");

  period.textContent = "교육 기간 : " + data.educationPeriod;
  hours.textContent = "교육 시간 : " + data.educationHours + " 시간";
  date.textContent =
    "신청 기간 : " +
    data.educationPeriodStartDate +
    " ~ " +
    data.educationPeriodEndDate;
  price.textContent = "가격 : " + data.educationPrice + "원";

  lecture.appendChild(lectureImg);
  lecture.appendChild(period);
  lecture.appendChild(hours);
  lecture.appendChild(date);
  lecture.appendChild(price);

  lecture.addEventListener("click", () => {
    window.location.href = "lectureDetail.html?lectureId=" + data.lectureId;
  });

  return lecture;
}

/* 세션확인 */
function sessionCurrent() {
  axios
    .get("http://localhost:8080/user/current", { withCredentials: true })
    .then((response) => {
      console.log("데이터: ", response);
      if (response.status == 200) {
        console.log("세션 유지");
        if (response.status == 200) {
          const authorityName = response.data.authority.authority; // => "ROLE_USER", "ROLE_ADMIN"
          console.log("authorityName: ", authorityName);
            //response.data.userId + "님, 환영합니다.";
          //window.location.href = "main.html";
        }
      }
    })
    .catch((error) => {
      console.log("에러 발생: ", error);
    });
}

// js 파일이 로드될때 호출됨 (전역위치)
sessionCurrent();
