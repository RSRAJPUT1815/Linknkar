import clientPromise from "@/lib/mongodb"


export async function POST(req) {
  const body = await req.json();
  const clint = await clientPromise;
  const db = clint.db("linknker");
  const collection = db.collection("links");

  //check if shortlink is in the database
  const che = await collection.findOne({ shorturl: body.shorturl });
  if (che) {
    return Response.json({success:false, error:true, message: 'Shortlink URL already exists' })
  }
  const res1 = await collection.insertOne({
    url: body.url, 
    shorturl: body.shorturl,
  });

    return Response.json({succes:true, error:false, message: 'URL generated' })
  }