import { Link } from 'react-router-dom'
import '../styles/Header.css'

export function Header() {
    return (
        <header>
            <div className="header">
                <div className="home">
                    <Link to="/">Teste</Link>
                </div>
            </div>
        </header>
    )
}