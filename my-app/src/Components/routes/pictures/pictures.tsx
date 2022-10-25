import { FC } from 'react'
import PhotoAlbum from "react-photo-album"
const photos = [
    {
        src:"./images/watch.jpg",
        width: 800,
        height:600
    },
    {
        src:"./images/nature.jpg",
        width: 800,
        height: 600
    }
];
<PhotoAlbum layout='rows' photos={photos}/>

export const Pictures: FC = (props) => {
    return <>pictures</>
  }