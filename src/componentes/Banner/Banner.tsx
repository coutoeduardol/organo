import './Banner.css'
import React from 'react'

interface BannerProps{
    enderecoDaImagem: string
    textoAlternativo?: string
}

export const Banner = ({enderecoDaImagem,textoAlternativo }:BannerProps) => {
    // JSX
    return (
        <header className="banner">
            <img src={enderecoDaImagem} alt={textoAlternativo}/>
        </header>
    )
}