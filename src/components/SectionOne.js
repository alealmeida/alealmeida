import React from 'react';
import ScrollAnim from 'rc-scroll-anim';
import SvgIcon from '@material-ui/core/SvgIcon';
import screen from './mixins';
const ScrollElement = ScrollAnim.Element;
const ScrollParallax = ScrollAnim.Parallax;

const LoadSection = () => {
    const CONTENT = {
        h2: 'O   que   fazemos  de   melhor',
        items: [
            {
                children: 'A On/Off é uma agência integrada que tem como objetivo proporcionar experiências' +
                        ' relevantes dentro dos meios físico e digital, pois sabemos que as pessoas exper' +
                        'imentam marcas em todos os lugares.',
                key: 1
            }, {
                children: 'E é neste cenário que nasce a On/Off. A agência chega ao mercado com a proposta ' +
                        'de trazer esse ideal para atender as necessidades do público-alvo, que será impa' +
                        'ctado a qualquer momento.',
                key: 2
            }
        ]
    };
    const PROP = {
        timeline_1: [
            {
                ease: 'easeOutBack',
                playScale: [
                    -1, -1
                ],
                opacity: 0.15,
                scale: 0.6,
                translateY: screen(-4),
                translateX: screen(-1)
            }, {
                opacity: 1,
                ease: 'easeInOutElastic',
                playScale: [
                    -1.8, 3.5
                ],
                scale: 1,
                translateY: screen(3),
                translateX: screen(0)
            }, {
                ease: 'easeInQuint',
                opacity: 1,
                playScale: [
                    -0.1, 1.2
                ],
                translateY: '0%',
            }
        ],
        timeline_2: 
            [
                {
                    opacity: 0.03,
                    ease: 'linear',
                    playScale: [
                        -1, -1
                    ],
                    translateY: screen(16)
                },{
                    opacity: 1,
                    ease: 'linear',
                    playScale: [
                        0.1, 0.3
                    ]
                }, {
                    ease: 'linear',
                    playScale: [
                        -0.6, 1.2
                    ],
                    translateY: screen(-5)
                }
            ]
        
    }
    return (
        <ScrollElement component='section' id='page1'>
            <ScrollParallax
                component='header'
                always={true}
                animation={PROP.timeline_1}>
                <h1>
                <SvgIcon className="jss1" component='svg' viewBox="0 900 1500 1300">
                    <g
                        id="Page-1"
                        stroke="none"
                        strokeWidth="1"
                        style={{
                        width: 'auto',
                        height: 'auto'
                    }}
                        fill="none"
                        fillRule="evenodd">
                        <g id="Apple-TV-Copy-8" fill="#FF2B6A">
                            <path
                                d="M613.185385,1284.45808 C576.5109,1405.27491 464.250198,1493.20756 331.451725,1493.20756 L330.393192,1493.20756 C167.810293,1493.20756 36.0108122,1361.40808 36.0108122,1198.82518 L36.0108122,1197.37156 C36.0108122,1034.78866 167.810293,902.989181 330.393192,902.989181 L331.451725,902.989181 C473.276868,902.989181 591.677335,1003.28214 619.598998,1136.81392 C647.884818,1003.33951 766.393728,903.186724 908.294574,903.186724 C1071.27888,903.186724 1203.40376,1035.31161 1203.40376,1198.29591 L1203.40376,1493.01002 L1056.07017,1493.01002 L1056.07017,1197.71367 C1056.07017,1115.77009 989.641774,1049.34169 907.698191,1049.34169 C825.754608,1049.34169 759.326209,1115.77009 759.326209,1197.71367 L759.326209,1493.01002 L613.185385,1493.01002 L613.185385,1284.45808 Z M615.207778,1749.90108 L645.810942,1749.90108 C657.825078,1629.13918 759.722126,1534.83028 883.646196,1534.83028 C895.463861,1534.83028 907.081214,1535.68792 918.439408,1537.34435 L902.661905,1665.94132 L879.503315,1665.94132 C831.269296,1665.94132 791.646077,1702.80854 787.275559,1749.90108 L882.474327,1749.90108 L904.625226,1749.90108 C916.639362,1629.13918 1018.53641,1534.83028 1142.46048,1534.83028 C1154.27815,1534.83028 1165.8955,1535.68792 1177.25369,1537.34435 L1161.47619,1665.94132 L1138.3176,1665.94132 C1090.08358,1665.94132 1050.46036,1702.80854 1046.08984,1749.90108 L1141.28861,1749.90108 L1141.28861,1838.52525 L1045.68959,1838.52525 L1045.68959,2124.65357 L903.440356,2124.65357 L903.440356,1838.52525 L882.474327,1838.52525 L786.87531,1838.52525 L786.87531,2124.65357 L644.626072,2124.65357 L644.626072,1838.52525 L625.852022,1838.52525 C621.583652,1997.38347 491.466534,2124.85112 331.577754,2124.85112 L330.51922,2124.85112 C167.936322,2124.85112 36.1368412,1993.05164 36.1368412,1830.46874 L36.1368412,1829.01512 C36.1368412,1666.43222 167.936322,1534.63274 330.51922,1534.63274 L331.577754,1534.63274 C466.75321,1534.63274 580.649098,1625.7414 615.207778,1749.90108 Z M479.805168,1829.14554 C479.805168,1747.20196 413.376769,1680.77356 331.433186,1680.77356 L331.404471,1680.77356 C249.460888,1680.77356 183.032489,1747.20196 183.032489,1829.14554 C183.032489,1911.08913 249.460888,1977.51753 331.404471,1977.51753 L331.433186,1977.51753 C413.376769,1977.51753 479.805168,1911.08913 479.805168,1829.14554 Z M479.679139,1197.50199 C479.679139,1115.5584 413.25074,1049.13 331.307157,1049.13 L331.278442,1049.13 C249.334859,1049.13 182.90646,1115.5584 182.90646,1197.50199 C182.90646,1279.44557 249.334859,1345.87397 331.278442,1345.87397 L331.307157,1345.87397 C413.25074,1345.87397 479.679139,1279.44557 479.679139,1197.50199 Z M1239.69508,1637.08251 L1239.69508,1594.36714 C1273.66675,1576.93229 1302.41201,1546.4213 1302.41201,1492.37328 L1238.82402,1492.37328 L1238.82402,1365.97063 L1366,1365.97063 L1366,1485.39934 C1366,1574.31706 1306.76735,1624.87812 1239.69508,1637.08251 Z M1187.96592,2125 L1187.96592,1998.9274 L1315.1419,1998.9274 L1315.1419,2125 L1187.96592,2125 Z"
                                id="Combined-Shape"></path>
                        </g>
                    </g>
                </SvgIcon></h1>
            </ScrollParallax>
            <ScrollParallax
                component='article'
                
                always={true}
                animation={PROP.timeline_2}>{CONTENT
                    .items
                    .map((item) => (
                        <p key={item.key}>{item.children}</p>
                    ))}
            </ScrollParallax>
        </ScrollElement>
    );
};

class Section extends React.Component {

    render() {
        return (<LoadSection/>)
    }
}
export default Section;
