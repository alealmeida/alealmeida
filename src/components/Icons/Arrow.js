import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Arrow = ({key, cor}) => {
    return (
        <SvgIcon className="jss1" component='svg'  key={key} viewBox="0 0 55 17">
                        <g
                            id="Page-1"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            style={{
                            width: 'auto',
                            height: 'auto'
                        }}  fill-rule="evenodd">
                            <g
                                id="Apple-TV-Copy-11"
                                transform="translate(-501.000000, -966.000000)"
                                fill={cor}>
                                <path
                                    d="M547.304169,973.866689 L547.304169,966.399999 L555.704169,974.449999 L547.304169,982.5 L547.304169,975.466689 L501,975.466689 L501,973.866689 L547.304169,973.866689 Z"
                                    id="Combined-Shape"></path>
                            </g>
                        </g>
                    </SvgIcon>
    );
};

export default Arrow;
