import React from 'react';
import ScrollAnim from 'rc-scroll-anim';
import content from './SectionsContent';
import Twn from './Twn';
import Transition from './Transition';
import Dials from './Dials';
const ScrollOverPack = ScrollAnim.OverPack;

const find = id => content.find(p => p.id === id);

const OverPack = ({data}) => {
    let n = find(data.params.id);

    return (
        <ScrollOverPack
            always={true}
            className={n.classe}
            id={n.hash}
            playScale={0.5}>
            {Twn({n: n, key: 'tweenOne_2'+n.id})}
            <Dials data={{params: {i: n.id}}}/>
            {Transition({n: n, key: 'tweenOne_1'+n.id})}
        </ScrollOverPack>
    )
}
class Sections extends React.Component {
    render() {

        return (content.map((i) => (
                <OverPack key={'op'+i.id}
                    data={{
                    params: {
                        id: i.id
                    }
                }}/>
        )));
    }
}

export default Sections;