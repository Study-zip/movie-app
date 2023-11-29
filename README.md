## ReactJS로 영화 웹 서비스 만들기

[ReactJS로 영화 웹 서비스 만들기](https://nomadcoders.co/react-for-beginners?utm_medium=website&utm_source=webpage&utm_campaign=roadmap)에서의 코드와 내용을 정리한 repository입니다.

### ✍️ 블로그 포스팅

강의를 들으며 더욱 공부하고 싶은 부분이 생겼을 때 블로그 주제로 선정하여 포스팅했습니다.

[오늘은 TSX가 화내지 않기를 바라며 | React, TypeScript에서의 Event handler 처리 방식](https://nami-socket.tistory.com/35)

### React가 해결해주는 문제는 무엇인가?

기술이 고치려고 하는 문제를 이해하면 그 기술을 더 잘 이해하게 된다.

UI에 상호작용 Interactivity를 만들어준다.

**Before React**

```html
<!DOCTYPE html>
<html lang="en">
  <body>
    <span id="counter">Total Clicks : 0</span>
    <button id="btn">Click me</button>
  </body>
  <script>
    let counter = 0;
    const btn = document.getElementById("btn");
    const total = document.getElementById("counter");
    function handleClick() {
      console.log("I'm Clicked");
      counter += 1;
      total.innerText = `Total Clicks : ${counter}`;
    }
    btn.addEventListener("click", handleClick);
  </script>
</html>
```

- 간단한 Counter를 구현하기 위한 코드의 양
- Vanilla JS에서는 HTML을 먼저 생성, JS로 가져와서 HTML을 수정.

**In React**

✳️ 강의는 17ver. (2021)이지만 최신 버전으로 마이그레이션 합니다.

React18부터 creatRoot를 사용한다.

### JSX 문법 + Babel

```jsx
import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  // counter : 초기값(0), setCounter : 값을 바꾸는 함수(modifier)
  const handleClick = () => {
    console.log("Counter Clicked");
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div>
      <h3>Total Clicks: {counter}</h3>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};

export default App;
```

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
```

- React JS에서는 모든 것이 JS로 시작, 이후 HTML로 생성됨
- React는 업데이트가 필요한 HTML의 element를 업데이트 할 수 있다.
- 즉, React는 유저에게 보여질 내용(UI)을 컨트롤할 수있다.
- React는 UI를 구성하는 컴포넌트를 정의하고 컴포넌트들을 가상 DOM요소로 나타내기 위해 React Element를 생성한다.
- react-dom library는 해당 가상 DOM요소를 렌더링 한다.

**State 상태**

Vanilla JS는 DOM 변경을 직접 처리한다. 필요한 DOM 요소를 직접 선택하고 요소의 속성을 변경하거나 새로운 요소를 추가하거나 기존 요소를 제거하는 등의 작업을 직접 수행한다.

이 과정은 비용이 많이 드는 연산으로, 성능 저하 이슈가 생길 수 있다.

ReactJS는 DOM 변경을 위해 Virtual DOM이라는 개념을 도입한다. 실제 DOM 트리의 사본으로, 별도로 존대한다.

상태 변경이 발생할 때마다 가상 DOM 트리 생성 후 변경된 부분을 파악한 후 변경 사항만 실제 DOM에 반영한다.(변화가 일어난 부분의 자식 컴포넌트 들 또한)

이 과정을 Reconciliation 재조정 또는 Diffing이라고 부른다.
