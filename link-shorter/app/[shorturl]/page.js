import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"


export default async function Page({ params }) {
    const  shorturl  = (await params).shorturl
    const clint = await clientPromise;
    const db = clint.db("linknker");
    const collection = db.collection("links");
    const che = await collection.findOne({ shorturl: shorturl});
    
    if (che) {
        return redirect(che.url)
    }
    else {
        return redirect(`${process.env.NEXT_PUBLIC_URL}`)
    }
    return <div>My Post: {url}</div>
}