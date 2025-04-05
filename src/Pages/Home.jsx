
import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Section3 from "../assets/chirag-paswan.png";
import PravinKumar from "../assets/praveen.jpg";
import MembershipImg from "../assets/membership.png";
import Amresh from '../assets/amresh.jpg'
import Vision from "../assets/Layer-21.png";
import Mission from "../assets/Layer-22.png";
import Kamal from '../assets/kamal.png'
import Kamal2 from '../assets/member/kamfool.jpg'
import Jeff from '../assets/Jheff.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  Layer23,
  Layer24,
  Layer25,
  Layer26,
  Layer27,
  Layer28,
  Layer29,
  Layer30,
  Layer31,
  Layer33,
  Layer34,
  ObjectiveGoals,
} from "../assets";
import OurPartner from "../Components/OurPartner";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import GlobalPresenceSlider from "../Components/GlobalPresenceSlider";
import Roadmap from "../Components/Roadmap";
import MeetOurVisionaryLeader from "../Components/MeetOurVisionaryLeader1";
import MeetOurLeaderHome from "../Components/MeetOurLeaderHome";



const Home = (props) => {

  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false)
  const [modalShow3, setModalShow3] = React.useState(false)
  const [modalShow4, setModalShow4] = React.useState(false)

  const handleClose = () => setModalShow(false);
  const handleClose2 = () => setModalShow2(false)
  const handleClose3 = () => setModalShow3(false)
  const handleClose4 = () => setModalShow4(false)

  return (
    <>
      {/* Hero Banner */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        speed={1200}
        loop={true}
        autoplay={{
          delay: 200000, // Set autoplay delay to 4 seconds
          disableOnInteraction: false, // Keep autoplay running after interaction
        }}
        pagination={{
          clickable: true, // Enables clickable pagination dots
          dynamicBullets: true, // Makes pagination bullets interactive
        }}
        breakpoints={{
          0: { slidesPerView: 1 },  // Mobile: 1 card per slide
          768: { slidesPerView: 1 } // Desktop/Tablet: 2 cards per slide
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper mainSwiper"
        style={{
          "--swiper-navigation-color": "#fff",
          "marginTop": "-170px"
        }}
      >

        <SwiperSlide className="h-100 home-slider"
        >
          <div className="container text-white tomker">
            <Row>
              <Col lg={4}>
                {/* <Link to={'/membership'} className="member-button d-sm-none d-block">

<Button
  style={{
    borderColor: "white",
    fontSize: "18px",
    borderRadius: "50px",
    marginTop: "-56px",
  }}
  className="rounded-full bg-white text-black outline-none border-none px-4 py-2 text-small"
>
  Become a Member <i class="fa fa-arrow-right" aria-hidden="true"></i>
</Button>
</Link> */}
                <div className="first-head-box">

                  {/* DESKTOP MOBILE ONLY  */}
                  <h6 style={{ fontSize: "20px" }} className="d-none">
                    <span style={{ paddingLeft: "6px" }}>Welcome to</span> <br />
                    <span className="sub-heading" style={{ paddingLeft: "6px" }}>
                      Bihar International Trade Organization
                    </span>
                    <br />
                    <span className="main-banner-heading p-0 m-0" >BITO</span>
                  </h6>
                  {/* FOR MOBILE ONLY  */}
                  <h6 style={{ fontSize: "20px" }} className="d-none">
                    <span style={{ paddingLeft: "6px" }}>Welcome to Bihar International</span> <br />
                    <span className="sub-heading" style={{ paddingLeft: "6px" }}>
                      Trade Organization
                    </span>
                    <br />
                    <span className="main-banner-heading p-0 m-0" >BITO</span>
                  </h6>
                </div>

                <p className="bottom-heading d-none" style={{ paddingLeft: "6px" }}>
                  Empowering Bihar - Inspiring World
                </p>

              </Col>

              <Col lg={4}></Col>

              <Col className="right-heading right-col d-none" lg={4}>
                <div className="div">
                  <h6>
                    Your Gateway to <span>Bihar&apos;s</span>
                  </h6>
                  <h6>
                    <span>Rich Heritage</span> and Future
                  </h6>
                  <h6>Opportunities</h6>
                  <hr style={{ color: "white" }} />
                  <p>
                    Join us in celebrating Bihar&apos;s legacy while fostering
                    innovation and global connections for a brighter tomorrow.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </SwiperSlide>
        <Link to={'/membership'} className="bottom-link"></Link>

      </Swiper>


      {/* Second Section */}
      <Container className="mb-0 mb-sm-5">
        <Row className="section-2-row d-flex align-items-center">
          {/* Left div for content */}
          <Col className="left-side-div together" lg={6}>
            <h2 className="section-2-head">Transform Bihar <br></br>
              Together, We Can</h2>
            <span>
              {"Fostering "}
              <strong style={{ color: "black" }}>
                Entrepreneurship, Innovation, and Global Connections
              </strong>
            </span>
            <div className="section-para">
              <p>
                The Bihar International Trade Organization (BITO) is a key force
                for progress and unity for people, both in India and worldwide.
                Through a series of well-structured initiatives, BITO is
                dedicated to building a vibrant, cohesive, and prosperous
                community that transcends borders and generations.{" "}
              </p>

              <p>
                By focusing on economic growth, cultural preservation, and
                global engagement, BITO ensures that Bihar’s contributions are
                not only recognized but celebrated worldwide.
              </p>
            </div>
            {/* 
            <Link to={'https://bitoworld.in/old-site/about.php'}>
              <div>
                <Button className="section-2-btn px-4 py-2 mt-2">Learn More <i class='fa fa-arrow-right'></i></Button>
              </div>
            </Link> */}

          </Col>
          {/* Right div for image */}
          <Col className="right-side-div mx-auto" lg={6}>
            <Image style={{ width: '100%' }} src={Kamal} alt="img" className="d-sm-block d-none" />
            <Image style={{ width: '100%' }} src={Kamal2} alt="img" className="d-sm-none d-block mbon" />
          </Col>
        </Row>
      </Container>

      {/* Third section */}
      {/* Bito advisors section below */}
      <MeetOurLeaderHome />


      {/* Original section */}
      {/* <MeetOurVisionaryLeader/> */}

      {/* Fifth Section */}



      {/* Sixth section Mission & Vision Section */}

      <div style={{ backgroundColor: "#f5e0cb" }}>
        <Container>
          <Row className="mission-vision-row py-5">
            <Col className="mission-vision-row-col-1" lg={6}>
              <div className="vision">
                <div
                  style={{ gap: "20px" }}
                  className="d-flex align-items-center"
                >
                  <img src={Vision} alt="" />
                  <span>Vision</span>
                </div>
                <p className="">
                  An Atmanirbhar Bihar—A Glorious Bihar Asmita—A Prosperous, Proud,
                  And Cohesive Bihari Community Leading Globally.

                </p>

                {/* <div>
                  <Button className="vision-btn px-4 py-2">Read More</Button>
                </div> */}

              </div>
            </Col>

            <Col className="mx-auto mission-vision-row-col-2" lg={6}>
              <div className="mission">
                <div
                  style={{ gap: "20px" }}
                  className="d-flex align-items-center"
                >
                  <img src={Mission} alt="" />
                  <span>Mission</span>
                </div>
                <p className="">
                  To spearhead a revolution in sustainable development, drive transformative
                  change across bihar and beyond, and create a lasting legacy of pride,
                  progress, and enduring strength for future generations.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Seventh Objectives section */}

      <Container className="py-5 d-flex objective-container">
        <div className="objective-container-div read-center">
          <h2
            style={{
              position: "relative",
            }}
            className="section-3-heading">
            Objectives
          </h2>
          <p className="pt-3">
            BITO operates with a clear set of objectives that guide its
            activities and initiatives. These objectives are designed to address
            the diverse needs of the Bihari community, from economic empowerment
            to cultural preservation
          </p>
          <div className="d-flex flex-wrap">
            <div className="d-flex flex-wrap flex-grow-1 my-4 mx-1 domtrack">
              <div className="w-50 px-3 domtrack1">
                <Image src={Layer23} alt="" />
                <p className="pt-3" style={{
                  fontSize: "14px",
                }}>
                  <strong>Economic <br /> Empowerment</strong>
                </p>
              </div>
              <div className="w-50 px-3 pb-4 border-start domtrack">
                <Image src={Layer24} alt="" />
                <p className="pt-3" style={{
                  fontSize: "14px",
                }}>
                  <strong>Cultural Preservation <br />& Promotion</strong>
                </p>
              </div>
            </div>
            <div className="d-flex px-3 flex-wrap pt-4 flex-grow-1 collaboration">
              <div className="w-50">
                <Image src={Layer25} alt="" />
                <p className="pt-3" style={{
                  fontSize: "14px",
                }}>
                  <strong>Global <br />Collaboration</strong>
                </p>
              </div>
              <div className="w-50 px-3 border-start">
                <Image src={Layer26} alt="" />
                <p className="pt-3" style={{
                  fontSize: "14px",
                }}>
                  <strong>Inclusitivity & <br /> Sustainability</strong>
                </p>
              </div>
            </div>

          </div>
          <a href="https://bitoworld.in/old-site/about.php">
            <button className=" my-4 section-3-btn px-4 py-2 btn btn-primary">
              Read More <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
          </a>
        </div>
        <div className="w-50 m-auto w-sm-100">
          <Image src={ObjectiveGoals} alt="" className="objective-img" />
        </div>
      </Container>



      <div className="road-map">
        <Roadmap />
      </div>




      {/* Eight BITO Bodies section */}

      <div style={{ backgroundColor: "#fffbf5" }} className="mt-sm-0">
        <Container
          className="py-5 text-center">
          <h1 className="text-center section-3-heading">BITO Bodies</h1>
          <p>
            BITO Arms are specialized divisions within the Bihar International
            Trade Organization that focus on different aspects of its mission
          </p>
          <div className="d-flex justify-content-center gap-5 gap-sm-4 my-5 flex-wrap bodies">
            <div className="d-flex flex-column align-items-center px-sm-5 startup">
              <Image
                className="section-2-img p-3"
                src={Layer27}
                alt="section-2 img"
                width={100}
                height={100}
              />
              <strong>
                BITO Startup & <br />
                Incubation Centre <br />
                (BSIC)
              </strong>
            </div>
            <div className="d-flex flex-column align-items-center px-sm-5 section-2-container asmita">
              <Image
                className="section-2-img p-3"
                src={Layer28}
                alt="section-2 img"
                width={100}
                height={100}
              />
              <strong>
                BITO Bihar Asmita
                <br />
                Foundation
              </strong>
            </div>
            <div className="d-flex flex-column align-items-center px-sm-5 industries">
              <Image
                className="section-2-img p-3"
                src={Layer29}
                alt="section-2 img"
                width={100}
                height={100}
              />
              <strong>
                BITO Industries
                Association (BIA)
              </strong>
            </div>
          </div>
          <a href="https://bitoworld.in/old-site/about.php">
            <button className="section-3-btn px-4 py-2 btn btn-primary">
              Read More <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
          </a>
        </Container>
      </div>

      {/* ninth section */}

      <Container className="text-center my-5 Initiatives">
        <h1 className="text-center section-3-heading">
          Key Programs and Initiatives
        </h1>
        <p>
          BITO has launched several impactful programs and initiatives that are
          designed to address the needs of the Bihari community across various
          domains
        </p>
        <div className="d-flex justify-content-center gap-5 my-5 custom-wrap desktoponly">
          <div className="d-flex flex-column align-items-center px-sm-5">
            <Image
              className="section-2-img p-3"
              src={Layer33}
              alt="section-2 img"
              width={80}
              height={80}
            />
            <strong>Bihar University</strong>
          </div>
          <div className="d-flex flex-column align-items-center px-sm-5">
            <Image
              className="section-2-img p-3"
              src={Layer30}
              alt="section-2 img"
              width={80}
              height={80}
            />
            <strong>Business Connect & Collaboration</strong>
          </div>

          <div className="d-flex flex-column align-items-center px-sm-5 section-2-container">
            <Image
              className="section-2-img p-3"
              src={Layer31}
              alt="section-2 img"
              width={80}
              height={80}
            />
            <strong>
              Global Bihar Heritage Initiative
            </strong>
          </div>

          <div className="d-flex flex-column align-items-center px-sm-5 section-2-container">
            <Image
              className="section-2-img p-3"
              src={Layer34}
              alt="section-2 img"
              width={80}
              height={80}
            />
            <strong>BITO Multi Specialty <br /> Hospital</strong>
          </div>
        </div>
        <a href="https://bitoworld.in/old-site/about.php">
          <button className="section-3-btn px-4 py-2 btn btn-primary">
            Read More <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
        </a>
      </Container>

      {/* Global Presence Slider */}

      <div className="">
        <GlobalPresenceSlider />
      </div>


      {/* Membership in BITO  */}

      <Container className="pt-sm-5">
        <Row style={{ background: "#422a1d" }}>
          <Col className="p-5 p-sm-1" lg={4}>
            <div className="membership px-sm-3">
              <h4>Memebership</h4>
              <p>
                Membership in BITO will be open to individuals, entrepreneurs,
                industrialists, professionals, and organizations having a
                connection to Bihar and sharing the vision and values of the
                organization.
              </p>
              <div>
                <Link to={'/membership'}>
                  <Button className="membership-btn px-4 py-2 mt-4">
                    Become A Member <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  </Button>
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={8} className="p-mobile">
            <Image
              className="mw-100 pb-sm-4"
              src={MembershipImg}
              alt="membership-img"
            />
          </Col>
        </Row>
      </Container>




      {/* Our Partner */}

      <div className="py-5">
        <OurPartner />
      </div>
    </>
  );
};

export default Home;
