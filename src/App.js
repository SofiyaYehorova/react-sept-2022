import React from "react";
import {Route, Routes} from "react-router-dom";

import {AboutUsPage, AlbumsPage, CommentsPage, HomePage, NotFoundPage, PostByIdPage, TodosPage} from "./pages";
import {MainLayout} from "./layouts";
import {Header} from "./components";


function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}/>
                <Route index element={<HomePage/>}/>
                <Route path={'albums'} element={<AlbumsPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}>
                    <Route path={':postId'} element={<PostByIdPage/>}/>
                </Route>
                <Route path={'todos'} element={<TodosPage/>}/>
                <Route path={'about'} element={<AboutUsPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </div>

    )
}

export {
    App
}