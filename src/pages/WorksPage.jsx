import React, {useEffect, useState, CSSProperties } from 'react';
import {api} from "../api/api";
import Works from "../components/Works/Works";
import {masterItem} from "../components/Master/MasterConst";
import WorksCard from "../components/Works/WorksCard";
import classes from "../components/Works/works.module.css";
import {Outlet} from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};
const WorksPage = () => {
    const [photos, setPhotos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const fetchingAlbums = async (id) => {
        try {
            setIsLoading(true)
            const {data} = await api.get(`albom/?album_id=${id}`)
            const [, ...photos] = data.response.items
            setPhotos(photos)
            setIsLoading(false)
            console.log(data.response.items)
        }catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        fetchingAlbums(290705998)
    }, [])

    return (
        <div  className='main__title'>
            <h1 className='title' style={{top:'-75px'}}> Работы мастеров "TVK" Tattoo Club.</h1>
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
            {
                isLoading ?
                    <div className="sweet-loading">
                        <ClipLoader
                            color={'#ffffff'}
                            loading={isLoading}
                            cssOverride={override}
                            size={150}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div>
                    :
                photos.map((photo) => <Works image={photo.sizes[2].url} key={photo.id}/>)
            }
            </div>
        </div>
    );
};

export default WorksPage;