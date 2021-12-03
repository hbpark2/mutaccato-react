import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Banner1 from "assets/img/banner/1.jpg";
import Banner2 from "assets/img/banner/2.jpg";
import Banner3 from "assets/img/banner/3.jpg";
import Banner4 from "assets/img/banner/4.jpg";
import ShortCut1 from "assets/img/m_1.jpg";
import ShortCut2 from "assets/img/m_2.jpg";
import ShortCut3 from "assets/img/m_3.jpg";
import ProfileImg from "assets/img/profile.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
SwiperCore.use([Navigation, Pagination]);
import "swiper/swiper-bundle.css";
import { FadeInTopToBottom, TopToBottom } from "../../Styles";
import { useScroll } from "../../Hooks/Scroll";

const Container = styled.main`
	& .swiper-container {
		width: 100%;
		height: 100%;
	}
	& .swiper-wrapper {
		padding-inline-start: 0;
	}

	& .swiper-slide {
		display: flex;
		align-items: center;
	}
	& .swiper-button-prev:after,
	.swiper-button-next:after {
		color: #333;
	}

	& .swiper-pagination-bullet {
		width: 10px;
		height: 10px;
		background-color: #fff;
	}

	& .swiper-pagination-bullet-active {
		background-color: #4a99c3;
	}
`;
const SwipeItem = styled.div`
	width: 100%;
	height: 800px;
	background: url(${(props) => props.background}) no-repeat;
	background-size: cover;
	background-position: center;

	span {
		display: block;
	}
`;

const SwiperInener = styled.div`
	position: relative;
	top: 200px;
	width: 60%;
	margin: 0 auto;
	text-align: center;
	padding: 50px 0;
	color: #fff;
	background-color: rgba(0, 0, 0, 0.5);

	h3 {
		font-size: 56px;
		font-family: "Noto Sans KR", sans-serif;
		text-align: center;
		padding: 20px 0;
		line-height: 1.5em;
	}

	span {
		display: block;
		font-size: 26px;
		text-align: center;
		padding: 20px 0;
	}

	a {
		display: block;
		width: 200px;
		margin: 10px auto;
		border: 1px solid #fff;
		border-radius: 50px;
		font-size: 22px;
		font-weight: 600;
		text-align: center;
		padding: 15px 0;
		color: #fff;
		transition: all 0.5s;
	}

	a:hover {
		color: ${(props) => props.theme.keyBlue};
		background-color: #fff;
	}
`;

const IntroTextWrap = styled.div`
	width: 100%;
	text-align: center;
	padding: 50px 0;
	margin: 50px 0 25px;
	line-height: 2em;
	font-size: 28px;
	font-weight: 500;
	span {
		display: block;
		margin: 0 auto;
		&:first-child {
			font-size: 32px;
		}
	}
	.middle_text {
		margin: 50px auto;
	}
`;

const FontBox = styled.span`
	display: block;
	width: 200px;
	margin: 0 auto;
	padding: 10px;
	border: 1px solid ${(props) => props.theme.keyBlue};
`;

const ShortCutWrap = styled.ul`
	display: flex;
	justify-content: space-around;
	width: 80%;
	margin: 0 auto;

	a {
		display: block;
		background-color: #fff;
		padding-bottom: 40px;
	}

	img {
		display: block;
		width: 80%;
		margin: 0 auto;
		border-radius: 15px;
	}
	span {
		display: block;
		margin: 30px auto;
		text-align: center;
	}
	@media screen and (max-width: 1024px) {
		display: block;
		width: 100%;
	}
`;

const ShortcutList = styled.li`
	position: relative;
	transition: all 0.5s;

	transform: ${({ scrl }) => `translateY(${scrl / 50}px)`};
`;

const AboutSection = styled.div`
	margin-bottom: 100px;
`;

const AboustSectionUl = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80%;
	margin: 0 auto;
	padding: 50px 0 100px;
	li {
		display: flex;
		align-items: center;
		width: 48%;
		height: 500px;
		margin: 0 auto;
		img {
			width: 100%;
		}
	}

	@media screen and (max-width: 1024px) {
		display: block;
		width: 100%;
		li {
			width: 100%;
			height: auto;
		}
	}
`;

const AboutRightList = styled.li`
	background-color: #fafafa;
	span {
		display: block;
	}

	div {
		width: 90%;
		height: 90%;
		margin: auto;
		margin-top: 3.5%;
		padding: 10px;
		.name-span {
			font-size: 22px;
			font-weight: 600;
			padding: 20px 0;
		}
		dt {
			font-size: 18px;
			font-weight: 600;
			padding: 20px 0;
		}
		dd span {
			font-size: 18px;
			margin: 5px 0;
		}
	}
`;

const Home = () => {
	const [shortcutMove, setShortcutMove] = useState(false);
	const { scrollY } = useScroll();

	const mainSlideArr = [
		{
			title: "김무경의 포트폴리오",
			sub_title: "시각적인 요소를 한눈에 \n기획 디자인",
			image: Banner1,
			url: "",
		},
		{
			title: "제품의 가치를 높이다",
			sub_title: "클라이언트와의 밀도있는 소통 \n상세페이지",
			image: Banner2,
			url: "/detail",
		},
		{
			title: "브랜드를 디자인하다",
			sub_title: "시선의 흐름과 포인트를 한번에 \n 룩북",
			image: Banner3,
			url: "/lookbook",
		},
		{
			title: "다양한 클라이언트와의 협업",
			sub_title: "클라이언트의 상상을 현실로 \n앨범 커버",
			image: Banner4,
			url: "/albumcover",
		},
	];

	mainSlideArr.map((item) => {
		return item.sub_title.replace(/\n/gi, "\\r\\n");
	});

	return (
		<Container>
			<h2 className="hidden">CONTENT SECTION</h2>
			<Swiper spaceBetween={0} slidesPerView={1} pagination={{ clickable: true }}>
				{mainSlideArr?.map((item, index) => {
					return (
						<SwiperSlide key={index}>
							<SwipeItem background={item.image}>
								<SwiperInener>
									<h3>{item.title}</h3>
									{item.sub_title.split("\n").map((line, index) => {
										let makeSpanKey = `line${index}`;
										return (
											<span key={makeSpanKey}>
												{line}
												<br />
											</span>
										);
									})}
									<Link to={item.url}>READ MORE</Link>
								</SwiperInener>
							</SwipeItem>
						</SwiperSlide>
					);
				})}
			</Swiper>

			<IntroTextWrap>
				<FontBox>WHO AM I</FontBox>
				<span className="middle_text">I'll consider everything you say and do my best</span>
				<span>클라이언트가 원하는 디자인을 위해 귀 기울이겠습니다.</span>
			</IntroTextWrap>
			<ShortCutWrap>
				<ShortcutList shortcutMove={shortcutMove} scrl={scrollY}>
					<Link to="/page_detail">
						<img src={ShortCut1} alt="shortcut img" />
						<span>Page Detail</span>
					</Link>
				</ShortcutList>
				<ShortcutList shortcutMove={shortcutMove} scrl={scrollY}>
					<Link to="/">
						<img src={ShortCut2} alt="shortcut img" />
						<span>Look Book</span>
					</Link>
				</ShortcutList>
				<ShortcutList shortcutMove={shortcutMove} scrl={scrollY}>
					<Link to="/">
						<img src={ShortCut3} alt="shortcut img" />
						<span>Album Cover</span>
					</Link>
				</ShortcutList>
			</ShortCutWrap>

			<AboutSection>
				<AboustSectionUl>
					<li>
						<img src={ProfileImg} alt="profileImg" />
					</li>
					<AboutRightList>
						<div>
							<span className="name-span">김무경</span>
							<dl>
								<dt>CERTIFICATE</dt>
								<dd>
									<span>2017.10.13 GTQ인디자인1급 한국생산성본부</span>
									<span>2017.09.29 전자출판기능사 한국산업인력공단</span>
									<span>2017.07.14 GTQ 1급 한국생산성본부</span>
									<span>2017.06.23 컴퓨터그래픽스운용기능사 한국산업인력공단</span>
									<span>2017.05.12 GTQ일러스트1급 한국생산성본부</span>
								</dd>
							</dl>
							<dl>
								<dt>EDUCATION</dt>
								<dd>
									<span>2017 [NCS]창의적광고디자인 취업자 과정</span>
									<span>2017 공주대학교 게임디자인학과 졸업</span>
								</dd>
							</dl>
						</div>
					</AboutRightList>
				</AboustSectionUl>
			</AboutSection>
		</Container>
	);
};

export default Home;
