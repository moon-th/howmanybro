# How Many Bro

주식 손익 금액을 재미있는 물품 수량으로 바꿔 보여주는 한국어 웹앱입니다.

## 주요 기능

- 손실/수익 금액 입력
- 금액대에 맞는 물품 랜덤 환산
- 결과 카드 이미지 다운로드
- 수익/손실별 결과 배경과 수량 색상 구분
- Supabase 익명 통계 연동
- Google AdSense 광고 슬롯 연동 준비

## 로컬 실행

```bash
npm install
npm run dev
```

## 검증

```bash
npm run lint
npm run build
```

## Vercel 환경변수

Vercel 프로젝트 환경변수에 아래 값을 등록합니다.

```env
VITE_SUPABASE_URL=
VITE_SUPABASE_PUBLISHABLE_KEY=
VITE_ADSENSE_CLIENT=
VITE_ADSENSE_MAIN_SLOT=
VITE_ADSENSE_RESULT_SLOT=
VITE_ADSENSE_BREAK_SLOT=
```

## 배포 메모

- GitHub repository: `howmanybro`
- Vercel project: `howmanybro`
- Production domain: `howmanybro.com`
