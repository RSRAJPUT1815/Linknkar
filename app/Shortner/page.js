"use client"
// This is a client component
import React, { useState } from 'react'
import Link from 'next/link'

const Shortner = () => {
  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated, setgenerated] = useState()
  const handelChange = (e) => {
    if (e.target.placeholder === "Enter your URL") {
      seturl(e.target.value)
    } else {
      setshorturl(e.target.value)
    }
  }
  const generate = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result),
          alert(result.message),
          seturl(""),
          setshorturl(""),
          setgenerated(`${process.env.NEXT_PUBLIC_URL}/${shorturl}`)
      })
      .catch((error) => console.error(error));
  }
  return (
    <div className='mx-auto max-w-lg my-16 p-8 rounded-lg bg-gray-400 flex flex-col gap-4 '>
      <h1 className='font-bold text-xl'>Generate your short URLs</h1>
      <div className='flex flex-col justify-center items-center gap-3'>
        <input type="text" className='w-full py-2 px-4 bg-white focus:outline-gray-800 rounded-xl' placeholder='Enter your URL' name="" value={url} onChange={handelChange} />
        <input type="text" placeholder='Enter your URL of choise' className='w-full py-2 px-4 focus:outline-gray-800 bg-white rounded-xl' name="" value={shorturl} onChange={handelChange} />
        <button onClick={generate} className='bg-gray-600 p-2 my-3 rounded-xl  hover:bg-gray-700 text-white'>Generate</button>
      </div>
      {generated && <><span className='font-bold '> Your link </span><code> <Link target='_blank' href={generated}>{generated}</Link>
      </code> </>}

    </div>
  )
}

export default Shortner
