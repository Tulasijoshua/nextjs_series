import { WonderImage } from "../wonders";

export default function PhotoPage({
    params: { id },
}: {
    params: { id: string };
}) {
    const photo: WonderImage = wondersImages.find((p) => p.id === id)!;
    return (
        <div className="container mx-auto my-10">
            <div className="w-1/2 mx-auto"></div>
        </div>
    )
}