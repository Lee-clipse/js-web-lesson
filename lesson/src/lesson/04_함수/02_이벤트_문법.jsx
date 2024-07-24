import React from "react";

function Index0402() {
  // 이벤트 사용
  function alertHello() {
    alert("Hello");
  }

  function alertInputText(event) {
    alert(event.target.value);
  }

  return (
    <div>
      <div id="lesson-title">함수 - 이벤트 문법</div>
      <div id="lesson-content">
        <div>유사한 동작을 하는 코드가 여러 곳에서 필요한 경우 사용</div>
        <div>덕분에 중복 없이 유사한 동작을 하는 코드를 여러번 호출 가능</div>
        <div>
          ex: 상품의 무게와 고객의 나라, postal code를 입력 받아서 배송 운임료를 계산하는 함수
        </div>

        <div className="title">onClick 이벤트</div>
        <div>클릭하면 onClick 이벤트로 지정한 함수를 실행</div>
        <div onClick={() => alertHello()} className="link-button">
          인사하기
        </div>
        <div>- 응용 1: `결제하기` 버튼 클릭시 결제 함수 실행</div>
        <div>- 응용 2: `로그인` 버튼 클릭시 입력한 id, pwd 바탕으로 로그인 함수 실행</div>

        <div className="title">onChange 이벤트</div>
        <div>
          input 태그 대상으로, 사용자의 키보드 입력에 따라 onChange 이벤트로 지정한 함수를 실행
        </div>
        <input
          type="text"
          name="text"
          placeholder="아무거나 입력"
          onChange={(event) => alertInputText(event)}
        />
        <div>- 응용 1: 사용자 입력 값을 변수에 저장</div>
      </div>
    </div>
  );
}

export default Index0402;
