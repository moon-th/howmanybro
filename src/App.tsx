import { useEffect, useMemo, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import pixelAnt from './assets/pixel-ant.svg'
import antMoodSheet from './assets/generated/hero-ants/ant-mood-row.png'
import resultBgBlue from './assets/generated/result-assets/result-card-bg-blue.png'
import resultBgCream from './assets/generated/result-assets/result-card-bg-cream.png'
import resultBgLavender from './assets/generated/result-assets/result-card-bg-lavender.png'
import resultBgMint from './assets/generated/result-assets/result-card-bg-mint.png'
import resultBgNight from './assets/generated/result-assets/result-card-bg-night.png'
import resultBgPink from './assets/generated/result-assets/result-card-bg-pink.png'
import chickenPieceIcon from './assets/items/under_10k/chicken_piece.png'
import chocoMilkIcon from './assets/items/under_10k/choco_milk.png'
import chocoPieIcon from './assets/items/under_10k/choco_pie.png'
import churuIcon from './assets/items/under_10k/churu.png'
import daisoShoppingIcon from './assets/items/under_10k/daiso_shopping.png'
import dogChewIcon from './assets/items/under_10k/dog_chew.png'
import eggIcon from './assets/items/under_10k/egg.png'
import fishBreadIcon from './assets/items/under_10k/fish_bread.png'
import gimIcon from './assets/items/under_10k/gim.png'
import gimbapIcon from './assets/items/under_10k/gimbap.png'
import gukbapIcon from './assets/items/under_10k/gukbap.png'
import hamburgerIcon from './assets/items/under_10k/hamburger.png'
import icedAmericanoIcon from './assets/items/under_10k/iced_americano.png'
import kanuStickIcon from './assets/items/under_10k/kanu_stick.png'
import lottoTicketIcon from './assets/items/under_10k/lotto_ticket.png'
import pantiesIcon from './assets/items/under_10k/panties.png'
import potatoIcon from './assets/items/under_10k/potato.png'
import ramenIcon from './assets/items/under_10k/ramen.png'
import scratchLotteryIcon from './assets/items/under_10k/scratch_lottery.png'
import socksIcon from './assets/items/under_10k/socks.png'
import toiletPaperIcon from './assets/items/under_10k/toilet_paper.png'
import tomatoIcon from './assets/items/under_10k/tomato.png'
import toyBallIcon from './assets/items/under_10k/toy_ball.png'
import triangleGimbapIcon from './assets/items/under_10k/triangle_gimbap.png'
import waterIcon from './assets/items/under_10k/water.png'
import airpodsIcon from './assets/items/10k_100k/airpods.png'
import baeminMinOrderIcon from './assets/items/10k_100k/baemin_min_order.png'
import beerIcon from './assets/items/10k_100k/beer.png'
import cakeIcon from './assets/items/10k_100k/cake.png'
import catLitterIcon from './assets/items/10k_100k/cat_litter.png'
import chickenIcon from './assets/items/10k_100k/chicken.png'
import convenienceLunchboxIcon from './assets/items/10k_100k/convenience_lunchbox.png'
import gameTitleIcon from './assets/items/10k_100k/game_title.png'
import hanwoo1kgIcon from './assets/items/10k_100k/hanwoo_1kg.png'
import hotel1nightIcon from './assets/items/10k_100k/hotel_1night.png'
import meatBuffetIcon from './assets/items/10k_100k/meat_buffet.png'
import movieTicketIcon from './assets/items/10k_100k/movie_ticket.png'
import pcBang1hIcon from './assets/items/10k_100k/pc_bang_1h.png'
import perfumeIcon from './assets/items/10k_100k/perfume.png'
import petFoodIcon from './assets/items/10k_100k/pet_food.png'
import pizzaIcon from './assets/items/10k_100k/pizza.png'
import sashimiPlateIcon from './assets/items/10k_100k/sashimi_plate.png'
import sneakersIcon from './assets/items/10k_100k/sneakers.png'
import sojuIcon from './assets/items/10k_100k/soju.png'
import steamGameIcon from './assets/items/10k_100k/steam_game.png'
import tanghuluIcon from './assets/items/10k_100k/tanghulu.png'
import tteokbokkiIcon from './assets/items/10k_100k/tteokbokki.png'
import waterBowlIcon from './assets/items/10k_100k/water_bowl.png'
import airPurifierIcon from './assets/items/100k_1m/air_purifier.png'
import appleWatchIcon from './assets/items/100k_1m/apple_watch.png'
import catTowerIcon from './assets/items/100k_1m/cat_tower.png'
import celineBagIcon from './assets/items/100k_1m/celine_bag.png'
import chanelBagIcon from './assets/items/100k_1m/chanel_bag.png'
import dRamIcon from './assets/items/100k_1m/d_ram.png'
import dadSuitIcon from './assets/items/100k_1m/dad_suit.png'
import galaxyIcon from './assets/items/100k_1m/galaxy.png'
import hairDryerIcon from './assets/items/100k_1m/hair_dryer.png'
import ipadIcon from './assets/items/100k_1m/ipad.png'
import iphoneIcon from './assets/items/100k_1m/iphone.png'
import luxuryWalletIcon from './assets/items/100k_1m/luxury_wallet.png'
import macbookIcon from './assets/items/100k_1m/macbook.png'
import massageChairIcon from './assets/items/100k_1m/massage_chair.png'
import robotVacuumIcon from './assets/items/100k_1m/robot_vacuum.png'
import tvIcon from './assets/items/100k_1m/tv.png'
import vanCleefNecklaceIcon from './assets/items/100k_1m/van_cleef_necklace.png'
import washingMachineIcon from './assets/items/100k_1m/washing_machine.png'
import wetDryVacuumIcon from './assets/items/100k_1m/wet_dry_vacuum.png'
import benzCarIcon from './assets/items/1m_100m/benz_car.png'
import bmwCarIcon from './assets/items/1m_100m/bmw_car.png'
import campingCarIcon from './assets/items/1m_100m/camping_car.png'
import dogHouseIcon from './assets/items/1m_100m/dog_house.png'
import electricBikeIcon from './assets/items/1m_100m/electric_bike.png'
import gold1kgIcon from './assets/items/1m_100m/gold_1kg.png'
import honeymoonIcon from './assets/items/1m_100m/honeymoon.png'
import luxuryWatchIcon from './assets/items/1m_100m/luxury_watch.png'
import motorcycleIcon from './assets/items/1m_100m/motorcycle.png'
import officetelDepositIcon from './assets/items/1m_100m/officetel_deposit.png'
import teslaCarIcon from './assets/items/1m_100m/tesla_car.png'
import weddingDressIcon from './assets/items/1m_100m/wedding_dress.png'
import weddingRingIcon from './assets/items/1m_100m/wedding_ring.png'
import apartmentIcon from './assets/items/over_100m/apartment.png'
import convenienceStoreStartupIcon from './assets/items/over_100m/convenience_store_startup.png'
import cowIcon from './assets/items/over_100m/cow.png'
import dogHouse100Icon from './assets/items/over_100m/dog_house_100.png'
import excavatorIcon from './assets/items/over_100m/excavator.png'
import franchiseStartupIcon from './assets/items/over_100m/franchise_startup.png'
import hanRiverViewHouseIcon from './assets/items/over_100m/han_river_view_house.png'
import horseIcon from './assets/items/over_100m/horse.png'
import jejuLandIcon from './assets/items/over_100m/jeju_land.png'
import porscheCarIcon from './assets/items/over_100m/porsche_car.png'
import tractorIcon from './assets/items/over_100m/tractor.png'
import yachtIcon from './assets/items/over_100m/yacht.png'
import './App.css'

const ITEM_DOCK = [
  { label: '라면', icon: ramenIcon },
  { label: '아아', icon: icedAmericanoIcon },
  { label: '팬티', icon: pantiesIcon },
  { label: '강아지집', icon: dogHouseIcon },
  { label: '치킨', icon: chickenIcon },
  { label: '샤넬백', icon: chanelBagIcon },
  { label: 'D램', icon: dRamIcon },
]

const LOSS_LIVE_ITEMS = [
  { rank: '1위', label: '라면', value: '3,521개', icon: ramenIcon },
  { rank: '2위', label: '아아', value: '2,985잔', icon: icedAmericanoIcon },
  { rank: '3위', label: '팬티', value: '2,431장', icon: pantiesIcon },
  { rank: '4위', label: '강아지집', value: '1,257채', icon: dogHouseIcon },
  { rank: '5위', label: '치킨', value: '987마리', icon: chickenIcon },
]

const PROFIT_LIVE_ITEMS = [
  { rank: '1위', label: '아아', value: '1,842잔', icon: icedAmericanoIcon },
  { rank: '2위', label: '치킨', value: '1,210마리', icon: chickenIcon },
  { rank: '3위', label: '샤넬백', value: '328개', icon: chanelBagIcon },
  { rank: '4위', label: 'BMW', value: '42대', icon: bmwCarIcon },
  { rank: '5위', label: '소 한 마리', value: '17마리', icon: cowIcon },
]

const FALLBACK_LIVE_STATS: LiveStats = {
  rankings: {
    loss: LOSS_LIVE_ITEMS,
    profit: PROFIT_LIVE_ITEMS,
  },
  summary: {
    loss: 2431,
    profit: 1208,
  },
}

const LOSS_BACKGROUNDS = [resultBgBlue, resultBgLavender, resultBgNight]
const PROFIT_BACKGROUNDS = [resultBgCream, resultBgMint, resultBgPink]

const LOSS_CAPTIONS = [
  '샀다 치지 뭐...',
  '기념품 생긴 셈...',
  '눈물값 했다...',
]

const PROFIT_CAPTIONS = [
  '지갑이 웃는다!',
  '오늘은 플렉스!',
  '수익 맛 좋다!',
  '내일도 가보자!',
]

type ResultItem = {
  label: string
  unit: string
  price: number
  icon: string
  weight?: number
}

const RESULT_ITEM_SECTIONS: Array<{
  label: string
  maxAmount: number
  items: ResultItem[]
}> = [
  {
    label: '10만원 이하',
    maxAmount: 100000,
    items: [
      { label: '치킨 조각', unit: '조각', price: 2500, icon: chickenPieceIcon },
      { label: '초코우유', unit: '개', price: 1800, icon: chocoMilkIcon },
      { label: '초코파이', unit: '개', price: 500, icon: chocoPieIcon },
      { label: '츄르', unit: '개', price: 700, icon: churuIcon },
      { label: '생활용품', unit: '회', price: 5000, icon: daisoShoppingIcon },
      { label: '강아지 껌', unit: '개', price: 3000, icon: dogChewIcon },
      { label: '계란', unit: '개', price: 350, icon: eggIcon },
      { label: '붕어빵', unit: '개', price: 1000, icon: fishBreadIcon },
      { label: '김', unit: '봉', price: 5000, icon: gimIcon },
      { label: '김밥', unit: '줄', price: 3500, icon: gimbapIcon },
      { label: '국밥', unit: '그릇', price: 10000, icon: gukbapIcon },
      { label: '햄버거', unit: '개', price: 7800, icon: hamburgerIcon },
      { label: '아아', unit: '잔', price: 4700, icon: icedAmericanoIcon },
      { label: '카누 스틱', unit: '개', price: 300, icon: kanuStickIcon },
      { label: '로또', unit: '장', price: 1000, icon: lottoTicketIcon },
      { label: '팬티', unit: '장', price: 12000, icon: pantiesIcon },
      { label: '감자', unit: '개', price: 800, icon: potatoIcon },
      { label: '라면', unit: '봉지', price: 1000, icon: ramenIcon },
      { label: '즉석복권', unit: '장', price: 1000, icon: scratchLotteryIcon },
      { label: '양말', unit: '켤레', price: 3000, icon: socksIcon },
      { label: '휴지', unit: '팩', price: 25000, icon: toiletPaperIcon },
      { label: '토마토', unit: '개', price: 1000, icon: tomatoIcon },
      { label: '장난감 공', unit: '개', price: 3000, icon: toyBallIcon },
      { label: '삼각김밥', unit: '개', price: 1500, icon: triangleGimbapIcon },
      { label: '생수', unit: '병', price: 1000, icon: waterIcon },
      { label: '배달주문', unit: '건', price: 15000, icon: baeminMinOrderIcon },
      { label: '맥주', unit: '캔', price: 3000, icon: beerIcon },
      { label: '케이크', unit: '개', price: 30000, icon: cakeIcon },
      { label: '고양이 모래', unit: '포대', price: 25000, icon: catLitterIcon },
      { label: '치킨', unit: '마리', price: 23000, icon: chickenIcon },
      { label: '도시락', unit: '개', price: 5500, icon: convenienceLunchboxIcon },
      { label: '게임 타이틀', unit: '개', price: 79800, icon: gameTitleIcon },
      { label: '한우 1kg', unit: 'kg', price: 80000, icon: hanwoo1kgIcon },
      { label: '고기뷔페', unit: '명', price: 35000, icon: meatBuffetIcon },
      { label: '영화관람권', unit: '장', price: 15000, icon: movieTicketIcon },
      { label: 'PC방', unit: '시간', price: 1500, icon: pcBang1hIcon },
      { label: '펫사료', unit: '포대', price: 40000, icon: petFoodIcon },
      { label: '피자', unit: '판', price: 28000, icon: pizzaIcon },
      { label: '회 한 접시', unit: '접시', price: 55000, icon: sashimiPlateIcon },
      { label: '소주', unit: '병', price: 5000, icon: sojuIcon },
      { label: '스팀 게임', unit: '개', price: 30000, icon: steamGameIcon },
      { label: '탕후루', unit: '개', price: 4000, icon: tanghuluIcon },
      { label: '떡볶이', unit: '인분', price: 5000, icon: tteokbokkiIcon },
      { label: '물그릇', unit: '개', price: 12000, icon: waterBowlIcon },
      { label: 'D램', unit: '개', price: 8500, icon: dRamIcon },
    ],
  },
  {
    label: '20만원 이하',
    maxAmount: 200000,
    items: [
      { label: '치킨 조각', unit: '조각', price: 2500, icon: chickenPieceIcon },
      { label: '초코우유', unit: '개', price: 1800, icon: chocoMilkIcon },
      { label: '초코파이', unit: '개', price: 500, icon: chocoPieIcon },
      { label: '츄르', unit: '개', price: 700, icon: churuIcon },
      { label: '생활용품', unit: '회', price: 5000, icon: daisoShoppingIcon },
      { label: '강아지 껌', unit: '개', price: 3000, icon: dogChewIcon },
      { label: '계란', unit: '개', price: 350, icon: eggIcon },
      { label: '붕어빵', unit: '개', price: 1000, icon: fishBreadIcon },
      { label: '김', unit: '봉', price: 5000, icon: gimIcon },
      { label: '김밥', unit: '줄', price: 3500, icon: gimbapIcon },
      { label: '국밥', unit: '그릇', price: 10000, icon: gukbapIcon },
      { label: '햄버거', unit: '개', price: 7800, icon: hamburgerIcon },
      { label: '아아', unit: '잔', price: 4700, icon: icedAmericanoIcon },
      { label: '카누 스틱', unit: '개', price: 300, icon: kanuStickIcon },
      { label: '로또', unit: '장', price: 1000, icon: lottoTicketIcon },
      { label: '팬티', unit: '장', price: 12000, icon: pantiesIcon },
      { label: '감자', unit: '개', price: 800, icon: potatoIcon },
      { label: '라면', unit: '봉지', price: 1000, icon: ramenIcon },
      { label: '즉석복권', unit: '장', price: 1000, icon: scratchLotteryIcon },
      { label: '양말', unit: '켤레', price: 3000, icon: socksIcon },
      { label: '휴지', unit: '팩', price: 25000, icon: toiletPaperIcon },
      { label: '토마토', unit: '개', price: 1000, icon: tomatoIcon },
      { label: '장난감 공', unit: '개', price: 3000, icon: toyBallIcon },
      { label: '삼각김밥', unit: '개', price: 1500, icon: triangleGimbapIcon },
      { label: '생수', unit: '병', price: 1000, icon: waterIcon },
      { label: '에어팟', unit: '개', price: 199000, icon: airpodsIcon },
      { label: '배달주문', unit: '건', price: 15000, icon: baeminMinOrderIcon },
      { label: '맥주', unit: '캔', price: 3000, icon: beerIcon },
      { label: '케이크', unit: '개', price: 30000, icon: cakeIcon },
      { label: '고양이 모래', unit: '포대', price: 25000, icon: catLitterIcon },
      { label: '치킨', unit: '마리', price: 23000, icon: chickenIcon },
      { label: '도시락', unit: '개', price: 5500, icon: convenienceLunchboxIcon },
      { label: '게임 타이틀', unit: '개', price: 79800, icon: gameTitleIcon },
      { label: '한우 1kg', unit: 'kg', price: 80000, icon: hanwoo1kgIcon },
      { label: '호텔 1박', unit: '박', price: 120000, icon: hotel1nightIcon },
      { label: '고기뷔페', unit: '명', price: 35000, icon: meatBuffetIcon },
      { label: '영화관람권', unit: '장', price: 15000, icon: movieTicketIcon },
      { label: 'PC방', unit: '시간', price: 1500, icon: pcBang1hIcon },
      { label: '향수', unit: '병', price: 120000, icon: perfumeIcon },
      { label: '펫사료', unit: '포대', price: 40000, icon: petFoodIcon },
      { label: '피자', unit: '판', price: 28000, icon: pizzaIcon },
      { label: '회 한 접시', unit: '접시', price: 55000, icon: sashimiPlateIcon },
      { label: '운동화', unit: '켤레', price: 120000, icon: sneakersIcon },
      { label: '소주', unit: '병', price: 5000, icon: sojuIcon },
      { label: '스팀 게임', unit: '개', price: 30000, icon: steamGameIcon },
      { label: '탕후루', unit: '개', price: 4000, icon: tanghuluIcon },
      { label: '떡볶이', unit: '인분', price: 5000, icon: tteokbokkiIcon },
      { label: '물그릇', unit: '개', price: 12000, icon: waterBowlIcon },
      { label: '캣타워', unit: '개', price: 150000, icon: catTowerIcon },
      { label: 'D램', unit: '개', price: 8500, icon: dRamIcon },
      { label: '강아지집', unit: '채', price: 160000, icon: dogHouseIcon },
    ],
  },
  {
    label: '30만원 이하',
    maxAmount: 300000,
    items: [
      { label: '치킨 조각', unit: '조각', price: 2500, icon: chickenPieceIcon },
      { label: '초코우유', unit: '개', price: 1800, icon: chocoMilkIcon },
      { label: '초코파이', unit: '개', price: 500, icon: chocoPieIcon },
      { label: '츄르', unit: '개', price: 700, icon: churuIcon },
      { label: '생활용품', unit: '회', price: 5000, icon: daisoShoppingIcon },
      { label: '강아지 껌', unit: '개', price: 3000, icon: dogChewIcon },
      { label: '계란', unit: '개', price: 350, icon: eggIcon },
      { label: '붕어빵', unit: '개', price: 1000, icon: fishBreadIcon },
      { label: '김', unit: '봉', price: 5000, icon: gimIcon },
      { label: '김밥', unit: '줄', price: 3500, icon: gimbapIcon },
      { label: '국밥', unit: '그릇', price: 10000, icon: gukbapIcon },
      { label: '햄버거', unit: '개', price: 7800, icon: hamburgerIcon },
      { label: '아아', unit: '잔', price: 4700, icon: icedAmericanoIcon },
      { label: '카누 스틱', unit: '개', price: 300, icon: kanuStickIcon },
      { label: '로또', unit: '장', price: 1000, icon: lottoTicketIcon },
      { label: '팬티', unit: '장', price: 12000, icon: pantiesIcon },
      { label: '감자', unit: '개', price: 800, icon: potatoIcon },
      { label: '라면', unit: '봉지', price: 1000, icon: ramenIcon },
      { label: '즉석복권', unit: '장', price: 1000, icon: scratchLotteryIcon },
      { label: '양말', unit: '켤레', price: 3000, icon: socksIcon },
      { label: '휴지', unit: '팩', price: 25000, icon: toiletPaperIcon },
      { label: '토마토', unit: '개', price: 1000, icon: tomatoIcon },
      { label: '장난감 공', unit: '개', price: 3000, icon: toyBallIcon },
      { label: '삼각김밥', unit: '개', price: 1500, icon: triangleGimbapIcon },
      { label: '생수', unit: '병', price: 1000, icon: waterIcon },
      { label: '에어팟', unit: '개', price: 199000, icon: airpodsIcon },
      { label: '배달주문', unit: '건', price: 15000, icon: baeminMinOrderIcon },
      { label: '맥주', unit: '캔', price: 3000, icon: beerIcon },
      { label: '케이크', unit: '개', price: 30000, icon: cakeIcon },
      { label: '고양이 모래', unit: '포대', price: 25000, icon: catLitterIcon },
      { label: '치킨', unit: '마리', price: 23000, icon: chickenIcon },
      { label: '도시락', unit: '개', price: 5500, icon: convenienceLunchboxIcon },
      { label: '게임 타이틀', unit: '개', price: 79800, icon: gameTitleIcon },
      { label: '한우 1kg', unit: 'kg', price: 80000, icon: hanwoo1kgIcon },
      { label: '호텔 1박', unit: '박', price: 120000, icon: hotel1nightIcon },
      { label: '고기뷔페', unit: '명', price: 35000, icon: meatBuffetIcon },
      { label: '영화관람권', unit: '장', price: 15000, icon: movieTicketIcon },
      { label: 'PC방', unit: '시간', price: 1500, icon: pcBang1hIcon },
      { label: '향수', unit: '병', price: 120000, icon: perfumeIcon },
      { label: '펫사료', unit: '포대', price: 40000, icon: petFoodIcon },
      { label: '피자', unit: '판', price: 28000, icon: pizzaIcon },
      { label: '회 한 접시', unit: '접시', price: 55000, icon: sashimiPlateIcon },
      { label: '운동화', unit: '켤레', price: 120000, icon: sneakersIcon },
      { label: '소주', unit: '병', price: 5000, icon: sojuIcon },
      { label: '스팀 게임', unit: '개', price: 30000, icon: steamGameIcon },
      { label: '탕후루', unit: '개', price: 4000, icon: tanghuluIcon },
      { label: '떡볶이', unit: '인분', price: 5000, icon: tteokbokkiIcon },
      { label: '물그릇', unit: '개', price: 12000, icon: waterBowlIcon },
      { label: '공기청정기', unit: '대', price: 250000, icon: airPurifierIcon },
      { label: '캣타워', unit: '개', price: 150000, icon: catTowerIcon },
      { label: 'D램', unit: '개', price: 8500, icon: dRamIcon },
      { label: '강아지집', unit: '채', price: 160000, icon: dogHouseIcon },
    ],
  },
  {
    label: '40만원 이하',
    maxAmount: 400000,
    items: [
      { label: '치킨 조각', unit: '조각', price: 2500, icon: chickenPieceIcon },
      { label: '초코우유', unit: '개', price: 1800, icon: chocoMilkIcon },
      { label: '초코파이', unit: '개', price: 500, icon: chocoPieIcon },
      { label: '츄르', unit: '개', price: 700, icon: churuIcon },
      { label: '생활용품', unit: '회', price: 5000, icon: daisoShoppingIcon },
      { label: '강아지 껌', unit: '개', price: 3000, icon: dogChewIcon },
      { label: '계란', unit: '개', price: 350, icon: eggIcon },
      { label: '붕어빵', unit: '개', price: 1000, icon: fishBreadIcon },
      { label: '김', unit: '봉', price: 5000, icon: gimIcon },
      { label: '김밥', unit: '줄', price: 3500, icon: gimbapIcon },
      { label: '국밥', unit: '그릇', price: 10000, icon: gukbapIcon },
      { label: '햄버거', unit: '개', price: 7800, icon: hamburgerIcon },
      { label: '아아', unit: '잔', price: 4700, icon: icedAmericanoIcon },
      { label: '카누 스틱', unit: '개', price: 300, icon: kanuStickIcon },
      { label: '로또', unit: '장', price: 1000, icon: lottoTicketIcon },
      { label: '팬티', unit: '장', price: 12000, icon: pantiesIcon },
      { label: '감자', unit: '개', price: 800, icon: potatoIcon },
      { label: '라면', unit: '봉지', price: 1000, icon: ramenIcon },
      { label: '즉석복권', unit: '장', price: 1000, icon: scratchLotteryIcon },
      { label: '양말', unit: '켤레', price: 3000, icon: socksIcon },
      { label: '휴지', unit: '팩', price: 25000, icon: toiletPaperIcon },
      { label: '토마토', unit: '개', price: 1000, icon: tomatoIcon },
      { label: '장난감 공', unit: '개', price: 3000, icon: toyBallIcon },
      { label: '삼각김밥', unit: '개', price: 1500, icon: triangleGimbapIcon },
      { label: '생수', unit: '병', price: 1000, icon: waterIcon },
      { label: '에어팟', unit: '개', price: 199000, icon: airpodsIcon },
      { label: '배달주문', unit: '건', price: 15000, icon: baeminMinOrderIcon },
      { label: '맥주', unit: '캔', price: 3000, icon: beerIcon },
      { label: '케이크', unit: '개', price: 30000, icon: cakeIcon },
      { label: '고양이 모래', unit: '포대', price: 25000, icon: catLitterIcon },
      { label: '치킨', unit: '마리', price: 23000, icon: chickenIcon },
      { label: '도시락', unit: '개', price: 5500, icon: convenienceLunchboxIcon },
      { label: '게임 타이틀', unit: '개', price: 79800, icon: gameTitleIcon },
      { label: '한우 1kg', unit: 'kg', price: 80000, icon: hanwoo1kgIcon },
      { label: '호텔 1박', unit: '박', price: 120000, icon: hotel1nightIcon },
      { label: '고기뷔페', unit: '명', price: 35000, icon: meatBuffetIcon },
      { label: '영화관람권', unit: '장', price: 15000, icon: movieTicketIcon },
      { label: 'PC방', unit: '시간', price: 1500, icon: pcBang1hIcon },
      { label: '향수', unit: '병', price: 120000, icon: perfumeIcon },
      { label: '펫사료', unit: '포대', price: 40000, icon: petFoodIcon },
      { label: '피자', unit: '판', price: 28000, icon: pizzaIcon },
      { label: '회 한 접시', unit: '접시', price: 55000, icon: sashimiPlateIcon },
      { label: '운동화', unit: '켤레', price: 120000, icon: sneakersIcon },
      { label: '소주', unit: '병', price: 5000, icon: sojuIcon },
      { label: '스팀 게임', unit: '개', price: 30000, icon: steamGameIcon },
      { label: '탕후루', unit: '개', price: 4000, icon: tanghuluIcon },
      { label: '떡볶이', unit: '인분', price: 5000, icon: tteokbokkiIcon },
      { label: '물그릇', unit: '개', price: 12000, icon: waterBowlIcon },
      { label: '공기청정기', unit: '대', price: 250000, icon: airPurifierIcon },
      { label: '애플워치', unit: '개', price: 329000, icon: appleWatchIcon },
      { label: '캣타워', unit: '개', price: 150000, icon: catTowerIcon },
      { label: 'D램', unit: '개', price: 8500, icon: dRamIcon },
      { label: '아빠 정장', unit: '벌', price: 400000, icon: dadSuitIcon },
      { label: '강아지집', unit: '채', price: 160000, icon: dogHouseIcon },
    ],
  },
  {
    label: '50만원 이하',
    maxAmount: 500000,
    items: [
      { label: '치킨 조각', unit: '조각', price: 2500, icon: chickenPieceIcon },
      { label: '초코우유', unit: '개', price: 1800, icon: chocoMilkIcon },
      { label: '초코파이', unit: '개', price: 500, icon: chocoPieIcon },
      { label: '츄르', unit: '개', price: 700, icon: churuIcon },
      { label: '생활용품', unit: '회', price: 5000, icon: daisoShoppingIcon },
      { label: '강아지 껌', unit: '개', price: 3000, icon: dogChewIcon },
      { label: '계란', unit: '개', price: 350, icon: eggIcon },
      { label: '붕어빵', unit: '개', price: 1000, icon: fishBreadIcon },
      { label: '김', unit: '봉', price: 5000, icon: gimIcon },
      { label: '김밥', unit: '줄', price: 3500, icon: gimbapIcon },
      { label: '국밥', unit: '그릇', price: 10000, icon: gukbapIcon },
      { label: '햄버거', unit: '개', price: 7800, icon: hamburgerIcon },
      { label: '아아', unit: '잔', price: 4700, icon: icedAmericanoIcon },
      { label: '카누 스틱', unit: '개', price: 300, icon: kanuStickIcon },
      { label: '로또', unit: '장', price: 1000, icon: lottoTicketIcon },
      { label: '팬티', unit: '장', price: 12000, icon: pantiesIcon },
      { label: '감자', unit: '개', price: 800, icon: potatoIcon },
      { label: '라면', unit: '봉지', price: 1000, icon: ramenIcon },
      { label: '즉석복권', unit: '장', price: 1000, icon: scratchLotteryIcon },
      { label: '양말', unit: '켤레', price: 3000, icon: socksIcon },
      { label: '휴지', unit: '팩', price: 25000, icon: toiletPaperIcon },
      { label: '토마토', unit: '개', price: 1000, icon: tomatoIcon },
      { label: '장난감 공', unit: '개', price: 3000, icon: toyBallIcon },
      { label: '삼각김밥', unit: '개', price: 1500, icon: triangleGimbapIcon },
      { label: '생수', unit: '병', price: 1000, icon: waterIcon },
      { label: '에어팟', unit: '개', price: 199000, icon: airpodsIcon },
      { label: '배달주문', unit: '건', price: 15000, icon: baeminMinOrderIcon },
      { label: '맥주', unit: '캔', price: 3000, icon: beerIcon },
      { label: '케이크', unit: '개', price: 30000, icon: cakeIcon },
      { label: '고양이 모래', unit: '포대', price: 25000, icon: catLitterIcon },
      { label: '치킨', unit: '마리', price: 23000, icon: chickenIcon },
      { label: '도시락', unit: '개', price: 5500, icon: convenienceLunchboxIcon },
      { label: '게임 타이틀', unit: '개', price: 79800, icon: gameTitleIcon },
      { label: '한우 1kg', unit: 'kg', price: 80000, icon: hanwoo1kgIcon },
      { label: '호텔 1박', unit: '박', price: 120000, icon: hotel1nightIcon },
      { label: '고기뷔페', unit: '명', price: 35000, icon: meatBuffetIcon },
      { label: '영화관람권', unit: '장', price: 15000, icon: movieTicketIcon },
      { label: 'PC방', unit: '시간', price: 1500, icon: pcBang1hIcon },
      { label: '향수', unit: '병', price: 120000, icon: perfumeIcon },
      { label: '펫사료', unit: '포대', price: 40000, icon: petFoodIcon },
      { label: '피자', unit: '판', price: 28000, icon: pizzaIcon },
      { label: '회 한 접시', unit: '접시', price: 55000, icon: sashimiPlateIcon },
      { label: '운동화', unit: '켤레', price: 120000, icon: sneakersIcon },
      { label: '소주', unit: '병', price: 5000, icon: sojuIcon },
      { label: '스팀 게임', unit: '개', price: 30000, icon: steamGameIcon },
      { label: '탕후루', unit: '개', price: 4000, icon: tanghuluIcon },
      { label: '떡볶이', unit: '인분', price: 5000, icon: tteokbokkiIcon },
      { label: '물그릇', unit: '개', price: 12000, icon: waterBowlIcon },
      { label: '공기청정기', unit: '대', price: 250000, icon: airPurifierIcon },
      { label: '애플워치', unit: '개', price: 329000, icon: appleWatchIcon },
      { label: '캣타워', unit: '개', price: 150000, icon: catTowerIcon },
      { label: 'D램', unit: '개', price: 8500, icon: dRamIcon },
      { label: '아빠 정장', unit: '벌', price: 400000, icon: dadSuitIcon },
      { label: '헤어드라이어', unit: '개', price: 499000, icon: hairDryerIcon },
      { label: '강아지집', unit: '채', price: 160000, icon: dogHouseIcon },
    ],
  },
  {
    label: '60만원 이하',
    maxAmount: 600000,
    items: [
      { label: '치킨 조각', unit: '조각', price: 2500, icon: chickenPieceIcon },
      { label: '초코우유', unit: '개', price: 1800, icon: chocoMilkIcon },
      { label: '초코파이', unit: '개', price: 500, icon: chocoPieIcon },
      { label: '츄르', unit: '개', price: 700, icon: churuIcon },
      { label: '생활용품', unit: '회', price: 5000, icon: daisoShoppingIcon },
      { label: '강아지 껌', unit: '개', price: 3000, icon: dogChewIcon },
      { label: '계란', unit: '개', price: 350, icon: eggIcon },
      { label: '붕어빵', unit: '개', price: 1000, icon: fishBreadIcon },
      { label: '김', unit: '봉', price: 5000, icon: gimIcon },
      { label: '김밥', unit: '줄', price: 3500, icon: gimbapIcon },
      { label: '국밥', unit: '그릇', price: 10000, icon: gukbapIcon },
      { label: '햄버거', unit: '개', price: 7800, icon: hamburgerIcon },
      { label: '아아', unit: '잔', price: 4700, icon: icedAmericanoIcon },
      { label: '카누 스틱', unit: '개', price: 300, icon: kanuStickIcon },
      { label: '로또', unit: '장', price: 1000, icon: lottoTicketIcon },
      { label: '팬티', unit: '장', price: 12000, icon: pantiesIcon },
      { label: '감자', unit: '개', price: 800, icon: potatoIcon },
      { label: '라면', unit: '봉지', price: 1000, icon: ramenIcon },
      { label: '즉석복권', unit: '장', price: 1000, icon: scratchLotteryIcon },
      { label: '양말', unit: '켤레', price: 3000, icon: socksIcon },
      { label: '휴지', unit: '팩', price: 25000, icon: toiletPaperIcon },
      { label: '토마토', unit: '개', price: 1000, icon: tomatoIcon },
      { label: '장난감 공', unit: '개', price: 3000, icon: toyBallIcon },
      { label: '삼각김밥', unit: '개', price: 1500, icon: triangleGimbapIcon },
      { label: '생수', unit: '병', price: 1000, icon: waterIcon },
      { label: '에어팟', unit: '개', price: 199000, icon: airpodsIcon },
      { label: '배달주문', unit: '건', price: 15000, icon: baeminMinOrderIcon },
      { label: '맥주', unit: '캔', price: 3000, icon: beerIcon },
      { label: '케이크', unit: '개', price: 30000, icon: cakeIcon },
      { label: '고양이 모래', unit: '포대', price: 25000, icon: catLitterIcon },
      { label: '치킨', unit: '마리', price: 23000, icon: chickenIcon },
      { label: '도시락', unit: '개', price: 5500, icon: convenienceLunchboxIcon },
      { label: '게임 타이틀', unit: '개', price: 79800, icon: gameTitleIcon },
      { label: '한우 1kg', unit: 'kg', price: 80000, icon: hanwoo1kgIcon },
      { label: '호텔 1박', unit: '박', price: 120000, icon: hotel1nightIcon },
      { label: '고기뷔페', unit: '명', price: 35000, icon: meatBuffetIcon },
      { label: '영화관람권', unit: '장', price: 15000, icon: movieTicketIcon },
      { label: 'PC방', unit: '시간', price: 1500, icon: pcBang1hIcon },
      { label: '향수', unit: '병', price: 120000, icon: perfumeIcon },
      { label: '펫사료', unit: '포대', price: 40000, icon: petFoodIcon },
      { label: '피자', unit: '판', price: 28000, icon: pizzaIcon },
      { label: '회 한 접시', unit: '접시', price: 55000, icon: sashimiPlateIcon },
      { label: '운동화', unit: '켤레', price: 120000, icon: sneakersIcon },
      { label: '소주', unit: '병', price: 5000, icon: sojuIcon },
      { label: '스팀 게임', unit: '개', price: 30000, icon: steamGameIcon },
      { label: '탕후루', unit: '개', price: 4000, icon: tanghuluIcon },
      { label: '떡볶이', unit: '인분', price: 5000, icon: tteokbokkiIcon },
      { label: '물그릇', unit: '개', price: 12000, icon: waterBowlIcon },
      { label: '공기청정기', unit: '대', price: 250000, icon: airPurifierIcon },
      { label: '애플워치', unit: '개', price: 329000, icon: appleWatchIcon },
      { label: '캣타워', unit: '개', price: 150000, icon: catTowerIcon },
      { label: 'D램', unit: '개', price: 8500, icon: dRamIcon },
      { label: '아빠 정장', unit: '벌', price: 400000, icon: dadSuitIcon },
      { label: '헤어드라이어', unit: '개', price: 499000, icon: hairDryerIcon },
      { label: '아이패드', unit: '개', price: 529000, icon: ipadIcon },
      { label: '로봇청소기', unit: '대', price: 600000, icon: robotVacuumIcon },
      { label: '강아지집', unit: '채', price: 160000, icon: dogHouseIcon },
    ],
  },
  {
    label: '70만원 이하',
    maxAmount: 700000,
    items: [
      { label: '치킨 조각', unit: '조각', price: 2500, icon: chickenPieceIcon },
      { label: '초코우유', unit: '개', price: 1800, icon: chocoMilkIcon },
      { label: '초코파이', unit: '개', price: 500, icon: chocoPieIcon },
      { label: '츄르', unit: '개', price: 700, icon: churuIcon },
      { label: '생활용품', unit: '회', price: 5000, icon: daisoShoppingIcon },
      { label: '강아지 껌', unit: '개', price: 3000, icon: dogChewIcon },
      { label: '계란', unit: '개', price: 350, icon: eggIcon },
      { label: '붕어빵', unit: '개', price: 1000, icon: fishBreadIcon },
      { label: '김', unit: '봉', price: 5000, icon: gimIcon },
      { label: '김밥', unit: '줄', price: 3500, icon: gimbapIcon },
      { label: '국밥', unit: '그릇', price: 10000, icon: gukbapIcon },
      { label: '햄버거', unit: '개', price: 7800, icon: hamburgerIcon },
      { label: '아아', unit: '잔', price: 4700, icon: icedAmericanoIcon },
      { label: '카누 스틱', unit: '개', price: 300, icon: kanuStickIcon },
      { label: '로또', unit: '장', price: 1000, icon: lottoTicketIcon },
      { label: '팬티', unit: '장', price: 12000, icon: pantiesIcon },
      { label: '감자', unit: '개', price: 800, icon: potatoIcon },
      { label: '라면', unit: '봉지', price: 1000, icon: ramenIcon },
      { label: '즉석복권', unit: '장', price: 1000, icon: scratchLotteryIcon },
      { label: '양말', unit: '켤레', price: 3000, icon: socksIcon },
      { label: '휴지', unit: '팩', price: 25000, icon: toiletPaperIcon },
      { label: '토마토', unit: '개', price: 1000, icon: tomatoIcon },
      { label: '장난감 공', unit: '개', price: 3000, icon: toyBallIcon },
      { label: '삼각김밥', unit: '개', price: 1500, icon: triangleGimbapIcon },
      { label: '생수', unit: '병', price: 1000, icon: waterIcon },
      { label: '에어팟', unit: '개', price: 199000, icon: airpodsIcon },
      { label: '배달주문', unit: '건', price: 15000, icon: baeminMinOrderIcon },
      { label: '맥주', unit: '캔', price: 3000, icon: beerIcon },
      { label: '케이크', unit: '개', price: 30000, icon: cakeIcon },
      { label: '고양이 모래', unit: '포대', price: 25000, icon: catLitterIcon },
      { label: '치킨', unit: '마리', price: 23000, icon: chickenIcon },
      { label: '도시락', unit: '개', price: 5500, icon: convenienceLunchboxIcon },
      { label: '게임 타이틀', unit: '개', price: 79800, icon: gameTitleIcon },
      { label: '한우 1kg', unit: 'kg', price: 80000, icon: hanwoo1kgIcon },
      { label: '호텔 1박', unit: '박', price: 120000, icon: hotel1nightIcon },
      { label: '고기뷔페', unit: '명', price: 35000, icon: meatBuffetIcon },
      { label: '영화관람권', unit: '장', price: 15000, icon: movieTicketIcon },
      { label: 'PC방', unit: '시간', price: 1500, icon: pcBang1hIcon },
      { label: '향수', unit: '병', price: 120000, icon: perfumeIcon },
      { label: '펫사료', unit: '포대', price: 40000, icon: petFoodIcon },
      { label: '피자', unit: '판', price: 28000, icon: pizzaIcon },
      { label: '회 한 접시', unit: '접시', price: 55000, icon: sashimiPlateIcon },
      { label: '운동화', unit: '켤레', price: 120000, icon: sneakersIcon },
      { label: '소주', unit: '병', price: 5000, icon: sojuIcon },
      { label: '스팀 게임', unit: '개', price: 30000, icon: steamGameIcon },
      { label: '탕후루', unit: '개', price: 4000, icon: tanghuluIcon },
      { label: '떡볶이', unit: '인분', price: 5000, icon: tteokbokkiIcon },
      { label: '물그릇', unit: '개', price: 12000, icon: waterBowlIcon },
      { label: '공기청정기', unit: '대', price: 250000, icon: airPurifierIcon },
      { label: '애플워치', unit: '개', price: 329000, icon: appleWatchIcon },
      { label: '캣타워', unit: '개', price: 150000, icon: catTowerIcon },
      { label: 'D램', unit: '개', price: 8500, icon: dRamIcon },
      { label: '아빠 정장', unit: '벌', price: 400000, icon: dadSuitIcon },
      { label: '헤어드라이어', unit: '개', price: 499000, icon: hairDryerIcon },
      { label: '아이패드', unit: '개', price: 529000, icon: ipadIcon },
      { label: '로봇청소기', unit: '대', price: 600000, icon: robotVacuumIcon },
      { label: '청소기', unit: '대', price: 700000, icon: wetDryVacuumIcon },
      { label: '강아지집', unit: '채', price: 160000, icon: dogHouseIcon },
    ],
  },
  {
    label: '80만원 이하',
    maxAmount: 800000,
    items: [
      { label: '치킨 조각', unit: '조각', price: 2500, icon: chickenPieceIcon },
      { label: '초코우유', unit: '개', price: 1800, icon: chocoMilkIcon },
      { label: '초코파이', unit: '개', price: 500, icon: chocoPieIcon },
      { label: '츄르', unit: '개', price: 700, icon: churuIcon },
      { label: '생활용품', unit: '회', price: 5000, icon: daisoShoppingIcon },
      { label: '강아지 껌', unit: '개', price: 3000, icon: dogChewIcon },
      { label: '계란', unit: '개', price: 350, icon: eggIcon },
      { label: '붕어빵', unit: '개', price: 1000, icon: fishBreadIcon },
      { label: '김', unit: '봉', price: 5000, icon: gimIcon },
      { label: '김밥', unit: '줄', price: 3500, icon: gimbapIcon },
      { label: '국밥', unit: '그릇', price: 10000, icon: gukbapIcon },
      { label: '햄버거', unit: '개', price: 7800, icon: hamburgerIcon },
      { label: '아아', unit: '잔', price: 4700, icon: icedAmericanoIcon },
      { label: '카누 스틱', unit: '개', price: 300, icon: kanuStickIcon },
      { label: '로또', unit: '장', price: 1000, icon: lottoTicketIcon },
      { label: '팬티', unit: '장', price: 12000, icon: pantiesIcon },
      { label: '감자', unit: '개', price: 800, icon: potatoIcon },
      { label: '라면', unit: '봉지', price: 1000, icon: ramenIcon },
      { label: '즉석복권', unit: '장', price: 1000, icon: scratchLotteryIcon },
      { label: '양말', unit: '켤레', price: 3000, icon: socksIcon },
      { label: '휴지', unit: '팩', price: 25000, icon: toiletPaperIcon },
      { label: '토마토', unit: '개', price: 1000, icon: tomatoIcon },
      { label: '장난감 공', unit: '개', price: 3000, icon: toyBallIcon },
      { label: '삼각김밥', unit: '개', price: 1500, icon: triangleGimbapIcon },
      { label: '생수', unit: '병', price: 1000, icon: waterIcon },
      { label: '에어팟', unit: '개', price: 199000, icon: airpodsIcon },
      { label: '배달주문', unit: '건', price: 15000, icon: baeminMinOrderIcon },
      { label: '맥주', unit: '캔', price: 3000, icon: beerIcon },
      { label: '케이크', unit: '개', price: 30000, icon: cakeIcon },
      { label: '고양이 모래', unit: '포대', price: 25000, icon: catLitterIcon },
      { label: '치킨', unit: '마리', price: 23000, icon: chickenIcon },
      { label: '도시락', unit: '개', price: 5500, icon: convenienceLunchboxIcon },
      { label: '게임 타이틀', unit: '개', price: 79800, icon: gameTitleIcon },
      { label: '한우 1kg', unit: 'kg', price: 80000, icon: hanwoo1kgIcon },
      { label: '호텔 1박', unit: '박', price: 120000, icon: hotel1nightIcon },
      { label: '고기뷔페', unit: '명', price: 35000, icon: meatBuffetIcon },
      { label: '영화관람권', unit: '장', price: 15000, icon: movieTicketIcon },
      { label: 'PC방', unit: '시간', price: 1500, icon: pcBang1hIcon },
      { label: '향수', unit: '병', price: 120000, icon: perfumeIcon },
      { label: '펫사료', unit: '포대', price: 40000, icon: petFoodIcon },
      { label: '피자', unit: '판', price: 28000, icon: pizzaIcon },
      { label: '회 한 접시', unit: '접시', price: 55000, icon: sashimiPlateIcon },
      { label: '운동화', unit: '켤레', price: 120000, icon: sneakersIcon },
      { label: '소주', unit: '병', price: 5000, icon: sojuIcon },
      { label: '스팀 게임', unit: '개', price: 30000, icon: steamGameIcon },
      { label: '탕후루', unit: '개', price: 4000, icon: tanghuluIcon },
      { label: '떡볶이', unit: '인분', price: 5000, icon: tteokbokkiIcon },
      { label: '물그릇', unit: '개', price: 12000, icon: waterBowlIcon },
      { label: '공기청정기', unit: '대', price: 250000, icon: airPurifierIcon },
      { label: '애플워치', unit: '개', price: 329000, icon: appleWatchIcon },
      { label: '캣타워', unit: '개', price: 150000, icon: catTowerIcon },
      { label: 'D램', unit: '개', price: 8500, icon: dRamIcon },
      { label: '아빠 정장', unit: '벌', price: 400000, icon: dadSuitIcon },
      { label: '헤어드라이어', unit: '개', price: 499000, icon: hairDryerIcon },
      { label: '아이패드', unit: '개', price: 529000, icon: ipadIcon },
      { label: '로봇청소기', unit: '대', price: 600000, icon: robotVacuumIcon },
      { label: '청소기', unit: '대', price: 700000, icon: wetDryVacuumIcon },
      { label: '강아지집', unit: '채', price: 160000, icon: dogHouseIcon },
    ],
  },
  {
    label: '90만원 이하',
    maxAmount: 900000,
    items: [
      { label: '치킨 조각', unit: '조각', price: 2500, icon: chickenPieceIcon },
      { label: '초코우유', unit: '개', price: 1800, icon: chocoMilkIcon },
      { label: '초코파이', unit: '개', price: 500, icon: chocoPieIcon },
      { label: '츄르', unit: '개', price: 700, icon: churuIcon },
      { label: '생활용품', unit: '회', price: 5000, icon: daisoShoppingIcon },
      { label: '강아지 껌', unit: '개', price: 3000, icon: dogChewIcon },
      { label: '계란', unit: '개', price: 350, icon: eggIcon },
      { label: '붕어빵', unit: '개', price: 1000, icon: fishBreadIcon },
      { label: '김', unit: '봉', price: 5000, icon: gimIcon },
      { label: '김밥', unit: '줄', price: 3500, icon: gimbapIcon },
      { label: '국밥', unit: '그릇', price: 10000, icon: gukbapIcon },
      { label: '햄버거', unit: '개', price: 7800, icon: hamburgerIcon },
      { label: '아아', unit: '잔', price: 4700, icon: icedAmericanoIcon },
      { label: '카누 스틱', unit: '개', price: 300, icon: kanuStickIcon },
      { label: '로또', unit: '장', price: 1000, icon: lottoTicketIcon },
      { label: '팬티', unit: '장', price: 12000, icon: pantiesIcon },
      { label: '감자', unit: '개', price: 800, icon: potatoIcon },
      { label: '라면', unit: '봉지', price: 1000, icon: ramenIcon },
      { label: '즉석복권', unit: '장', price: 1000, icon: scratchLotteryIcon },
      { label: '양말', unit: '켤레', price: 3000, icon: socksIcon },
      { label: '휴지', unit: '팩', price: 25000, icon: toiletPaperIcon },
      { label: '토마토', unit: '개', price: 1000, icon: tomatoIcon },
      { label: '장난감 공', unit: '개', price: 3000, icon: toyBallIcon },
      { label: '삼각김밥', unit: '개', price: 1500, icon: triangleGimbapIcon },
      { label: '생수', unit: '병', price: 1000, icon: waterIcon },
      { label: '에어팟', unit: '개', price: 199000, icon: airpodsIcon },
      { label: '배달주문', unit: '건', price: 15000, icon: baeminMinOrderIcon },
      { label: '맥주', unit: '캔', price: 3000, icon: beerIcon },
      { label: '케이크', unit: '개', price: 30000, icon: cakeIcon },
      { label: '고양이 모래', unit: '포대', price: 25000, icon: catLitterIcon },
      { label: '치킨', unit: '마리', price: 23000, icon: chickenIcon },
      { label: '도시락', unit: '개', price: 5500, icon: convenienceLunchboxIcon },
      { label: '게임 타이틀', unit: '개', price: 79800, icon: gameTitleIcon },
      { label: '한우 1kg', unit: 'kg', price: 80000, icon: hanwoo1kgIcon },
      { label: '호텔 1박', unit: '박', price: 120000, icon: hotel1nightIcon },
      { label: '고기뷔페', unit: '명', price: 35000, icon: meatBuffetIcon },
      { label: '영화관람권', unit: '장', price: 15000, icon: movieTicketIcon },
      { label: 'PC방', unit: '시간', price: 1500, icon: pcBang1hIcon },
      { label: '향수', unit: '병', price: 120000, icon: perfumeIcon },
      { label: '펫사료', unit: '포대', price: 40000, icon: petFoodIcon },
      { label: '피자', unit: '판', price: 28000, icon: pizzaIcon },
      { label: '회 한 접시', unit: '접시', price: 55000, icon: sashimiPlateIcon },
      { label: '운동화', unit: '켤레', price: 120000, icon: sneakersIcon },
      { label: '소주', unit: '병', price: 5000, icon: sojuIcon },
      { label: '스팀 게임', unit: '개', price: 30000, icon: steamGameIcon },
      { label: '탕후루', unit: '개', price: 4000, icon: tanghuluIcon },
      { label: '떡볶이', unit: '인분', price: 5000, icon: tteokbokkiIcon },
      { label: '물그릇', unit: '개', price: 12000, icon: waterBowlIcon },
      { label: '공기청정기', unit: '대', price: 250000, icon: airPurifierIcon },
      { label: '애플워치', unit: '개', price: 329000, icon: appleWatchIcon },
      { label: '캣타워', unit: '개', price: 150000, icon: catTowerIcon },
      { label: 'D램', unit: '개', price: 8500, icon: dRamIcon },
      { label: '아빠 정장', unit: '벌', price: 400000, icon: dadSuitIcon },
      { label: '헤어드라이어', unit: '개', price: 499000, icon: hairDryerIcon },
      { label: '아이패드', unit: '개', price: 529000, icon: ipadIcon },
      { label: '명품 지갑', unit: '개', price: 900000, icon: luxuryWalletIcon },
      { label: '로봇청소기', unit: '대', price: 600000, icon: robotVacuumIcon },
      { label: '세탁기', unit: '대', price: 900000, icon: washingMachineIcon },
      { label: '청소기', unit: '대', price: 700000, icon: wetDryVacuumIcon },
      { label: '강아지집', unit: '채', price: 160000, icon: dogHouseIcon },
    ],
  },
  {
    label: '100만원 이하',
    maxAmount: 1000000,
    items: [
      { label: '치킨 조각', unit: '조각', price: 2500, icon: chickenPieceIcon },
      { label: '초코우유', unit: '개', price: 1800, icon: chocoMilkIcon },
      { label: '초코파이', unit: '개', price: 500, icon: chocoPieIcon },
      { label: '츄르', unit: '개', price: 700, icon: churuIcon },
      { label: '생활용품', unit: '회', price: 5000, icon: daisoShoppingIcon },
      { label: '강아지 껌', unit: '개', price: 3000, icon: dogChewIcon },
      { label: '계란', unit: '개', price: 350, icon: eggIcon },
      { label: '붕어빵', unit: '개', price: 1000, icon: fishBreadIcon },
      { label: '김', unit: '봉', price: 5000, icon: gimIcon },
      { label: '김밥', unit: '줄', price: 3500, icon: gimbapIcon },
      { label: '국밥', unit: '그릇', price: 10000, icon: gukbapIcon },
      { label: '햄버거', unit: '개', price: 7800, icon: hamburgerIcon },
      { label: '아아', unit: '잔', price: 4700, icon: icedAmericanoIcon },
      { label: '카누 스틱', unit: '개', price: 300, icon: kanuStickIcon },
      { label: '로또', unit: '장', price: 1000, icon: lottoTicketIcon },
      { label: '팬티', unit: '장', price: 12000, icon: pantiesIcon },
      { label: '감자', unit: '개', price: 800, icon: potatoIcon },
      { label: '라면', unit: '봉지', price: 1000, icon: ramenIcon },
      { label: '즉석복권', unit: '장', price: 1000, icon: scratchLotteryIcon },
      { label: '양말', unit: '켤레', price: 3000, icon: socksIcon },
      { label: '휴지', unit: '팩', price: 25000, icon: toiletPaperIcon },
      { label: '토마토', unit: '개', price: 1000, icon: tomatoIcon },
      { label: '장난감 공', unit: '개', price: 3000, icon: toyBallIcon },
      { label: '삼각김밥', unit: '개', price: 1500, icon: triangleGimbapIcon },
      { label: '생수', unit: '병', price: 1000, icon: waterIcon },
      { label: '에어팟', unit: '개', price: 199000, icon: airpodsIcon },
      { label: '배달주문', unit: '건', price: 15000, icon: baeminMinOrderIcon },
      { label: '맥주', unit: '캔', price: 3000, icon: beerIcon },
      { label: '케이크', unit: '개', price: 30000, icon: cakeIcon },
      { label: '고양이 모래', unit: '포대', price: 25000, icon: catLitterIcon },
      { label: '치킨', unit: '마리', price: 23000, icon: chickenIcon },
      { label: '도시락', unit: '개', price: 5500, icon: convenienceLunchboxIcon },
      { label: '게임 타이틀', unit: '개', price: 79800, icon: gameTitleIcon },
      { label: '한우 1kg', unit: 'kg', price: 80000, icon: hanwoo1kgIcon },
      { label: '호텔 1박', unit: '박', price: 120000, icon: hotel1nightIcon },
      { label: '고기뷔페', unit: '명', price: 35000, icon: meatBuffetIcon },
      { label: '영화관람권', unit: '장', price: 15000, icon: movieTicketIcon },
      { label: 'PC방', unit: '시간', price: 1500, icon: pcBang1hIcon },
      { label: '향수', unit: '병', price: 120000, icon: perfumeIcon },
      { label: '펫사료', unit: '포대', price: 40000, icon: petFoodIcon },
      { label: '피자', unit: '판', price: 28000, icon: pizzaIcon },
      { label: '회 한 접시', unit: '접시', price: 55000, icon: sashimiPlateIcon },
      { label: '운동화', unit: '켤레', price: 120000, icon: sneakersIcon },
      { label: '소주', unit: '병', price: 5000, icon: sojuIcon },
      { label: '스팀 게임', unit: '개', price: 30000, icon: steamGameIcon },
      { label: '탕후루', unit: '개', price: 4000, icon: tanghuluIcon },
      { label: '떡볶이', unit: '인분', price: 5000, icon: tteokbokkiIcon },
      { label: '물그릇', unit: '개', price: 12000, icon: waterBowlIcon },
      { label: '공기청정기', unit: '대', price: 250000, icon: airPurifierIcon },
      { label: '애플워치', unit: '개', price: 329000, icon: appleWatchIcon },
      { label: '캣타워', unit: '개', price: 150000, icon: catTowerIcon },
      { label: 'D램', unit: '개', price: 8500, icon: dRamIcon },
      { label: '아빠 정장', unit: '벌', price: 400000, icon: dadSuitIcon },
      { label: '헤어드라이어', unit: '개', price: 499000, icon: hairDryerIcon },
      { label: '아이패드', unit: '개', price: 529000, icon: ipadIcon },
      { label: '명품 지갑', unit: '개', price: 900000, icon: luxuryWalletIcon },
      { label: '로봇청소기', unit: '대', price: 600000, icon: robotVacuumIcon },
      { label: '세탁기', unit: '대', price: 900000, icon: washingMachineIcon },
      { label: '청소기', unit: '대', price: 700000, icon: wetDryVacuumIcon },
      { label: '강아지집', unit: '채', price: 160000, icon: dogHouseIcon },
    ],
  },
  {
    label: '300만원 이하',
    maxAmount: 3000000,
    items: [
      { label: '치킨 조각', unit: '조각', price: 2500, icon: chickenPieceIcon },
      { label: '초코우유', unit: '개', price: 1800, icon: chocoMilkIcon },
      { label: '초코파이', unit: '개', price: 500, icon: chocoPieIcon },
      { label: '츄르', unit: '개', price: 700, icon: churuIcon },
      { label: '생활용품', unit: '회', price: 5000, icon: daisoShoppingIcon },
      { label: '강아지 껌', unit: '개', price: 3000, icon: dogChewIcon },
      { label: '계란', unit: '개', price: 350, icon: eggIcon },
      { label: '붕어빵', unit: '개', price: 1000, icon: fishBreadIcon },
      { label: '김', unit: '봉', price: 5000, icon: gimIcon },
      { label: '김밥', unit: '줄', price: 3500, icon: gimbapIcon },
      { label: '국밥', unit: '그릇', price: 10000, icon: gukbapIcon },
      { label: '햄버거', unit: '개', price: 7800, icon: hamburgerIcon },
      { label: '아아', unit: '잔', price: 4700, icon: icedAmericanoIcon },
      { label: '카누 스틱', unit: '개', price: 300, icon: kanuStickIcon },
      { label: '로또', unit: '장', price: 1000, icon: lottoTicketIcon },
      { label: '팬티', unit: '장', price: 12000, icon: pantiesIcon },
      { label: '감자', unit: '개', price: 800, icon: potatoIcon },
      { label: '라면', unit: '봉지', price: 1000, icon: ramenIcon },
      { label: '즉석복권', unit: '장', price: 1000, icon: scratchLotteryIcon },
      { label: '양말', unit: '켤레', price: 3000, icon: socksIcon },
      { label: '휴지', unit: '팩', price: 25000, icon: toiletPaperIcon },
      { label: '토마토', unit: '개', price: 1000, icon: tomatoIcon },
      { label: '장난감 공', unit: '개', price: 3000, icon: toyBallIcon },
      { label: '삼각김밥', unit: '개', price: 1500, icon: triangleGimbapIcon },
      { label: '생수', unit: '병', price: 1000, icon: waterIcon },
      { label: '에어팟', unit: '개', price: 199000, icon: airpodsIcon },
      { label: '배달주문', unit: '건', price: 15000, icon: baeminMinOrderIcon },
      { label: '맥주', unit: '캔', price: 3000, icon: beerIcon },
      { label: '케이크', unit: '개', price: 30000, icon: cakeIcon },
      { label: '고양이 모래', unit: '포대', price: 25000, icon: catLitterIcon },
      { label: '치킨', unit: '마리', price: 23000, icon: chickenIcon },
      { label: '도시락', unit: '개', price: 5500, icon: convenienceLunchboxIcon },
      { label: '게임 타이틀', unit: '개', price: 79800, icon: gameTitleIcon },
      { label: '한우 1kg', unit: 'kg', price: 80000, icon: hanwoo1kgIcon },
      { label: '호텔 1박', unit: '박', price: 120000, icon: hotel1nightIcon },
      { label: '고기뷔페', unit: '명', price: 35000, icon: meatBuffetIcon },
      { label: '영화관람권', unit: '장', price: 15000, icon: movieTicketIcon },
      { label: 'PC방', unit: '시간', price: 1500, icon: pcBang1hIcon },
      { label: '향수', unit: '병', price: 120000, icon: perfumeIcon },
      { label: '펫사료', unit: '포대', price: 40000, icon: petFoodIcon },
      { label: '피자', unit: '판', price: 28000, icon: pizzaIcon },
      { label: '회 한 접시', unit: '접시', price: 55000, icon: sashimiPlateIcon },
      { label: '운동화', unit: '켤레', price: 120000, icon: sneakersIcon },
      { label: '소주', unit: '병', price: 5000, icon: sojuIcon },
      { label: '스팀 게임', unit: '개', price: 30000, icon: steamGameIcon },
      { label: '탕후루', unit: '개', price: 4000, icon: tanghuluIcon },
      { label: '떡볶이', unit: '인분', price: 5000, icon: tteokbokkiIcon },
      { label: '물그릇', unit: '개', price: 12000, icon: waterBowlIcon },
      { label: '공기청정기', unit: '대', price: 250000, icon: airPurifierIcon },
      { label: '애플워치', unit: '개', price: 329000, icon: appleWatchIcon },
      { label: '캣타워', unit: '개', price: 150000, icon: catTowerIcon },
      { label: 'D램', unit: '개', price: 8500, icon: dRamIcon },
      { label: '아빠 정장', unit: '벌', price: 400000, icon: dadSuitIcon },
      { label: '갤럭시', unit: '개', price: 1155000, icon: galaxyIcon },
      { label: '헤어드라이어', unit: '개', price: 499000, icon: hairDryerIcon },
      { label: '아이패드', unit: '개', price: 529000, icon: ipadIcon },
      { label: '아이폰', unit: '개', price: 1250000, icon: iphoneIcon },
      { label: '명품 지갑', unit: '개', price: 900000, icon: luxuryWalletIcon },
      { label: '맥북', unit: '개', price: 1590000, icon: macbookIcon },
      { label: '안마의자', unit: '대', price: 2500000, icon: massageChairIcon },
      { label: '로봇청소기', unit: '대', price: 600000, icon: robotVacuumIcon },
      { label: 'TV', unit: '대', price: 1200000, icon: tvIcon },
      { label: '세탁기', unit: '대', price: 900000, icon: washingMachineIcon },
      { label: '청소기', unit: '대', price: 700000, icon: wetDryVacuumIcon },
      { label: '강아지집', unit: '채', price: 160000, icon: dogHouseIcon },
      { label: '전기자전거', unit: '대', price: 1500000, icon: electricBikeIcon },
      { label: '웨딩드레스', unit: '벌', price: 3000000, icon: weddingDressIcon },
      { label: '제주도 땅', unit: '평', price: 2000000, icon: jejuLandIcon },
    ],
  },
  {
    label: '500만원 이하',
    maxAmount: 5000000,
    items: [
      { label: '치킨 조각', unit: '조각', price: 2500, icon: chickenPieceIcon },
      { label: '초코우유', unit: '개', price: 1800, icon: chocoMilkIcon },
      { label: '초코파이', unit: '개', price: 500, icon: chocoPieIcon },
      { label: '츄르', unit: '개', price: 700, icon: churuIcon },
      { label: '생활용품', unit: '회', price: 5000, icon: daisoShoppingIcon },
      { label: '강아지 껌', unit: '개', price: 3000, icon: dogChewIcon },
      { label: '계란', unit: '개', price: 350, icon: eggIcon },
      { label: '붕어빵', unit: '개', price: 1000, icon: fishBreadIcon },
      { label: '김', unit: '봉', price: 5000, icon: gimIcon },
      { label: '김밥', unit: '줄', price: 3500, icon: gimbapIcon },
      { label: '국밥', unit: '그릇', price: 10000, icon: gukbapIcon },
      { label: '햄버거', unit: '개', price: 7800, icon: hamburgerIcon },
      { label: '아아', unit: '잔', price: 4700, icon: icedAmericanoIcon },
      { label: '카누 스틱', unit: '개', price: 300, icon: kanuStickIcon },
      { label: '로또', unit: '장', price: 1000, icon: lottoTicketIcon },
      { label: '팬티', unit: '장', price: 12000, icon: pantiesIcon },
      { label: '감자', unit: '개', price: 800, icon: potatoIcon },
      { label: '라면', unit: '봉지', price: 1000, icon: ramenIcon },
      { label: '즉석복권', unit: '장', price: 1000, icon: scratchLotteryIcon },
      { label: '양말', unit: '켤레', price: 3000, icon: socksIcon },
      { label: '휴지', unit: '팩', price: 25000, icon: toiletPaperIcon },
      { label: '토마토', unit: '개', price: 1000, icon: tomatoIcon },
      { label: '장난감 공', unit: '개', price: 3000, icon: toyBallIcon },
      { label: '삼각김밥', unit: '개', price: 1500, icon: triangleGimbapIcon },
      { label: '생수', unit: '병', price: 1000, icon: waterIcon },
      { label: '에어팟', unit: '개', price: 199000, icon: airpodsIcon },
      { label: '배달주문', unit: '건', price: 15000, icon: baeminMinOrderIcon },
      { label: '맥주', unit: '캔', price: 3000, icon: beerIcon },
      { label: '케이크', unit: '개', price: 30000, icon: cakeIcon },
      { label: '고양이 모래', unit: '포대', price: 25000, icon: catLitterIcon },
      { label: '치킨', unit: '마리', price: 23000, icon: chickenIcon },
      { label: '도시락', unit: '개', price: 5500, icon: convenienceLunchboxIcon },
      { label: '게임 타이틀', unit: '개', price: 79800, icon: gameTitleIcon },
      { label: '한우 1kg', unit: 'kg', price: 80000, icon: hanwoo1kgIcon },
      { label: '호텔 1박', unit: '박', price: 120000, icon: hotel1nightIcon },
      { label: '고기뷔페', unit: '명', price: 35000, icon: meatBuffetIcon },
      { label: '영화관람권', unit: '장', price: 15000, icon: movieTicketIcon },
      { label: 'PC방', unit: '시간', price: 1500, icon: pcBang1hIcon },
      { label: '향수', unit: '병', price: 120000, icon: perfumeIcon },
      { label: '펫사료', unit: '포대', price: 40000, icon: petFoodIcon },
      { label: '피자', unit: '판', price: 28000, icon: pizzaIcon },
      { label: '회 한 접시', unit: '접시', price: 55000, icon: sashimiPlateIcon },
      { label: '운동화', unit: '켤레', price: 120000, icon: sneakersIcon },
      { label: '소주', unit: '병', price: 5000, icon: sojuIcon },
      { label: '스팀 게임', unit: '개', price: 30000, icon: steamGameIcon },
      { label: '탕후루', unit: '개', price: 4000, icon: tanghuluIcon },
      { label: '떡볶이', unit: '인분', price: 5000, icon: tteokbokkiIcon },
      { label: '물그릇', unit: '개', price: 12000, icon: waterBowlIcon },
      { label: '공기청정기', unit: '대', price: 250000, icon: airPurifierIcon },
      { label: '애플워치', unit: '개', price: 329000, icon: appleWatchIcon },
      { label: '캣타워', unit: '개', price: 150000, icon: catTowerIcon },
      { label: 'D램', unit: '개', price: 8500, icon: dRamIcon },
      { label: '아빠 정장', unit: '벌', price: 400000, icon: dadSuitIcon },
      { label: '갤럭시', unit: '개', price: 1155000, icon: galaxyIcon },
      { label: '헤어드라이어', unit: '개', price: 499000, icon: hairDryerIcon },
      { label: '아이패드', unit: '개', price: 529000, icon: ipadIcon },
      { label: '아이폰', unit: '개', price: 1250000, icon: iphoneIcon },
      { label: '명품 지갑', unit: '개', price: 900000, icon: luxuryWalletIcon },
      { label: '맥북', unit: '개', price: 1590000, icon: macbookIcon },
      { label: '안마의자', unit: '대', price: 2500000, icon: massageChairIcon },
      { label: '로봇청소기', unit: '대', price: 600000, icon: robotVacuumIcon },
      { label: 'TV', unit: '대', price: 1200000, icon: tvIcon },
      { label: '세탁기', unit: '대', price: 900000, icon: washingMachineIcon },
      { label: '청소기', unit: '대', price: 700000, icon: wetDryVacuumIcon },
      { label: '강아지집', unit: '채', price: 160000, icon: dogHouseIcon },
      { label: '전기자전거', unit: '대', price: 1500000, icon: electricBikeIcon },
      { label: '웨딩드레스', unit: '벌', price: 3000000, icon: weddingDressIcon },
      { label: '결혼반지', unit: '개', price: 3500000, icon: weddingRingIcon },
      { label: '제주도 땅', unit: '평', price: 2000000, icon: jejuLandIcon },
    ],
  },
  {
    label: '1천만원 이하',
    maxAmount: 10000000,
    items: [
      { label: '치킨 조각', unit: '조각', price: 2500, icon: chickenPieceIcon },
      { label: '초코우유', unit: '개', price: 1800, icon: chocoMilkIcon },
      { label: '초코파이', unit: '개', price: 500, icon: chocoPieIcon },
      { label: '츄르', unit: '개', price: 700, icon: churuIcon },
      { label: '생활용품', unit: '회', price: 5000, icon: daisoShoppingIcon },
      { label: '강아지 껌', unit: '개', price: 3000, icon: dogChewIcon },
      { label: '계란', unit: '개', price: 350, icon: eggIcon },
      { label: '붕어빵', unit: '개', price: 1000, icon: fishBreadIcon },
      { label: '김', unit: '봉', price: 5000, icon: gimIcon },
      { label: '김밥', unit: '줄', price: 3500, icon: gimbapIcon },
      { label: '국밥', unit: '그릇', price: 10000, icon: gukbapIcon },
      { label: '햄버거', unit: '개', price: 7800, icon: hamburgerIcon },
      { label: '아아', unit: '잔', price: 4700, icon: icedAmericanoIcon },
      { label: '카누 스틱', unit: '개', price: 300, icon: kanuStickIcon },
      { label: '로또', unit: '장', price: 1000, icon: lottoTicketIcon },
      { label: '팬티', unit: '장', price: 12000, icon: pantiesIcon },
      { label: '감자', unit: '개', price: 800, icon: potatoIcon },
      { label: '라면', unit: '봉지', price: 1000, icon: ramenIcon },
      { label: '즉석복권', unit: '장', price: 1000, icon: scratchLotteryIcon },
      { label: '양말', unit: '켤레', price: 3000, icon: socksIcon },
      { label: '휴지', unit: '팩', price: 25000, icon: toiletPaperIcon },
      { label: '토마토', unit: '개', price: 1000, icon: tomatoIcon },
      { label: '장난감 공', unit: '개', price: 3000, icon: toyBallIcon },
      { label: '삼각김밥', unit: '개', price: 1500, icon: triangleGimbapIcon },
      { label: '생수', unit: '병', price: 1000, icon: waterIcon },
      { label: '에어팟', unit: '개', price: 199000, icon: airpodsIcon },
      { label: '배달주문', unit: '건', price: 15000, icon: baeminMinOrderIcon },
      { label: '맥주', unit: '캔', price: 3000, icon: beerIcon },
      { label: '케이크', unit: '개', price: 30000, icon: cakeIcon },
      { label: '고양이 모래', unit: '포대', price: 25000, icon: catLitterIcon },
      { label: '치킨', unit: '마리', price: 23000, icon: chickenIcon },
      { label: '도시락', unit: '개', price: 5500, icon: convenienceLunchboxIcon },
      { label: '게임 타이틀', unit: '개', price: 79800, icon: gameTitleIcon },
      { label: '한우 1kg', unit: 'kg', price: 80000, icon: hanwoo1kgIcon },
      { label: '호텔 1박', unit: '박', price: 120000, icon: hotel1nightIcon },
      { label: '고기뷔페', unit: '명', price: 35000, icon: meatBuffetIcon },
      { label: '영화관람권', unit: '장', price: 15000, icon: movieTicketIcon },
      { label: 'PC방', unit: '시간', price: 1500, icon: pcBang1hIcon },
      { label: '향수', unit: '병', price: 120000, icon: perfumeIcon },
      { label: '펫사료', unit: '포대', price: 40000, icon: petFoodIcon },
      { label: '피자', unit: '판', price: 28000, icon: pizzaIcon },
      { label: '회 한 접시', unit: '접시', price: 55000, icon: sashimiPlateIcon },
      { label: '운동화', unit: '켤레', price: 120000, icon: sneakersIcon },
      { label: '소주', unit: '병', price: 5000, icon: sojuIcon },
      { label: '스팀 게임', unit: '개', price: 30000, icon: steamGameIcon },
      { label: '탕후루', unit: '개', price: 4000, icon: tanghuluIcon },
      { label: '떡볶이', unit: '인분', price: 5000, icon: tteokbokkiIcon },
      { label: '물그릇', unit: '개', price: 12000, icon: waterBowlIcon },
      { label: '공기청정기', unit: '대', price: 250000, icon: airPurifierIcon },
      { label: '애플워치', unit: '개', price: 329000, icon: appleWatchIcon },
      { label: '캣타워', unit: '개', price: 150000, icon: catTowerIcon },
      { label: 'D램', unit: '개', price: 8500, icon: dRamIcon },
      { label: '아빠 정장', unit: '벌', price: 400000, icon: dadSuitIcon },
      { label: '갤럭시', unit: '개', price: 1155000, icon: galaxyIcon },
      { label: '헤어드라이어', unit: '개', price: 499000, icon: hairDryerIcon },
      { label: '아이패드', unit: '개', price: 529000, icon: ipadIcon },
      { label: '아이폰', unit: '개', price: 1250000, icon: iphoneIcon },
      { label: '명품 지갑', unit: '개', price: 900000, icon: luxuryWalletIcon },
      { label: '맥북', unit: '개', price: 1590000, icon: macbookIcon },
      { label: '안마의자', unit: '대', price: 2500000, icon: massageChairIcon },
      { label: '로봇청소기', unit: '대', price: 600000, icon: robotVacuumIcon },
      { label: 'TV', unit: '대', price: 1200000, icon: tvIcon },
      { label: '명품 목걸이', unit: '개', price: 5800000, icon: vanCleefNecklaceIcon },
      { label: '세탁기', unit: '대', price: 900000, icon: washingMachineIcon },
      { label: '청소기', unit: '대', price: 700000, icon: wetDryVacuumIcon },
      { label: '강아지집', unit: '채', price: 160000, icon: dogHouseIcon },
      { label: '전기자전거', unit: '대', price: 1500000, icon: electricBikeIcon },
      { label: '신혼여행', unit: '회', price: 8000000, icon: honeymoonIcon },
      { label: '웨딩드레스', unit: '벌', price: 3000000, icon: weddingDressIcon },
      { label: '결혼반지', unit: '개', price: 3500000, icon: weddingRingIcon },
      { label: '소 한 마리', unit: '마리', price: 7000000, icon: cowIcon },
      { label: '제주도 땅', unit: '평', price: 2000000, icon: jejuLandIcon },
    ],
  },
  {
    label: '3천만원 이하',
    maxAmount: 30000000,
    items: [
      { label: '치킨 조각', unit: '조각', price: 2500, icon: chickenPieceIcon },
      { label: '초코우유', unit: '개', price: 1800, icon: chocoMilkIcon },
      { label: '초코파이', unit: '개', price: 500, icon: chocoPieIcon },
      { label: '츄르', unit: '개', price: 700, icon: churuIcon },
      { label: '생활용품', unit: '회', price: 5000, icon: daisoShoppingIcon },
      { label: '강아지 껌', unit: '개', price: 3000, icon: dogChewIcon },
      { label: '계란', unit: '개', price: 350, icon: eggIcon },
      { label: '붕어빵', unit: '개', price: 1000, icon: fishBreadIcon },
      { label: '김', unit: '봉', price: 5000, icon: gimIcon },
      { label: '김밥', unit: '줄', price: 3500, icon: gimbapIcon },
      { label: '국밥', unit: '그릇', price: 10000, icon: gukbapIcon },
      { label: '햄버거', unit: '개', price: 7800, icon: hamburgerIcon },
      { label: '아아', unit: '잔', price: 4700, icon: icedAmericanoIcon },
      { label: '카누 스틱', unit: '개', price: 300, icon: kanuStickIcon },
      { label: '로또', unit: '장', price: 1000, icon: lottoTicketIcon },
      { label: '팬티', unit: '장', price: 12000, icon: pantiesIcon },
      { label: '감자', unit: '개', price: 800, icon: potatoIcon },
      { label: '라면', unit: '봉지', price: 1000, icon: ramenIcon },
      { label: '즉석복권', unit: '장', price: 1000, icon: scratchLotteryIcon },
      { label: '양말', unit: '켤레', price: 3000, icon: socksIcon },
      { label: '휴지', unit: '팩', price: 25000, icon: toiletPaperIcon },
      { label: '토마토', unit: '개', price: 1000, icon: tomatoIcon },
      { label: '장난감 공', unit: '개', price: 3000, icon: toyBallIcon },
      { label: '삼각김밥', unit: '개', price: 1500, icon: triangleGimbapIcon },
      { label: '생수', unit: '병', price: 1000, icon: waterIcon },
      { label: '에어팟', unit: '개', price: 199000, icon: airpodsIcon },
      { label: '배달주문', unit: '건', price: 15000, icon: baeminMinOrderIcon },
      { label: '맥주', unit: '캔', price: 3000, icon: beerIcon },
      { label: '케이크', unit: '개', price: 30000, icon: cakeIcon },
      { label: '고양이 모래', unit: '포대', price: 25000, icon: catLitterIcon },
      { label: '치킨', unit: '마리', price: 23000, icon: chickenIcon },
      { label: '도시락', unit: '개', price: 5500, icon: convenienceLunchboxIcon },
      { label: '게임 타이틀', unit: '개', price: 79800, icon: gameTitleIcon },
      { label: '한우 1kg', unit: 'kg', price: 80000, icon: hanwoo1kgIcon },
      { label: '호텔 1박', unit: '박', price: 120000, icon: hotel1nightIcon },
      { label: '고기뷔페', unit: '명', price: 35000, icon: meatBuffetIcon },
      { label: '영화관람권', unit: '장', price: 15000, icon: movieTicketIcon },
      { label: 'PC방', unit: '시간', price: 1500, icon: pcBang1hIcon },
      { label: '향수', unit: '병', price: 120000, icon: perfumeIcon },
      { label: '펫사료', unit: '포대', price: 40000, icon: petFoodIcon },
      { label: '피자', unit: '판', price: 28000, icon: pizzaIcon },
      { label: '회 한 접시', unit: '접시', price: 55000, icon: sashimiPlateIcon },
      { label: '운동화', unit: '켤레', price: 120000, icon: sneakersIcon },
      { label: '소주', unit: '병', price: 5000, icon: sojuIcon },
      { label: '스팀 게임', unit: '개', price: 30000, icon: steamGameIcon },
      { label: '탕후루', unit: '개', price: 4000, icon: tanghuluIcon },
      { label: '떡볶이', unit: '인분', price: 5000, icon: tteokbokkiIcon },
      { label: '물그릇', unit: '개', price: 12000, icon: waterBowlIcon },
      { label: '공기청정기', unit: '대', price: 250000, icon: airPurifierIcon },
      { label: '애플워치', unit: '개', price: 329000, icon: appleWatchIcon },
      { label: '캣타워', unit: '개', price: 150000, icon: catTowerIcon },
      { label: '샤넬백', unit: '개', price: 19290000, icon: chanelBagIcon },
      { label: 'D램', unit: '개', price: 8500, icon: dRamIcon },
      { label: '아빠 정장', unit: '벌', price: 400000, icon: dadSuitIcon },
      { label: '갤럭시', unit: '개', price: 1155000, icon: galaxyIcon },
      { label: '헤어드라이어', unit: '개', price: 499000, icon: hairDryerIcon },
      { label: '아이패드', unit: '개', price: 529000, icon: ipadIcon },
      { label: '아이폰', unit: '개', price: 1250000, icon: iphoneIcon },
      { label: '명품 지갑', unit: '개', price: 900000, icon: luxuryWalletIcon },
      { label: '맥북', unit: '개', price: 1590000, icon: macbookIcon },
      { label: '안마의자', unit: '대', price: 2500000, icon: massageChairIcon },
      { label: '로봇청소기', unit: '대', price: 600000, icon: robotVacuumIcon },
      { label: 'TV', unit: '대', price: 1200000, icon: tvIcon },
      { label: '명품 목걸이', unit: '개', price: 5800000, icon: vanCleefNecklaceIcon },
      { label: '세탁기', unit: '대', price: 900000, icon: washingMachineIcon },
      { label: '청소기', unit: '대', price: 700000, icon: wetDryVacuumIcon },
      { label: '강아지집', unit: '채', price: 160000, icon: dogHouseIcon },
      { label: '전기자전거', unit: '대', price: 1500000, icon: electricBikeIcon },
      { label: '신혼여행', unit: '회', price: 8000000, icon: honeymoonIcon },
      { label: '명품 시계', unit: '개', price: 18000000, icon: luxuryWatchIcon },
      { label: '오토바이', unit: '대', price: 12000000, icon: motorcycleIcon },
      { label: '웨딩드레스', unit: '벌', price: 3000000, icon: weddingDressIcon },
      { label: '결혼반지', unit: '개', price: 3500000, icon: weddingRingIcon },
      { label: '소 한 마리', unit: '마리', price: 7000000, icon: cowIcon },
      { label: '강아지집 100채', unit: '세트', price: 16000000, icon: dogHouse100Icon },
      { label: '말', unit: '마리', price: 30000000, icon: horseIcon },
      { label: '제주도 땅', unit: '평', price: 2000000, icon: jejuLandIcon },
    ],
  },
  {
    label: '5천만원 이하',
    maxAmount: 50000000,
    items: [
      { label: '치킨 조각', unit: '조각', price: 2500, icon: chickenPieceIcon },
      { label: '초코우유', unit: '개', price: 1800, icon: chocoMilkIcon },
      { label: '초코파이', unit: '개', price: 500, icon: chocoPieIcon },
      { label: '츄르', unit: '개', price: 700, icon: churuIcon },
      { label: '생활용품', unit: '회', price: 5000, icon: daisoShoppingIcon },
      { label: '강아지 껌', unit: '개', price: 3000, icon: dogChewIcon },
      { label: '계란', unit: '개', price: 350, icon: eggIcon },
      { label: '붕어빵', unit: '개', price: 1000, icon: fishBreadIcon },
      { label: '김', unit: '봉', price: 5000, icon: gimIcon },
      { label: '김밥', unit: '줄', price: 3500, icon: gimbapIcon },
      { label: '국밥', unit: '그릇', price: 10000, icon: gukbapIcon },
      { label: '햄버거', unit: '개', price: 7800, icon: hamburgerIcon },
      { label: '아아', unit: '잔', price: 4700, icon: icedAmericanoIcon },
      { label: '카누 스틱', unit: '개', price: 300, icon: kanuStickIcon },
      { label: '로또', unit: '장', price: 1000, icon: lottoTicketIcon },
      { label: '팬티', unit: '장', price: 12000, icon: pantiesIcon },
      { label: '감자', unit: '개', price: 800, icon: potatoIcon },
      { label: '라면', unit: '봉지', price: 1000, icon: ramenIcon },
      { label: '즉석복권', unit: '장', price: 1000, icon: scratchLotteryIcon },
      { label: '양말', unit: '켤레', price: 3000, icon: socksIcon },
      { label: '휴지', unit: '팩', price: 25000, icon: toiletPaperIcon },
      { label: '토마토', unit: '개', price: 1000, icon: tomatoIcon },
      { label: '장난감 공', unit: '개', price: 3000, icon: toyBallIcon },
      { label: '삼각김밥', unit: '개', price: 1500, icon: triangleGimbapIcon },
      { label: '생수', unit: '병', price: 1000, icon: waterIcon },
      { label: '에어팟', unit: '개', price: 199000, icon: airpodsIcon },
      { label: '배달주문', unit: '건', price: 15000, icon: baeminMinOrderIcon },
      { label: '맥주', unit: '캔', price: 3000, icon: beerIcon },
      { label: '케이크', unit: '개', price: 30000, icon: cakeIcon },
      { label: '고양이 모래', unit: '포대', price: 25000, icon: catLitterIcon },
      { label: '치킨', unit: '마리', price: 23000, icon: chickenIcon },
      { label: '도시락', unit: '개', price: 5500, icon: convenienceLunchboxIcon },
      { label: '게임 타이틀', unit: '개', price: 79800, icon: gameTitleIcon },
      { label: '한우 1kg', unit: 'kg', price: 80000, icon: hanwoo1kgIcon },
      { label: '호텔 1박', unit: '박', price: 120000, icon: hotel1nightIcon },
      { label: '고기뷔페', unit: '명', price: 35000, icon: meatBuffetIcon },
      { label: '영화관람권', unit: '장', price: 15000, icon: movieTicketIcon },
      { label: 'PC방', unit: '시간', price: 1500, icon: pcBang1hIcon },
      { label: '향수', unit: '병', price: 120000, icon: perfumeIcon },
      { label: '펫사료', unit: '포대', price: 40000, icon: petFoodIcon },
      { label: '피자', unit: '판', price: 28000, icon: pizzaIcon },
      { label: '회 한 접시', unit: '접시', price: 55000, icon: sashimiPlateIcon },
      { label: '운동화', unit: '켤레', price: 120000, icon: sneakersIcon },
      { label: '소주', unit: '병', price: 5000, icon: sojuIcon },
      { label: '스팀 게임', unit: '개', price: 30000, icon: steamGameIcon },
      { label: '탕후루', unit: '개', price: 4000, icon: tanghuluIcon },
      { label: '떡볶이', unit: '인분', price: 5000, icon: tteokbokkiIcon },
      { label: '물그릇', unit: '개', price: 12000, icon: waterBowlIcon },
      { label: '공기청정기', unit: '대', price: 250000, icon: airPurifierIcon },
      { label: '애플워치', unit: '개', price: 329000, icon: appleWatchIcon },
      { label: '캣타워', unit: '개', price: 150000, icon: catTowerIcon },
      { label: '샤넬백', unit: '개', price: 19290000, icon: chanelBagIcon },
      { label: 'D램', unit: '개', price: 8500, icon: dRamIcon },
      { label: '아빠 정장', unit: '벌', price: 400000, icon: dadSuitIcon },
      { label: '갤럭시', unit: '개', price: 1155000, icon: galaxyIcon },
      { label: '헤어드라이어', unit: '개', price: 499000, icon: hairDryerIcon },
      { label: '아이패드', unit: '개', price: 529000, icon: ipadIcon },
      { label: '아이폰', unit: '개', price: 1250000, icon: iphoneIcon },
      { label: '명품 지갑', unit: '개', price: 900000, icon: luxuryWalletIcon },
      { label: '맥북', unit: '개', price: 1590000, icon: macbookIcon },
      { label: '안마의자', unit: '대', price: 2500000, icon: massageChairIcon },
      { label: '로봇청소기', unit: '대', price: 600000, icon: robotVacuumIcon },
      { label: 'TV', unit: '대', price: 1200000, icon: tvIcon },
      { label: '명품 목걸이', unit: '개', price: 5800000, icon: vanCleefNecklaceIcon },
      { label: '세탁기', unit: '대', price: 900000, icon: washingMachineIcon },
      { label: '청소기', unit: '대', price: 700000, icon: wetDryVacuumIcon },
      { label: '강아지집', unit: '채', price: 160000, icon: dogHouseIcon },
      { label: '전기자전거', unit: '대', price: 1500000, icon: electricBikeIcon },
      { label: '신혼여행', unit: '회', price: 8000000, icon: honeymoonIcon },
      { label: '명품 시계', unit: '개', price: 18000000, icon: luxuryWatchIcon },
      { label: '오토바이', unit: '대', price: 12000000, icon: motorcycleIcon },
      { label: '보증금', unit: '건', price: 50000000, icon: officetelDepositIcon },
      { label: '테슬라', unit: '대', price: 49990000, icon: teslaCarIcon },
      { label: '웨딩드레스', unit: '벌', price: 3000000, icon: weddingDressIcon },
      { label: '결혼반지', unit: '개', price: 3500000, icon: weddingRingIcon },
      { label: '소 한 마리', unit: '마리', price: 7000000, icon: cowIcon },
      { label: '강아지집 100채', unit: '세트', price: 16000000, icon: dogHouse100Icon },
      { label: '말', unit: '마리', price: 30000000, icon: horseIcon },
      { label: '제주도 땅', unit: '평', price: 2000000, icon: jejuLandIcon },
      { label: '트랙터', unit: '대', price: 50000000, icon: tractorIcon },
    ],
  },
  {
    label: '1억원 이하',
    maxAmount: 100000000,
    items: [
      { label: '치킨 조각', unit: '조각', price: 2500, icon: chickenPieceIcon },
      { label: '초코우유', unit: '개', price: 1800, icon: chocoMilkIcon },
      { label: '초코파이', unit: '개', price: 500, icon: chocoPieIcon },
      { label: '츄르', unit: '개', price: 700, icon: churuIcon },
      { label: '생활용품', unit: '회', price: 5000, icon: daisoShoppingIcon },
      { label: '강아지 껌', unit: '개', price: 3000, icon: dogChewIcon },
      { label: '계란', unit: '개', price: 350, icon: eggIcon },
      { label: '붕어빵', unit: '개', price: 1000, icon: fishBreadIcon },
      { label: '김', unit: '봉', price: 5000, icon: gimIcon },
      { label: '김밥', unit: '줄', price: 3500, icon: gimbapIcon },
      { label: '국밥', unit: '그릇', price: 10000, icon: gukbapIcon },
      { label: '햄버거', unit: '개', price: 7800, icon: hamburgerIcon },
      { label: '아아', unit: '잔', price: 4700, icon: icedAmericanoIcon },
      { label: '카누 스틱', unit: '개', price: 300, icon: kanuStickIcon },
      { label: '로또', unit: '장', price: 1000, icon: lottoTicketIcon },
      { label: '팬티', unit: '장', price: 12000, icon: pantiesIcon },
      { label: '감자', unit: '개', price: 800, icon: potatoIcon },
      { label: '라면', unit: '봉지', price: 1000, icon: ramenIcon },
      { label: '즉석복권', unit: '장', price: 1000, icon: scratchLotteryIcon },
      { label: '양말', unit: '켤레', price: 3000, icon: socksIcon },
      { label: '휴지', unit: '팩', price: 25000, icon: toiletPaperIcon },
      { label: '토마토', unit: '개', price: 1000, icon: tomatoIcon },
      { label: '장난감 공', unit: '개', price: 3000, icon: toyBallIcon },
      { label: '삼각김밥', unit: '개', price: 1500, icon: triangleGimbapIcon },
      { label: '생수', unit: '병', price: 1000, icon: waterIcon },
      { label: '에어팟', unit: '개', price: 199000, icon: airpodsIcon },
      { label: '배달주문', unit: '건', price: 15000, icon: baeminMinOrderIcon },
      { label: '맥주', unit: '캔', price: 3000, icon: beerIcon },
      { label: '케이크', unit: '개', price: 30000, icon: cakeIcon },
      { label: '고양이 모래', unit: '포대', price: 25000, icon: catLitterIcon },
      { label: '치킨', unit: '마리', price: 23000, icon: chickenIcon },
      { label: '도시락', unit: '개', price: 5500, icon: convenienceLunchboxIcon },
      { label: '게임 타이틀', unit: '개', price: 79800, icon: gameTitleIcon },
      { label: '한우 1kg', unit: 'kg', price: 80000, icon: hanwoo1kgIcon },
      { label: '호텔 1박', unit: '박', price: 120000, icon: hotel1nightIcon },
      { label: '고기뷔페', unit: '명', price: 35000, icon: meatBuffetIcon },
      { label: '영화관람권', unit: '장', price: 15000, icon: movieTicketIcon },
      { label: 'PC방', unit: '시간', price: 1500, icon: pcBang1hIcon },
      { label: '향수', unit: '병', price: 120000, icon: perfumeIcon },
      { label: '펫사료', unit: '포대', price: 40000, icon: petFoodIcon },
      { label: '피자', unit: '판', price: 28000, icon: pizzaIcon },
      { label: '회 한 접시', unit: '접시', price: 55000, icon: sashimiPlateIcon },
      { label: '운동화', unit: '켤레', price: 120000, icon: sneakersIcon },
      { label: '소주', unit: '병', price: 5000, icon: sojuIcon },
      { label: '스팀 게임', unit: '개', price: 30000, icon: steamGameIcon },
      { label: '탕후루', unit: '개', price: 4000, icon: tanghuluIcon },
      { label: '떡볶이', unit: '인분', price: 5000, icon: tteokbokkiIcon },
      { label: '물그릇', unit: '개', price: 12000, icon: waterBowlIcon },
      { label: '공기청정기', unit: '대', price: 250000, icon: airPurifierIcon },
      { label: '애플워치', unit: '개', price: 329000, icon: appleWatchIcon },
      { label: '캣타워', unit: '개', price: 150000, icon: catTowerIcon },
      { label: '샤넬백', unit: '개', price: 19290000, icon: chanelBagIcon },
      { label: 'D램', unit: '개', price: 8500, icon: dRamIcon },
      { label: '아빠 정장', unit: '벌', price: 400000, icon: dadSuitIcon },
      { label: '갤럭시', unit: '개', price: 1155000, icon: galaxyIcon },
      { label: '헤어드라이어', unit: '개', price: 499000, icon: hairDryerIcon },
      { label: '아이패드', unit: '개', price: 529000, icon: ipadIcon },
      { label: '아이폰', unit: '개', price: 1250000, icon: iphoneIcon },
      { label: '명품 지갑', unit: '개', price: 900000, icon: luxuryWalletIcon },
      { label: '맥북', unit: '개', price: 1590000, icon: macbookIcon },
      { label: '안마의자', unit: '대', price: 2500000, icon: massageChairIcon },
      { label: '로봇청소기', unit: '대', price: 600000, icon: robotVacuumIcon },
      { label: 'TV', unit: '대', price: 1200000, icon: tvIcon },
      { label: '명품 목걸이', unit: '개', price: 5800000, icon: vanCleefNecklaceIcon },
      { label: '세탁기', unit: '대', price: 900000, icon: washingMachineIcon },
      { label: '청소기', unit: '대', price: 700000, icon: wetDryVacuumIcon },
      { label: '벤츠', unit: '대', price: 70000000, icon: benzCarIcon },
      { label: 'BMW', unit: '대', price: 74300000, icon: bmwCarIcon },
      { label: '캠핑카', unit: '대', price: 80000000, icon: campingCarIcon },
      { label: '강아지집', unit: '채', price: 160000, icon: dogHouseIcon },
      { label: '전기자전거', unit: '대', price: 1500000, icon: electricBikeIcon },
      { label: '신혼여행', unit: '회', price: 8000000, icon: honeymoonIcon },
      { label: '명품 시계', unit: '개', price: 18000000, icon: luxuryWatchIcon },
      { label: '오토바이', unit: '대', price: 12000000, icon: motorcycleIcon },
      { label: '보증금', unit: '건', price: 50000000, icon: officetelDepositIcon },
      { label: '테슬라', unit: '대', price: 49990000, icon: teslaCarIcon },
      { label: '웨딩드레스', unit: '벌', price: 3000000, icon: weddingDressIcon },
      { label: '결혼반지', unit: '개', price: 3500000, icon: weddingRingIcon },
      { label: '소 한 마리', unit: '마리', price: 7000000, icon: cowIcon },
      { label: '강아지집 100채', unit: '세트', price: 16000000, icon: dogHouse100Icon },
      { label: '말', unit: '마리', price: 30000000, icon: horseIcon },
      { label: '제주도 땅', unit: '평', price: 2000000, icon: jejuLandIcon },
      { label: '트랙터', unit: '대', price: 50000000, icon: tractorIcon },
    ],
  },
  {
    label: '3억원 이하',
    maxAmount: 300000000,
    items: [
      { label: '치킨 조각', unit: '조각', price: 2500, icon: chickenPieceIcon },
      { label: '초코우유', unit: '개', price: 1800, icon: chocoMilkIcon },
      { label: '초코파이', unit: '개', price: 500, icon: chocoPieIcon },
      { label: '츄르', unit: '개', price: 700, icon: churuIcon },
      { label: '생활용품', unit: '회', price: 5000, icon: daisoShoppingIcon },
      { label: '강아지 껌', unit: '개', price: 3000, icon: dogChewIcon },
      { label: '계란', unit: '개', price: 350, icon: eggIcon },
      { label: '붕어빵', unit: '개', price: 1000, icon: fishBreadIcon },
      { label: '김', unit: '봉', price: 5000, icon: gimIcon },
      { label: '김밥', unit: '줄', price: 3500, icon: gimbapIcon },
      { label: '국밥', unit: '그릇', price: 10000, icon: gukbapIcon },
      { label: '햄버거', unit: '개', price: 7800, icon: hamburgerIcon },
      { label: '아아', unit: '잔', price: 4700, icon: icedAmericanoIcon },
      { label: '카누 스틱', unit: '개', price: 300, icon: kanuStickIcon },
      { label: '로또', unit: '장', price: 1000, icon: lottoTicketIcon },
      { label: '팬티', unit: '장', price: 12000, icon: pantiesIcon },
      { label: '감자', unit: '개', price: 800, icon: potatoIcon },
      { label: '라면', unit: '봉지', price: 1000, icon: ramenIcon },
      { label: '즉석복권', unit: '장', price: 1000, icon: scratchLotteryIcon },
      { label: '양말', unit: '켤레', price: 3000, icon: socksIcon },
      { label: '휴지', unit: '팩', price: 25000, icon: toiletPaperIcon },
      { label: '토마토', unit: '개', price: 1000, icon: tomatoIcon },
      { label: '장난감 공', unit: '개', price: 3000, icon: toyBallIcon },
      { label: '삼각김밥', unit: '개', price: 1500, icon: triangleGimbapIcon },
      { label: '생수', unit: '병', price: 1000, icon: waterIcon },
      { label: '에어팟', unit: '개', price: 199000, icon: airpodsIcon },
      { label: '배달주문', unit: '건', price: 15000, icon: baeminMinOrderIcon },
      { label: '맥주', unit: '캔', price: 3000, icon: beerIcon },
      { label: '케이크', unit: '개', price: 30000, icon: cakeIcon },
      { label: '고양이 모래', unit: '포대', price: 25000, icon: catLitterIcon },
      { label: '치킨', unit: '마리', price: 23000, icon: chickenIcon },
      { label: '도시락', unit: '개', price: 5500, icon: convenienceLunchboxIcon },
      { label: '게임 타이틀', unit: '개', price: 79800, icon: gameTitleIcon },
      { label: '한우 1kg', unit: 'kg', price: 80000, icon: hanwoo1kgIcon },
      { label: '호텔 1박', unit: '박', price: 120000, icon: hotel1nightIcon },
      { label: '고기뷔페', unit: '명', price: 35000, icon: meatBuffetIcon },
      { label: '영화관람권', unit: '장', price: 15000, icon: movieTicketIcon },
      { label: 'PC방', unit: '시간', price: 1500, icon: pcBang1hIcon },
      { label: '향수', unit: '병', price: 120000, icon: perfumeIcon },
      { label: '펫사료', unit: '포대', price: 40000, icon: petFoodIcon },
      { label: '피자', unit: '판', price: 28000, icon: pizzaIcon },
      { label: '회 한 접시', unit: '접시', price: 55000, icon: sashimiPlateIcon },
      { label: '운동화', unit: '켤레', price: 120000, icon: sneakersIcon },
      { label: '소주', unit: '병', price: 5000, icon: sojuIcon },
      { label: '스팀 게임', unit: '개', price: 30000, icon: steamGameIcon },
      { label: '탕후루', unit: '개', price: 4000, icon: tanghuluIcon },
      { label: '떡볶이', unit: '인분', price: 5000, icon: tteokbokkiIcon },
      { label: '물그릇', unit: '개', price: 12000, icon: waterBowlIcon },
      { label: '공기청정기', unit: '대', price: 250000, icon: airPurifierIcon },
      { label: '애플워치', unit: '개', price: 329000, icon: appleWatchIcon },
      { label: '캣타워', unit: '개', price: 150000, icon: catTowerIcon },
      { label: '샤넬백', unit: '개', price: 19290000, icon: chanelBagIcon },
      { label: 'D램', unit: '개', price: 8500, icon: dRamIcon },
      { label: '아빠 정장', unit: '벌', price: 400000, icon: dadSuitIcon },
      { label: '갤럭시', unit: '개', price: 1155000, icon: galaxyIcon },
      { label: '헤어드라이어', unit: '개', price: 499000, icon: hairDryerIcon },
      { label: '아이패드', unit: '개', price: 529000, icon: ipadIcon },
      { label: '아이폰', unit: '개', price: 1250000, icon: iphoneIcon },
      { label: '명품 지갑', unit: '개', price: 900000, icon: luxuryWalletIcon },
      { label: '맥북', unit: '개', price: 1590000, icon: macbookIcon },
      { label: '안마의자', unit: '대', price: 2500000, icon: massageChairIcon },
      { label: '로봇청소기', unit: '대', price: 600000, icon: robotVacuumIcon },
      { label: 'TV', unit: '대', price: 1200000, icon: tvIcon },
      { label: '명품 목걸이', unit: '개', price: 5800000, icon: vanCleefNecklaceIcon },
      { label: '세탁기', unit: '대', price: 900000, icon: washingMachineIcon },
      { label: '청소기', unit: '대', price: 700000, icon: wetDryVacuumIcon },
      { label: '벤츠', unit: '대', price: 70000000, icon: benzCarIcon },
      { label: 'BMW', unit: '대', price: 74300000, icon: bmwCarIcon },
      { label: '캠핑카', unit: '대', price: 80000000, icon: campingCarIcon },
      { label: '강아지집', unit: '채', price: 160000, icon: dogHouseIcon },
      { label: '전기자전거', unit: '대', price: 1500000, icon: electricBikeIcon },
      { label: '금 1kg', unit: '개', price: 145000000, icon: gold1kgIcon },
      { label: '신혼여행', unit: '회', price: 8000000, icon: honeymoonIcon },
      { label: '명품 시계', unit: '개', price: 18000000, icon: luxuryWatchIcon },
      { label: '오토바이', unit: '대', price: 12000000, icon: motorcycleIcon },
      { label: '보증금', unit: '건', price: 50000000, icon: officetelDepositIcon },
      { label: '테슬라', unit: '대', price: 49990000, icon: teslaCarIcon },
      { label: '웨딩드레스', unit: '벌', price: 3000000, icon: weddingDressIcon },
      { label: '결혼반지', unit: '개', price: 3500000, icon: weddingRingIcon },
      { label: '편의점 창업', unit: '건', price: 150000000, icon: convenienceStoreStartupIcon },
      { label: '소 한 마리', unit: '마리', price: 7000000, icon: cowIcon },
      { label: '강아지집 100채', unit: '세트', price: 16000000, icon: dogHouse100Icon },
      { label: '굴착기', unit: '대', price: 130000000, icon: excavatorIcon },
      { label: '창업비', unit: '건', price: 300000000, icon: franchiseStartupIcon },
      { label: '말', unit: '마리', price: 30000000, icon: horseIcon },
      { label: '제주도 땅', unit: '평', price: 2000000, icon: jejuLandIcon },
      { label: '포르쉐', unit: '대', price: 180000000, icon: porscheCarIcon },
      { label: '트랙터', unit: '대', price: 50000000, icon: tractorIcon },
    ],
  },
  {
    label: '10억원 이하',
    maxAmount: 1000000000,
    items: [
      { label: '치킨 조각', unit: '조각', price: 2500, icon: chickenPieceIcon },
      { label: '초코우유', unit: '개', price: 1800, icon: chocoMilkIcon },
      { label: '초코파이', unit: '개', price: 500, icon: chocoPieIcon },
      { label: '츄르', unit: '개', price: 700, icon: churuIcon },
      { label: '생활용품', unit: '회', price: 5000, icon: daisoShoppingIcon },
      { label: '강아지 껌', unit: '개', price: 3000, icon: dogChewIcon },
      { label: '계란', unit: '개', price: 350, icon: eggIcon },
      { label: '붕어빵', unit: '개', price: 1000, icon: fishBreadIcon },
      { label: '김', unit: '봉', price: 5000, icon: gimIcon },
      { label: '김밥', unit: '줄', price: 3500, icon: gimbapIcon },
      { label: '국밥', unit: '그릇', price: 10000, icon: gukbapIcon },
      { label: '햄버거', unit: '개', price: 7800, icon: hamburgerIcon },
      { label: '아아', unit: '잔', price: 4700, icon: icedAmericanoIcon },
      { label: '카누 스틱', unit: '개', price: 300, icon: kanuStickIcon },
      { label: '로또', unit: '장', price: 1000, icon: lottoTicketIcon },
      { label: '팬티', unit: '장', price: 12000, icon: pantiesIcon },
      { label: '감자', unit: '개', price: 800, icon: potatoIcon },
      { label: '라면', unit: '봉지', price: 1000, icon: ramenIcon },
      { label: '즉석복권', unit: '장', price: 1000, icon: scratchLotteryIcon },
      { label: '양말', unit: '켤레', price: 3000, icon: socksIcon },
      { label: '휴지', unit: '팩', price: 25000, icon: toiletPaperIcon },
      { label: '토마토', unit: '개', price: 1000, icon: tomatoIcon },
      { label: '장난감 공', unit: '개', price: 3000, icon: toyBallIcon },
      { label: '삼각김밥', unit: '개', price: 1500, icon: triangleGimbapIcon },
      { label: '생수', unit: '병', price: 1000, icon: waterIcon },
      { label: '에어팟', unit: '개', price: 199000, icon: airpodsIcon },
      { label: '배달주문', unit: '건', price: 15000, icon: baeminMinOrderIcon },
      { label: '맥주', unit: '캔', price: 3000, icon: beerIcon },
      { label: '케이크', unit: '개', price: 30000, icon: cakeIcon },
      { label: '고양이 모래', unit: '포대', price: 25000, icon: catLitterIcon },
      { label: '치킨', unit: '마리', price: 23000, icon: chickenIcon },
      { label: '도시락', unit: '개', price: 5500, icon: convenienceLunchboxIcon },
      { label: '게임 타이틀', unit: '개', price: 79800, icon: gameTitleIcon },
      { label: '한우 1kg', unit: 'kg', price: 80000, icon: hanwoo1kgIcon },
      { label: '호텔 1박', unit: '박', price: 120000, icon: hotel1nightIcon },
      { label: '고기뷔페', unit: '명', price: 35000, icon: meatBuffetIcon },
      { label: '영화관람권', unit: '장', price: 15000, icon: movieTicketIcon },
      { label: 'PC방', unit: '시간', price: 1500, icon: pcBang1hIcon },
      { label: '향수', unit: '병', price: 120000, icon: perfumeIcon },
      { label: '펫사료', unit: '포대', price: 40000, icon: petFoodIcon },
      { label: '피자', unit: '판', price: 28000, icon: pizzaIcon },
      { label: '회 한 접시', unit: '접시', price: 55000, icon: sashimiPlateIcon },
      { label: '운동화', unit: '켤레', price: 120000, icon: sneakersIcon },
      { label: '소주', unit: '병', price: 5000, icon: sojuIcon },
      { label: '스팀 게임', unit: '개', price: 30000, icon: steamGameIcon },
      { label: '탕후루', unit: '개', price: 4000, icon: tanghuluIcon },
      { label: '떡볶이', unit: '인분', price: 5000, icon: tteokbokkiIcon },
      { label: '물그릇', unit: '개', price: 12000, icon: waterBowlIcon },
      { label: '공기청정기', unit: '대', price: 250000, icon: airPurifierIcon },
      { label: '애플워치', unit: '개', price: 329000, icon: appleWatchIcon },
      { label: '캣타워', unit: '개', price: 150000, icon: catTowerIcon },
      { label: '샤넬백', unit: '개', price: 19290000, icon: chanelBagIcon },
      { label: 'D램', unit: '개', price: 8500, icon: dRamIcon },
      { label: '아빠 정장', unit: '벌', price: 400000, icon: dadSuitIcon },
      { label: '갤럭시', unit: '개', price: 1155000, icon: galaxyIcon },
      { label: '헤어드라이어', unit: '개', price: 499000, icon: hairDryerIcon },
      { label: '아이패드', unit: '개', price: 529000, icon: ipadIcon },
      { label: '아이폰', unit: '개', price: 1250000, icon: iphoneIcon },
      { label: '명품 지갑', unit: '개', price: 900000, icon: luxuryWalletIcon },
      { label: '맥북', unit: '개', price: 1590000, icon: macbookIcon },
      { label: '안마의자', unit: '대', price: 2500000, icon: massageChairIcon },
      { label: '로봇청소기', unit: '대', price: 600000, icon: robotVacuumIcon },
      { label: 'TV', unit: '대', price: 1200000, icon: tvIcon },
      { label: '명품 목걸이', unit: '개', price: 5800000, icon: vanCleefNecklaceIcon },
      { label: '세탁기', unit: '대', price: 900000, icon: washingMachineIcon },
      { label: '청소기', unit: '대', price: 700000, icon: wetDryVacuumIcon },
      { label: '벤츠', unit: '대', price: 70000000, icon: benzCarIcon },
      { label: 'BMW', unit: '대', price: 74300000, icon: bmwCarIcon },
      { label: '캠핑카', unit: '대', price: 80000000, icon: campingCarIcon },
      { label: '강아지집', unit: '채', price: 160000, icon: dogHouseIcon },
      { label: '전기자전거', unit: '대', price: 1500000, icon: electricBikeIcon },
      { label: '금 1kg', unit: '개', price: 145000000, icon: gold1kgIcon },
      { label: '신혼여행', unit: '회', price: 8000000, icon: honeymoonIcon },
      { label: '명품 시계', unit: '개', price: 18000000, icon: luxuryWatchIcon },
      { label: '오토바이', unit: '대', price: 12000000, icon: motorcycleIcon },
      { label: '보증금', unit: '건', price: 50000000, icon: officetelDepositIcon },
      { label: '테슬라', unit: '대', price: 49990000, icon: teslaCarIcon },
      { label: '웨딩드레스', unit: '벌', price: 3000000, icon: weddingDressIcon },
      { label: '결혼반지', unit: '개', price: 3500000, icon: weddingRingIcon },
      { label: '아파트', unit: '채', price: 900000000, icon: apartmentIcon },
      { label: '편의점 창업', unit: '건', price: 150000000, icon: convenienceStoreStartupIcon },
      { label: '소 한 마리', unit: '마리', price: 7000000, icon: cowIcon },
      { label: '강아지집 100채', unit: '세트', price: 16000000, icon: dogHouse100Icon },
      { label: '굴착기', unit: '대', price: 130000000, icon: excavatorIcon },
      { label: '창업비', unit: '건', price: 300000000, icon: franchiseStartupIcon },
      { label: '말', unit: '마리', price: 30000000, icon: horseIcon },
      { label: '제주도 땅', unit: '평', price: 2000000, icon: jejuLandIcon },
      { label: '포르쉐', unit: '대', price: 180000000, icon: porscheCarIcon },
      { label: '트랙터', unit: '대', price: 50000000, icon: tractorIcon },
      { label: '요트', unit: '대', price: 700000000, icon: yachtIcon },
    ],
  },
  {
    label: '전체',
    maxAmount: Number.POSITIVE_INFINITY,
    items: [
      { label: '치킨 조각', unit: '조각', price: 2500, icon: chickenPieceIcon },
      { label: '초코우유', unit: '개', price: 1800, icon: chocoMilkIcon },
      { label: '초코파이', unit: '개', price: 500, icon: chocoPieIcon },
      { label: '츄르', unit: '개', price: 700, icon: churuIcon },
      { label: '생활용품', unit: '회', price: 5000, icon: daisoShoppingIcon },
      { label: '강아지 껌', unit: '개', price: 3000, icon: dogChewIcon },
      { label: '계란', unit: '개', price: 350, icon: eggIcon },
      { label: '붕어빵', unit: '개', price: 1000, icon: fishBreadIcon },
      { label: '김', unit: '봉', price: 5000, icon: gimIcon },
      { label: '김밥', unit: '줄', price: 3500, icon: gimbapIcon },
      { label: '국밥', unit: '그릇', price: 10000, icon: gukbapIcon },
      { label: '햄버거', unit: '개', price: 7800, icon: hamburgerIcon },
      { label: '아아', unit: '잔', price: 4700, icon: icedAmericanoIcon },
      { label: '카누 스틱', unit: '개', price: 300, icon: kanuStickIcon },
      { label: '로또', unit: '장', price: 1000, icon: lottoTicketIcon },
      { label: '팬티', unit: '장', price: 12000, icon: pantiesIcon },
      { label: '감자', unit: '개', price: 800, icon: potatoIcon },
      { label: '라면', unit: '봉지', price: 1000, icon: ramenIcon },
      { label: '즉석복권', unit: '장', price: 1000, icon: scratchLotteryIcon },
      { label: '양말', unit: '켤레', price: 3000, icon: socksIcon },
      { label: '휴지', unit: '팩', price: 25000, icon: toiletPaperIcon },
      { label: '토마토', unit: '개', price: 1000, icon: tomatoIcon },
      { label: '장난감 공', unit: '개', price: 3000, icon: toyBallIcon },
      { label: '삼각김밥', unit: '개', price: 1500, icon: triangleGimbapIcon },
      { label: '생수', unit: '병', price: 1000, icon: waterIcon },
      { label: '에어팟', unit: '개', price: 199000, icon: airpodsIcon },
      { label: '배달주문', unit: '건', price: 15000, icon: baeminMinOrderIcon },
      { label: '맥주', unit: '캔', price: 3000, icon: beerIcon },
      { label: '케이크', unit: '개', price: 30000, icon: cakeIcon },
      { label: '고양이 모래', unit: '포대', price: 25000, icon: catLitterIcon },
      { label: '치킨', unit: '마리', price: 23000, icon: chickenIcon },
      { label: '도시락', unit: '개', price: 5500, icon: convenienceLunchboxIcon },
      { label: '게임 타이틀', unit: '개', price: 79800, icon: gameTitleIcon },
      { label: '한우 1kg', unit: 'kg', price: 80000, icon: hanwoo1kgIcon },
      { label: '호텔 1박', unit: '박', price: 120000, icon: hotel1nightIcon },
      { label: '고기뷔페', unit: '명', price: 35000, icon: meatBuffetIcon },
      { label: '영화관람권', unit: '장', price: 15000, icon: movieTicketIcon },
      { label: 'PC방', unit: '시간', price: 1500, icon: pcBang1hIcon },
      { label: '향수', unit: '병', price: 120000, icon: perfumeIcon },
      { label: '펫사료', unit: '포대', price: 40000, icon: petFoodIcon },
      { label: '피자', unit: '판', price: 28000, icon: pizzaIcon },
      { label: '회 한 접시', unit: '접시', price: 55000, icon: sashimiPlateIcon },
      { label: '운동화', unit: '켤레', price: 120000, icon: sneakersIcon },
      { label: '소주', unit: '병', price: 5000, icon: sojuIcon },
      { label: '스팀 게임', unit: '개', price: 30000, icon: steamGameIcon },
      { label: '탕후루', unit: '개', price: 4000, icon: tanghuluIcon },
      { label: '떡볶이', unit: '인분', price: 5000, icon: tteokbokkiIcon },
      { label: '물그릇', unit: '개', price: 12000, icon: waterBowlIcon },
      { label: '공기청정기', unit: '대', price: 250000, icon: airPurifierIcon },
      { label: '애플워치', unit: '개', price: 329000, icon: appleWatchIcon },
      { label: '캣타워', unit: '개', price: 150000, icon: catTowerIcon },
      { label: '샤넬백', unit: '개', price: 19290000, icon: chanelBagIcon },
      { label: 'D램', unit: '개', price: 8500, icon: dRamIcon },
      { label: '아빠 정장', unit: '벌', price: 400000, icon: dadSuitIcon },
      { label: '갤럭시', unit: '개', price: 1155000, icon: galaxyIcon },
      { label: '헤어드라이어', unit: '개', price: 499000, icon: hairDryerIcon },
      { label: '아이패드', unit: '개', price: 529000, icon: ipadIcon },
      { label: '아이폰', unit: '개', price: 1250000, icon: iphoneIcon },
      { label: '명품 지갑', unit: '개', price: 900000, icon: luxuryWalletIcon },
      { label: '맥북', unit: '개', price: 1590000, icon: macbookIcon },
      { label: '안마의자', unit: '대', price: 2500000, icon: massageChairIcon },
      { label: '로봇청소기', unit: '대', price: 600000, icon: robotVacuumIcon },
      { label: 'TV', unit: '대', price: 1200000, icon: tvIcon },
      { label: '명품 목걸이', unit: '개', price: 5800000, icon: vanCleefNecklaceIcon },
      { label: '세탁기', unit: '대', price: 900000, icon: washingMachineIcon },
      { label: '청소기', unit: '대', price: 700000, icon: wetDryVacuumIcon },
      { label: '벤츠', unit: '대', price: 70000000, icon: benzCarIcon },
      { label: 'BMW', unit: '대', price: 74300000, icon: bmwCarIcon },
      { label: '캠핑카', unit: '대', price: 80000000, icon: campingCarIcon },
      { label: '강아지집', unit: '채', price: 160000, icon: dogHouseIcon },
      { label: '전기자전거', unit: '대', price: 1500000, icon: electricBikeIcon },
      { label: '금 1kg', unit: '개', price: 145000000, icon: gold1kgIcon },
      { label: '신혼여행', unit: '회', price: 8000000, icon: honeymoonIcon },
      { label: '명품 시계', unit: '개', price: 18000000, icon: luxuryWatchIcon },
      { label: '오토바이', unit: '대', price: 12000000, icon: motorcycleIcon },
      { label: '보증금', unit: '건', price: 50000000, icon: officetelDepositIcon },
      { label: '테슬라', unit: '대', price: 49990000, icon: teslaCarIcon },
      { label: '웨딩드레스', unit: '벌', price: 3000000, icon: weddingDressIcon },
      { label: '결혼반지', unit: '개', price: 3500000, icon: weddingRingIcon },
      { label: '아파트', unit: '채', price: 900000000, icon: apartmentIcon },
      { label: '편의점 창업', unit: '건', price: 150000000, icon: convenienceStoreStartupIcon },
      { label: '소 한 마리', unit: '마리', price: 7000000, icon: cowIcon },
      { label: '강아지집 100채', unit: '세트', price: 16000000, icon: dogHouse100Icon },
      { label: '굴착기', unit: '대', price: 130000000, icon: excavatorIcon },
      { label: '창업비', unit: '건', price: 300000000, icon: franchiseStartupIcon },
      { label: '한강뷰 집', unit: '채', price: 2500000000, icon: hanRiverViewHouseIcon },
      { label: '말', unit: '마리', price: 30000000, icon: horseIcon },
      { label: '제주도 땅', unit: '평', price: 2000000, icon: jejuLandIcon },
      { label: '포르쉐', unit: '대', price: 180000000, icon: porscheCarIcon },
      { label: '트랙터', unit: '대', price: 50000000, icon: tractorIcon },
      { label: '요트', unit: '대', price: 700000000, icon: yachtIcon },
    ],
  },
]

const ITEM_ICON_BY_LABEL = new Map<string, string>()

RESULT_ITEM_SECTIONS.forEach((section) => {
  section.items.forEach((item) => {
    if (!ITEM_ICON_BY_LABEL.has(item.label)) {
      ITEM_ICON_BY_LABEL.set(item.label, item.icon)
    }
  })
})

type ResultState = {
  amount: number
  background: string
  caption: string
  item: ResultItem
}

type PendingAdAction =
  | {
      amount: number
      kind: 'submit'
    }
  | {
      kind: 'reroll'
    }

type DownloadState = {
  blob: Blob
  dataUrl: string
  fileName: string
  url: string
}

type FileSystemWritableFileStream = {
  close: () => Promise<void>
  write: (data: Blob) => Promise<void>
}

type FileSystemFileHandle = {
  createWritable: () => Promise<FileSystemWritableFileStream>
}

type SaveFilePicker = (options: {
  suggestedName: string
  types: Array<{
    accept: Record<string, string[]>
    description: string
  }>
}) => Promise<FileSystemFileHandle>

type AdSenseWindow = Window & {
  adsbygoogle?: unknown[]
}

type ShareNavigator = Navigator & {
  canShare?: (data: ShareData) => boolean
}

type Tone = 'loss' | 'profit'

type LiveRankItem = {
  icon: string
  label: string
  rank: string
  value: string
}

type LiveStats = {
  rankings: Record<Tone, LiveRankItem[]>
  summary: Record<Tone, number>
}

type SupabaseSummaryRow = {
  event_count: number
  tone: Tone
}

type SupabaseRankingRow = {
  event_count: number
  item_label: string
  item_rank: number
  item_unit: string
  tone: Tone
  total_quantity: string
}

const EXPORT_WIDTH = 768
const EXPORT_HEIGHT = 1152

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL?.replace(/\/$/, '')
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
const ADSENSE_CLIENT = import.meta.env.VITE_ADSENSE_CLIENT ?? 'ca-pub-5140966990633198'
const ADSENSE_MAIN_SLOT = import.meta.env.VITE_ADSENSE_MAIN_SLOT
const ADSENSE_RESULT_SLOT = import.meta.env.VITE_ADSENSE_RESULT_SLOT
const ADSENSE_BREAK_SLOT = import.meta.env.VITE_ADSENSE_BREAK_SLOT
const ADSENSE_SCRIPT_ID = 'google-adsense-script'
const CONTACT_EMAIL = 'contact@gmail.com'

function formatQuantity(value: number) {
  const safeValue = Number.isFinite(value) ? Math.max(0, value) : 0
  const roundedValue = Math.ceil(safeValue)

  return new Intl.NumberFormat('ko-KR', {
    maximumFractionDigits: 0,
  }).format(roundedValue)
}

function formatSignedQuantity(value: number, isLoss: boolean) {
  return `${isLoss ? '-' : '+'}${formatQuantity(value)}`
}

function getCountDensityClass(countText: string) {
  if (countText.length >= 10) {
    return 'result-count-tiny'
  }

  if (countText.length >= 8) {
    return 'result-count-dense'
  }

  if (countText.length >= 6) {
    return 'result-count-compact'
  }

  return ''
}

function getExportCountFontSize(countText: string) {
  if (countText.length >= 10) {
    return 74
  }

  if (countText.length >= 8) {
    return 86
  }

  if (countText.length >= 6) {
    return 98
  }

  if (countText.length >= 4) {
    return 116
  }

  return 130
}

function hasAdSenseConfig(slot?: string) {
  return Boolean(ADSENSE_CLIENT && slot)
}

function pushAdSenseSlot() {
  if (!ADSENSE_CLIENT) {
    return
  }

  const adWindow = window as AdSenseWindow
  adWindow.adsbygoogle = adWindow.adsbygoogle ?? []

  try {
    adWindow.adsbygoogle.push({})
  } catch (error) {
    console.warn('Failed to request AdSense slot', error)
  }
}

function hasSupabaseConfig() {
  return Boolean(SUPABASE_URL && SUPABASE_KEY)
}

function getSupabaseHeaders() {
  return {
    Authorization: `Bearer ${SUPABASE_KEY ?? ''}`,
    apikey: SUPABASE_KEY ?? '',
    'Content-Type': 'application/json',
  }
}

function formatLiveItemValue(totalQuantity: string, unit: string) {
  return `${formatQuantity(Number(totalQuantity))}${unit}`
}

function hasKoreanFinalConsonant(text: string) {
  const lastChar = text.trim().at(-1)

  if (!lastChar) {
    return false
  }

  const code = lastChar.charCodeAt(0)

  if (code < 0xac00 || code > 0xd7a3) {
    return false
  }

  return (code - 0xac00) % 28 !== 0
}

function withObjectParticle(text: string) {
  return `${text}${hasKoreanFinalConsonant(text) ? '을' : '를'}`
}

function getLiveItemIcon(label: string) {
  return ITEM_ICON_BY_LABEL.get(label) ?? ramenIcon
}

function buildLiveStats(summaryRows: SupabaseSummaryRow[], rankingRows: SupabaseRankingRow[]): LiveStats {
  const summary: Record<Tone, number> = {
    loss: 0,
    profit: 0,
  }
  const rankings: Record<Tone, LiveRankItem[]> = {
    loss: [],
    profit: [],
  }

  summaryRows.forEach((row) => {
    summary[row.tone] = Number(row.event_count) || 0
  })

  rankingRows.forEach((row) => {
    rankings[row.tone].push({
      icon: getLiveItemIcon(row.item_label),
      label: row.item_label,
      rank: `${row.item_rank}위`,
      value: formatLiveItemValue(row.total_quantity, row.item_unit),
    })
  })

  return {
    rankings: {
      loss: rankings.loss.length > 0 ? rankings.loss : FALLBACK_LIVE_STATS.rankings.loss,
      profit: rankings.profit.length > 0 ? rankings.profit : FALLBACK_LIVE_STATS.rankings.profit,
    },
    summary: {
      loss: summary.loss || FALLBACK_LIVE_STATS.summary.loss,
      profit: summary.profit || FALLBACK_LIVE_STATS.summary.profit,
    },
  }
}

async function loadLiveStats() {
  if (!hasSupabaseConfig()) {
    return FALLBACK_LIVE_STATS
  }

  const [summaryResponse, rankingResponse] = await Promise.all([
    fetch(`${SUPABASE_URL}/rest/v1/rpc/get_today_conversion_summary`, {
      body: JSON.stringify({}),
      headers: getSupabaseHeaders(),
      method: 'POST',
    }),
    fetch(`${SUPABASE_URL}/rest/v1/rpc/get_today_item_rankings`, {
      body: JSON.stringify({ limit_per_tone: 5 }),
      headers: getSupabaseHeaders(),
      method: 'POST',
    }),
  ])

  if (!summaryResponse.ok || !rankingResponse.ok) {
    throw new Error('Failed to load Supabase live stats')
  }

  const summaryRows = (await summaryResponse.json()) as SupabaseSummaryRow[]
  const rankingRows = (await rankingResponse.json()) as SupabaseRankingRow[]

  return buildLiveStats(summaryRows, rankingRows)
}

async function recordConversionEvent(result: ResultState) {
  if (!hasSupabaseConfig()) {
    return
  }

  const quantity = Math.abs(result.amount) / result.item.price
  const tone: Tone = result.amount < 0 ? 'loss' : 'profit'
  const response = await fetch(`${SUPABASE_URL}/rest/v1/conversion_events`, {
    body: JSON.stringify({
      amount: result.amount,
      caption: result.caption,
      item_label: result.item.label,
      item_price: result.item.price,
      item_unit: result.item.unit,
      quantity: Number(quantity.toFixed(2)),
      tone,
    }),
    headers: {
      ...getSupabaseHeaders(),
      Prefer: 'return=minimal',
    },
    method: 'POST',
  })

  if (!response.ok) {
    throw new Error('Failed to record conversion event')
  }
}

function parseAmountInput(value: string) {
  const normalized = value.replace(/,/g, '').trim()

  if (!normalized || normalized === '-' || normalized === '+') {
    return null
  }

  const parsed = Number(normalized)

  if (!Number.isFinite(parsed) || parsed === 0) {
    return null
  }

  return parsed
}

function formatAmountInput(value: string) {
  const trimmed = value.trim()
  const sign = trimmed.startsWith('-') || trimmed.startsWith('+') ? trimmed[0] : ''
  const digits = trimmed.replace(/^[+-]/, '').replace(/\D/g, '')

  if (!digits) {
    return sign
  }

  return `${sign}${new Intl.NumberFormat('ko-KR').format(Number(digits))}`
}

function pickRandom<T>(items: readonly T[]) {
  return items[Math.floor(Math.random() * items.length)]
}

function getRarityMultiplier(label: string) {
  if (/한강뷰|아파트|요트|포르쉐|BMW|벤츠|테슬라|캠핑카|프랜차이즈|편의점 창업|굴착기|트랙터/.test(label)) {
    return 0.28
  }

  if (/샤넬|명품|금 1kg|소 한 마리|말 한 마리|오피스텔|제주도 땅|신혼여행/.test(label)) {
    return 0.55
  }

  if (/아이폰|갤럭시|맥북|아이패드|애플워치|에어팟|세탁기|TV|안마의자|로봇청소기|공기청정기/.test(label)) {
    return 1.1
  }

  if (/라면|아아|국밥|치킨|피자|김밥|생수|팬티|소주|맥주|PC방|떡볶이/.test(label)) {
    return 4.2
  }

  return 2
}

function getQuantityFitMultiplier(quantity: number) {
  if (quantity >= 500) {
    return 0.4
  }

  if (quantity >= 100) {
    return 0.65
  }

  if (quantity >= 10) {
    return 1.35
  }

  if (quantity >= 1) {
    return 2
  }

  return 0.35
}

function getResultItemWeight(item: ResultItem, amount: number) {
  const quantity = amount / item.price
  const explicitWeight = item.weight ?? 1

  return explicitWeight * getRarityMultiplier(item.label) * getQuantityFitMultiplier(quantity)
}

function pickWeightedResultItem(items: readonly ResultItem[], amount: number) {
  const weightedItems = items.map((item) => ({
    item,
    weight: getResultItemWeight(item, amount),
  }))
  const totalWeight = weightedItems.reduce((sum, entry) => sum + entry.weight, 0)
  let cursor = Math.random() * totalWeight

  for (const entry of weightedItems) {
    cursor -= entry.weight

    if (cursor <= 0) {
      return entry.item
    }
  }

  return weightedItems[weightedItems.length - 1].item
}

function createResult(amount: number): ResultState {
  const isLoss = amount < 0
  const absoluteAmount = Math.abs(amount)
  const section =
    RESULT_ITEM_SECTIONS.find((itemSection) => absoluteAmount <= itemSection.maxAmount) ??
    RESULT_ITEM_SECTIONS[RESULT_ITEM_SECTIONS.length - 1]
  const affordableItems = section.items.filter((item) => item.price <= absoluteAmount)
  const fallbackItems = RESULT_ITEM_SECTIONS[0].items

  return {
    amount,
    background: pickRandom(isLoss ? LOSS_BACKGROUNDS : PROFIT_BACKGROUNDS),
    caption: pickRandom(isLoss ? LOSS_CAPTIONS : PROFIT_CAPTIONS),
    item: pickWeightedResultItem(affordableItems.length > 0 ? affordableItems : fallbackItems, absoluteAmount),
  }
}

function loadCanvasImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image()
    image.onload = () => resolve(image)
    image.onerror = reject
    image.src = src
  })
}

function drawContain(
  context: CanvasRenderingContext2D,
  image: HTMLImageElement,
  x: number,
  y: number,
  width: number,
  height: number,
  padding = 0,
) {
  const safeX = x + padding
  const safeY = y + padding
  const safeWidth = width - padding * 2
  const safeHeight = height - padding * 2
  const scale = Math.min(safeWidth / image.naturalWidth, safeHeight / image.naturalHeight)
  const drawWidth = image.naturalWidth * scale
  const drawHeight = image.naturalHeight * scale
  const drawX = safeX + (safeWidth - drawWidth) / 2
  const drawY = safeY + (safeHeight - drawHeight) / 2

  context.drawImage(image, drawX, drawY, drawWidth, drawHeight)
}

function downloadBlob(blob: Blob, fileName: string) {
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = fileName
  link.rel = 'noopener'
  document.body.appendChild(link)
  link.click()
  link.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 60000)
}

async function shareImageFile(blob: Blob, fileName: string) {
  const shareNavigator = navigator as ShareNavigator

  if (!navigator.share) {
    return false
  }

  const file = new File([blob], fileName, { type: 'image/png' })
  const shareData: ShareData = {
    files: [file],
    title: 'How Many Bro 결과 이미지',
  }

  if (shareNavigator.canShare && !shareNavigator.canShare(shareData)) {
    return false
  }

  try {
    await navigator.share(shareData)
    return true
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      return true
    }

    console.warn('Failed to share image file', error)
    return false
  }
}

function getCurrentPageUrl() {
  if (typeof window === 'undefined') {
    return ''
  }

  return window.location.href
}

function isKakaoInAppBrowser() {
  if (typeof navigator === 'undefined') {
    return false
  }

  return /KAKAOTALK/i.test(navigator.userAgent)
}

function isAndroidDevice() {
  if (typeof navigator === 'undefined') {
    return false
  }

  return /Android/i.test(navigator.userAgent)
}

function isIosDevice() {
  if (typeof navigator === 'undefined') {
    return false
  }

  const userAgent = navigator.userAgent
  const isAppleTouchDevice = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1

  return !/Android/i.test(userAgent) && (/iPad|iPhone|iPod|CriOS|FxiOS|EdgiOS/i.test(userAgent) || isAppleTouchDevice)
}

function getExternalBrowserUrl() {
  const currentUrl = getCurrentPageUrl()

  if (!currentUrl || !isAndroidDevice()) {
    return currentUrl
  }

  try {
    const url = new URL(currentUrl)
    const intentTarget = `${url.host}${url.pathname}${url.search}`
    const scheme = url.protocol.replace(':', '')

    return `intent://${intentTarget}#Intent;scheme=${scheme};package=com.android.chrome;S.browser_fallback_url=${encodeURIComponent(currentUrl)};end`
  } catch {
    return currentUrl
  }
}

async function copyTextToClipboard(text: string) {
  if (!text) {
    return false
  }

  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch {
      // Fall through to the legacy copy path for in-app browsers.
    }
  }

  const textArea = document.createElement('textarea')
  textArea.value = text
  textArea.setAttribute('readonly', '')
  textArea.style.position = 'fixed'
  textArea.style.opacity = '0'
  document.body.appendChild(textArea)
  textArea.select()

  try {
    return document.execCommand('copy')
  } catch {
    return false
  } finally {
    textArea.remove()
  }
}

function createPngBlob(canvas: HTMLCanvasElement) {
  return new Promise<Blob | null>((resolve) => {
    canvas.toBlob((blob) => resolve(blob), 'image/png')
  })
}

async function saveBlobToFile(blob: Blob, fileHandle: FileSystemFileHandle) {
  const writable = await fileHandle.createWritable()
  await writable.write(blob)
  await writable.close()
}

function getResultLabelLines(label: string) {
  const compactLabel = label.replace(/\s/g, '')
  const words = label.split(' ')

  if (label.includes(' ') && compactLabel.length >= 8) {
    const midpoint = Math.ceil(compactLabel.length / 2)
    let currentLength = 0
    const firstLineWords: string[] = []
    const secondLineWords: string[] = []

    words.forEach((word) => {
      const nextLength = currentLength + word.length

      if (nextLength <= midpoint || firstLineWords.length === 0) {
        firstLineWords.push(word)
        currentLength = nextLength
        return
      }

      secondLineWords.push(word)
    })

    return [firstLineWords.join(' '), secondLineWords.join(' ')].filter(Boolean)
  }

  if (!label.includes(' ') && label.length >= 8) {
    const midpoint = Math.ceil(label.length / 2)
    return [label.slice(0, midpoint), label.slice(midpoint)]
  }

  return [label]
}

function getTitleFontSize(lines: string[]) {
  const longestLine = Math.max(...lines.map((line) => line.length))

  if (longestLine >= 6) {
    return 80
  }

  if (longestLine >= 5 || lines.length > 1) {
    return 92
  }

  return 106
}

function drawCenteredLines(
  context: CanvasRenderingContext2D,
  lines: string[],
  centerX: number,
  centerY: number,
  lineHeight: number,
) {
  const firstY = centerY - ((lines.length - 1) * lineHeight) / 2

  lines.forEach((line, index) => {
    context.fillText(line, centerX, firstY + index * lineHeight)
  })
}

function drawCaptionBubble(context: CanvasRenderingContext2D, text: string, isNight: boolean) {
  const x = 104
  const y = 912
  const width = 560
  const height = 112
  const inset = 12

  context.save()
  context.shadowColor = 'rgba(23, 21, 19, 0.18)'
  context.shadowBlur = 0
  context.shadowOffsetX = 8
  context.shadowOffsetY = 8
  context.fillStyle = isNight ? '#f8f3e5' : '#fffdf6'
  context.strokeStyle = '#18242b'
  context.lineWidth = 6
  context.fillRect(x, y, width, height)
  context.strokeRect(x, y, width, height)

  context.shadowColor = 'transparent'
  context.strokeStyle = isNight ? '#c5b89f' : '#cdd9dc'
  context.lineWidth = 4
  context.strokeRect(x + inset, y + inset, width - inset * 2, height - inset * 2)

  context.fillStyle = '#26323a'
  context.textAlign = 'center'
  context.textBaseline = 'middle'
  context.font = '900 39px "NeoDunggeunmo", "Apple SD Gothic Neo", "Noto Sans KR", monospace'
  context.fillText(text, x + width / 2, y + height / 2 + 2)
  context.restore()
}

function AdSenseUnit({
  className = '',
  label,
  slot,
}: {
  className?: string
  label: string
  slot?: string
}) {
  const adRef = useRef<HTMLModElement | null>(null)
  const isConfigured = hasAdSenseConfig(slot)

  useEffect(() => {
    if (!isConfigured || !adRef.current) {
      return
    }

    pushAdSenseSlot()
  }, [isConfigured, slot])

  return (
    <aside className={`ad-unit ${className} ${isConfigured ? '' : 'ad-unit-placeholder'}`} aria-label={label}>
      {isConfigured ? (
        <ins
          ref={adRef}
          className="adsbygoogle"
          data-ad-client={ADSENSE_CLIENT}
          data-ad-format="auto"
          data-ad-slot={slot}
          data-full-width-responsive="true"
        />
      ) : (
        <div>
          <span>AD</span>
          <strong>{label}</strong>
        </div>
      )}
    </aside>
  )
}

function AdBreakOverlay({
  onCancel,
  onContinue,
}: {
  onCancel: () => void
  onContinue: () => void
}) {
  return (
    <div className="ad-break-backdrop" role="dialog" aria-modal="true" aria-label="광고">
      <section className="ad-break-panel">
        <div className="ad-break-header">
          <span>AD</span>
          <strong>잠깐 광고 보고 갈게요</strong>
        </div>
        <AdSenseUnit className="ad-break-slot" label="중간 광고" slot={ADSENSE_BREAK_SLOT} />
        <div className="ad-break-actions">
          <button type="button" onClick={onContinue}>
            계속하기
          </button>
          <button type="button" onClick={onCancel}>
            닫기
          </button>
        </div>
      </section>
    </div>
  )
}

function App() {
  const [amount, setAmount] = useState('')
  const [amountError, setAmountError] = useState('')
  const [result, setResult] = useState<ResultState | null>(null)
  const [downloadState, setDownloadState] = useState<DownloadState | null>(null)
  const [liveStats, setLiveStats] = useState<LiveStats>(FALLBACK_LIVE_STATS)
  const [pendingAdAction, setPendingAdAction] = useState<PendingAdAction | null>(null)
  const [copyNotice, setCopyNotice] = useState('')
  const [allowKakaoBrowser, setAllowKakaoBrowser] = useState(false)

  const isResult = result !== null
  const topLossItem = liveStats.rankings.loss[0] ?? FALLBACK_LIVE_STATS.rankings.loss[0]
  const topProfitItem = liveStats.rankings.profit[0] ?? FALLBACK_LIVE_STATS.rankings.profit[0]
  const isKakaoBrowser = useMemo(isKakaoInAppBrowser, [])
  const isAndroidBrowser = useMemo(isAndroidDevice, [])
  const isIosBrowser = useMemo(isIosDevice, [])
  const externalBrowserUrl = useMemo(getExternalBrowserUrl, [])

  const resultLabelLines = useMemo(
    () => (result ? getResultLabelLines(result.item.label) : []),
    [result],
  )

  useEffect(() => {
    if (!isKakaoBrowser || !isAndroidBrowser || !externalBrowserUrl) {
      return
    }

    const redirectTimer = window.setTimeout(() => {
      window.location.href = externalBrowserUrl
    }, 250)

    return () => window.clearTimeout(redirectTimer)
  }, [externalBrowserUrl, isAndroidBrowser, isKakaoBrowser])

  useEffect(() => {
    const hasAdSenseScript = document.querySelector(
      'script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]',
    )

    if (!ADSENSE_CLIENT || document.getElementById(ADSENSE_SCRIPT_ID) || hasAdSenseScript) {
      return
    }

    const script = document.createElement('script')
    script.async = true
    script.crossOrigin = 'anonymous'
    script.id = ADSENSE_SCRIPT_ID
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`
    document.head.appendChild(script)
  }, [])

  useEffect(() => {
    let isMounted = true

    loadLiveStats()
      .then((nextLiveStats) => {
        if (isMounted) {
          setLiveStats(nextLiveStats)
        }
      })
      .catch((error) => {
        console.warn('Failed to load live stats', error)
      })

    return () => {
      isMounted = false
    }
  }, [])

  useEffect(() => {
    return () => {
      if (downloadState) {
        URL.revokeObjectURL(downloadState.url)
      }
    }
  }, [downloadState])

  function createAndSyncResult(parsedAmount: number) {
    if (downloadState) {
      URL.revokeObjectURL(downloadState.url)
      setDownloadState(null)
    }
    setAmountError('')
    const nextResult = createResult(parsedAmount)
    setResult(nextResult)
    void recordConversionEvent(nextResult)
      .then(loadLiveStats)
      .then(setLiveStats)
      .catch((error) => {
        console.warn('Failed to sync conversion event', error)
      })
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const parsedAmount = parseAmountInput(amount)
    const submitter = (event.nativeEvent as SubmitEvent).submitter
    const submitTone =
      submitter instanceof HTMLButtonElement && submitter.value === 'profit' ? 'profit' : 'loss'

    if (parsedAmount === null) {
      setAmountError('0원이 아닌 손실 또는 수익 금액을 입력해주세요.')
      return
    }

    const signedAmount = submitTone === 'loss' ? -Math.abs(parsedAmount) : Math.abs(parsedAmount)

    setAmountError('')
    setPendingAdAction({ amount: signedAmount, kind: 'submit' })
  }

  function performRerollResult() {
    if (!result) {
      return
    }
    if (downloadState) {
      URL.revokeObjectURL(downloadState.url)
      setDownloadState(null)
    }
    setResult(createResult(result.amount))
  }

  function rerollResult() {
    if (!result) {
      return
    }

    setPendingAdAction({ kind: 'reroll' })
  }

  function continueAfterAdBreak() {
    const nextAction = pendingAdAction

    setPendingAdAction(null)

    if (!nextAction) {
      return
    }

    if (nextAction.kind === 'submit') {
      createAndSyncResult(nextAction.amount)
      return
    }

    performRerollResult()
  }

  function resetResult() {
    if (downloadState) {
      URL.revokeObjectURL(downloadState.url)
      setDownloadState(null)
    }
    setResult(null)
  }

  async function handleDownloadResult() {
    if (!result) {
      return
    }

    const isLoss = result.amount < 0
    const itemQuantity = Math.abs(result.amount) / result.item.price
    const isNightBackground = result.background === resultBgNight
    const labelLines = getResultLabelLines(result.item.label)
    const tone = isLoss ? 'loss' : 'profit'
    const fileName = `howmanybro-${tone}-${result.item.label}.png`
    const savePicker = (window as Window & { showSaveFilePicker?: SaveFilePicker })
      .showSaveFilePicker
    let fileHandle: FileSystemFileHandle | null = null

    if (savePicker) {
      try {
        fileHandle = await savePicker({
          suggestedName: fileName,
          types: [
            {
              accept: { 'image/png': ['.png'] },
              description: 'PNG image',
            },
          ],
        })
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return
        }
      }
    }

    const [backgroundImage, itemImage] = await Promise.all([
      loadCanvasImage(result.background),
      loadCanvasImage(result.item.icon),
      document.fonts.ready,
    ]).then(([background, item]) => [background, item])

    const canvas = document.createElement('canvas')
    canvas.width = EXPORT_WIDTH
    canvas.height = EXPORT_HEIGHT
    const context = canvas.getContext('2d')

    if (!context) {
      return
    }

    context.imageSmoothingEnabled = false
    context.drawImage(backgroundImage, 0, 0, EXPORT_WIDTH, EXPORT_HEIGHT)

    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.lineJoin = 'round'
    context.font = '900 27px "NeoDunggeunmo", "Apple SD Gothic Neo", "Noto Sans KR", monospace'
    context.fillStyle = isNightBackground ? '#fff8df' : '#172732'
    context.shadowColor = isNightBackground ? 'rgba(0, 0, 0, 0.45)' : 'rgba(0, 0, 0, 0.1)'
    context.shadowBlur = 0
    context.shadowOffsetX = 2
    context.shadowOffsetY = 2
    context.fillText('주최몇', EXPORT_WIDTH / 2, 112)

    const titleFontSize = getTitleFontSize(labelLines)
    context.font = `900 ${titleFontSize}px "NeoDunggeunmo", "Apple SD Gothic Neo", "Noto Sans KR", monospace`
    context.fillStyle = isNightBackground ? '#fff8df' : '#0c0b0a'
    context.shadowColor = isNightBackground ? 'rgba(0, 0, 0, 0.45)' : 'rgba(0, 0, 0, 0.08)'
    context.shadowBlur = 0
    context.shadowOffsetX = 6
    context.shadowOffsetY = 6
    drawCenteredLines(context, labelLines, EXPORT_WIDTH / 2, 306, titleFontSize * 0.98)

    const countText = formatSignedQuantity(itemQuantity, isLoss)
    const unitText = result.item.unit
    const countFontSize = getExportCountFontSize(countText)
    context.shadowColor = isNightBackground ? 'rgba(0, 0, 0, 0.42)' : 'transparent'
    context.fillStyle = isLoss ? '#2463b6' : '#c73933'
    context.font = `900 ${countFontSize}px "NeoDunggeunmo", "Apple SD Gothic Neo", "Noto Sans KR", monospace`
    const countWidth = context.measureText(countText).width
    context.font =
      '900 70px "NeoDunggeunmo", "Apple SD Gothic Neo", "Noto Sans KR", monospace'
    const unitWidth = context.measureText(unitText).width
    const countStart = (EXPORT_WIDTH - countWidth - unitWidth - 12) / 2

    context.font = `900 ${countFontSize}px "NeoDunggeunmo", "Apple SD Gothic Neo", "Noto Sans KR", monospace`
    context.textAlign = 'left'
    context.fillText(countText, countStart, 430)
    context.font =
      '900 70px "NeoDunggeunmo", "Apple SD Gothic Neo", "Noto Sans KR", monospace'
    context.fillText(unitText, countStart + countWidth + 12, 448)

    context.shadowColor = 'transparent'
    context.filter = 'drop-shadow(14px 16px 0 rgba(23, 21, 19, 0.18))'
    drawContain(context, itemImage, 104, 492, 560, 370, 34)
    context.filter = 'none'
    drawCaptionBubble(context, result.caption, isNightBackground)

    const blob = await createPngBlob(canvas)

    if (!blob) {
      return
    }

    if (fileHandle) {
      await saveBlobToFile(blob, fileHandle)
      return
    }

    const url = URL.createObjectURL(blob)
    const dataUrl = canvas.toDataURL('image/png')

    if (downloadState) {
      URL.revokeObjectURL(downloadState.url)
    }

    setDownloadState({ blob, dataUrl, fileName, url })
  }

  async function handleSaveGeneratedImage() {
    if (!downloadState) {
      await handleDownloadResult()
      return
    }

    if (isKakaoBrowser) {
      return
    }

    const didShare = await shareImageFile(downloadState.blob, downloadState.fileName)

    if (didShare) {
      return
    }

    if (isIosBrowser) {
      window.open(downloadState.url, '_blank', 'noopener')
      return
    }

    downloadBlob(downloadState.blob, downloadState.fileName)
  }

  async function copyExternalBrowserUrl() {
    const copied = await copyTextToClipboard(getCurrentPageUrl())
    setCopyNotice(copied ? '주소를 복사했어요.' : '주소 복사가 막혔어요. 오른쪽 위 메뉴를 눌러 외부 브라우저로 열어주세요.')
  }

  const adBreakOverlay = pendingAdAction ? (
    <AdBreakOverlay onCancel={() => setPendingAdAction(null)} onContinue={continueAfterAdBreak} />
  ) : null

  if (isKakaoBrowser && !allowKakaoBrowser) {
    return (
      <main className="app-screen entry-screen kakao-browser-screen">
        <section className="kakao-browser-gate" aria-label="외부 브라우저 안내">
          <img src={pixelAnt} alt="" />
          <h1>카톡에서는 이미지 저장이 막힐 수 있어요</h1>
          <p>
            결과 이미지를 저장하려면 Chrome이나 Safari에서 열어주세요. Android는 아래 버튼으로
            바로 열 수 있고, iPhone은 카톡 오른쪽 위 메뉴에서 외부 브라우저로 열어야 합니다.
          </p>
          <div className="kakao-browser-actions">
            {isAndroidBrowser ? (
              <a className="download-fallback-link download-direct-link" href={externalBrowserUrl}>
                Chrome으로 열기
              </a>
            ) : (
              <button type="button" onClick={copyExternalBrowserUrl}>
                링크 복사
              </button>
            )}
            <button type="button" onClick={() => setAllowKakaoBrowser(true)}>
              카톡에서 그냥 보기
            </button>
          </div>
          {copyNotice ? <em>{copyNotice}</em> : null}
        </section>
      </main>
    )
  }

  if (isResult && result) {
    const isLoss = result.amount < 0
    const absoluteAmount = Math.abs(result.amount)
    const itemQuantity = absoluteAmount / result.item.price
    const resultTone = isLoss ? 'loss' : 'profit'
    const isNightBackground = result.background === resultBgNight
    const countText = formatSignedQuantity(itemQuantity, isLoss)
    const countDensityClass = getCountDensityClass(countText)

    return (
      <main className={`app-screen result-screen result-screen-${resultTone}`} aria-live="polite">
        <section
          className={`pixel-result-card ${isNightBackground ? 'pixel-result-card-night' : ''}`}
          aria-label="금액 환산 결과"
        >
          <img className="result-card-bg" src={result.background} alt="" />
          <div className="result-card-content">
            <div className="result-card-logo" aria-hidden="true">주최몇</div>
            <h1 className={resultLabelLines.length > 1 ? 'result-title-multiline' : undefined}>
              {resultLabelLines.map((line, index) => (
                <span key={`${line}-${index}`}>{line}</span>
              ))}
            </h1>
            <p className={`result-count ${countDensityClass}`}>
              <strong>{countText}</strong>
              <span>{result.item.unit}</span>
            </p>
            <div className="result-art" aria-hidden="true">
              <img className="result-item-image" src={result.item.icon} alt="" />
            </div>
            <p className="result-caption-bubble">{result.caption}</p>
          </div>
        </section>

        <AdSenseUnit className="result-ad" label="결과 화면 광고" slot={ADSENSE_RESULT_SLOT} />

        <div className="result-actions">
          <button type="button" onClick={handleDownloadResult}>
            {downloadState ? '이미지 다시 만들기' : '이미지 다운로드'}
          </button>
          {downloadState && !isKakaoBrowser ? (
            <button type="button" className="download-primary-action" onClick={handleSaveGeneratedImage}>
              {isIosBrowser ? '공유로 사진 저장' : '공유/저장하기'}
            </button>
          ) : null}
          <button type="button" onClick={rerollResult}>
            이미지 다시 뽑기
          </button>
          <button type="button" onClick={resetResult}>
            다른 금액 입력
          </button>
          {isKakaoBrowser ? (
            <div className="in-app-browser-panel" role="status">
              <strong>카톡 브라우저에서는 저장이 막힐 수 있어요.</strong>
              <span>
                오른쪽 위 메뉴에서 외부 브라우저로 열거나 Chrome/Safari에서 다시 생성하면 저장이
                됩니다.
              </span>
              {isAndroidBrowser ? (
                <a className="download-fallback-link download-direct-link" href={externalBrowserUrl}>
                  Chrome으로 열기
                </a>
              ) : (
                <button type="button" className="download-primary-action" onClick={copyExternalBrowserUrl}>
                  링크 복사
                </button>
              )}
              {copyNotice ? <em>{copyNotice}</em> : null}
            </div>
          ) : null}
          {downloadState ? (
            <div className="download-fallback-panel">
              <img src={downloadState.url} alt="저장할 결과 이미지 미리보기" />
              {isIosBrowser ? (
                <p className="ios-save-hint">사진 앱에 저장하려면 공유로 사진 저장을 누르거나 이미지를 길게 눌러 저장하세요.</p>
              ) : (
                <a
                  className="download-fallback-link download-direct-link"
                  download={downloadState.fileName}
                  href={downloadState.dataUrl}
                >
                  다운로드 저장
                </a>
              )}
              <a
                className="download-fallback-link"
                href={isIosBrowser ? downloadState.url : downloadState.dataUrl}
                target={isIosBrowser ? '_blank' : undefined}
                rel={isIosBrowser ? 'noopener' : undefined}
              >
                이미지 화면으로 열기
              </a>
            </div>
          ) : null}
        </div>
        {adBreakOverlay}
      </main>
    )
  }

  return (
    <main className="app-screen entry-screen">
      <nav className="top-nav" aria-label="상단 메뉴">
        <a className="brand" href="/" onClick={(event) => event.preventDefault()}>
          <img src={pixelAnt} alt="" />
          <span>주최몇</span>
        </a>
      </nav>

      <div className="main-grid">
        <section className="main-column" aria-label="금액 입력">
          <section className="hero-layout">
            <div className="hero-copy">
              <div className="spark spark-left">✦</div>
              <h1 aria-label="주최몇?">
                <span>주</span>최몇?
              </h1>
              <p>
                <strong className="blue">손실</strong>도, <strong className="red">수익</strong>도 OK!
                <br />
                돈을 <strong className="red">재미있는 물건</strong>으로 바꿔드려요!
              </p>
              <div className="hero-ant-parade" aria-hidden="true">
                <img src={antMoodSheet} alt="" />
              </div>
            </div>
          </section>

          <form className="convert-card" onSubmit={handleSubmit}>
            <label htmlFor="amount">
              금액만 입력하고 변환할 종류를 눌러주세요
            </label>
            <div className="amount-row">
              <input
                id="amount"
                inputMode="numeric"
                type="text"
                value={amount}
                onChange={(event) => {
                  const nextValue = event.target.value.trim()

                  setAmount(formatAmountInput(nextValue).replace(/^[+-]/, ''))
                  if (amountError) {
                    setAmountError('')
                  }
                }}
                aria-describedby={amountError ? 'amountHelp amountError' : 'amountHelp'}
                aria-invalid={amountError ? 'true' : undefined}
                placeholder="금액을 입력하세요"
              />
              <span>원</span>
            </div>
            <p id="amountHelp">예) 3,200,000 입력 후 손실로 변환 또는 수익으로 변환</p>
            {amountError ? (
              <p id="amountError" className="amount-error" role="alert">
                {amountError}
              </p>
            ) : null}
            <div className="guide-strip">💡 마이너스 입력 없이 아래 버튼으로 바로 변환해요!</div>
            <div className="amount-submit-actions">
              <button type="submit" name="tone" value="loss">
                손실로 변환
              </button>
              <button type="submit" name="tone" value="profit">
                수익으로 변환
              </button>
            </div>
            <p className="privacy-note">🔒 개인 정보 없이 통계만 반영돼요!</p>
          </form>

          <AdSenseUnit className="main-ad" label="메인 화면 광고" slot={ADSENSE_MAIN_SLOT} />

        </section>

        <aside className="side-column" aria-label="오늘의 현황">
          <section className="live-card">
            <div className="live-pill">🔥 실시간 현황</div>
            <div className="live-summary-grid">
              <div className="live-summary live-summary-loss">
                <span>오늘 손실</span>
                <strong>{formatQuantity(liveStats.summary.loss)}명</strong>
                <p>{withObjectParticle(topLossItem.label)} 날렸습니다...</p>
              </div>
              <div className="live-summary live-summary-profit">
                <span>오늘 수익</span>
                <strong>{formatQuantity(liveStats.summary.profit)}명</strong>
                <p>{withObjectParticle(topProfitItem.label)} 벌었습니다!</p>
              </div>
            </div>
            <div className="divider"></div>
            <h2>오늘 많이 나온 아이템</h2>
            <div className="live-rank-grid">
              <section aria-label="손실 아이템 순위">
                <h3>손실 TOP</h3>
                <ol>
                  {liveStats.rankings.loss.map((item) => (
                    <li key={item.rank}>
                      <span>{item.rank}</span>
                      <img src={item.icon} alt="" />
                      <b>{item.label}</b>
                      <strong>{item.value}</strong>
                    </li>
                  ))}
                </ol>
              </section>
              <section aria-label="수익 아이템 순위">
                <h3>수익 TOP</h3>
                <ol>
                  {liveStats.rankings.profit.map((item) => (
                    <li key={item.rank}>
                      <span>{item.rank}</span>
                      <img src={item.icon} alt="" />
                      <b>{item.label}</b>
                      <strong>{item.value}</strong>
                    </li>
                  ))}
                </ol>
              </section>
            </div>
            <div className="live-foot">실시간으로 업데이트 중! ⚡</div>
          </section>

          <section className="rare-card">
            <h2>👑 오늘의 희귀 아이템</h2>
            <img src={celineBagIcon} alt="" />
            <strong>셀린느 가방</strong>
            <p>등장 확률 <b>0.3%</b></p>
          </section>
        </aside>
      </div>

      <section className="item-dock" aria-label="변환 가능한 물건 예시">
        <h2>✦ 어떤 아이템으로 바뀔까? (예시) ✦</h2>
        <div className="dock-list">
          {ITEM_DOCK.map((item) => (
            <div className="item-tile" key={item.label}>
              <img src={item.icon} alt="" />
              <strong>{item.label}</strong>
            </div>
          ))}
        </div>
        <p>🎁 이 외에도 더 많은 아이템이 준비되어 있어요!</p>
      </section>

      <footer className="main-footer">
        <div>
          <h2>오늘의 명언 ✦</h2>
          <p>See Far<br />멀리 보자</p>
        </div>
        <div className="share-zone">
          <strong>공유하고 같이 웃어요! 😆</strong>
          <div>
            <button type="button">💬 카카오톡</button>
            <button type="button">𝕏 트위터</button>
            <button type="button">🔗 링크복사</button>
          </div>
          <p className="contact-mail">
            협업 & 문의 <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
        </div>
      </footer>
      {adBreakOverlay}
    </main>
  )
}

export default App
