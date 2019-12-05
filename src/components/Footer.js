import React from 'react';
import ScrollAnim from 'rc-scroll-anim';
import screen from './mixins';
const ScrollElement = ScrollAnim.Element;
const ScrollParallax = ScrollAnim.Parallax;

const LoadSection = () => {
    const CONTENT = {
        h3: 'Obrigado pela visita!',
        descricao: 'Você pode entrar em contato por'
    };
    return (
        <div id='footer'>
            <ScrollParallax component='header' always={true} >
                <h3>{CONTENT.h3}</h3>
            </ScrollParallax>
            <ScrollParallax component='article' always={true}>
                <p> Você pode entrar em contato comigo pelo email <a href='mailto:ale.142@icloud.com' target={'_blank'} className='white'> ale.142@icloud.com</a> ou acessar o <a href='https://www.linkedin.com/in/almeidaale/' target={'_blank'} className='white'>meu Linkedin</a> e <a href='https://instagram.com/142.ale' target={'_blank'} className='white'> Instagram</a>. 
                </p>
            </ScrollParallax>
        </div>
    );
};

class Footer extends React.Component {

    render() {
        return (<LoadSection/>)
    }
}
export default Footer;
