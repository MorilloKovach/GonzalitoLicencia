import "./mainabout.css";
export const MainAbout = () => {
    return (
        <>
            <main className="mainAbout bg-cyan-50">
                <div className="flex justify-center">
                    <div>
                        <img src="./rescate.png" alt="rescate" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-center mb-4">🧠 ¿Quiénes somos?</h2>
                        <p>Somos Gonzalito Licencia, una pequeña pero poderosa célula de mentes obsesionadas con una sola misión:</p>
                        <p className="font-bold">Que ningún archivo se pierda jamás.</p>
                        <p>Nos cansamos de ver empresas perder años de trabajo por un clic mal dado, usuarios rendirse ante un disco muerto o un virus borrar recuerdos. Así que decidimos hacer algo al respecto.</p>
                        <p>Creamos un <span className="font-bold">SaaS que no solo recupera archivos</span>, sino que desafía al <span className="font-bold">caos digital.</span></p>
                        <p>Nuestro software revive lo irrecuperable, desinfecta lo contaminado y te permite volver atrás en el tiempo (sí, en serio).</p>
                        <p>📦 Rápido. Seguro. Y lo mejor: no necesitás ser un hacker para usarlo.</p>
                        <p>Así que, si alguna vez te encontraste gritando "¡Noooo, mi archivo!", no temas. Gonzalito Licencia está aquí para salvar el día.</p>
                        <p>Porque en un mundo donde los datos son oro, nosotros somos los guardianes de tu tesoro.</p>
                    </div>
                </div>
            </main>
        </>
    );
}