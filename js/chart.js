'use strict';
let canvasElem = document.getElementById('chart')
const myAppState = new AppState();
myAppState.loadItems();
/* TODO:
* - Instantiate a new AppState :^)
* - Use a method on that AppState to load vote data from localStorage. :^)
* - Create a data object for chart.js using your AppState's allProducts array.
* - Combine the data object with configuration information for chart.js type, colors, etc
* - Call chart.js with the configuration and the canvasElem
*
*/
function renderChart() {
    // Step 1: Access the allProducts array from the AppState
    const allProducts = myAppState.allProducts;
    // Step 2: Create a data object for Chart.js using allProducts
    const data = {
      labels: allProducts.map(product => product.name),
      datasets: [{
        label: 'Times Clicked',
        data: allProducts.map(product => product.timesClicked),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      }, {
        label: 'Times Shown',
        data: allProducts.map(product => product.timesShown),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      }]
    };
    // Step 3: Define the configuration for the chart
    const chartConfig = {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };
    // Step 4: Call Chart.js with the configuration and canvas element
    const myChart = new Chart(canvasElem, chartConfig);
  }
  renderChart();