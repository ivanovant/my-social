import React from 'react'

const Sidebar = () => {
    return (
        <section className="sidebar-left">
            <div className="container">
                <nav>
                    <ul className="nav-links">
                        <li className="nav-links-item"><a href="#" className="nav-link">Известия</a></li>
                        <li className="nav-links-item"><a href="#" className="nav-link">Товарищи</a></li>
                        <li className="nav-links-item"><a href="#" className="nav-link">Фотокарточки</a></li>
                        <li className="nav-links-item"><a href="#" className="nav-link">Симфонии</a></li>
                        <li className="nav-links-item"><a href="#" className="nav-link">Видеопленки</a></li>
                        <li className="nav-links-item"><a href="#" className="nav-link">Товарищества</a></li>
                    </ul>
                </nav>
            </div>
            {/* /.container */}
        </section>
        )
}