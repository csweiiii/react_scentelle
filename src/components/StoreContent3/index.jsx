
import styles from './storecontent3.module.css';
import { Row, Col } from "antd";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { motion } from "framer-motion";
import { Grid } from 'antd';
const { useBreakpoint } = Grid;
import MotionNavLink from '../MotionNavLink';

export default function StoreContent3() {
    const [selected, setSelected] = useState(0);
    const { md } = useBreakpoint();

    const navAnimation = {
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: .4,
                delayChildren: 1,
            }
        }
    }  
    const NavBarContent = (props) => (
        <motion.ul {...props} style={{ listStyleType: 'none'}}>
        <MotionNavLink
                onClick={() => setSelected(0)}
                id={0}
                selected={selected}
                to="/store3/yiihotang">
                全部
            </MotionNavLink>
            <MotionNavLink
                onClick={() => setSelected(1)}
                id={1}
                selected={selected}
                to="/store3/yiihotang3/bread">
                麵包
            </MotionNavLink>
            <MotionNavLink
                onClick={() => setSelected(2)}
                id={2}
                selected={selected}
                to="/store3/yiihotang3/cake">
                蛋糕
            </MotionNavLink>
            <MotionNavLink
                onClick={() => setSelected(3)}
                id={3}
                selected={selected}
                to="/store3/yiihotang3/cookie">
                司康
            </MotionNavLink>
            </motion.ul>
        
    )
    
    return (
        <div className={styles.container} > 
            <Col align="middle" justify="center">
                <Row gutter={[24, 24]} align="middle" justify="center" className={styles.logobox}>
                    <div className={styles.content} >
                        <div className={styles.logo}>
                            <NavLink to="/store3/yiihotang">
                                <img src="/images/logolink-2.png" alt="icon-1" className={styles.logo_img} />
                            </NavLink>
                        </div>
                        <div className={styles.NavBar}>
                            <NavBarContent className={styles.NavBar}/>
                        </div>
                        
                        
                        
                    </div>
                </Row>
            </Col>
        </div>
    );
}
