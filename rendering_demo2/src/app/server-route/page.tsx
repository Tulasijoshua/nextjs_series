import ImageSlider from "@/components/ImageSlider";
import { serverSideFunction } from "@/utils/server-utils";

export default function ServerRoute() {
    console.log("Server route rendered")
    const result = serverSideFunction();
    return (<>
        <h1>Server route</h1>
        <p>{result}</p>
        <ImageSlider />
    </>)
}