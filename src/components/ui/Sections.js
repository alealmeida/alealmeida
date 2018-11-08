
import ScrollAnim from 'rc-scroll-anim';
import ReactDOM from 'react-dom';
import React from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';

import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import AriaModal from '../../react-aria-modal';
import FocusTrap from 'focus-trap-react';

import content from './SectionsContent';
import {Contexto, datas} from './SectionsContexto';
import Botao from './SectionsBotoes';

// const FocusTrap = require('focus-trap-react');
// const AriaModal = require('../../react-aria-modal');

//ScrollAnim.scrollScreen.unMount({ });


const Link = ScrollAnim.Link;
const Element = ScrollAnim.Element;
const ScrollOverPack = ScrollAnim.OverPack;
const EventListener = ScrollAnim.Event;
const ScrollParallax = ScrollAnim.Parallax;

function find(id) {
  return content.find(p => p.id ===id);
}
function Sections() {
  // this.state = {
  //   modalActive: false
  // };
    return  ( 
      <span>
          <Home />
      </span>
     
    )
  }
  
  function Toolbar(props) {
    return (
      <Botao onClick={props.changeContexto}>
        Change Theme
      </Botao>
    );
  }
  class Home extends React.Component {
    // constructor(props) {
    //         super(props);
    //         this.state = {
    //           modalActive: false,
    //           data: datas.expandido,
    //         };

    //         this.toggleContexto = () => {
    //           this.setState(state => ({
    //             data:
    //               state.data === datas.dark
    //                 ? datas.expandido
    //                 : datas.collapsado,
    //           }));
    //         };
        
    // this.activateModal = this.activateModal.bind(this);
    // this.deactivateModal = this.deactivateModal.bind(this);
    // this.getApplicationNode = this.getApplicationNode.bind(this);
    //       }
        
    //       activateModal = () => {
    //         this.setState({ modalActive: true });
    //       };
        
    //       deactivateModal = () => {
    //         this.setState({ modalActive: false });
    //       };
        
    //       getApplicationNode = () => {
    //         return document.getElementById('application');
    //       };
    //       // find();
          
    constructor(props) {
      super(props);
  
      this.state = {
        modalActive: false,
      };
  
      this.activateModal = this.activateModal.bind(this);
      this.deactivateModal = this.deactivateModal.bind(this);
      this.getApplicationNode = this.getApplicationNode.bind(this);
    }
    
    activateModal = () => {
      this.setState({ modalActive: true });
    };
  
    deactivateModal = () => {
      this.setState({ modalActive: false });
    };
    
    getApplicationNode() {
      return document.getElementById('application');
    }
      
        render() {
          
        return (
          <div>
          
            
          
          
           <Intro match={{ params: { id: 0}, titulo: 'Intro' }} />
          {content.map(i => (
            

          <ScrollOverPack id={ i.hash + i.id }   className={ i.classe + i.id  } style={{ backgroundColor: i.bg , 'z-index': i.zindex }}
            playScale={0.1} >
            <TweenOne className={"tween-one conteudo-colapsado"} key="0" 
                  animation={{  delay: 200, duration: 0, translateY: 0, opacity: 1 }}
                  style={{ transform: 'translateY(0px)', opacity: 0 }} >          
                    <h2>{i.h2}</h2>
                    <div>{i.descricao}</div>
                    


          <AriaModal
            titleText="demo four"
            onExit={this.deactivateModal}
            initialFocus="#demo-four-deactivate"
            mounted={this.state.modalActive}
            underlayStyle={{ paddingTop: '0' }}
          >

                
            <div id="demo-four-modal" className="modal" style={{ background: '#dddddd'}}>
              <div className="modal-body">
              <button id="demo-four-deactivate" className="ver_mais" style={{position: 'fixed', top: '2em', right: '1em', background: 'transparent', border: 0 }} onClick={this.deactivateModal}>
                  fechar
                </button>
                  <div className={ i.classe + i.id  } >
                    <div className="tween-one" >
                      <h2>{i.h2}</h2>
                            <div>{i.descricao}</div>
                    </div>
                  </div>
                  <div className="pack-page" 
        style={{
          backgroundColor: '#aaa',
          position: 'relative',
          textAlign: 'center',
          fontSize: 36,
        }}
      >
        <ScrollParallax always={true}
          animation={{ translateY: 120, opacity: 1, ease: 'linear', playScale: [0, 2] }}
          style={{ transform: 'translateY(420px) scale(.8)', color: '#fff' }}
        >
          <img
            src="https://os.alipayobjects.com/rmsportal/CrVCkwvtTQQvQHL.png"
            style={{ width: 100 }}
            alt="img"
          />
        </ScrollParallax>
        <ScrollParallax
          animation={{ translateY: 20, opacity: 1, ease: 'linear', playScale: [0, 1.5] }}
          style={{ transform: 'translateY(380px) scale(.9)', color: '#fff' }}
        >
          <img
            src="https://os.alipayobjects.com/rmsportal/sfmdyWNlweIvfUh.png"
            style={{ width: 150 }}
            alt="img"
          />
        </ScrollParallax>
        <ScrollParallax
          animation={{ translateY: -100, opacity: 1, ease: 'linear', playScale: [0, 1.2] }}
          style={{ transform: 'translateY(320px)', color: '#fff' }}
        >
          <img
            src="https://os.alipayobjects.com/rmsportal/sfmdyWNlweIvfUh.png"
            style={{ width: 200 }}
            alt="img"
          />
        </ScrollParallax>
      </div>
         
          <div>{i.descricao}</div>
        
          
          
                    <div>{i.descricao}</div>
                    
              
            
            </div>
            </div>
          </AriaModal>
          
          <button className="ver_mais" style={{position: 'relative', 'z-index': '1050', top: '2em', background: 'transparent', border: 0 }} onClick={this.activateModal}>
            ver projeto
          </button>
            {/* <button style={{position: 'fixed', 'z-index': '1050', top: '2em', left: '1em' }} onClick={this.activateModal}>
            activate modal
          </button>
                    <Link  style={{position: 'fixed', 'z-index': '1050', top: '2em', left: '1em' }} onClick={this.activateModal.bind(this)} >aaa</Link>         */}
            </TweenOne>
          
          </ScrollOverPack>

          
          



          ))}
         
         </div> 
          
            
            
        );
      }
      }
        
    
function Intro({ match }) {
    let data = find(match.params.id);
    return (

        <Element className="pack-page page0" id='page0' 
            style={{ backgroundColor: '#ffffff' }}
          >
            <QueueAnim key='queueAnim' type={['right','alpha']} className="intro" interval={[200, 700]} delay={800}
                duration={[800, 500]}
                playScale={0.1}>
                <div key='a'>Olá!</div>
                <div key='b'>Sou Alexandre Almeida,</div>
                <div key='c'>Senior Product Designer na <a href="http://ogilvy.com.br">Ogilvy & Mather Brasil</a>,</div>
                <div key='d'></div>
                <div key='e'>São Paulo.</div>
                
            </QueueAnim>
        </Element>
    );
  }
  
  function Conteudo({ match }) {
    let data = find(match.params.id);
    
    
    return (
      
      <ScrollOverPack id={ data.hash + data.id }   className={ data.classe + data.id  } style={{ backgroundColor: data.bg , 'z-index': data.zindex }}
            playScale={0.1} >
        <TweenOne className={"tween-one conteudo-colapsado"} key="0" 
              animation={{  delay: 200, duration: 0, translateY: 0, opacity: 1 }}
              style={{ transform: 'translateY(0px)', opacity: 0 }} >          
                 <h2>{data.h2}</h2>
                 <div>{data.descricao}</div>
                 
                          
        </TweenOne>
      </ScrollOverPack>
      
          
    );
  }
//   function Modal({ match }) {
//     let data = find(match.params.id);
    
    
//     return (

//       <AriaModal
// titleText="demo three"
// focusDialog={true}
// escapeExits={false}
// underlayStyle={{ padding: '0' }}
// aria-describedby='describer'
// data-test-id='test-id'
// mounted={this.state.modalActive}
// >

//             <Modal  match={{ params: { id: 1, className: 'active', titulo: 'Pop'} }}  />
          

//             <Link id="demo-one-deactivate" style={{ position: 'fixed', 'z-index': '1050', right: '3em', top: '4em' }} onClick={this.deactivateModal}>
//              X
//            </Link>
//       <div id="demo-three-modal" className="modal" style={{ background: "#f0f0f0"}}>
//       <div className="nav">
//             <div className="nav-wap">
//                 <Link className="nav-list logo" to={"page"} showHeightActive={['50%', '10%']}
//               >
//                 Alê Almeida
//               </Link>
//               </div>
//             </div>
//         <div className="modal-body">
//         {/* onClick={this.deactivateModal} */}
          
        
//         <div className={ 'pack-page page'}>
//           <div className="tween-one">
//             <h2>{ data.h2}</h2>
//             <div>auihsiuh</div>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
//             ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
//             laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
//             voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
//             cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//           </p>
//         </div>
//         </div>
//         </div>
//       </div>
     
//       </AriaModal>
          
//     );
//   }
  // function Modal({ match }) {
  //   let data = find(match.params.id);
    

  //   return (
  //     <div>
      
  //   </div>
  //   );
  // }
//   class Modal extends React.Component {
//     c
//   class Conteudo extends React.Component {
    
//     constructor(props) {
//         super(props);
    
//         this.state = {
//           modalActive: false,
//           modal: false
//         };
    
//         this.modal = this.modal.bind(this);
//         this.activateModal = this.activateModal.bind(this);
//         this.deactivateModal = this.deactivateModal.bind(this);
//         this.getApplicationNode = this.getApplicationNode.bind(this);
//         this.activateInnerFocusTrap = this.activateInnerFocusTrap.bind(this);
//         this.deactivateInnerFocusTrap = this.deactivateInnerFocusTrap.bind(this);
//       }
    
//       activateModal() {
//         this.setState({ modalActive: true });
        
//       }
    
//       deactivateModal() {
//         this.setState({ modalActive: false });
//       }
    
      
//       activateInnerFocusTrap() {
//         this.setState({ innerFocusTrapActive: true });
//       }
    
//       deactivateInnerFocusTrap() {
//         this.setState({ innerFocusTrapActive: false });
//       }
    
//       getApplicationNode() {
//         return document.getElementById('application');
//       }

//       modal(e) {
//         this.setState({ modal: true })
//         <AriaModal
//             titleText="demo three"
//             onExit={this.deactivateModal}
//             focusDialog={true}
//             escapeExits={false}
//             underlayStyle={{ padding: '0' }}
//             aria-describedby='describer'
//             data-test-id='test-id'
//           >
//             <div id="demo-three-modal" className="modal" style={{ background: "#f0f0f0"}}>
//             <div className="nav">
//                   <div className="nav-wap">
//                       <Link className="nav-list logo" to={"page"+e} showHeightActive={['50%', '10%']}
//                       onFocus={this.onFocus}
//                       onBlur={this.onBlur}
//                     >
//                       Alê Almeida
//                     </Link>
//                     </div>
//                   </div>
//               <div className="modal-body">
                
//                 <Link className="close" style={{ position: 'fixed', right: '1em', top: '1em' }} onClick={this.deactivateModal}>
//                   X
//                 </Link>
                
//               <div className={"pack-page page"+e}>
//                 <div className="tween-one">
//                   <h2>Pop </h2>
//                   <div>auihsiuh</div>
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
//                   ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
//                   laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
//                   voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
//                   cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                 </p>
//               </div>
//               </div>
//               </div>
//             </div>
//           </AriaModal>
        
//       }
//     render() {
       
      
          
      
//       return (
//         <span>
//           <Element className="pack-page page0" id="page0"
//             style={{ backgroundColor: '#ffffff' }}
//           >
//             <QueueAnim key='queueAnim' type={['right','alpha']} className="intro" interval={[200, 700]} delay={800}
//                 duration={[800, 500]}
//                 playScale={0.1}>
//                 <div key='a'>Olá!</div>
//                 <div key='b'>Sou Alexandre Almeida,</div>
//                 <div key='c'>Senior Product Designer na <a href="http://ogilvy.com.br">Ogilvy & Mather Brasil</a>,</div>
//                 <div key='d'></div>
//                 <div key='e'>São Paulo.</div>
//             </QueueAnim>
//           </Element>
          
//           {content.map((route) => ( 
            
//             <ScrollOverPack
//               id={route.id} className={"pack-page  "+ route.id}
//                 style={{ backgroundColor: {...route.conteudo[0]}.bg , 'z-index': route.zindex }}
//                 playScale={0.1}
//                 >
                
                 
                
//                 <TweenOne 
//                       className="tween-one" key="0" 
//                       animation={{  delay: 200, duration: 0, translateY: 0, opacity: 1 }}
//                       style={{ transform: 'translateY(0px)', opacity: 0 }}
//                       >            {console.log({...route.idnum}    )}
//                           <h2>{{...route.conteudo[0]}.titulo} </h2>
//                           <div>{{...route.conteudo[0]}.descricao}</div>
//                           <Link className="expand" to={'route.to'}
//                             onFocus={this.onFocus}
//                             onBlur={this.onBlur}
//                           >
//                             Example4
//                           </Link>
//                             <Link  onClick={this.activateModal, this.modal } >
//                               Ver projeto
//                             </Link>
//                       </TweenOne>    
            
                      
//             </ScrollOverPack>
             
          
            
            
//           )) }
//         </span>
         
//       )
//   }
// }

export default Sections;
ReactDOM.render([<ScrollParallax animation={{x:100}}>Parallax</ScrollParallax>], document.getElementById('modal'));