import React from 'react'
import './style.css'
import { FiLogIn } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'
import herosImg from '../../assets/heroes.png' 

export default function Logon () {
    return (
        <div className="logon-container">
            <section className="form">
                <img src= {logoImg} alt="Be-THE-hero"/>

                <form>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua ID" />
                    <button type="submit">entrar</button>

                    <a href="/register">
                        <FiLogIn size={16} color="#e02041"/>
                        Não tenho cadastro
                    </a>

                </form>

            </section>

            <img src= {herosImg} alt="Heroes"/>
        </div>
    )
}