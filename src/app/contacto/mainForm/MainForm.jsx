"use client";
import Swal from 'sweetalert2'
import "./mainform.css"
export const MainForm = () => {
    return (
        <>
            <h2 className="font-bold text-2xl text-center">¡Contactate con nosotros!</h2>
            <form className="flex flex-col gap-4 w-1/2 m-auto mt-10 form items-center">
                <label htmlFor="" className="block">Introduzca su correo</label>
                <input type="email" required />
                <label htmlFor="" className="block">Introduzca el nombre de su empresa</label>
                <input type="text" required />
                <label htmlFor="" className="block">Introduzca su nombre</label>
                <input type="text" required />
                <label htmlFor="">Introduzca su petición</label>
                <textarea required className="block">
                </textarea>
                <button className='button bg-blue-950' type="submit" onClick={(e) => {
                    e.preventDefault();
                    Swal.fire({
                        icon: "success",
                        title: "Mensaje enviado!",
                        text: "Gracias, dentro de poco te enviaremos una respuesta",
                    });
                }}>Enviar</button>
            </form>
        </>
    )
}