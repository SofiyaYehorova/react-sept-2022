import {Navigate, Route, Routes} from "react-router-dom";
import React from "react";

import {AboutPage, HomePage, NotFoundPage, PostDetailsPage, PostsPage, UsersPage} from "./pages";
import {Header} from "./components/Header/Header";
import {MainLayout} from "./layouts";
import {PostDetails} from "./components";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'home'}/>}/>
                    <Route path={'home'} element={<HomePage/>}/>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':postId'} element={<PostDetailsPage/>}/>
                    </Route>
                    <Route path={'about'} element={<AboutPage/>}/>
                </Route>
                <Route path={'*'} element={<NotFoundPage/>}/>

            </Routes>
        </div>

    );
}

export {
    App
}