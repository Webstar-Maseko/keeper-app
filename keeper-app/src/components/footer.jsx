

function Footer(){
    let date = new Date();
    let year = date.getFullYear();
    return <footer> <p>Copyright {year} </p>
    <p>Developed by <a href="https://webstar-maseko.herokuapp.com/" >Webstar Maseko</a></p></footer>
}
export default Footer;