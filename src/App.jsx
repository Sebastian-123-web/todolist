import { useEffect, useState } from 'react'
import check from './assets/check.svg'
import search from './assets/search.svg'
import x from './assets/x.svg'
import menu from './assets/menu.svg'
import './App.css'

function App() {
    const url = 'http://localhost:5000/tarea'
    const [alltarea, setAlltarea] = useState()
    const fetchApi = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setAlltarea(data)
    }

    const apiPost = async () => {
        axios({
            method: 'post',
            url: 'http://localhost:5000/tarea',
            data: {
                descripcion : "Aprender Ingles",
                estado : "completo"
            }
          });
    }

    useEffect(()=>{
        fetchApi()
    },[])

    return (
        <div className="App">
            <nav className='nav'>
                <div className='nav-bar'>
                    <div className='user'>SB</div>
                    <div className='menu'><img src={menu} alt="" /></div>
                </div>
            </nav>
            <section className='todolist'>
                <div className='all-search'>
                    <input type="text" placeholder='Buscar' className='search' />
                    <img src={search} alt="" className='icon-img' />
                </div>
                <div className='tasks'>
                    {
                        !alltarea ? 'Cargando...' : alltarea.map((alltarea,index)=>{
                            return (
                                <div className='task' id={alltarea.id} >
                                    <div className='status-title'>
                                        <div className={'status ' + alltarea.estado}></div>
                                        <p className='title'>{alltarea.descripcion}</p>
                                    </div>
                                    <img src={alltarea.estado=='pendiente' ? check : x} alt="" className='check' />
                                </div>
                            )
                        })
                    }
                </div>
                <div className='add'><button className='btn-add'>+</button></div>
            </section>
        </div>
    )
}

export default App
