import React, { useState } from "react";
import "antd/dist/antd";
import styles from "./homepagecontent.module.css";
import { Row, Col, Carousel, Button } from "antd";
import HotList from "../HotList";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
const carouselEL = React.createRef()

export default function HomePageContent({ title }) {
    const [active, setActive] = useState(false);
    const onChange = (currentSlide) => {
        // console.log(currentSlide);
    };

    const typingContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.14,
            }
        }
    }
    const typingText = {
        hidden: { opacity: 0, y: "-20px" },
        show: {
            opacity: 1,
            y: "0",
            transition: {
                ease: 'easeInOut',
            }
        }
    }
    
    return (
        <div className={styles.content}>
            <img className={styles.imgDispalyInDesktop} src="/home.avif" alt="logo" />
            <img className={styles.imgDispalyInMobile} src="/home.avif" alt="logo" />

            <div className="container">
                <h2 className={styles.title}>News</h2>
                <Row className={styles.RowCol} >
                    <Col
                        className={styles.RowCol}
                    >
                        <div className={styles.newsbox}>
                            <div className={styles.boxstyle}>
                                <motion.h1 className={styles.antext} variants={typingContainer} initial="hidden" animate="show">
                                    {
                                        Array.from("I AM VEGAN DESSERT").map((word, i) => (
                                            <motion.span key={i} variants={typingText}>{word}</motion.span>
                                        ))
                                    }
                                </motion.h1>
                                <motion.h1 className={styles.estd} variants={typingContainer} initial="hidden" animate="show">
                                    {
                                        Array.from("ESTD 2023").map((word, i) => (
                                            <motion.span key={i} variants={typingText}>{word}</motion.span>
                                        ))
                                    }
                                </motion.h1>
                                <img
                                    className={styles.ns}
                                    src="/images/news.png"
                                    alt="news1" />
                                <div className={styles.NewsTextBox}>
                                    <p className={styles.text}>最新消息1</p>
                                    <Button className={styles.btn}   >
                                        MORE
                                    </Button>
                                </div>
                            </div>

                            <div className={styles.boxstyle}>
                                <img
                                    className={styles.ns}
                                    src="/images/news.png"
                                    alt="news2" />
                                <div className={styles.NewsTextBox}>
                                    <p className={styles.text}>最新消息2</p>
                                    <Button className={styles.btn}   >
                                        MORE
                                    </Button>
                                </div>
                            </div>

                            <div className={styles.boxstyle}>
                                <img
                                    className={styles.ns}
                                    src="/images/news.png"
                                    alt="news3" />
                                <div className={styles.NewsTextBox}>
                                    <p className={styles.text}>最新消息3</p>
                                    <Button className={styles.btn}   >
                                        MORE
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </Col>
                </Row>

                <Row gutter={[32, 32]}
                    className={styles.cl}
                >
                    <Col xs={{ span: 20 }}

                    >
                        <Button
                            className={styles.btnstyle}
                            style={{ left: 50 }}
                            onClick={() => {
                                carouselEL.current.prev();
                            }}

                            icon={<LeftOutlined />}
                        ></Button>
                        <Button
                            className={styles.nsbtnstyle}
                            style={{ right: 50 }}
                            onClick={() => {
                                carouselEL.current.next();
                            }}

                            icon={<RightOutlined />}
                        ></Button>
                        <Carousel autoplay ref={carouselEL} afterChange={onChange}  >
                            <div className={styles.newsbox}>
                                <img
                                    className={styles.news}
                                    src="/images/news.png"
                                    alt="news1" />
                                <div className={styles.ClNewsTextBox}>
                                    <p className={styles.text}>最新消息1</p>
                                    <Button className={styles.btn} >
                                        MORE
                                    </Button>
                                </div>
                            </div>
                            <div>
                                <img
                                    className={styles.news}
                                    src="/images/news.png"
                                    alt="news2" />
                                <div className={styles.ClNewsTextBox}>
                                    <p className={styles.text}>最新消息2</p>
                                    <Button className={styles.btn} >
                                        MORE
                                    </Button>
                                </div>
                            </div>
                            <div>
                                <img
                                    className={styles.news}
                                    src="/images/news.png"
                                    alt="news3" />
                                <div className={styles.ClNewsTextBox}>
                                    <p className={styles.text}>最新消息3</p>
                                    <Button className={styles.btn} >
                                        MORE
                                    </Button>
                                </div>
                            </div>
                        </Carousel>

                    </Col>
                </Row>
            </div>
            <h2 className={styles.title}>{title}</h2>
            <HotList />
        </div>
    );
}