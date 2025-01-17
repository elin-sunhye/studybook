"use client";

import style from "./wiko.module.scss";
import "./swiper.scss";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import TopBox from "@/component/topBox/TopBox";
import Btn from "@/component/common/btn/Btn";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

// react-swiper
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import "swiper/css"; //basic
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// dummyData
import menuData from "@/dummyData/menu.json";

export default function Wiko() {
  //
  const router = useRouter();

  // swiper
  const carreerRef = useRef(null);
  // setting
  const swiperParams = {
    modules: [Navigation],
    spaceBetween: 0, // 슬라이드 사이 여백
    speed: 1000,
    loop: true,
    loopAdditionalSlides: 1,
    slidesPerView: 1, //  한 슬라이드에 보여줄 개수
    allowTouchMove: false, // false시에 스와이핑이 되지 않으며 버튼으로만 슬라이드 조작이 가능

    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
  };

  return (
    <>
      <section className={`section_padding ${style.sub_top}`}>
        <TopBox
          explain={""}
          // explain={"react 언어를 사용하여 개발한 브랜드 사이트"}
          desc={"주물 • 주조 및 산업 부자재 전문 기업"}
        />

        <div className={`wrap ${style.sub_top_inner}`}>
          <div className={`${style.expl_box}`}>
            <div className={`flex_start ${style.info}`}>
              <p>
                <span>PERIOD</span>
                2024.05 ~ 2024.08
              </p>
              <p>
                <span>SKILLS</span>
                React.js, Next.js, JavaScript, TypeScript, SCSS, eMail.js
              </p>
            </div>
            <p className={style.expl}>
              React 기반의 Next.js 프레임워크를 활용하여 개발한 웹 사이트입니다.{" "}
              <br />
              NextAuth 라이브러리를 통해 사용자들이 간편하게 로그인 및
              로그아웃할 수 있는 기능을 제공하며, email.js 라이브러리를 활용하여
              메일 전송 기능을 구현하였습니다. <br />
              사이트의 전반적인 디자인은 Cross Target 홈페이지를 참고하여
              설계하였으며, 이 회사의 요구사항과 기획에 맞추어 각 부서의
              서비스와 제품을 효과적으로 소개하는 구조로 개발하였습니다. <br />
              사용자 경험을 최적화하기 위해 반응형 디자인을 채택하여 모바일 및
              데스크탑 환경에서 모두 직관적이고 효율적인 웹 사이트를
              제작하였습니다.
            </p>
          </div>

          <Swiper
            {...swiperParams}
            ref={carreerRef}
            className={style.sub_swiper}
          >
            <SwiperSlide>1</SwiperSlide>
            <SwiperSlide>2</SwiperSlide>
            <SwiperSlide>3</SwiperSlide>
            <SwiperSlide>4</SwiperSlide>

            <Btn
              title={`이전 슬라이드 버튼`}
              id={`swiperButtonPrev`}
              className={`swiper-button-prev`}
              border={"br_round"}
            >
              <HiOutlineChevronLeft
                role={`img`}
                aria-label={`왼쪽 화살표 아이콘`}
              />
            </Btn>
            <Btn
              title={`다음 슬라이드 버튼`}
              id={`swiperButtonNext`}
              className={`swiper-button-next`}
              border={"br_round"}
            >
              <HiOutlineChevronRight
                role={`img`}
                aria-label={`오른쪽 화살표 아이콘`}
              />
            </Btn>
          </Swiper>
        </div>
      </section>

      <section className={`flex_center ${style.detail_box}`}>
        <div className={`flex_between ${style.row}`}>
          <div></div>
          <div></div>
        </div>
        <div className={`flex_between ${style.row}`}>
          <div></div>
          <div></div>
        </div>
        <div className={`flex_between ${style.row}`}>
          <div></div>
          <div></div>
        </div>
        <div className={`flex_between ${style.row}`}>
          <div></div>
          <div></div>
        </div>
        <div className={`flex_between ${style.row}`}>
          <div></div>
          <div></div>
        </div>
      </section>
    </>
  );
}
