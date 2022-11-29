import React from 'react';
import hero from "./assets/hero.png";
import tab from "./assets/tab.jpg";
import ed from "./assets/ed.png";
import branding from "./assets/branding.png";
import en1 from "./assets/en1.png";
import en2 from "./assets/en2.png";

const Hero = () => {
    return (
        <>
            <div className='bg-black h-[1400px]' >
                <div className=' bg-white mx-auto w-full h-[380px]'>
                    <div className='h-full items-center p-4 w-[800px] m-auto text-center grid grid-cols-2 gap-4'>
                        <div className='text-right'><p className='text-5xl text-black font-bold'>Enriching human experiences.</p></div>
                        <div className='text-left'><p className='text-2xl text-black font-bold'>A practical software experience design and development services company.</p>
                            <button className=' hover:bg-violet-800 p-2 my-1 bg-blue-900 font-bold text-white'>Services</button>
                        </div>
                    </div>
                </div>
                <div className='w-full text-center bg-black h-[800px]'>
                    <img className='mx-auto mt-[90px]' src={hero} width="1000px" height="830px" alt="" />
                </div>
            </div>
            <hr />
            <div className='w-full mt-10'>
                <div className='w-[1020px] p-4 mx-auto grid grid-cols-3 gap-10'>
                    <div className='col-span-2'>
                        <h1 className='text-5xl font-bold'>
                            Experience led strategy calibrated for human impact.
                        </h1>
                        <p className='text-lg my-6'>
                            Our proven methodology enables us to shape relevant outcomes that are <span className='font-bold'>desirable for end-users, feasible for technology</span>, and <span className='font-bold'>viable for business</span>.
                        </p>
                        <img src={ed} width="600px" alt="" />
                        <h1 className='font-bold text-4xl my-8'>Design.</h1>
                        <p className='text-lg'>
                            Seamless human-centric software product and service experience design,
                            backed by research, and <span className='font-bold'>crafted for a purpose</span>.
                        </p>
                        <button className='hover:bg-violet-800 p-2 font-bold text-white bg-blue-900 my-5'>Learn More</button>
                    </div>
                    <div>
                        <img src={tab} alt="" />
                        <p className='font-bold text-4xl my-6'>Development.</p>
                        <p className='text-lg'>
                            <span className='font-bold'> Accurate and performant
                                front-end development</span>, for delivering context-specific engaging experiences, as well as scale.
                        </p>
                        <button className='p-2 font-bold text-white bg-blue-900 my-5'>Learn More</button>
                        <img className='my-11' src={branding} alt="" />
                        <p className='font-bold text-5xl'>Branding.</p>
                        <p className='mt-11 text-lg'>Relevant and impactful brand identity, and a cohesive communication strategy for <span className='font-bold'>lasting impressions</span> .</p>
                        <button className=' hover:bg-violet-800 p-2 font-bold text-white bg-blue-900 my-5'>Learn More</button>
                    </div>
                </div>
            </div>
            <div className=' w-full bg-slate-300 '>
                <div className='w-[900px] mx-auto grid grid-cols-6 gap-8 p-4 '>
                    <div className='col-span-2 mt-11'>
                        <img src={en1}  alt=""  />
                        <p className='font-bold text-5xl mt-8'>Enterprise Security.</p>
                        <p className='text-lg mt-8'>Saves enterprises millions of dollars by relevant and comprehensive cloud configurations.</p>
                        <button className='hover:bg-violet-800 p-2 font-bold text-white bg-blue-900 my-5'>Read Story</button>
                    </div>
                    <div></div>
                    <div className='col-span-3 mt-11'>
                        <img src={en2} alt="" />
                        <p className='font-bold text-5xl mt-8'>Smart Farming.</p>
                        <p className='mt-8 text-lg'>Empowering farmers for higher quantity, quality, and market price for yield.</p>
                        <button className=' hover:bg-violet-800 p-2 font-bold text-white bg-blue-900 my-5'>Read Story</button>
                    </div>
                </div>
            </div>
            <div className='w-full bg-black py-11 text-white'>
                <div className='w-[1000px] mx-auto text-center py-11 '>
                    <p className='text-white font-bold text-xl'>An entrusted partner for global brands.</p>
                    <div className='grid grid-cols-5 gap-3 py-9'>
                        <div>
                            <h1 className='font-bold text-2xl'>brand 1</h1>
                        </div>
                        <div>
                            <h1 className='font-bold text-2xl'>brand 2</h1>
                        </div>
                        <div>
                            <h1 className='font-bold text-2xl'>brand 3</h1>
                        </div>
                        <div>
                            <h1 className='font-bold text-2xl'>brand 4</h1>
                        </div>
                        <div>
                            <h1 className='font-bold text-2xl'>brand 5</h1>
                        </div>
                        <div>
                            <h1 className='font-bold text-2xl'>brand 6</h1>
                        </div>
                        <div>
                            <h1 className='font-bold text-2xl'>brand 7</h1>
                        </div>
                        <div>
                            <h1 className='font-bold text-2xl'>brand 8</h1>
                        </div>
                        <div>
                            <h1 className='font-bold text-2xl'>brand 9</h1>
                        </div>
                        <div>
                            <h1 className='font-bold text-2xl'>brand 10</h1>
                        </div>
                    </div>
                    <p className='text-lg'>and many more...</p>
                </div>
            </div>
        </>
    )
}

export default Hero