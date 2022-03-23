import { useState } from "react";
import {Navigate} from "react-router-dom";
import {Navbar} from "./navbar"
import { PhotoContainer } from "../photoContainer";
import '../../App.css'

export const Home = (user, setUser) => {
    const [photos, setPhotos] = useState([]);
    const fetchPhotos = async () => {
        try {
            const response = await fetch("https://picsum.photos/v2/list");
            const data = await response.json();
            setPhotos(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };
    // mine
//     return (
//         <>
//             <button onClick={fetchPhotos}>Grab photos</button>
//             {photos.map((item, index) => (
//                 <PhotoContainer photo={item}/>
//             ))}
//         </>
//     )
// }
// Andys
    return (
        <div class="pageContainer">
            {!user && <Navigate to="/login" />}
            <Navbar setUser={setUser} />
            <button onClick={fetchPhotos}>Grab photos</button>
                <div class="photoPage">
                    {photos.map((item, index) => (
                    <PhotoContainer photo={item} />
                    ))}
                </div>
        </div>
    );
};