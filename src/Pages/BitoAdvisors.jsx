
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Section3 from "../assets/chirag-paswan.png";
import anil from '../assets/anil-pratham.png'
import Ashish from '../assets/ashish-mishra.png'
import { Button, Image, Modal } from 'react-bootstrap'

const BitoAdvisors = (props) => {

    const [modalData, setModalData] = useState(null);
    const handleClose = () => setModalData(null);

    const handleShowModal = (item) => {
        setModalData(item);
    };

    const bitoAdvisors = [
        {
            id: 1,
            name: 'Shri Anil Pratham',
            position: 'IPS (Former DGP, Police Reforms), Gujarat',
            image: anil,
            shortMessage: (
                <>
                    <p>Dear All,</p>
                    <p>
                        Shri Anil Pratham, IPS, a distinguished officer and a dedicated leader who has spent over three decades serving the nation with integrity and commitment. A 1989-batch IPS officer, he rose through the ranks with an unwavering focus on justice, public safety, and progressive reforms, ultimately serving as Director General of Police (DGP), Police Reforms, Gujarat.
                    </p>
                </>
            ),

            modalMessage: (
                <>
                    <p>Dear All,</p>
                    <p>
                        Shri Anil Pratham, IPS, a distinguished officer and a dedicated leader who has spent over three decades serving the nation with integrity and commitment. A 1989-batch IPS officer, he rose through the ranks with an unwavering focus on justice, public safety, and progressive reforms, ultimately serving as Director General of Police (DGP), Police Reforms, Gujarat.
                    </p>
                    <p>
                        Throughout his career, Shri Anil Pratham has been more than just a law enforcement officer—he has been a guardian of justice, a mentor to many, and a changemaker. His work has touched countless lives, from ensuring women and child safety to tackling cybercrime, economic fraud, and human trafficking. His tenure with the Central Industrial Security Force (CISF) further deepened his understanding of national security and crisis management.
                    </p>
                    <p>
                        What truly sets him apart is his people-centric approach. He believes that policing is not just about enforcing laws but about building trust, fostering community engagement, and driving meaningful reforms. His leadership has always been guided by a vision of making society safer, fairer, and more resilient.
                    </p>
                    <p>
                        Now, as an Advisor to the Bihar International Trade Organisation (BITO), he brings his wealth of experience to a new mission—empowering Bihar’s people, businesses, and entrepreneurs. He sees Bihar not just as a state but as a land of opportunities, rich in culture, talent, and ambition. His commitment to fostering economic growth and social progress is a testament to his belief in collective development and a brighter future for all.
                    </p>
                    <p>
                        Let’s build a stronger Bihar, together.
                    </p>
                    <p>
                        Jai Bihar! Jai Bharat!
                    </p>
                </>
            ),
        },
        {
            id: 2,
            name: 'Shri Ashish Mishra',
            position: 'Venture Capitalist | Entrepreneur | Strategic Advisor',
            image: Ashish,
            shortMessage: (
                <>
                    <p>Dear All,</p>
                    <p>
                        Shri Ashish Mishra is a distinguished United Kingdom based Venture Capitalist and Entrepreneur, renowned for his contributions to the various industries including FMCG, Electric Vehicles (EV), Sports, renewable energy, and financial sectors. With a proven track record in business strategy, investment, and scaling high-growth ventures, he brings invaluable expertise to BITO’s strategic initiatives.
                    </p>
                </>
            ),
            modalMessage: (
                <>
                    <p>Dear All,</p>
                    <p>
                        Shri Ashish Mishra is a distinguished United Kingdom based Venture Capitalist and Entrepreneur, renowned for his contributions to the various industries including FMCG, Electric Vehicles (EV), Sports, renewable energy, and financial sectors. With a proven track record in business strategy, investment, and scaling high-growth ventures, he brings invaluable expertise to BITO’s strategic initiatives.
                    </p>
                    <p>
                        With an unwavering commitment to scalability, impact-driven investments, and cross-sectoral synergies, Shri Ashish Mishra plays a pivotal role in bridging finance, technology, and ventures. His global investment insights and strategic acumen will empower BITO to identify emerging market opportunities, foster innovation, and drive meaningful economic growth.
                    </p>
                    <p>
                        As an Advisor to BITO, he will provide thought leadership, mentorship, and strategic direction, enhancing BITO’s capabilities in fostering entrepreneurial excellence, innovation-led investments, and global partnerships.
                    </p>
                    <p>
                        Let’s take pride in our roots and move forward with confidence. Jai Bihar! Jai Bharat!
                    </p>

                </>
            ),
        }
    ]
    return (
        <div>
            <section className="about-img d-flex align-items-end">
                <div className="container">
                    <div className="text-white">
                        <p className="fs-4 m-0 font-bnpr" style={{ marginTop: "330px" }}>
                            Welcome to
                        </p>
                        <strong className="fs-4 font-bnpr">
                            Bihar Internatinal Trade Organization
                        </strong>
                        <h2
                            key={1}
                            className="bannerHeading"
                            style={{ fontSize: "100px", fontWeight: 700 }}
                        >
                            BITO Advisors
                        </h2>
                    </div>
                </div>
            </section>
            {/* BITO Advisors here */}
            <section className="container py-5">
                {/* DESKTOP DESIGN LAYOUT */}
                <h1 className="text-center section-3-heading d-none d-sm-block pb-5">
                    BITO Advisors
                </h1>
                {/* MOBILE DESIGN LAYOUT */}
                <h1 className="text-center section-3-heading d-sm-none d-block pb-5">
                    BITO <br />
                    Advisors
                </h1>

                {bitoAdvisors.map((item, index) => (
                    <div key={index} className="row   mb-4">
                        {/* Right div for image */}
                        <div className="right-side-div col-lg-6">
                            <Image
                                className="section-2-img"
                                src={item.image}
                                alt="section-2 img"
                            />
                        </div>

                        {/* Left div for content */}
                        <div className="left-side-div col-lg-6">
                            <small className="new-heading">{item.name}</small>
                            <p className="chairman">{item.position}</p>
                            <div className="section-para">
                                <p>
                                    {item.shortMessage}
                                </p>
                            </div>

                            <div>
                                <Button
                                    onClick={() => handleShowModal(item)}
                                    className="section-3-btn px-4 py-2"
                                >
                                    Read More{" "}
                                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}



                {/* Second member */}

            </section>

            {/* Modal */}
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={modalData}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h2 className="name-div-head">{modalData?.name}</h2>
                        <p className="name-div-subhead">{modalData?.position}</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalData?.modalMessage}</Modal.Body>
            </Modal>
        </div>
    )
}

export default BitoAdvisors