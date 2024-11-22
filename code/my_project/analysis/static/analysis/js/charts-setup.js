// Function to detect the current theme
function detectTheme() {
  return document.documentElement.getAttribute("data-bs-theme") === "dark" ? "dark" : "light";
}

// Function to apply theme and data to a chart
function applyTheme(chart, data, type, theme) {
  const isDark = theme === 'dark';
  const commonOptions = {
    backgroundColor: isDark ? '#1F1F3A' : '#fff',
    tooltip: { trigger: 'item' },
    legend: {
      textStyle: { color: isDark ? '#fff' : '#000' }
    },
  };

  let options = {};

  if (type === 'pie') {
    options = {
      ...commonOptions,
      legend: {
        ...commonOptions.legend,
        orient: 'vertical',
        left: 'left'
      },
      series: [{
        name: 'Movie Releases',
        type: 'pie',
        radius: ['40%', '70%'],
        data: data,
        itemStyle: {
          borderRadius: 10,
          borderColor: isDark ? '#333' : '#fff',
          borderWidth: 2
        },
        label: { show: false },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'bold',
            color: isDark ? '#fff' : '#000'
          }
        },
        labelLine: { show: false }
      }]
    };
  } else if (type === 'bar') {
    options = {
      ...commonOptions,
      dataset: { source: data },
      grid: { containLabel: true },
      title: {
        text: `Top ${data.length}`,
        left: 'center',
        top: '5%',
        textStyle: {
          color: isDark ? '#fff' : '#000' // Match title color to theme
        }
      },
      xAxis: {
        type: 'value',
        axisLabel: { color: isDark ? '#fff' : '#000' }
      },
      yAxis: {
        type: 'category',
        inverse: true, // Ensures top values appear at the top
        axisLabel: {
          color: isDark ? '#fff' : '#000',
          formatter: function(value) {
            const maxLabelLength = 20;
            return value.length > maxLabelLength ? value.slice(0, maxLabelLength) + '...' : value;
          }
        }
      },
      visualMap: {
        orient: 'horizontal',
        left: 'center',
        min: 0,
        max: Math.max(...data.map(item => item.value)),
        text: ['High Score', 'Low Score'],
        dimension: 1,
        inRange: { color: ['#65B581', '#FFCE34', '#FD665F'] },
        textStyle: {
          color: isDark ? '#fff' : '#000' // Adjust text color based on theme
        }
      },
      series: [{
        type: 'bar',
        encode: { x: 'value', y: 'name' }
      }]
    };
  }

  else if (type === 'bubble') {
    if (!Array.isArray(data) || data.length === 0) {
        console.warn("No data available for bubble chart.");
        return;
    }

    const isDark = theme === 'dark';

    options = {
        backgroundColor: isDark 
            ? new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [
                  { offset: 0, color: '#1F1F3A' }, { offset: 1, color: '#141426' }
              ])
            : new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [
                  { offset: 0, color: '#f7f8fa' }, { offset: 1, color: '#cdd0d5' }
              ]),
        title: {
            text: '',
            left: 'center',
            textStyle: { color: isDark ? '#FFFFFF' : '#000000' }
        },
        legend: {
            right: '10%',
            top: '3%',
            data: [
                { name: 'Oscar', icon: 'circle' },
                { name: 'BAFTA', icon: 'circle' }
            ],
            textStyle: { color: isDark ? '#FFFFFF' : '#000000' },
            inactiveColor: isDark ? '#666666' : '#888888' // Darker grey for light theme inactive state
        },
        grid: {
            left: '8%',
            top: '10%',
            right: '8%',
            bottom: '10%',
        },
        xAxis: {
            type: 'value',
            name: 'Rating',
            min: 7,
            max: 10,
            axisLine: {
                lineStyle: { color: isDark ? '#CCCCCC' : '#666666' }
            },
            axisLabel: { color: isDark ? '#FFFFFF' : '#000000' },
            splitLine: {
                lineStyle: { type: 'dashed', color: isDark ? '#444444' : '#DDDDDD' }
            }
        },
        yAxis: {
            type: 'value',
            name: 'Awards',
            min: 0,
            axisLine: {
                lineStyle: { color: isDark ? '#CCCCCC' : '#666666' }
            },
            axisLabel: { color: isDark ? '#FFFFFF' : '#000000' },
            splitLine: {
                lineStyle: { type: 'dashed', color: isDark ? '#444444' : '#DDDDDD' }
            },
            scale: true
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                return `Title: ${params.data[3]}<br/>Rating: ${params.value[0]}<br/>Awards: ${params.value[1]}<br/>Gross: $${params.value[2]}`;
            }
        },
        series: [
          {
              name: 'Oscar',
              data: data.filter(movie => movie.awardType === 'Oscar').map(movie => [
                  movie.rating,
                  movie.awards,
                  movie.gross,
                  movie.title
              ]),
              type: 'scatter',
              symbolSize: function (data) {
                  return Math.cbrt(data[2]) / 15; // Adjust for visual size
              },
              emphasis: {
                  focus: 'none', // Prevents legend hover from triggering effects
                  label: {
                      show: true,
                      formatter: function (param) {
                          return param.data[3]; // Show title only on bubble hover
                      },
                      position: 'top',
                      color: '#FFFFFF'
                  }
              },
              itemStyle: {
                  shadowBlur: 10,
                  shadowColor: isDark ? 'rgba(120, 36, 50, 0.8)' : 'rgba(204, 46, 72, 0.8)', // Adjust shadow color for light theme
                  shadowOffsetY: 5,
                  color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                      { offset: 0, color: isDark ? 'rgb(255, 192, 0)' : 'rgb(251, 118, 123)' }, // Red gradient for light theme
                      { offset: 1, color: isDark ? 'rgb(204, 130, 0)' : 'rgb(204, 46, 72)' } // Red gradient for light theme
                  ])
              },
              legendHoverLink: false // Disable legend hover effect for this series
          },
          {
              name: 'BAFTA',
              data: data.filter(movie => movie.awardType === 'BAFTA').map(movie => [
                  movie.rating,
                  movie.awards,
                  movie.gross,
                  movie.title
              ]),
              type: 'scatter',
              symbolSize: function (data) {
                  return Math.cbrt(data[2]) / 15; // Consistent scaling
              },
              emphasis: {
                  focus: 'none', // Prevents legend hover from triggering effects
                  label: {
                      show: true,
                      formatter: function (param) {
                          return param.data[3]; // Show title only on bubble hover
                      },
                      position: 'top',
                      color: '#FFFFFF'
                  }
              },
              itemStyle: {
                  shadowBlur: 10,
                  shadowColor: isDark ? 'rgba(25, 100, 150, 0.8)' : 'rgba(25, 100, 150, 0.5)', // Ensure consistent shadow color
                  shadowOffsetY: 5,
                  color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                      { offset: 0, color: 'rgb(129, 227, 238)' }, // Fixed blue for both themes
                      { offset: 1, color: 'rgb(25, 183, 207)' } // Fixed blue gradient for both themes
                  ])
              },
              legendHoverLink: false // Disable legend hover effect for this series
          }
      ]
    };
    // Force ECharts to update background color correctly
    chart.setOption(options, true); // true forces a full refresh on option change
}
else if (type === 'nested_pie') {
  options = {
    ...commonOptions,
    legend: {
      ...commonOptions.legend,
      top: 'bottom',
      data: data.inner.map(item => item.name).concat(data.outer.map(item => item.name))
    },
    series: [
      {
        name: 'Top 3 Genres Distribution',
        type: 'pie',
        radius: ['0%', '30%'],
        label: {
          position: 'inner',
          formatter: '{b}',
          fontSize: 13,
          fontWeight: 'bold',
          color: isDark ? '#333333' : '#000' // Set the label color in dark theme with a light black color #333333 instead of default white color
        },
        labelLine: { show: false },
        data: data.inner
      },
      {
        name: 'Rating Distribution',
        type: 'pie',
        radius: ['40%', '70%'],
        itemStyle: {
          borderRadius: 10,
          borderColor: isDark ? '#333' : '#fff',
          borderWidth: 2
        },
        label: {
          position: 'outside',
          formatter: '{b}: {c} ({d}%)',
          color: isDark ? '#fff' : '#000'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 16,
            fontWeight: 'bold',
            color: isDark ? '#fff' : '#000'
          }
        },
        data: data.outer
      }
    ]
  };
}
else if (type === 'funnel') {
  options = {
    ...commonOptions,
    legend: {
      ...commonOptions.legend,
      orient: 'vertical',
      top: 'middle',
      left: 'left',
      data: data.map(item => item.name)
    },
    series: [
      {
        name: 'Movies Produced',
        type: 'funnel',
        left: '10%',
        top: '5%',
        bottom: '5%',
        width: '80%',
        min: 0,
        max: data[0].value,  // Set max dynamically based on highest count
        minSize: '20%',
        maxSize: '100%',
        sort: 'descending',
        gap: 2,
        label: {
          show: true,
          position: 'inside',
          fontSize: 14,
          color: isDark ? '#fff' : '#000',
          formatter: (params) => {
            return `{${params.name === 'United Kingdom' || params.name === 'France' ? 'ukStyle' : 'defaultStyle'}|${params.name}}`;
          },
          rich: {
            ukStyle: {
              color: '#000',  // Specific color for United Kingdom
              //fontWeight: 'bold'
            },
            defaultStyle: {
              color: isDark ? '#fff' : '#000'  // Default color for other countries
            }
          }
        },
        labelLine: {
          length: 10,
          lineStyle: {
            width: 1,
            type: 'solid',
            color: isDark ? '#fff' : '#000'
          }
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 2
        },
        data: data
      }
    ]
  };
}
else if (type === 'tree') {
  options = {
      ...commonOptions,
      series: [
          {
              type: 'tree',
              data: data,
              top: '5%',
              left: '10%',
              bottom: '5%',
              right: '10%',
              symbolSize: 10,
              label: {
                  position: 'top',
                  verticalAlign: 'middle',
                  align: 'right',
                  fontSize: 10,
                  color: isDark ? '#ffffff' : '#000000'
              },
              leaves: {
                  label: {
                      position: 'right',
                      verticalAlign: 'middle',
                      align: 'left'
                  }
              },
              expandAndCollapse: true,
              initialTreeDepth: 2,
              animationDuration: 750,
              animationEasing: 'linear'
          }
      ]
  };
}
else if (type === 'stacked-bar') {
  // Define color set
  const colorSet = [
    '#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', 
    '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'
  ];

// Custom legend order: Drama first, Others last
  const customOrder = ["Drama", ...data.genres.filter(genre => genre !== "Drama" && genre !== "Others"), "Others"];
// Reorder the series based on the custom order
  const orderedSeries = customOrder.map((name) => {
  const sid = data.genres.indexOf(name); // Get the original index of the genre
  return {
    name, // Genre name
    type: 'bar',
    stack: 'total',
    barWidth: '60%',
    label: {
      show: false,
      formatter: params => `${(params.value * 100).toFixed(1)}%`,
      color: isDark ? '#ffffff' : '#000000',
    },
    data: data.data.map(row => row[sid]), // Map the corresponding data column
  };
});
 
  // Construct options for the chart
  options = {
    ...commonOptions,
    title: {
      left: 'center',
      textStyle: { color: isDark ? '#ffffff' : '#000000' }
    },
    tooltip: {
      trigger: 'axis',
      formatter: function (params) {
        // Extract axis value from the first parameter
        const axisValue = params[0]?.axisValueLabel || 'Unknown';
        let tooltipText = `<strong>${axisValue}</strong><br>`; // Axis value at the top

        // Iterate over series data
        params.forEach((param) => {
            if (param.seriesName && param.data) {
                const percentage = param.data * 100; // Convert value to percentage
                tooltipText += `${param.seriesName}: ${percentage.toFixed(1)}%<br>`;
            }
        });

        return tooltipText || 'No data available';
      },
      axisPointer: {
        type: 'shadow' // For bar charts
      }
    },
    legend: {
      data: data.genres, // Series names
      textStyle: { color: isDark ? '#ffffff' : '#000000' },
      data: customOrder, // Use the reordered legend
    },
    grid: {
      left: '10%',
      right: '10%',
      bottom: '15%',
      top: '15%'
    },
    xAxis: {
      type: 'category',
      data: data.languages, // x-axis categories
      axisLine: { lineStyle: { color: isDark ? '#ffffff' : '#000000' } },
      axisLabel: { color: isDark ? '#ffffff' : '#000000' }
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 1, // Limit the Y-axis to 1
      axisLine: { lineStyle: { color: isDark ? '#ffffff' : '#000000' } },
      axisLabel: { color: isDark ? '#ffffff' : '#000000' }
    },
    color: colorSet, // Apply the custom color set
    series: orderedSeries
  };
}

// Map options
else if (type === 'map') {
  // Prepare pie chart series for each country
  const pieSeries = data.map((country) => ({
    type: 'pie',
    coordinateSystem: 'geo',
    z: 5, // Ensure pies are rendered above the map
    radius: Math.max(10, Math.min(25, country.value /5)), // Adjust size as needed
    center: country.coordinates || [0, 0], // Fallback if coordinates are not provided
    data: country.languages.map((lang) => ({
      name: lang.name,
      value: lang.value,
    })),
    tooltip: {
      trigger: 'item',
      formatter: function (params) {
          return `${country.name}<br>${params.name}: ${params.value} (${params.percent}%)`;
      }
  },
    label: {
      show: false, // Hide labels for simplicity
    },
    labelLine: {
      show: false, // Hide connecting lines
    },
  }));

   // Define color set
   const colorSet = [
    '#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', 
    '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc','#ff8c00', '#32cd32', '#8a2be2'
  ];

  options = {
    ...commonOptions,
    geo: {
      map: 'world',
      roam: true,
      itemStyle: {
        areaColor: '#e7e8ea',
        borderColor: '#999',
      },
      emphasis: {
        itemStyle: {
          areaColor: '#cbb76a',
        },
      },
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      top: 'middle',
      itemGap: 10
    },
    tooltip: {
      trigger: 'item',
      formatter: function (params) {
          if (params.seriesType === 'map') {
              return params.name
                  ? `${params.name}<br>Total Movies: ${params.value || 'No data'}`
                  : 'No data';
          }
      }
  },
    color: colorSet, // Apply the custom color set
    series: [
      {
        type: 'map',
        map: 'world',
        roam: true,
        data: data.map((country) => ({
          name: country.name,
          value: country.value,
        })),
      },
      ...pieSeries, // Add pie chart series
    ],
  };
}
   
  chart.setOption(options);
}

// Function to initialize a chart with a theme
function initChartWithTheme(domId, data, type) {
  const dom = document.getElementById(domId);
  if (!dom) {
    console.warn(`Element with ID ${domId} not found.`);
    return;
  }

  const chart = echarts.init(dom, 'dark', { renderer: 'canvas', useDirtyRect: false });
  const theme = detectTheme();
  applyTheme(chart, data, type, theme);

  const observer = new MutationObserver(() => {
    const newTheme = detectTheme();
    applyTheme(chart, data, type, newTheme);
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-bs-theme'] });

  window.addEventListener('resize', () => chart.resize());
  
}

// Assign to window object to make it globally accessible
window.initChartWithTheme = initChartWithTheme;
