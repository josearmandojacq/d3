let data = [23, 45, 100, 253, 450];

d3.select('.chart')
    .selectAll('div')
        .data(data)
        .enter()
        .append('div')
            .style('width', (d)=>{
                return d + 'px';
            })
            .style('height', 10)
            .text((d)=>{
                return d;
            })
            .style('background-color', 'red')
            .style('margin', '1px');