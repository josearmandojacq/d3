var data = [4, 8, 50, 80,120, 500];

/*let body = d3.select('body');
let div = body.append('div');
div.html('Hello World!!!');*/

d3.select('body')
    .style('color', 'black')
    .style('background-color', 'gray')
    

    var x = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([0, 420]);


d3.select('.chart')
    .selectAll('div')
        .data(data)
            .enter()
            .append('div')
            .style("width", (d)=>{
                return d + 'px';
            })
            .text((d)=>{
                return d;
            });