import React, {useEffect, useState} from 'react';

import {albumsService} from "../../services";
import {Album} from "../Album/Album";

import css from './Album.module.css'

const Albums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumsService.getAll().then(({data}) => setAlbums([...data]))
    }, [])

    return (
        <div className={css.Albums}>
            {
                albums.map(album => <Album key={album.id} album={album}/>)
            }
        </div>
    );
};

export {
    Albums
};