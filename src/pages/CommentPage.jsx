import React, {useRef} from 'react';
import classes from "../components/Comment/comment.module.css";
import logoTattoo from '../components/assets/image/Logotip.jpg'
import {Link} from "react-router-dom";
import Comment from "../components/Comment/Comment";
import {commentItems} from "../components/Comment/CommentConst";
import {useScrollbar} from '../hooks/use-scrollbar'

const CommentPage = () => {
    const commentWrapper = useRef(null)
    useScrollbar(commentWrapper)
    return (
        <div className='main__title'>
            <h1 className='title'>Отзывы "TVK" Tattoo Club.</h1>

            <div className={classes.comment} ref={commentWrapper}>
                <div className={classes.header}>
                    <Link style={{cursor: 'pointer'}} to='https://vk.com/tvktattooclub?w=app6326142_-106770370' target='_blank'><img src={logoTattoo} className={classes.img}/></Link>
                    <div style={{marginLeft: '15px'}}>
                        <p className={classes.title}>"TVK" Tattoo Club.</p>
                        <p style={{color: "gray", marginLeft: '10px'}}>19 отзывов</p>
                    </div>
                </div>
                <p className={classes.text}
                   style={{
                       margin:'0 25px 0 25px',
                       borderBottom: '1px solid #9d9a9a',
                       paddingBottom: '35px'
                   }}>Отзывы других пользователей о TVK tattoo club</p>
                {commentItems.map((comment) => <Comment key={comment.id} name={comment.name} text={comment.text} image={comment.image}/>)}

            </div>
            <div style={{paddingTop: '150px'}}></div>
        </div>
    );
};

export default CommentPage;