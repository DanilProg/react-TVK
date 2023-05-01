import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "../Layout/Layout";
import MainPage from "../../pages/MainPage";
import MasterPage from "../../pages/MasterPage";
import ServicesPage from "../../pages/ServicesPage";
import WorksPage from "../../pages/WorksPage";
import CommentPage from "../../pages/CommentPage";
import CreateTattoo from "../CreateTattoo/CreateTattoo";
import DeleteTattoo from "../DeleteTattoo/DeleteTattoo";
import Pirsing from "../Pirsing/Pirsing";
import Tatyaj from "../Tatyaj/Tatyaj";
import Contact from "../Contact/Contact";

const RoutPage = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path='masters' element={<MasterPage/>}/>
                    <Route path='services' element={<ServicesPage/>}/>
                    <Route path='works' element={<WorksPage/>}/>
                    <Route path='comments' element={<CommentPage/>}/>
                    <Route path='contact' element={<Contact/>}/>
                    <Route path='create-tattoo' element={<CreateTattoo/>}/>
                    <Route path='delete-tattoo' element={<DeleteTattoo/>}/>
                    <Route path='pirsing' element={<Pirsing/>}/>
                    <Route path='tatyaj' element={<Tatyaj/>}/>
                </Route>
            </Routes>

        </>
    );
};

export default RoutPage;