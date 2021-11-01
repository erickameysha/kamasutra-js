import logo from './logo.svg';
import './App.css';


const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/256px-Electron_Software_Framework_Logo.svg.png"
                    alt=""/>
            </header>
            <nav className='nav'>
                <div>
                    <a href="#">Profile</a>
                </div>
                <div>
                    <a href="#">Messages</a>
                </div>
                <div>
                    <a href="#">News</a>
                </div>
                <div>
                    <a href="#">Musik</a>
                </div>
                <div>
                    <a href="#">Settings</a>
                </div>
            </nav>
            <div className='content'>
                <div>
                    <img
                        src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                        alt=""/>
                </div>
                <div>
                    {/*<img src="https://im0-tub-ru.yandex.net/i?id=84dbd50839c3d640ebfc0de20994c30d&n=27&h=480&w=480" alt=""/>*/}
                    ava + description
                </div>
                <div>
                    My post
                    <div>
                        New post
                    </div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
}


export default App;
