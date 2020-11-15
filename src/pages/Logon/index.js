import React from 'react'
import {Link } from 'react-router-dom'
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
                    <button className="button" type="submit">entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041"/>
                        Não tenho cadastro
                    </Link>

                </form>

            </section>

            <img src= {herosImg} alt="Heroes"/>
        </div>
    )
}