import '../../App.css'

export const PhotoContainer = ({photo}) => {
    return (
        <div class="photoContainer">
            <p class="photoAuthor">{photo.author}</p>
            <img src={photo.download_url} alt="lorem picsum random" class="photo"/>
        </div>
    )
};
