import './Phone.css'
import Avatar from './Asset/avatar.jpg'
function Phone() {
    return (
        <>
            <div className="body">
                <div className="Notch"></div>
                <div className="screen">
                    <div className="navbar">
                        <div className="arrow"></div>
                        <div className="info">
                            <img src={Avatar} alt="Avatar" />
                            <div>
                                <p id='name'>Samuel Green</p>
                                <p id='status'>Available to Walk</p>
                            </div>
                        </div>
                        <div className="dots">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="Text">
                        <div>
                            <p>That sounds great.I'd be happy with that.</p>
                            <p>Could you send over some pictures of your dog.please?</p>
                        </div>
                        <div>
                            <div>
                                <img src="./Asset/dog-image-1.jpg" alt="" />
                                <img src="./Asset/dog-image-2.jpg" alt="" />
                                <img src="./Asset/dog-image-3.jpg" alt="" />
                            </div>
                            <p>Here are a few pictures. She's a happy girl!</p>
                            <p>Can you make it?</p>
                        </div>
                        <div>
                            <p>She looks so happy! The time we discussed works. How long shall I take her out for</p>
                        </div>
                    </div>
                    <div className="footer"></div>
                </div>
            </div>
        </>
    );
}

export default Phone ;