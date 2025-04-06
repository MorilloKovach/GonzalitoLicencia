"use client";
import Swal from 'sweetalert2'
import "./mainprecios.css";
export const MainPrecios = () => {
    return (
        <main className="main-precios">
            <div className="text-center">
                <h2 className="font-bold text-4xl">Precios</h2>
                <p className="font-bold text-lg">Consulta nuestros precios</p>
                <div className="container-cards flex space-evenly flex-wrap justify-center items-center text-left">
                    <div className="card-ind">
                        <h3>Individual</h3>
                        <ul>
                            <li>✅ Recuperación de hasta 500 GB de datos por mes.</li>
                            <li>⚙️ Asistente paso a paso con interfaz simple y amigable.</li>
                            <li>🧠 Inteligencia integrada para priorizar archivos personales (fotos, videos, documentos).</li>
                            <li>⏱️ Recuperación rápida con escaneo en menos de 10 minutos.</li>
                            <li>🛡️ Protección anti-sobrescritura: tus datos se recuperan sin ser corrompidos.</li>
                            <li>☁️ Opción de backup automático en la nube al recuperar archivos clave.</li>
                            <li>📈 Estadísticas de recuperación: qué salvaste, cuánto y en qué estado.</li>
                            <li>🧑‍💻 Soporte 24/7 estilo “GonzaBot”: rápido, gracioso y directo al grano.</li>
                        </ul>
                        <img src="./persona.png" alt="persona"/>
                        <button className="button bg-blue-950" onClick={() => {
                            Swal.fire({
                                icon: "success",
                                title: "¡Compra con exito!",
                                text: "Gracias por alquilar el producto",
                              });
                        }}>Alquilar producto U$D10</button>
                    </div>
                    <div>
                        <h3>Empresarial</h3>
                        <ul>
                            <li>🔄 Recuperación de datos en red (NAS, servidores, discos externos múltiples).</li>
                            <li>🔐 Cifrado de extremo a extremo: lo que se recupera, queda solo entre vos y Gonzalito.</li>
                            <li>🧠 Módulo de IA para reconstrucción avanzada de bases de datos y estructuras de carpetas.</li>
                            <li>📁 Recuperación masiva de archivos con categorización automática.</li>
                            <li>👨‍💻 Panel centralizado para gestionar múltiples máquinas y usuarios.</li>
                            <li>🚨 Monitoreo en tiempo real de incidentes y alertas de posible pérdida de datos.</li>
                            <li>🧑‍🏫 Capacitación para empleados y recursos sobre buenas prácticas de almacenamiento.</li>
                            <li>📊 Reportes detallados con métricas técnicas y comerciales del estado de los datos.</li>
                        </ul>
                        <img src="./personas.png" alt="empresa"/>
                        <a href="./contacto" className="button bg-blue-950">Alquilar producto (a contacto)</a>
                    </div>

                </div>
            </div>
        </main>
    )
}