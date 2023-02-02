export default function Meme(props) {
    // console.log(props);
    function onClick() {
        const randomIndex = Math.floor(Math.random() * props.data.length); 
        console.log(props.data[randomIndex].url);
    }
    return (
        <div className="form">
            <div className="form-row">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
            </div>
            <button onClick={onClick}
                className="form--button"
            >
                Get a new meme image 🖼
            </button>
        </div>
    );
}