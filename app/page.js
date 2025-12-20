import Image from "next/image";
import Link from "next/link";
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>

export default function Home() {
  return (
    <>
      <main className="bg-gray-200">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[50vh]">
          <div className="flex flex-col items-start justify-center p-4 gap-6 ">
            <p className="text-4xl font-bold text-gray-800 font-[Poppins] text-center ">
              The best way to shorten your links and track their performance.
            </p>
            <p className="text-gray-600  text-center">
              Linknker is a link shortener that allows you to create short links
              for your long URLs without Login. It also provides analytics to track the
              performance of your links, including click-through rates and
              geographic data.
            </p>
            <div className='flex justify-center items-center w-full space-x-4 font-bold text-sm'>
                <Link href="/Shortner"><button className='hover:bg-gray-400 cursor-pointer  bg-gray-500 p-2 rounded-xl'>Try now</button></Link>
                <Link href="/github"><button className='hover:bg-gray-400 cursor-pointer  bg-gray-500 p-2 rounded-xl'>Git Hub</button></Link>
            </div>
          </div>
          <div className="flex  justify-start items-center relative ">
            <Image className="mix-blend-darken" alt="an Image of a vector" src={"/vector.jpg"} fill={true} />
          </div>
        </section>
      </main>
    </>
  );
}
