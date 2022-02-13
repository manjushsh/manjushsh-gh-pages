import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import CommonCarousel from "../common/carousel";
import { GetRandomImageType } from "../index.d";
import PlaceHolder from '../assets/colorful.jpg';

import './index.css';

const DefaultCarousel = () => {

    const placeHolderURL = PlaceHolder; // `https://via.placeholder.com/1366x768/114bcb/cae3fa?text=First+Slide`;
    const [index, setIndex] = useState(0);
    const [imageURL, setNewURL] = useState(placeHolderURL);

    useEffect(() => {
        const URL = `${process.env.REACT_APP_UNSPLASH_API_URL}/photos/random?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`;
        fetchURL(URL);
    });

    const handleSelect = (selectedIndex: number, e: any) => {
        setIndex(selectedIndex);
    };

    const fetchURL = (URL: string) => {
        fetch(URL)
            .then(response => response.json())
            .then(imageDetails => setNewURL(imageDetails?.urls?.regular))
            .catch(error => {
                console.debug("Something went wrong! Error details", error?.message);
            });
    }

    return (
        <>
            <div className="content-container">
                <CommonCarousel
                    index={index}
                    imageURL={imageURL}
                    carouselContent={PopulateCarousels}
                    handleSelect={handleSelect}
                    setNewURL={setNewURL}
                />
            </div>
        </>
    );
}

export default DefaultCarousel;

const PopulateCarousels = ({ imageURL, setNewURL }: GetRandomImageType) => {

    const slides = [
        {
            path: imageURL,
            alt: "Background Image",
            title: "Hi There!",
            content: "This page is still under development."
        },
    ];

    const nodes: any = [];
    slides.forEach((slideDetails, key) => (
        nodes.push(<Carousel.Item key={key}>
            <img
                className="d-block w-100"
                src={slideDetails.path}
                alt={slideDetails.alt}
                style={{
                    filter: "blur(8px)",
                }}
            />
            <Carousel.Caption>
                <h3>{slideDetails.title}</h3>
                <p>{slideDetails.content}</p>
            </Carousel.Caption>
        </Carousel.Item>)
    ));

    return nodes;
}