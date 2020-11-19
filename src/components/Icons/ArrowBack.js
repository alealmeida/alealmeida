import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const ArrowBack = ({key, cor, height}) => {
    return (
        <SvgIcon className="jss1 back" component='svg'  style={{
            width: 'auto',
            height: height
        }}  key={key} viewBox="0 0 55 17">
                        <g
                            id="Page-1"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            style={{
                            width: 'auto',
                            height: height
                        }}  fill-rule="evenodd">
                             <g id="Apple-TV-Copy-11" transform="translate(-501.000000, -966.000000)" fill={cor}>
                    <path d="M547.304169,973.866689 L547.304169,966.399999 L555.704169,974.449999 L547.304169,982.5 L547.304169,975.466689 L501,975.466689 L501,973.866689 L547.304169,973.866689 Z" id="Combined-Shape" transform="translate(528.352085, 974.449999) scale(-1, 1) translate(-528.352085, -974.449999) "></path>
                </g>
                        </g>
                    </SvgIcon>
    );
};

export default ArrowBack;
