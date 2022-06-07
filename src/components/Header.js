// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Gary Mills" />

            <div className='header__content'>
                <h1>I'm Gary Mills</h1>
                <p>Blockchain Developer</p><br />
                <a href="mailto:garydoesweb3@gmail.com" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;