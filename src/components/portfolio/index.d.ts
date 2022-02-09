type CarouselContentType = {
    index: number;
    imageURL: string;
    carouselContent: Function;
    handleSelect: Function;
    setNewURL: Function;
};

type GetRandomImageType = {
    imageURL: string;
    setNewURL: Function;
}

export type { CarouselContentType, GetRandomImageType };