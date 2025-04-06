


"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './main.css';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Footer } from '../Footer/Footer';
const getWindow = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
}
export const Main = () => {
    const [data, setData] = useState(3);
    useEffect(() => {
        const handleResize = () => {
            const { width } = getWindow();
            if (width < 768) {
                setData(1);
            } else {
                setData(3);
            }
        };
        handleResize(); // Call it once to set the initial value
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    })
    return (
        <>
            <main className=' h-100 items-center bg-cyan-50'>
                <h2 className='font-bold text-2xl text-center p-5'>¿De qué trata Gonzalito Licencia?</h2>
                <div className='resumen bg-cyan-50'>
                    <div className='divisor-flex bg-cyan-50'>
                        <div>
                            <img src="./perdida.png" alt="perdida de datos" />
                        </div>
                        <div className='divisor-text'>
                            <h2>🧠 Resumen del proyecto Gonzalito Licencia</h2>
                            <p>Es un SaaS (Software as a Service) enfocado en recuperación de archivos, pensado para ayudar a empresas e individuos a recuperar información perdida por causas como borrado accidental, hackeos, virus, sabotajes o fallos del sistema.</p>
                        </div>
                    </div>
                </div>
                <div className='resumen bg-cyan-50'>
                    <div className='divisor-flex bg-cyan-50'>
                        <div className='img-div2'>
                            <img src="./objetivos.jpg" alt="Objetivo Empresarial" />
                        </div>
                        <div className='divisor-text objetivos'>
                            <h2>🎯 Objetivo principal:</h2>
                            <p>Desarrollar un software que, recupere archivos de manera rápida y segura, permita hacer backups del sistema y desinfecte archivos dañados por malware</p>
                        </div>
                    </div>
                </div>
                <div className='resumen bg-cyan-50'>
                    <div className='divisor-flex bg-cyan-50'>
                        <div className='img-div2'>
                            <img src="./fortalezas.jpg" alt="Objetivo Empresarial" />
                        </div>
                        <div className='divisor-text objetivos'>
                            <h2>💪 Fortalezas:</h2>
                            <p>Recuperación en distintos momentos del tiempo, atención rápida al cliente, fácil de usar, sin conocimientos técnicos y escalable a distintos tamaños de organizaciones</p>
                        </div>
                    </div>
                </div>
                <h2 className='text-center font-bold text-2xl p-5 bg-cyan-50'>¿Qué opinan nuestros consumidores?</h2>
                <Swiper
                    slidesPerView={data}
                    spaceBetween={10}
                    loop={true}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper bg-cyan-50" id="mySwiper"
                >
                    <SwiperSlide>
                        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
                            <img src="/nacho.png" alt="persona" className="rounded-full text-center w-10" />
                            <h2>⭐⭐⭐⭐⭐</h2>
                            <h2 className="text-2xl font-bold mb-4">Ignacio Goncalvez</h2>
                            <p className="text-gray-700 mb-4">Estoy muy agradecido con la aplicación de Gonzalito Licencia. Me ha salvado de un apuro muy importante</p>
                        </div></SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
                            <img src="/scattu.jpg" alt="persona" className="rounded-full text-center w-10 h-10" />
                            <h2>⭐⭐⭐⭐</h2>
                            <h2 className="text-2xl font-bold mb-4">Scatturovsky Emmanuel</h2>
                            <p className="text-gray-700 mb-4">Pude rescatar archivos sovieticos muy importantes. La aplicación me permitió restaurar la Unión Soviética.</p>
                        </div></SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
                            <img src="/luca.png" alt="persona" className="rounded-full text-center w-10" />
                            <h2>⭐⭐⭐⭐⭐</h2>
                            <h2 className="text-2xl font-bold mb-4">Luca Monteblack</h2>
                            <p className="text-gray-700 mb-4">me gustó mucho la aplicación gracias por todo, no pagaré una mierda</p>
                        </div></SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
                            <img src="/balmoria.png" alt="persona" className="rounded-full text-center w-10" />
                            <h2>⭐⭐⭐⭐⭐</h2>
                            <h2 className="text-2xl font-bold mb-4">BalmoriaMafiaCorps</h2>
                            <p className="text-gray-700 mb-4">Hemos invertido un enorme capital a la empresa y sus resultados han sido satisfactorios.</p>
                        </div></SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
                            <img src="/chatgpt.jpg" alt="persona" className="rounded-full text-center w-10" />
                            <h2>⭐⭐⭐⭐⭐</h2>
                            <h2 className="text-2xl font-bold mb-4">OpenAIA</h2>
                            <p className="text-gray-700 mb-4">Logramos recuperar los datos de libros que hemos robado. Muchas gracias.</p>
                        </div></SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
                            <img src="/tecnica.jpg" alt="persona" className="rounded-full text-center w-10" />
                            <h2>⭐⭐⭐⭐⭐</h2>
                            <h2 className="text-2xl font-bold mb-4">Técnica 6</h2>
                            <p className="text-gray-700 mb-4">Estamos muy orgullosos del excelente producto que hizo Gonzalito</p>
                        </div></SwiperSlide>
                </Swiper>
                <Footer />
            </main >
        </>
    );
}