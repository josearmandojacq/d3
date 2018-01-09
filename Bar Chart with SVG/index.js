let data = [42, 23, 16, 13, 10, 8];

let width = 420,
    barHeight = 20;
//Scaling
let x = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, width]);

let y = d3.scaleLinear()
    .range([barHeight, 0])

//Adding the axis
let xAxis = d3.axisBottom()
    .scale(x)

let yAxis = d3.axisLeft()
    .scale(y)
        

let chart = d3.select(".chart")
    .attr("width", width)
    .attr("height", barHeight * data.length);
    
chart.append('g')
    .attr('transform', 'translate(0,50)')
    .attr('class', 'x axis')
    .call(xAxis);

let bar = chart.selectAll(".barG")
    .data(data)
    .enter().append("g")
    .attr('class', 'barG')
    .attr("transform", (d, i) => { return "translate(0," + i * barHeight + ")"; });


bar.append('g')
    .attr('class', 'y axis')
    .call(yAxis)
    

bar.append("rect")
    .attr("width", x)
    .attr("height", barHeight - 1);

bar.append("text")
    .attr("x", (d) => { return x(d) - 3; })
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .text((d) => { return d; });