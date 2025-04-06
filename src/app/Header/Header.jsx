"use client";
import { useState } from "react";
import "./header.css";
export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
                <div className="flex items-center">
                <a href="/"><img src="/gonzalito.png" alt="Logo" className={`h-10 w-10 mr-2 rounded-xl transition-opacity  ${isOpen ? "duration-300 opacity-0" : ""}`} /></a>
                    <h1 className={`text-xl font-bold transition-opacity  ${isOpen ? "duration-300 opacity-0" : ""}`}>Gonzalito Licencia</h1>
                </div>
                <nav className={`flex space-x-4 ${isOpen ? "nav-open block" : "nav-closed max-2xl:visible max-md:hidden"} md:flex nav-gen`}>
                    <a href="/about" className="hover:text-gray-400">Sobre nosotros</a>
                    <a href="/precios" className="hover:text-gray-400">Precios</a>
                </nav>
                <div className="md:hidden flex items-center cursor-pointer flex-col" id="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                    <div className={`bg-white transition-transform duration-300 ${isOpen ? "clickedd" : ""}`}></div>

                    <div className={`bg-white transition-transform duration-300 ${isOpen ? "clicked" : ""}`}></div>
                    <div className={`bg-white transition-transform duration-300 ${isOpen ? "search" : ""}`}></div>
                </div>
            </header>
        </>
    )
}