import { useState } from 'react';
import colorfulImage from '../../assets//colorful.jpg';
import './index.css';

const GalleryView = () => {

    const [imageURL, updateImageURL] = useState(colorfulImage);
    const fetchRandomImage = () => {
        const URL = `${process.env.REACT_APP_UNSPLASH_API_URL}/photos/random?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`;
        fetch(URL)
            .then(response => response.json())
            .then(imageDetails => updateImageURL(imageDetails?.urls?.regular))
            .catch(error => {
                console.debug("Something went wrong! Error details", error?.message);
            });
    };

    return <>
        <div className='background' style={{
            background: `url(${imageURL}) no-repeat`,
            backgroundSize: 'cover',
        }}></div>
        <div className='foreground' style={{height: '100vh'}}>
            <div className='galleryContent flex-vh-centered'>
                <div className='image-card'>
                    <div className="card" style={{ width: '20rem' }}>
                        <img className="card-img-top" src={imageURL} alt='Wallpaper' />
                    </div>
                </div>
            </div>
            <div className='fixed-footer'>
                <div className='footer-content'>
                    <div className='footer-next' onClick={fetchRandomImage}>Next</div>
                </div>
            </div>
        </div>
    </>
};

export default GalleryView;