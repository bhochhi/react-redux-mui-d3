import React from 'react';
import * as d3 from 'd3';

const HeatMapMatrix = ({data}) => {

    const margin = {
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
        },
        width = 500,
        height = 500,
        size = 10, //data.length
        dataset = [];
    //Creating 2D matrix
    for (var y = 0; y < size; y++) {
        var tempData = [size];
        for (var x = 0; x < size; x++) {
            tempData[x] = Math.random()*10+1;
        };
        dataset.push(tempData);
    };
   
   const colors=["#5490c1", "#00a6ca","#00ccbc","#90eb9d","#ffff8c","#f9d057","#f29e2e","#e76818","#d7191c"],

    colorScale = (val) => {
       return colors[parseInt(Math.random()*10+1)];
    };
   
    return (
        <svg
            width={width + margin.left + margin.right}
            height={height + margin.top + margin.bottom + 100}>
            <g>
                    {
                        dataset.map((row,i)=><g key={i}>
                                {
                                    row.map((col,j) => <rect key={j} x={20+i*40} y={20+j*40} width="40" height="40"  style={{"stroke":'#FFF'}}  fill={colorScale(col[j])} />)
                                }        
                            </g>)
                    }              
            </g>
        </svg>
    );
}

export default HeatMapMatrix;