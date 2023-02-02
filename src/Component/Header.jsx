import troll from '../images/troll.png'
export default function Header() {
    return (
        <header className='header'>
            <img src={troll} alt="" className='header--image'/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Project - Project 3</h4>
        </header>
    )
}