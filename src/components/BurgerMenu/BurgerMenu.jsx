import React, {useState} from 'react';
import Burger from '../assets/image/menu-svgrepo-com.svg'
import './modal.css'
import classes from "./burgerMenu.module.css";
import BurgerModal from "./BurgerModal";

const BurgerMenu = () => {
    const [active, setActive] = useState(false)

    return (
        <div className={classes.burger}>
            <button onClick={() => setActive(!active)}><img src={Burger} className={classes.logo}/></button>
            {active ?
                <BurgerModal active={active} setActive={setActive} />
                :
                ''
            }
        </div>
    );
};

export default BurgerMenu;