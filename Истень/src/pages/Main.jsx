import FooterLinks from '../Elements/FooterLinks';
import Header from '../Elements/Header';
import Items from '../Elements/Items';
import Nav_main from '../Elements/Nav_main';

const Main = () => {
    return (
        <div className="container">
        <Header/>
        <Nav_main/>
        <Items/>
        <FooterLinks/>
       </div>
    );
};

export default Main;