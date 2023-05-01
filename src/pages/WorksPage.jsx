import React, {useEffect, useState} from 'react';
import {api} from "../api/api";
import Works from "../components/Works/Works";
import {masterItem} from "../components/Master/MasterConst";
import WorksCard from "../components/Works/WorksCard";
import classes from "../components/Works/works.module.css";
import {Outlet} from "react-router-dom";


const WorksPage = () => {
    const [photos, setPhotos] = useState([])
    const fetchingAlbums = async (id) => {
        try {
            const {data} = await api.get(`albom/?album_id=${id}`)
            setPhotos([...data.response.items])
        }catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        fetchingAlbums(290705998)
    }, [])

    return (
        <div  className='main__title'>
            <h1 className='title'> Работы мастеров "TVK" Tattoo Club.</h1>
            <div className={classes.block__card}>
                {masterItem.map((item) =>
                    <WorksCard
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    fetchingAlbums={fetchingAlbums}
                    idAlbum={item.idAlbum}
                />)}
            </div>
            <Outlet/>
            <div className={classes.image}>
            {photos.map((photo) => <Works image={photo.sizes[2].url} key={photo.id}/>)}
            </div>
        </div>
    );
};

export default WorksPage;