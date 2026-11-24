# Helvetica : The Sans-ation — 디자인 규칙

레퍼런스: `references/CD2_P2_최종 복사본.png` (포스터 4961x7016, 비율 기준 1414px 폭)
구현: `index.html`, `css/style.css`, `js/main.js`

## 1. 레이아웃 (데스크톱, 포스터 1:1)
- 모든 가로 치수는 포스터 폭 1414px 기준 비율(vw). 1px = 0.0707vw.
- 좌우 여백: 왼쪽 5.3vw / 오른쪽 4.5vw. 라벨 열 16.83vw, 카드 열 3개(각 21.4vw), 카드 간격 4.67vw.
- 3개 섹션 x 3종 = 9종. 섹션 순서와 구성:
  - Legacy 헬베티카의 계보: Akzidenz-Grotesk, Neue Haas Grotesk, Neue Helvetica
  - Rivals & Alternatives 라이벌과 대체자들: Univers, Arial, Nimbus Sans
  - Descendants 후계자들: Roboto, San Francisco, Inter
- 섹션 행 간격은 고정(최소 높이 31.4vw + 아래 여백 5.4vw). 헤더 높이 27.6vw + 아래 여백 5.4vw.
- 푸터는 두지 않는다.
- 상단 네비는 스크롤 후에만 고정 바로 등장(포스터 구조를 가리지 않기 위해).
- 카드 내부 크기는 카드 폭 기준(cqw)으로 스케일한다.

## 2. 기울기
- 헤더 제목, 범례(각주 포함), 섹션 소제목(영문+국문)은 모두 -8.25° (`--tilt`). 값은 한 곳에서만 바꾼다.
- "ation"의 a는 검정 박스의 오른쪽 아래 모서리와 겹치고, 겹친 부분은 흰색 / 박스 바깥은 검정으로 반전된다 (흰 글자 + `mix-blend-mode: difference`).
- 타이틀 구성: "Helvetica" / 검정 박스 ": The Sans-" / 박스 밖으로 빠지는 "ation". 화면 폭 안에서 잘리면 안 된다.

## 3. 색
- 검정 #000, 분홍(Helvetica) #e9a9ac, 빨강(각주) #d0021b, 구분선 #b9b9b9, 배경 흰색.
- 범례: 분홍 사각형 = Helvetica, 검정 사각형 = Others. 두 사각형은 동일한 크기. 빨간 점선 원(사각 점) = 각주.

## 4. 폰트
| 용도 | 폰트 |
|---|---|
| 제목, 영문 본문, 숫자, 제작사명 | Helvetica (Helvetica Neue) |
| 국문 본문 (정보표 항목명, 설명, 섹션 국문 소제목, 범례 라벨) | YMG 문체고딕 (Medium / Bold) |
| 각주, 서브텍스트 | 신중고딕 Medium |
| 비교 샘플 글자(검정)와 카드의 폰트명 | 해당 카드의 폰트 자체 |
| 기준 샘플 글자(분홍) | Helvetica |

- 영문 본문 스택에는 중간에 `sans-serif` 같은 범용 폰트를 넣지 않는다. 한글 글리프가 문체고딕으로 넘어가야 하기 때문.
- 카드별 폰트 출처:
  - Adobe Fonts 웹키트(https://use.typekit.net/xpt1jua.css): akzidenz-grotesk-next-pro, neue-haas-grotesk-display, univers-next-pro, arial, nimbus-sans, roboto, inter-28pt
  - `Fonts/` 폴더: 문체고딕(Medium, Bold), 신중고딕 Medium, SF Pro Text Bold(San Francisco)
  - 시스템 폰트: Helvetica / Helvetica Neue (Neue Helvetica 포함)
- 줄바꿈은 단어 단위(`word-break: keep-all`).

## 5. 카드 구조 (위에서 아래로)
1. 폰트 비교 영역: 카드 폭 중앙 정렬(center align). 높이 60cqw.
2. 폰트명: 해당 폰트로 표기, 굵게, 자간 -0.05em.
3. 정보표: 제작 시기 / 제작사 / 제작국. 위쪽 굵은 선(검정), 행 사이 얇은 회색 선.
4. 설명(국문 본문 규칙), 위아래 얇은 회색 선.
5. 각주(신중고딕), 번호 `n)`로 시작.

## 6. 폰트 비교 규칙 (핵심)
- 분홍(Helvetica)과 검정(비교 폰트)은 동일한 위치, 동일한 크기로 겹친다. 의도적 오프셋 없음.
- 정렬: 같은 칸에 두 레이어를 놓고 글자 베이스라인 기준으로 맞춘다. 가로는 카드 중앙.
- 글자 크기 76cqw, 자간 -0.045em. 굵기는 모든 폰트 비교에서 Bold(700). Univers만 웹키트에 700이 없어 가장 굵은 600을 사용.
- 검정이 분홍 위. 호버하면 분홍이 위로 올라와 곱하기 블렌드. (겹침 on/off 버튼은 두지 않는다.)
- 샘플 글자(2자)는 포스터와 동일: Rc, Ra, ft, Ga, Rt, Aa, Ga, Ri, Re.

## 7. 각주 원
- 원형 윤곽의 빨간 점선. 점은 둥글지 않고 사각(대시, `stroke-linecap: butt`), 테두리 1.6cqw, 지름 약 27~28cqw.
- 중심 좌표는 포스터에서 측정한 값(카드 폭 기준 cqw)을 `index.html`의 `--cx`, `--cy`, `--cs`로 저장.
- 번호 라벨은 원의 오른쪽 위, 빨강 굵은 글씨.
- 원과 각주 텍스트는 호버/포커스/탭으로 서로 연동(원 확대 + 텍스트 빨강 강조).
- 폰트가 바뀌면 원 위치를 포스터와 다시 대조한다.

## 8. 모션
- 카드는 스크롤 진입 시 페이드/슬라이드 인, 점선 원은 이후에 그려진다.
- `prefers-reduced-motion`에서는 모션 제거.
- `?static` 쿼리: 모든 카드를 즉시 표시(스크린샷 확인용).

## 9. 반응형
- 1000px 이하: 라벨이 카드 위로, 카드 2열. 600px 이하: 1열.
- 데스크톱(1000px 초과)이 포스터 1:1 기준.
