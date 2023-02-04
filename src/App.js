import {Route, Routes} from "react-router-dom";
import React from "react";

import {AboutPage, HomePage, LogInPage, NotFoundPage, PostDetailsPage, PostsPage, UsersPage} from "./pages";
import {MainLayout} from "./layouts";
import {RequireAuth} from "./hoc/RequireAuth";


function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'posts'} element={<RequireAuth>
                        <PostsPage/>
                    </RequireAuth>}>
                        <Route path={':postId'} element={<PostDetailsPage/>}/>
                    </Route>
                    <Route path={'about'} element={<AboutPage/>}/>
                    <Route path={'login'} element={<LogInPage/>}/>
                </Route>
                <Route path={'*'} element={<NotFoundPage/>}/>

            </Routes>
        </div>

    );
}

export {
    App
}