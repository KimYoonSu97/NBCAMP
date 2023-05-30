const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDgwZWRlZTA1ZDUxZWQ3OWQ1NGYzNmYxYzc5ZjdlZCIsInN1YiI6IjY0NzE0YmQ0ODgxM2U0MDEwMzU2YjRiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J4EaZaROzOT41aMCipYrRWayXCxv1JIWJ182czkrun8'
  }
};

//DOM APT
// 메인 비주얼 영역
let movieMain = document.querySelector(".slide-inner")
// 하단 영화 카드 영역
let movieList = document.querySelector("#movie-list");

//인풋값 받기
let getInput = function() {
  const inputVal = document.getElementById("search-input").value;
  return inputVal
}

//엔터키로 서치하기
function fnEnterKey () {
  if (window.event.keyCode == 13) {
    pushButton()
  }
}

//검색버튼 활성화 하기
let pushButton = function () {
    console.log('클릭했습니다.')
    let inputval = getInput()
    console.log(inputval)

    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(data =>  {
        // console.log(data)
        // 데이터를 받습니다. movie로...
          const movie = data.results
        // 투표의 평균과 투표수를 기준으로 객체배열을 정렬합니다.
          movie.sort((a, b) => {
              return b['vote_average'] - a['vote_average'] || b['vote_count'] - a['vote_count']
            });
            
            //새로운 데이터를 append 하기 전 html을 비워줍니다.
            movieList.innerHTML=""
            movieMain.innerHTML=""
  
          // 검색창에 들어온 단어가 있는 것들만 담는 배열
           const movie2 = movie.filter(function(item){
          return item.title.match(new RegExp(inputval, "i"))
          })
            
            //데이터를 기반으로 그립니다...
            mainDraw(movie)
            listDraw(movie2)
            
          

          })
          .catch(err => console.error(err));
}

//
let mainDraw = function(keyvalue = Array) {
        // movie배열을 가지고 반복문을 활용하여 데이터를 출력해줍니다.
        keyvalue.forEach((a, b) => {
        
          //각 자료들을 변수에 담습니다.
          let name = a["title"]
          let rating = a["vote_average"]
          let vote = a["vote_count"]
          let overview = a["overview"]
          let imgSrc = a["poster_path"]
          let id = a["id"]
          let temp_html = "";
          // 만약 인덱스가 3보다 작으면 -> 즉 1,2,3등은
          if(b < 3) {
            // 상단 스크롤 배너 영역의 html코드를 백틱을 활용하여 입력합니다.
          temp_html =`
          <div class="slide">
            <div class="slide-num" onclick="idAlert(this)">
                <div class="slide-img">
                <img src="https://image.tmdb.org/t/p/w500${imgSrc}" alt="${name} poster">
                </div>
                <div class="slide-info">
                    <div class="rank">Rank ${b + 1}</div>
                    <div class="title" id="${id}">${name}</div>
                    <div class="rating">Rating : ${rating} / vote : ${vote}</div>
                    <div class="caption">${overview}</div>
                </div>
            </div>
          </div>`;
          // 상단에 선언해놓은 movieMain이라는 위치에 temp_html을 append합니다.
          movieMain.insertAdjacentHTML("beforeend",temp_html)

          // 만약 그렇지 않다면...즉 3위 이후의 자료들은
          }
      })
      console.log("메인 영역은 성공!")
    }

let listDraw = function(keyvalue = Array) {
      // 새롭게 temp_html에 값을 할당하고.
      keyvalue.forEach((a, b) => {
        
        //각 자료들을 변수에 담습니다.
        let name = a["title"]
        let rating = a["vote_average"]
        let vote = a["vote_count"]
        let overview = a["overview"]
        let imgSrc = a["poster_path"]
        let id = a["id"]
        let temp_html = "";

        if( b >= 3){
      temp_html =`
                  <div class="list-content">
                    <div class="list-num" onclick="idAlert(this)">
                      <div class="rank">
                          <div>Rank</div>
                          <div>${b + 1}</div>
                      </div>
                      <div class="list-img" style="">
                          <img src="https://image.tmdb.org/t/p/w500${imgSrc}" alt="name poster">
                      </div>
                      <div class="list-info" >
                          <div class="title" id="${id}">${name}</div>
                          <div class="rating">Rating : ${rating} / vote : ${vote}</div>
                          <div class="caption">${overview}</div>
                      </div>
                    </div>
                  </div>`;
        // 상단에 선언한 movieList위치에 temp_html을 append합니다.
        movieList.insertAdjacentHTML("beforeend",temp_html)
       }}
       )
      console.log('리스트도 성공')
      };


  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(data =>  {
      // console.log(data)
      // 데이터를 받습니다. movie로...
        const movie = data.results
      // 투표의 평균과 투표수를 기준으로 객체배열을 정렬합니다.
        movie.sort((a, b) => {
            return b['vote_average'] - a['vote_average'] || b['vote_count'] - a['vote_count']
          });
          
          //새로운 데이터를 append 하기 전 html을 비워줍니다.
          movieList.innerHTML=""
          movieMain.innerHTML=""

        // 검색창에 들어온 단어가 있는 것들만 담는 배열
         const movie2 = movie.filter(function(item){
        return item.title.match(new RegExp("검색창에 들어온 단어", "i"))
        })
          
          //데이터를 기반으로 그립니다...
          mainDraw(movie)
          listDraw(movie)
          
        })
        .catch(err => console.error(err));



// let onClickImg = function() {
//   document.
// }

        
function idAlert(idclick) {
  // console.log(idclick)
  let titleSelector = idclick.querySelector(".title")
  alert(`movie id is... ${titleSelector.id}`)
}







//슬라이더기능
/*
  div사이즈 동적으로 구하기
*/
const outer = document.querySelector('#slider');
const innerList = document.querySelector('.slide-inner');
const inners = document.querySelectorAll('.slide');
let currentIndex = 0; // 현재 슬라이드 화면 인덱스

inners.forEach((inner) => {
  inner.style.width = `${outer.clientWidth}px`; // inner의 width를 모두 outer의 width로 만들기
})

innerList.style.width = `${outer.clientWidth * inners.length}px`; // innerList의 width를 inner의 width * inner의 개수로 만들기

/*
  버튼에 이벤트 등록하기
*/
const buttonLeft = document.querySelector('.button-left');
const buttonRight = document.querySelector('.button-right');

buttonLeft.addEventListener('click', () => {
  currentIndex--;
  currentIndex = currentIndex < 0 ? 0 : currentIndex; // index값이 0보다 작아질 경우 0으로 변경
  innerList.style.marginLeft = `-${outer.clientWidth * currentIndex}px`; // index만큼 margin을 주어 옆으로 밀기
  clearInterval(interval); // 기존 동작되던 interval 제거
  interval = getInterval(); // 새로운 interval 등록
});

buttonRight.addEventListener('click', () => {
  currentIndex++;
  currentIndex = currentIndex >= inners.length ? inners.length - 1 : currentIndex; // index값이 inner의 총 개수보다 많아질 경우 마지막 인덱스값으로 변경
  innerList.style.marginLeft = `-${outer.clientWidth * currentIndex}px`; // index만큼 margin을 주어 옆으로 밀기
  clearInterval(interval); // 기존 동작되던 interval 제거
  interval = getInterval(); // 새로운 interval 등록
});

/*
  주기적으로 화면 넘기기
*/
const getInterval = () => {
  return setInterval(() => {
    currentIndex++;
    currentIndex = currentIndex >= inners.length ? 0 : currentIndex;
    innerList.style.marginLeft = `-${outer.clientWidth * currentIndex}px`;
  }, 5000);
}

let interval = getInterval(); // interval 등록

// ----------------------------------------------------------------------------------------