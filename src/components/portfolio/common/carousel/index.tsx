import { Carousel } from "react-bootstrap";
import { CarouselContentType } from '../../index.d';

const CommonCarousel = ({ carouselContent, imageURL, index, handleSelect, setNewURL }: CarouselContentType) => {

    return (
        <Carousel
            activeIndex={index}
            nextIcon={''}
            prevIcon={''}
            onSelect={(e: any) => handleSelect(e)} >
            {carouselContent({ imageURL, setNewURL })}
        </Carousel>
    );
}

export default CommonCarousel;