# 🐹 햄니버스

> **몬스타엑스 기현 유니버스 프라이빗 메시지 아카이빙 웹사이트**  
> 2022-03-10부터 2023-02-14까지의 채팅 데이터를 포함하고 있습니다.

## 목차

1. [프로젝트 개요](#프로젝트-개요)
2. [사용 기술](#사용-기술)
3. [스크린샷](#스크린샷)
4. [주요 이슈 및 PR](#주요-이슈-및-pr)
5. [설치](#설치)
6. [개선할 점](#개선할-점)

## 프로젝트 개요

2023년 2월 17일 [유니버스 서비스 종료](https://x.com/into__universe/status/1612977603043885058?s=20)에 따라 어플에서 제공하던 프라이빗 메시지의 열람이 불가능하게 되었습니다.  
서비스 종료 전 csv 파일로 제공받은 채팅 데이터를 기반으로 프라이빗 메시지를 편하게 열람할 수 있는 **아카이빙 웹사이트**를 제작하게 되었습니다.  
[🔗 Demo](https://hamniverse.vercel.app/)

## 사용 기술

- Next.js 13
- React v18
- TypeScript 5.2.2
- framer-motion
- plaiceholder

## 스크린샷

### 메인 화면

<img src="https://github.com/aemaaeng/universe-message-backup/assets/78579776/e491ebee-25e8-45cb-b350-e84bee905fd6" width="350"/>

`setInterval`을 이용해 타이핑 효과를 구현하였습니다.

### 채팅 목록

<img src="https://github.com/aemaaeng/universe-message-backup/assets/78579776/89983b4c-4be8-401f-917b-caeff9fb4fdb" width="350" />

채팅은 날짜별로 분류되어 있습니다.

<img src="https://github.com/aemaaeng/universe-message-backup/assets/78579776/17f5582c-f13a-498f-84ea-c42ff82a13fb" width="350" />

사진, 동영상, 음성 포함 여부에 따라 필터링하여 열람할 수 있습니다.

<img src="https://github.com/aemaaeng/universe-message-backup/assets/78579776/73c34b4f-2a3d-4109-a5fe-63e4a7a972df" width="350" />

필터링을 완전히 해제하면 자동으로 전체 리스트가 보여집니다.

### 검색

<img src="https://github.com/aemaaeng/universe-message-backup/assets/78579776/1aadce1e-4e3e-47cd-8c5d-a7b8653232fc" width="350" />

검색 기능을 통해 키워드가 포함된 채팅을 찾을 수 있습니다.  
키워드는 하이라이트로 표시됩니다.

\+ 🔧 2023.10.03 - 검색 결과 페이지가 별도로 분리되었습니다.

<img src="https://github.com/aemaaeng/universe-message-backup/assets/78579776/d1f09bff-4a54-4018-90ed-bed0ce76e7bb" width="350" />

### 채팅 열람

<img src="https://github.com/aemaaeng/universe-message-backup/assets/78579776/c9a060e7-0cd5-4214-8096-9e547e0f0811" width="350" />

[기존 유니버스 앱 프라이빗 메시지의 UI](https://github.com/aemaaeng/universe-message-backup/assets/78579776/50f611fb-e322-4b03-b779-5821981a0604)와 최대한 비슷하게 구현하였습니다.  
오른쪽 하단 버튼을 이용해 화면 상단으로 이동할 수 있습니다.

## 커밋 컨벤션

<a href="https://gitmoji.dev">
  <img
    src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square"
    alt="Gitmoji"
  />
</a>

[gitmoji](https://github.com/carloscuesta/gitmoji)의 커밋 컨벤션을 따르고 있습니다.

## 주요 이슈 및 PR

- Next.js 13으로 마이그레이션 - 🔗 [issue](https://github.com/aemaaeng/universe-message-backup/issues/26) 🔗 [PR](https://github.com/aemaaeng/universe-message-backup/pull/27)
- 이미지 layout shift 수정 - 🔗 [issue](https://github.com/aemaaeng/universe-message-backup/issues/42) 🔗 [PR](https://github.com/aemaaeng/universe-message-backup/pull/48)
- 미디어 필터링 기능 - 🔗 [issue](https://github.com/aemaaeng/universe-message-backup/issues/50) 🔗 [PR](https://github.com/aemaaeng/universe-message-backup/pull/57)
- 검색 페이지 분리 - 🔗 [issue](https://github.com/aemaaeng/universe-message-backup/issues/64) 🔗 [PR](https://github.com/aemaaeng/universe-message-backup/pull/67)
- 배포 시 이미지 로딩 오류 - 🔗 [issue](https://github.com/aemaaeng/universe-message-backup/issues/62) 🔗 [PR 1](https://github.com/aemaaeng/universe-message-backup/pull/63) 🔗 [PR 2](https://github.com/aemaaeng/universe-message-backup/pull/69)

## 설치

1. 레포지토리를 클론합니다.

```
git clone git@github.com:aemaaeng/universe-message-backup.git
```

2. 프로젝트 디렉토리에서 의존성 패키지를 설치합니다.

```
npm install
```

3. 추가 파일을 다운로드합니다.  
   `data.json`과 `public/media` 폴더는 용량 문제상 레포지토리에 포함되어 있지 않습니다.  
   [이 링크](https://drive.google.com/drive/folders/1gTxB6pAla1aCFtwaBbirFgh3a_QjuPW6?usp=sharing)에서 `data.json`과 media 폴더를 다운로드 받아 `data.json`은 프로젝트의 루트에, `media` 폴더는 `public` 폴더 아래에 위치시켜주시기 바랍니다.
   `data.json`과 `public/media`가 존재하지 않으면 프로젝트가 로컬에서 원활하게 실행되지 않습니다.

4. (초기 실행 시) 프로젝트 루트 디렉토리에서 `npm run generate`를 실행합니다. 이미지 로딩에 필요한 json 파일을 생성해주는 명령어입니다.

```
npm run generate
```

5. 프로젝트 디렉토리에서 개발 서버를 실행합니다.

```
npm run dev
```

6. [http://localhost:3000](http://localhost:3000)에 접속하면 프로젝트를 볼 수 있습니다.

\* 본 프로젝트는 Node.js v18.12.1에서 개발되었습니다.

## 개선할 점

- 좋아하는 채팅 즐겨찾기
- 캘린더 형태로 열람할 수 있는 기능
