import { StaticImageData } from "next/image";
import photo1 from "./photos/1.jpg";
import photo2 from "./photos/2.jpg";
import photo3 from "./photos/3.jpg";
import photo4 from "./photos/4.jpg";
import photo5 from "./photos/5.jpg";
import photo6 from "./photos/6.jpg";
import photo7 from "./photos/7.jpg";

export type WonderImage = {
    id: string;
    name: string;
    src: StaticImageData;
    photographer: string;
    location: string;
};

const wondersImages: WonderImage[] = [
    {
        id: "1",
        name: "Great Wall of China",
        src: photo1,
        photographer: "Photo by Max van den Octelaar on Unsplash",
        location: "China",
    },
    {
        id: "2",
        name: "Chris the Redeemer",
        src: photo2,
        photographer: "Photo by Max van den Octelaar on Unsplash",
        location: "China",
    },
    {
        id: "3",
        name: "Great Wall of China",
        src: photo3,
        photographer: "Photo by Max van den Octelaar on Unsplash",
        location: "China",
    },
    {
        id: "4",
        name: "Great Wall of China",
        src: photo4,
        photographer: "Photo by Max van den Octelaar on Unsplash",
        location: "China",
    },
    {
        id: "5",
        name: "Great Wall of China",
        src: photo5,
        photographer: "Photo by Max van den Octelaar on Unsplash",
        location: "China",
    },
    {
        id: "6",
        name: "Great Wall of China",
        src: photo6,
        photographer: "Photo by Max van den Octelaar on Unsplash",
        location: "China",
    },
    {
        id: "7",
        name: "Petra",
        src: photo7,
        photographer: "Photo by Max van den Octelaar on Unsplash",
        location: "China",
    },
]