## Description

원티드 프리온보딩 코스에서 프로젝트로 **오드컨셉 이미지 드래그 페이지**를 개발하였습니다.
이미지 위에 드래그하여 영역을 생성하고 드랍하여 영역 결정, 영역이 결정되면 텍스트 입력창이 뜨고 입력하면 영역에 입력한 텍스트가 그려집니다.
수정,삭제 기능을 추가하여 사용자의 편의성을 생각 했으며, localstorage에 데이터를 저장하여 reload시 데이터를 유지하게 해주었습니다.
크로스 브라우징을 설정하여 다양한 브라우저에서 사용이 가능하도록 하였습니다.

## Usage(자세한 실행 방법)

1. git clone

```jsx
<과제1>
git clone https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-05.git

<과제2>
git clone https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-05-2.git
```

2. wanted_pre_onboarding 폴더를 인터프린터나 컴파일러로 열기
3. 필요한 라이브러리 설치

```
npm install
```

4. 실행

```
npm run start
```

기술스택

- react.js 사용
- react-router 페이지 이동
- localstory로 데이터 저장
- CSS는 styled-component를 사용하였습니다.
- 배포는 vercel 을 이용하여 진행했습니다

# 배포주소

```jsx
<과제1>
https://wanted-codestates-project-05-05-01.vercel.app/

<과제2>
https://wanted-codestates-project-05-05-02-sigma.vercel.app/
```

# 구현 내용

## <윤구님>

### 구현 내용

#### canvas를 이용한 이미지 드래그 및 텍스트 입력

- 이미지 위에 드래그하여 영역을 생성하고 드랍하여 영역 결정, 영역이 결정되면 텍스트 입력창이 뜨고 입력하면 영역에 입력한 텍스트가 그려집니다.
  영역이 결정되고 텍스트가 입력되면 영역을 생성할 때와 영역의 색깔이 변합니다.

- 이미지 위에 드래그시 영역 생성
  ![drag](https://user-images.githubusercontent.com/85268135/156313702-0af82b95-1a3b-4a74-90c6-497cff75924f.gif)

- 이미지 드래그 드랍시 텍스트 입력 후 텍스트 그리기 및 영역 색깔 변경
  ![dragdrop](https://user-images.githubusercontent.com/85268135/156314105-cf953881-d3a8-4a51-913e-3d431ebd97b4.gif)

- 그려진 영역은 로컬스토리지에 저장되어 reload시에도 유지됩니다.
  ![reload](https://user-images.githubusercontent.com/85268135/156314842-a93f7f91-0456-4ab1-b8f2-ea146bc1ade3.gif)

### 구현 방법

- canvas api의 fillRect, strokeRect, fillText를 이용했으며 mousedown mouseup mousemove mouseleave 이벤트를 이용하였습니다.
- mousedown 이벤트로 시작좌표를 설정하였습니다.
- mousemove 이벤트가 발생할 때 마다 현재 마우스 위치를 받아 시작좌표부터 높이와 너비를 계산하여 영역을 그려주었습니다.
- mouseleave와 mouseup 이벤트가 발생하면 텍스트 입력창이 뜨고 텍스트를 입력한다면 시작좌표와 넓이 너비를 이용하여 영역을 그린 후 그 안에 입력한 텍스트를 그려줍니다.
- 각 영역의 좌표와 텍스트를 localstorage에 저장하여 새로고침시에도 영역이 유지되도록 하였습니다.

## <승연님>

## 크로스 브라우징 지원

- 메타 태그를 이용하여 만약 content에 값이 "IE=edge"라면 해당브라우저가 할 수 있는 가장 최신의 모드로 렌더링을 하도록 하였습니다.<br>
- css reset.css 초기화, css vender prefix를 하였습니다. <br>
- react-app-polyfill를 사용하여 ie 11 버전에서도 사용할 수 있게 하였습니다. <br>
- ie 11, firefox 60, chrome 79, last 1 safari version 에서 사용할 수 있습니다.

<br>

<img src="https://user-images.githubusercontent.com/54584337/156364094-9683793f-7655-4232-8d40-e3da7d9184f6.png" width="500px">

## <승규님>

1. 구현한 내용

   - 선택되어있는 영역 수정 기능

     1-1 방법

   - 수정 버튼을 누르고 수정모드로 들어가서 다시 영역을 선택하면 원래 있던 영역의 아이디는 그대로 두고 x,y만 바꾸어서 다시 그려줍니다.

## <정민님>

- 수정하기 기능과 삭제 기능을 담당하였습니다.
  제가 기능을 분담 했을 때는 다들 canvas에 대해 생소하여 react가 아니라 modern javascript로 구현하고 있어 저도 팀원들에 맞춰 modern javascript로 기능을 구현하였습니다.
  코드는 다 구현하였지만, 테스트 작업이였기에 따로 버튼은 생성하지 않았습니다.

- 구현 방법
  왼쪽 상단에 글자를 클릭 시 해당 태그를 찾아 그 태그와 일치하는 datas값을 filter하여 datas의 요소를 찾아냅니다.<br>
  삭제 기능을 구현할 때는 찾아낸 index 값을 splice 메소드를 활용해 제거해 주었고,<br>
  수정 기능은 그 요소의 위치 값을 불러와 거기서부터 drawing을 할 수 있도록 해주었습니다.<br>
  drawing이 끝나면 onmousedown 기능을 활용해 클릭 시 텍스트를 입력하게 해주고 drawing을 멈추어 현재 위치값을 아까 찾은 datas[index]에 할당 시켜주었습니다. <br>

<삭제>
<img src="https://user-images.githubusercontent.com/56882147/156374625-7b429b3f-bd51-40a8-8d9f-8f670ab76bdd.gif"/>
<수정>
<img src="https://user-images.githubusercontent.com/56882147/156375955-6c389733-a413-4a9b-b9ae-d5638800ecc1.gif"/>
<br>
<br>
<br>
<br>
<br>

# 구현하면서 어려운 점

## <윤구님>

### 개발 중 어려웠던 점

- 드래그할 때 영역이 마우스를 따라 실시간으로 그려지는 것을 구현하면서 mousemove이벤트에서 계속해서 그리게하면 마우스가 움직일 때 마다 영역이 그려지는 문제가 생겼습니다.

### 해결 방법

- mousemove이벤트가 발생할 때마다 canvas를 초기화한 후 canvas의 이미지와 그려진 영역, 텍스트를 전부 다시 그린 후 영역을 그리는 방식으로 해결하였습니다.
  드래그가 끝나고 텍스트가 입력된다면 영역의 정보를 담은 state에 정보를 추가하고 canvas를 초기화한 후 영역을 새로 그렸습니다.
  텍스트가 입력되지 않았거나 텍스트 입력이 취소된다면 canvas초기화 후 이미 존재하는 영역을 새로 그렸습니다.

## <승연님>

- 크로스 브라우징을 할때 어떤 브라우저 화면에서도 동일하게 보여야 하는 부분이 어려웠습니다.
  (해결했다면)해결방법
- 각 브라우저마다 css 초기화하여 맞추고 메타 태그를 만약 content에 값이 "IE=edge"라면 최신 모드로 렌더링 하도록 하였습니다.
- ie 11버전 브라우저에서도 동작하기 위해 react-app-polyfill를 사용하여 동작되게 하였습니다.

## <승규님>

- 1번프로젝트를 하다가 늦게 2번프로젝트에 합류하였는데 재가 짠 코드가 아니다보니 분석하는게 어려웠습니다.

  2-1(해결했다면)해결방법

- 구글링하면서 열심히 분석하였습니다

## <정민님>

- Modern javascirpt로 수정하기, 삭제하기 기능을 구현하였지만, React로 리팩토링 하는 과정에서 hooks의 기능을 제대로 활용하지 못해 리렌더링과 반복적인 코드실행으로 구현에 많은 에로사항이 있었습니다.
  기능부터 구현해보고자 어떻게든 javascript 코드랑 최대한 비슷하게 구현하려고 노력했지만 잘 진행이 되지 않아 같은 팀원인 승규님의 도움으로 문제를 해결할 수 있었습니다.
  저 같은 경우에는 새로운 함수를 만들어 수정 기능을 만드는 반면 승규님은 이미 만들어져 있는 코드를 활용해서 약간의 수정으로 기능을 구현하였습니다.
  제가 부족하다고 느꼈던 부분은 전체 코드를 파악하지 못했고, 리액트의 기능을 잘 활용하지 못했던 것 같습니다.
