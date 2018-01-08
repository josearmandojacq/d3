let data = [4,8,15,16,23,42];

let width = 420,
    barHeight= 20;

let x = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, width])

let chart = d3.select('.chart')
            .attr('width', width)
            .attr('height', barHeight * data.length);


let bar = chart.selectAll('g')
            .data(data)
                .enter()
                .append('g')
                .attr('transform', (d,i)=>{
                    return `translate(0, ${i + barHeight})`;
                })
                .attr('padding', '10')

bar.append('rect')
    .attr('width', x)
    .attr('height', barHeight - 1)
    .attr('fill', 'steelblue');

bar.append('text')
    .attr('x', (d)=>{
        return x(d) -3;
    })
    .attr('y', barHeight / 2)
    .attr('dy', '.35em')
    .attr('fill', 'white')
    .attr('font', '10px sans-serif')
    .attr('text-anchor', 'end')
    .text((d)=>{
        return d;
    });