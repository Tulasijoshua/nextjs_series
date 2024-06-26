import Image from "next/image";
import wonders from './wonders'
import Link from "next/link";

export default function Home() {
    return (
        <main className="container mx-auto">
            <h1 className="text-center text-3xl font-bold my-4">
                New Wonders of the World
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {wonders.map(({id, src, name}) => (
                    <Link key={id} href={`/photo-feed/${id}`}>
                        <Image 
                            alt={name}
                            src={src}
                            className="w-full h-[300px] object-cover aspect0-square" 
                        />
                    </Link>
                ))}
            </div>
        </main>
    )
}