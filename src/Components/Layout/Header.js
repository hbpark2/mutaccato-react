import React from "react";
import styled from "styled-components";

const Container = styled.header``;

const Header = () => {
	return (
		<Container>
			<h1 className="logo">
				<span className="hidden">MUTACCATO</span>
				<a href="index.html">
					<img src="img/logo.jpg" alt="mutaccatologo" />
				</a>
			</h1>
			<nav>
				<h2 className="hidden">GNB section</h2>
				<button href="#" className="menu_btn">
					<i className="fas fa-bars"></i>
				</button>
				<ul id="gnb">
					<li className="depth_1">
						<a href="sub_1.html">About M</a>
					</li>

					<li className="depth_1 depth_detail">
						<a href="sub_2_1.html" className="go_detail">
							Page Detail
						</a>

						<ul className="depth_detail_box">
							<li className="tit">Page Detail</li>

							<li className="menu_detail">
								<ul className="depth_2_box">
									<li className="depth_2">
										<a href="sub_2_1.html">Furniture</a>
									</li>
									<li className="depth_2">
										<a href="sub_2_2.html">Food</a>
									</li>
									<li className="depth_2">
										<a href="sub_2_3.html">Pop-up(Banner)</a>
									</li>
								</ul>
							</li>

							<li className="menu_img">
								{/* <img src="img/banner/menu_detail.jpg" alt=""> */}
							</li>
						</ul>
					</li>

					<li className="depth_1 depth_lookbook">
						<a href="sub_3_1.html" className="go_detail">
							Lookbook
						</a>

						<ul className="depth_detail_box">
							<li className="tit">Look Book</li>

							<li className="menu_detail">
								<ul className="depth_2_box">
									<li className="depth_2">
										<a href="sub_3_1.html">2018.s/s</a>
									</li>
									<li className="depth_2">
										<a href="sub_3_2.html">2018.f/w</a>
									</li>
									<li className="depth_2">
										<a href="sub_3_3.html">2019.s/s</a>
									</li>
								</ul>
							</li>

							<li className="menu_img">
								{/* <img src="img/banner/menu_lookbook.jpg" alt=""> */}
							</li>
						</ul>
					</li>

					<li className="depth_1">
						<a href="sub_4.html">Album Cover</a>
					</li>

					<li className="depth_1 depth_eventdesign">
						<a href="sub_5.html">Event Design</a>
						<ul className="depth_detail_box">
							<li className="tit">Event Design</li>
							<li className="menu_detail">
								<ul className="depth_2_box">
									<li className="depth_2">
										<a href="#">국립중앙도서관</a>
									</li>
									<li className="depth_2">
										<a href="#">정보진흥원</a>
									</li>
									<li className="depth_2">
										<a href="#">충현복지관</a>
									</li>
								</ul>
							</li>
							<li className="menu_img">
								{/* <img src="img/banner/event_menu.jpg" alt=""> */}
							</li>
						</ul>
					</li>

					<li className="depth_1">
						<a href="sub_6.html">Package Design</a>
					</li>
					<li className="depth_1">
						<a href="sub_7.html">Persnal Works</a>
					</li>
				</ul>
			</nav>
			<a
				href="https://www.instagram.com/mutaccato/"
				target="_black"
				className="go_insta"
			>
				{/* <img src="img/insta.png"alt=""> */}
			</a>
		</Container>
	);
};

export default Header;
