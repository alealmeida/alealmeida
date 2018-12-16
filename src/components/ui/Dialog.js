import React from 'react';
import ScrollAnim from 'rc-scroll-anim';
import Tween from 'rc-tween-one';
import content from './SectionsContent';
const ScrollOverPack = ScrollAnim.OverPack;

const find = id => content.find(p => p.id === id);
const CallDialog = ({m, reverse}) => {
    let a = find(m.p.id)
    return (
        <ScrollOverPack always={true} appear={true} playScale={0.5}>
            <Tween
                reverseDelay={600}
                reverse={reverse}
                style={{
                width: '100vw',
                height: '90vh',
                position: 'relative',
                zIndex: 9,
                color: a.cor3
            }}
                animation={{
                color: '#fff',
                opacity: 1,
                delay: 1200,
                ease: 'easeInOutQuint',
                duration: 1300
            }}
                component={'section'}
                className={"tween-one cabecalho"}>
                <h1 style={{
                    opacity: '1'
                }}>{a.letra}</h1>
            </Tween>
            <Tween
                style={{
                width: '100vw',
                position: 'relative',
                zIndex: 9,
                opacity: 0
            }}
                animation={{
                opacity: 1,
                delay: 2000,
                duration: 1000
            }}
                component={'section'}
                className={"tween-one cabecalho"}>
                <div className='descricao'>{a.descricao}</div>
                <div className='descricao'>{a.descricao}</div>
                <div className='descricao'>{a.descricao}</div>
                <div className='descricao'>{a.descricao}</div>
                <label>{a.label}</label>
                <h2>{a.h2}</h2>
                <div className='descricao'>{a.descricao}</div>
            </Tween>
        </ScrollOverPack>
    )
}
export default CallDialog;
