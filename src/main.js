const Main = () => {

    const style = {
        color: 'firebrick',
        fontWeight:'bold'
    }
    return ( 
        <div className="main">

            <div className="cta">
                <p id="cta-bold">👋🏾HELLO, I AM <span style={style}>  JAMES ONWUASOANYA</span></p>
            </div>
            <div id="des">I make fast and scalable websites with react, nextjs, javaScript, express.js and mongodb</div>
            
        </div>
     );
}
 
export default Main;