import React , { useState}from 'react'
import logoImg from '../../assets/logo.svg'

import { Link, useHistory } from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import './style.css'

import api from '../../services/api'

export default function Register () {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')

     const ongId = localStorage.getItem('ongId')

    const history = useHistory()

    async function handleNewincident(e){
        e.preventDefault()

        const data = {
            title,
            description,
            value
        }

        try{
             await api.post('incidents', data, {
                 headers:{
                     authorization: ongId
                 }
             })
            alert('Caso cadastrado com sucesso !!')
            history.push('/profile')
        }catch (err){
            alert('Erro Ao cadastrar novo Incidents')
        }
    }

    return (
       <div className="new-incident-container">
           <div className="content">
               <section>
                    <img src={logoImg} alt="Logo"/>

                    <h1>Cadastrar novo caso</h1>

                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso. </p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#e02041"/>
                        Voltar para ao Home
                    </Link>
               </section>

               <form onSubmit={handleNewincident}>
                    <input placeholder="Título do caso "
                        value={title}
                        onChange={e => setTitle(e.target.value)}

                    />
                    <textarea placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription (e.target.value)}
                    ></textarea>
                    <input placeholder="Valor em Reais"
                        value={value}
                        onChange={e => setValue (e.target.value)}
                    
                    />
                    
                    <button className="button" type="submit">Cadastrar</button>
               </form>
           </div>
       </div>
    )
}