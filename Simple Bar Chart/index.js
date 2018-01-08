var data = [30, 86, 168, 281, 303, 365];

d3.select('.chart')
    .selectAll('div')
    .data(data)
        .enter()
        .append('div')
        .style('width', (d)=>{
            return d + 'px';
        })
        .text((d)=>{
            return d;
        })

