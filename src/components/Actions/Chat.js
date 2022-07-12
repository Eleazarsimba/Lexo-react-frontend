import React from 'react'

const Chat = () => {
    return (  
        <div>
            <div className="container-fluid" style={{width: '70%'}}>
                <div className="card">
                    <div className ="card col-sm-5 offset-sm-7" id="msgdata">
                        <p><b><u>You</u></b></p>
                        <p> Message</p>
                        <p className="messagetime" > Time</p>
                    </div>
                    <div className ="card col-sm-5" id="msgdata">
                        <p><b><u>Receiver1</u></b></p>
                        <p> Message</p>
                        <p className="messagetime"> Time</p>
                    </div>
                </div>     
                            <br />
                    <form>
                        {/* <input type="hidden" name="sender_Id" value="Name" /> */}
                            <div className="form-group">
                                <textarea className="form-control" name="message" rows="2" placeholder="Type your message here..."></textarea>
                            </div>
                            {/* <input type="hidden" name="sender_Id" value="text" /> */}
                        <div className="msgactivity">
                            <div className="sendtext"> 
                                <button type="submit" className="btn btn-primary" >Send</button>
                            </div>
                            <div className="cleartext"> 
                                <button type="clear" className="btn btn-danger" >Clear</button>
                            </div>
                        </div>
                    </form>  
            </div>                  
                                               
        </div>
                                  
    )
}

export default Chat
