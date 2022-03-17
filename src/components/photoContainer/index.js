import './index.css'

export const PhotoContainer = ({photo}) => {
    return (
        <>
            <p>{photo.author}</p>
            <img src={photo.download_url} alt="lorem picsum random" class="photo"/>
        </>
    )
};
