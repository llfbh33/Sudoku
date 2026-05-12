import { useNavigate } from 'react-router-dom';
import './MenuPage.css'

const MenuPage = () => {
    const navigate = useNavigate();

    const handleLevel = (level) => {
        navigate(`/sudoku/${level}`);
    }

    return (
        <>
            <section id="board-background">
                <div className="mistake-container">
                    Settings go up here
                </div>
            </section>

            <section id="level-background">
                <div id="level-main-outer">
                    <div id="level-main-inner">
                        <h1>Lets Play Some Sudoku!</h1>
                        <div className='level-buttons-container'>
                            <div className='level-button' onClick={() => handleLevel('beginner')}>Beginer</div>
                            <div className='level-button' onClick={() => handleLevel('easy')}>Easy</div>
                            <div className='level-button' onClick={() => handleLevel('medium')}>Medium</div>
                            <div className='level-button' onClick={() => handleLevel('hard')}>Hard</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MenuPage;