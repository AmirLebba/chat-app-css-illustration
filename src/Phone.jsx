import './Phone.css'
import Avatar from './Asset/avatar.jpg'
import Dog1 from './Asset/dog-image-1.jpg'
import Dog2 from './Asset/dog-image-2.jpg'
import Dog3 from './Asset/dog-image-3.jpg'
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
                        <div id='Provider'>
                            <p id='text'>That sounds great.I'd be happy with that.</p>
                            <p id='text'>Could you send over some pictures of your dog.please?</p>
                        </div>
                        <div id='Client'>
                            <div>
                                <img src={Dog1} alt="Dog photo" />
                                <img src={Dog2} alt="Dog photo" />
                                <img src={Dog3} alt="Dog photo" />
                            </div>
                            <p id='text'>Here are a few pictures. She's a happy girl!</p>
                            <p id='text'>Can you make it?</p>
                        </div>
                        <div id='Provider'>
                            <p id='text'>She looks so happy! The time we discussed works. How long shall I take her out for</p>
                        </div>
                        <div id='option'>
                            <input type="radio" name="price"  value="30 minute walk"  />
                            <p id='Duration'>30 minute walk</p>
                            <p id='price'>$29</p>
                        </div>
                        <div id='option'>
                            <input type="radio" name="price"  value="1 hour walk"/>
                            <p id='Duration'>1 hour walk</p>
                            <p id='price'>$49</p>
                        </div>

                    </div>
                    <footer >
                        <input type="text" name="message" id="message" placeholder='Type a message_' >
                            
                        </input>
                        <button  id='send'>
                        <div className="senderArrow"></div>
                            
                        </button>
                    </footer>
                </div>
            </div>
        </>
    );
}

export default Phone ;