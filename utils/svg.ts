const geometricSVG = [
  {
    name: "Concentric Circles",
    type: "Geometric Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='concentric_circles_pattern' patternUnits='userSpaceOnUse' width='20' height='20'><circle cx='10' cy='10' r='5' fill='orange' /><circle cx='10' cy='10' r='3' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#concentric_circles_pattern)' /></svg>",
  },
  {
    name: "Diagonal Stripes",
    type: "Geometric Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='diagonal_stripes_pattern' patternUnits='userSpaceOnUse' width='20' height='20'><rect x='0' y='0' width='20' height='5' fill='green' /><rect x='0' y='5' width='20' height='5' fill='white' /><rect x='0' y='10' width='20' height='5' fill='green' /><rect x='0' y='15' width='20' height='5' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#diagonal_stripes_pattern)' /></svg>",
  },
  {
    name: "Triangles",
    type: "Geometric Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='triangles_pattern' patternUnits='userSpaceOnUse' width='20' height='20'><polygon points='0,0 10,0 0,10' fill='purple' /><polygon points='10,10 20,10 20,20' fill='purple' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#triangles_pattern)' /></svg>",
  },
  {
    name: "Hexagons",
    type: "Geometric Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='hexagons_pattern' patternUnits='userSpaceOnUse' width='30' height='30'><polygon points='5,0 15,0 20,8.66 15,17.32 5,17.32 0,8.66' fill='pink' /><polygon points='25,0 30,8.66 25,17.32 20,17.32 20,8.66 25,0' fill='pink' /><polygon points='5,17.32 15,17.32 10,25.98 0,25.98' fill='pink' /><polygon points='20,17.32 30,17.32 30,25.98 10,25.98 15,17.32' fill='pink' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#hexagons_pattern)' /></svg>",
  },
  {
    name: "Zigzag Lines",
    type: "Geometric Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='zigzag_lines_pattern' patternUnits='userSpaceOnUse' width='10' height='10'><line x1='0' y1='0' x2='10' y2='0' stroke='red' stroke-width='1' /><line x1='0' y1='5' x2='10' y2='5' stroke='red' stroke-width='1' /><line x1='0' y1='10' x2='10' y2='10' stroke='red' stroke-width='1' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#zigzag_lines_pattern)' /></svg>",
  },
  {
    name: "Diamond Grid",
    type: "Geometric Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='diamond_grid_pattern' patternUnits='userSpaceOnUse' width='20' height='20'><rect x='0' y='0' width='10' height='10' fill='blue' /><rect x='10' y='10' width='10' height='10' fill='blue' /><rect x='10' y='0' width='10' height='10' fill='white' /><rect x='0' y='10' width='10' height='10' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#diamond_grid_pattern)' /></svg>",
  },
  {
    name: "Wavy Stripes",
    type: "Geometric Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='wavy_stripes_pattern' patternUnits='userSpaceOnUse' width='20' height='20'><path d='M0,5 Q10,0 20,5 T40,5' fill='cyan' /><path d='M0,15 Q10,10 20,15 T40,15' fill='cyan' /><path d='M0,25 Q10,20 20,25 T40,25' fill='cyan' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#wavy_stripes_pattern)' /></svg>",
  },
  {
    name: "Dotted Circles",
    type: "Geometric Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='dotted_circles_pattern' patternUnits='userSpaceOnUse' width='20' height='20'><circle cx='5' cy='5' r='1' fill='green' /><circle cx='15' cy='15' r='1' fill='green' /><circle cx='5' cy='15' r='1' fill='green' /><circle cx='15' cy='5' r='1' fill='green' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#dotted_circles_pattern)' /></svg>",
  },
  {
    name: "Squares and Crosses",
    type: "Geometric Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='squares_and_crosses_pattern' patternUnits='userSpaceOnUse' width='20' height='20'><rect x='0' y='0' width='10' height='10' fill='yellow' /><rect x='10' y='10' width='10' height='10' fill='yellow' /><line x1='0' y1='0' x2='20' y2='20' stroke='black' stroke-width='1' /><line x1='0' y1='20' x2='20' y2='0' stroke='black' stroke-width='1' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#squares_and_crosses_pattern)' /></svg>",
  },
  {
    name: "Radiant Gridwork",
    type: "Geometric Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='geometric_pattern_11' patternUnits='userSpaceOnUse' width='40' height='40'><rect x='0' y='0' width='40' height='40' fill='white' /><rect x='0' y='0' width='20' height='20' fill='gray' /><rect x='20' y='20' width='20' height='20' fill='gray' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#geometric_pattern_11)' /></svg>",
  },
  // Geometric Pattern (12)
  {
    name: "Circular Lattice",
    type: "Geometric Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='geometric_pattern_12' patternUnits='userSpaceOnUse' width='50' height='50'><rect x='0' y='0' width='50' height='50' fill='white' /><circle cx='25' cy='25' r='10' fill='gray' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#geometric_pattern_12)' /></svg>",
  },
  // Geometric Pattern (13)
  {
    name: "Dual Orb Illusion",
    type: "Geometric Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='geometric_pattern_13' patternUnits='userSpaceOnUse' width='80' height='80'><rect x='0' y='0' width='80' height='80' fill='white' /><circle cx='40' cy='40' r='20' fill='gray' /><circle cx='60' cy='60' r='20' fill='gray' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#geometric_pattern_13)' /></svg>",
  },
  // Geometric Pattern (14)
  {
    name: "Triangular Whirlpool",
    type: "Geometric Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='geometric_pattern_14' patternUnits='userSpaceOnUse' width='60' height='60'><rect x='0' y='0' width='60' height='60' fill='white' /><circle cx='30' cy='30' r='15' fill='gray' /><circle cx='15' cy='45' r='15' fill='gray' /><circle cx='45' cy='45' r='15' fill='gray' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#geometric_pattern_14)' /></svg>",
  },
  // Geometric Pattern (15)
  {
    name: "Angular Tessellation",
    type: "Geometric Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='geometric_pattern_15' patternUnits='userSpaceOnUse' width='70' height='70'><rect x='0' y='0' width='70' height='70' fill='white' /><polygon points='35,0 70,70 0,70' fill='gray' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#geometric_pattern_15)' /></svg>",
  },
  // Geometric Pattern (16)
  {
    name: "Diamond Mirage",
    type: "Geometric Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='geometric_pattern_16' patternUnits='userSpaceOnUse' width='80' height='80'><rect x='0' y='0' width='80' height='80' fill='white' /><polygon points='0,0 40,80 80,0' fill='gray' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#geometric_pattern_16)' /></svg>",
  },
  // Geometric Pattern (17)
  {
    name: "Slanted Chevron Mosaic",
    type: "Geometric Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='geometric_pattern_17' patternUnits='userSpaceOnUse' width='60' height='60'><rect x='0' y='0' width='60' height='60' fill='white' /><polygon points='0,0 60,30 0,60' fill='gray' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#geometric_pattern_17)' /></svg>",
  },
  // Geometric Pattern (18)
  {
    name: "Interlocking Pyramids",
    type: "Geometric Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='geometric_pattern_18' patternUnits='userSpaceOnUse' width='80' height='80'><rect x='0' y='0' width='80' height='80' fill='white' /><polygon points='0,40 40,0 80,40 40,80' fill='gray' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#geometric_pattern_18)' /></svg>",
  },
  // Geometric Pattern (19)
  {
    name: "Cascading Diamond Net",
    type: "Geometric Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='geometric_pattern_19' patternUnits='userSpaceOnUse' width='90' height='90'><rect x='0' y='0' width='90' height='90' fill='white' /><polygon points='0,30 30,0 60,30 30,60' fill='gray' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#geometric_pattern_19)' /></svg>",
  },
  // Geometric Pattern (20)
  {
    name: "Zigzag Prism Dance",
    type: "Geometric Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='geometric_pattern_20' patternUnits='userSpaceOnUse' width='90' height='90'><rect x='0' y='0' width='90' height='90' fill='white' /><polygon points='0,0 30,90 60,0' fill='gray' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#geometric_pattern_20)' /></svg>",
  },
];

const stripesSVG = [
  {
    name: "Diagonal Stripes (1)",
    type: "Stripes Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='diagonal_stripes_1' patternUnits='userSpaceOnUse' width='20' height='20'><rect x='0' y='0' width='20' height='5' fill='blue' /><rect x='0' y='5' width='20' height='5' fill='white' /><rect x='0' y='10' width='20' height='5' fill='blue' /><rect x='0' y='15' width='20' height='5' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#diagonal_stripes_1)' /></svg>",
  },
  {
    name: "Diagonal Stripes (2)",
    type: "Stripes Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='diagonal_stripes_2' patternUnits='userSpaceOnUse' width='20' height='20'><rect x='0' y='0' width='5' height='20' fill='red' /><rect x='5' y='0' width='5' height='20' fill='white' /><rect x='10' y='0' width='5' height='20' fill='red' /><rect x='15' y='0' width='5' height='20' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#diagonal_stripes_2)' /></svg>",
  },
  {
    name: "Horizontal Stripes (1)",
    type: "Stripes Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='horizontal_stripes_1' patternUnits='userSpaceOnUse' width='10' height='10'><rect x='0' y='0' width='10' height='5' fill='green' /><rect x='0' y='5' width='10' height='5' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#horizontal_stripes_1)' /></svg>",
  },
  {
    name: "Horizontal Stripes (2)",
    type: "Stripes Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='horizontal_stripes_2' patternUnits='userSpaceOnUse' width='10' height='10'><rect x='0' y='0' width='10' height='2' fill='orange' /><rect x='0' y='2' width='10' height='2' fill='white' /><rect x='0' y='4' width='10' height='2' fill='orange' /><rect x='0' y='6' width='10' height='2' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#horizontal_stripes_2)' /></svg>",
  },
  {
    name: "Vertical Stripes (1)",
    type: "Stripes Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='vertical_stripes_1' patternUnits='userSpaceOnUse' width='10' height='10'><rect x='0' y='0' width='5' height='10' fill='purple' /><rect x='5' y='0' width='5' height='10' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#vertical_stripes_1)' /></svg>",
  },
  {
    name: "Vertical Stripes (2)",
    type: "Stripes Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='vertical_stripes_2' patternUnits='userSpaceOnUse' width='10' height='10'><rect x='0' y='0' width='2' height='10' fill='cyan' /><rect x='2' y='0' width='2' height='10' fill='white' /><rect x='4' y='0' width='2' height='10' fill='cyan' /><rect x='6' y='0' width='2' height='10' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#vertical_stripes_2)' /></svg>",
  },
  {
    name: "Zigzag Stripes",
    type: "Stripes Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='zigzag_stripes' patternUnits='userSpaceOnUse' width='10' height='10'><line x1='0' y1='0' x2='10' y2='0' stroke='black' stroke-width='1' /><line x1='0' y1='5' x2='10' y2='5' stroke='black' stroke-width='1' /><line x1='0' y1='10' x2='10' y2='10' stroke='black' stroke-width='1' /><line x1='5' y1='0' x2='10' y2='5' stroke='black' stroke-width='1' /><line x1='0' y1='5' x2='5' y2='10' stroke='black' stroke-width='1' /><line x1='0' y1='0' x2='-5' y2='5' stroke='black' stroke-width='1' /><line x1='0' y1='5' x2='-5' y2='10' stroke='black' stroke-width='1' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#zigzag_stripes)' /></svg>",
  },
  {
    name: "Slanted Stripes",
    type: "Stripes Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='slanted_stripes' patternUnits='userSpaceOnUse' width='10' height='10'><line x1='0' y1='0' x2='10' y2='10' stroke='brown' stroke-width='1' /><line x1='0' y1='5' x2='10' y2='-5' stroke='brown' stroke-width='1' /><line x1='-5' y1='5' x2='5' y2='-5' stroke='brown' stroke-width='1' /><line x1='-5' y1='10' x2='5' y2='0' stroke='brown' stroke-width='1' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#slanted_stripes)' /></svg>",
  },
  {
    name: "Parallel Stripes",
    type: "Stripes Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='parallel_stripes' patternUnits='userSpaceOnUse' width='10' height='10'><line x1='0' y1='0' x2='10' y2='0' stroke='magenta' stroke-width='1' /><line x1='0' y1='1' x2='10' y2='1' stroke='magenta' stroke-width='1' /><line x1='0' y1='2' x2='10' y2='2' stroke='magenta' stroke-width='1' /><line x1='0' y1='3' x2='10' y2='3' stroke='magenta' stroke-width='1' /><line x1='0' y1='4' x2='10' y2='4' stroke='magenta' stroke-width='1' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#parallel_stripes)' /></svg>",
  },
  {
    name: "Crosshatch Stripes",
    type: "Stripes Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='crosshatch_stripes' patternUnits='userSpaceOnUse' width='10' height='10'><line x1='0' y1='0' x2='10' y2='10' stroke='gray' stroke-width='1' /><line x1='10' y1='0' x2='0' y2='10' stroke='gray' stroke-width='1' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#crosshatch_stripes)' /></svg>",
  },
];

const dotsSVG = [
  {
    name: "Dots Pattern (1)",
    type: "Dots Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='dots_pattern_1' patternUnits='userSpaceOnUse' width='10' height='10'><circle cx='5' cy='5' r='2' fill='black' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#dots_pattern_1)' /></svg>",
  },
  {
    name: "Dots Pattern (2)",
    type: "Dots Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='dots_pattern_2' patternUnits='userSpaceOnUse' width='10' height='10'><circle cx='2' cy='2' r='1' fill='red' /><circle cx='8' cy='8' r='1' fill='red' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#dots_pattern_2)' /></svg>",
  },
  {
    name: "Dots Pattern (3)",
    type: "Dots Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='dots_pattern_3' patternUnits='userSpaceOnUse' width='10' height='10'><circle cx='2' cy='2' r='1' fill='blue' /><circle cx='8' cy='8' r='1' fill='blue' /><circle cx='5' cy='5' r='1' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#dots_pattern_3)' /></svg>",
  },
  {
    name: "Dots Pattern (4)",
    type: "Dots Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='dots_pattern_4' patternUnits='userSpaceOnUse' width='10' height='10'><circle cx='5' cy='2' r='1' fill='green' /><circle cx='5' cy='8' r='1' fill='green' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#dots_pattern_4)' /></svg>",
  },
  {
    name: "Dots Pattern (5)",
    type: "Dots Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='dots_pattern_5' patternUnits='userSpaceOnUse' width='10' height='10'><circle cx='2' cy='2' r='1' fill='purple' /><circle cx='5' cy='5' r='1' fill='purple' /><circle cx='8' cy='8' r='1' fill='purple' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#dots_pattern_5)' /></svg>",
  },
  {
    name: "Dots Pattern (6)",
    type: "Dots Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='dots_pattern_6' patternUnits='userSpaceOnUse' width='10' height='10'><circle cx='5' cy='2' r='1' fill='orange' /><circle cx='5' cy='8' r='1' fill='orange' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#dots_pattern_6)' /></svg>",
  },
  {
    name: "Dots Pattern (7)",
    type: "Dots Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='dots_pattern_7' patternUnits='userSpaceOnUse' width='10' height='10'><circle cx='5' cy='5' r='2' fill='yellow' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#dots_pattern_7)' /></svg>",
  },
  {
    name: "Dots Pattern (8)",
    type: "Dots Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='dots_pattern_8' patternUnits='userSpaceOnUse' width='10' height='10'><circle cx='2' cy='2' r='1' fill='pink' /><circle cx='8' cy='8' r='1' fill='pink' /><circle cx='5' cy='5' r='1' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#dots_pattern_8)' /></svg>",
  },
  {
    name: "Dots Pattern (9)",
    type: "Dots Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='dots_pattern_9' patternUnits='userSpaceOnUse' width='10' height='10'><circle cx='2' cy='2' r='1' fill='cyan' /><circle cx='8' cy='8' r='1' fill='cyan' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#dots_pattern_9)' /></svg>",
  },
  {
    name: "Dots Pattern (10)",
    type: "Dots Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='dots_pattern_10' patternUnits='userSpaceOnUse' width='10' height='10'><circle cx='5' cy='2' r='1' fill='teal' /><circle cx='5' cy='8' r='1' fill='teal' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#dots_pattern_10)' /></svg>",
  },
];

const checkerboardSVG = [
  {
    name: "Checkerboard Pattern (1)",
    type: "Checkerboard Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='checkerboard_pattern_1' patternUnits='userSpaceOnUse' width='10' height='10'><rect x='0' y='0' width='5' height='5' fill='black' /><rect x='5' y='5' width='5' height='5' fill='black' /><rect x='0' y='5' width='5' height='5' fill='white' /><rect x='5' y='0' width='5' height='5' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#checkerboard_pattern_1)' /></svg>",
  },
  {
    name: "Checkerboard Pattern (2)",
    type: "Checkerboard Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='checkerboard_pattern_2' patternUnits='userSpaceOnUse' width='20' height='20'><rect x='0' y='0' width='10' height='10' fill='black' /><rect x='10' y='10' width='10' height='10' fill='black' /><rect x='0' y='10' width='10' height='10' fill='white' /><rect x='10' y='0' width='10' height='10' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#checkerboard_pattern_2)' /></svg>",
  },
  {
    name: "Checkerboard Pattern (3)",
    type: "Checkerboard Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='checkerboard_pattern_3' patternUnits='userSpaceOnUse' width='20' height='20'><rect x='0' y='0' width='5' height='5' fill='red' /><rect x='5' y='5' width='5' height='5' fill='red' /><rect x='0' y='5' width='5' height='5' fill='white' /><rect x='5' y='0' width='5' height='5' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#checkerboard_pattern_3)' /></svg>",
  },
  {
    name: "Checkerboard Pattern (4)",
    type: "Checkerboard Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='checkerboard_pattern_4' patternUnits='userSpaceOnUse' width='20' height='20'><rect x='0' y='0' width='10' height='10' fill='green' /><rect x='10' y='10' width='10' height='10' fill='green' /><rect x='0' y='10' width='10' height='10' fill='white' /><rect x='10' y='0' width='10' height='10' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#checkerboard_pattern_4)' /></svg>",
  },
  {
    name: "Checkerboard Pattern (5)",
    type: "Checkerboard Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='checkerboard_pattern_5' patternUnits='userSpaceOnUse' width='30' height='30'><rect x='0' y='0' width='15' height='15' fill='blue' /><rect x='15' y='15' width='15' height='15' fill='blue' /><rect x='0' y='15' width='15' height='15' fill='white' /><rect x='15' y='0' width='15' height='15' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#checkerboard_pattern_5)' /></svg>",
  },
  {
    name: "Checkerboard Pattern (6)",
    type: "Checkerboard Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='checkerboard_pattern_6' patternUnits='userSpaceOnUse' width='20' height='20'><rect x='0' y='0' width='10' height='10' fill='purple' /><rect x='10' y='10' width='10' height='10' fill='purple' /><rect x='0' y='10' width='10' height='10' fill='white' /><rect x='10' y='0' width='10' height='10' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#checkerboard_pattern_6)' /></svg>",
  },
  {
    name: "Checkerboard Pattern (7)",
    type: "Checkerboard Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='checkerboard_pattern_7' patternUnits='userSpaceOnUse' width='20' height='20'><rect x='0' y='0' width='5' height='5' fill='pink' /><rect x='5' y='5' width='5' height='5' fill='pink' /><rect x='0' y='5' width='5' height='5' fill='white' /><rect x='5' y='0' width='5' height='5' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#checkerboard_pattern_7)' /></svg>",
  },
  {
    name: "Checkerboard Pattern (8)",
    type: "Checkerboard Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='checkerboard_pattern_8' patternUnits='userSpaceOnUse' width='20' height='20'><rect x='0' y='0' width='10' height='10' fill='orange' /><rect x='10' y='10' width='10' height='10' fill='orange' /><rect x='0' y='10' width='10' height='10' fill='white' /><rect x='10' y='0' width='10' height='10' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#checkerboard_pattern_8)' /></svg>",
  },
  {
    name: "Checkerboard Pattern (9)",
    type: "Checkerboard Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='checkerboard_pattern_9' patternUnits='userSpaceOnUse' width='20' height='20'><rect x='0' y='0' width='5' height='5' fill='yellow' /><rect x='5' y='5' width='5' height='5' fill='yellow' /><rect x='0' y='5' width='5' height='5' fill='white' /><rect x='5' y='0' width='5' height='5' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#checkerboard_pattern_9)' /></svg>",
  },
  {
    name: "Checkerboard Pattern (10)",
    type: "Checkerboard Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='checkerboard_pattern_10' patternUnits='userSpaceOnUse' width='30' height='30'><rect x='0' y='0' width='15' height='15' fill='green' /><rect x='15' y='15' width='15' height='15' fill='green' /><rect x='0' y='15' width='15' height='15' fill='white' /><rect x='15' y='0' width='15' height='15' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#checkerboard_pattern_10)' /></svg>",
  },
];

const chevronSVG = [
  {
    name: "Chevron Pattern (1)",
    type: "Chevron Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='chevron_pattern_1' patternUnits='userSpaceOnUse' width='20' height='20'><path d='M0 10L10 0L20 10L10 20Z' fill='black' /><path d='M0 0L10 10L20 0' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#chevron_pattern_1)' /></svg>",
  },
  {
    name: "Chevron Pattern (2)",
    type: "Chevron Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='chevron_pattern_2' patternUnits='userSpaceOnUse' width='20' height='20'><path d='M0 10L10 0L20 10L10 20Z' fill='blue' /><path d='M0 0L10 10L20 0' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#chevron_pattern_2)' /></svg>",
  },
  {
    name: "Chevron Pattern (3)",
    type: "Chevron Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='chevron_pattern_3' patternUnits='userSpaceOnUse' width='20' height='20'><path d='M0 10L10 0L20 10L10 20Z' fill='red' /><path d='M0 0L10 10L20 0' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#chevron_pattern_3)' /></svg>",
  },
  {
    name: "Chevron Pattern (4)",
    type: "Chevron Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='chevron_pattern_4' patternUnits='userSpaceOnUse' width='20' height='20'><path d='M0 10L10 0L20 10L10 20Z' fill='green' /><path d='M0 0L10 10L20 0' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#chevron_pattern_4)' /></svg>",
  },
  {
    name: "Chevron Pattern (5)",
    type: "Chevron Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='chevron_pattern_5' patternUnits='userSpaceOnUse' width='20' height='20'><path d='M0 10L10 0L20 10L10 20Z' fill='purple' /><path d='M0 0L10 10L20 0' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#chevron_pattern_5)' /></svg>",
  },
  {
    name: "Chevron Pattern (6)",
    type: "Chevron Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='chevron_pattern_6' patternUnits='userSpaceOnUse' width='30' height='30'><path d='M0 10L10 0L20 10L10 20Z' fill='teal' /><path d='M0 0L10 10L20 0' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#chevron_pattern_6)' /></svg>",
  },
  {
    name: "Chevron Pattern (7)",
    type: "Chevron Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='chevron_pattern_7' patternUnits='userSpaceOnUse' width='30' height='30'><path d='M0 10L10 0L20 10L10 20Z' fill='orange' /><path d='M0 0L10 10L20 0' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#chevron_pattern_7)' /></svg>",
  },
  {
    name: "Chevron Pattern (8)",
    type: "Chevron Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='chevron_pattern_8' patternUnits='userSpaceOnUse' width='30' height='30'><path d='M0 10L10 0L20 10L10 20Z' fill='yellow' /><path d='M0 0L10 10L20 0' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#chevron_pattern_8)' /></svg>",
  },
  {
    name: "Chevron Pattern (9)",
    type: "Chevron Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='chevron_pattern_9' patternUnits='userSpaceOnUse' width='30' height='30'><path d='M0 10L10 0L20 10L10 20Z' fill='pink' /><path d='M0 0L10 10L20 0' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#chevron_pattern_9)' /></svg>",
  },
  {
    name: "Chevron Pattern (10)",
    type: "Chevron Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='chevron_pattern_10' patternUnits='userSpaceOnUse' width='30' height='30'><path d='M0 10L10 0L20 10L10 20Z' fill='cyan' /><path d='M0 0L10 10L20 0' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#chevron_pattern_10)' /></svg>",
  },
];

const floralSVG = [
  {
    name: "Floral Pattern (1)",
    type: "Floral Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='floral_pattern_1' patternUnits='userSpaceOnUse' width='100' height='100'><circle cx='30' cy='30' r='25' fill='purple' /><circle cx='70' cy='30' r='25' fill='purple' /><circle cx='50' cy='60' r='25' fill='pink' /><circle cx='30' cy='70' r='25' fill='pink' /><circle cx='70' cy='70' r='25' fill='pink' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#floral_pattern_1)' /></svg>",
  },
  {
    name: "Floral Pattern (2)",
    type: "Floral Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='floral_pattern_2' patternUnits='userSpaceOnUse' width='100' height='100'><circle cx='30' cy='30' r='20' fill='yellow' /><circle cx='70' cy='30' r='20' fill='yellow' /><circle cx='50' cy='70' r='20' fill='orange' /><circle cx='30' cy='70' r='20' fill='orange' /><circle cx='70' cy='70' r='20' fill='orange' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#floral_pattern_2)' /></svg>",
  },
  {
    name: "Floral Pattern (3)",
    type: "Floral Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='floral_pattern_3' patternUnits='userSpaceOnUse' width='100' height='100'><circle cx='30' cy='30' r='30' fill='red' /><circle cx='70' cy='30' r='30' fill='red' /><circle cx='50' cy='70' r='30' fill='yellow' /><circle cx='30' cy='70' r='30' fill='yellow' /><circle cx='70' cy='70' r='30' fill='yellow' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#floral_pattern_3)' /></svg>",
  },
  {
    name: "Floral Pattern (4)",
    type: "Floral Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='floral_pattern_4' patternUnits='userSpaceOnUse' width='100' height='100'><circle cx='30' cy='30' r='25' fill='pink' /><circle cx='70' cy='30' r='25' fill='pink' /><circle cx='50' cy='70' r='25' fill='purple' /><circle cx='30' cy='70' r='25' fill='purple' /><circle cx='70' cy='70' r='25' fill='purple' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#floral_pattern_4)' /></svg>",
  },
  {
    name: "Floral Pattern (5)",
    type: "Floral Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='floral_pattern_5' patternUnits='userSpaceOnUse' width='100' height='100'><circle cx='30' cy='30' r='30' fill='blue' /><circle cx='70' cy='30' r='30' fill='blue' /><circle cx='50' cy='70' r='30' fill='lightblue' /><circle cx='30' cy='70' r='30' fill='lightblue' /><circle cx='70' cy='70' r='30' fill='lightblue' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#floral_pattern_5)' /></svg>",
  },
  {
    name: "Floral Pattern (6)",
    type: "Floral Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='floral_pattern_6' patternUnits='userSpaceOnUse' width='100' height='100'><circle cx='30' cy='30' r='25' fill='orange' /><circle cx='70' cy='30' r='25' fill='orange' /><circle cx='50' cy='70' r='25' fill='yellow' /><circle cx='30' cy='70' r='25' fill='yellow' /><circle cx='70' cy='70' r='25' fill='yellow' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#floral_pattern_6)' /></svg>",
  },
  {
    name: "Floral Pattern (7)",
    type: "Floral Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='floral_pattern_7' patternUnits='userSpaceOnUse' width='100' height='100'><circle cx='30' cy='30' r='30' fill='green' /><circle cx='70' cy='30' r='30' fill='green' /><circle cx='50' cy='70' r='30' fill='lightgreen' /><circle cx='30' cy='70' r='30' fill='lightgreen' /><circle cx='70' cy='70' r='30' fill='lightgreen' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#floral_pattern_7)' /></svg>",
  },
  {
    name: "Floral Pattern (8)",
    type: "Floral Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='floral_pattern_8' patternUnits='userSpaceOnUse' width='100' height='100'><circle cx='30' cy='30' r='25' fill='red' /><circle cx='70' cy='30' r='25' fill='red' /><circle cx='50' cy='70' r='25' fill='orange' /><circle cx='30' cy='70' r='25' fill='orange' /><circle cx='70' cy='70' r='25' fill='orange' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#floral_pattern_8)' /></svg>",
  },
  {
    name: "Floral Pattern (9)",
    type: "Floral Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='floral_pattern_9' patternUnits='userSpaceOnUse' width='100' height='100'><circle cx='30' cy='30' r='30' fill='purple' /><circle cx='70' cy='30' r='30' fill='purple' /><circle cx='50' cy='70' r='30' fill='pink' /><circle cx='30' cy='70' r='30' fill='pink' /><circle cx='70' cy='70' r='30' fill='pink' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#floral_pattern_9)' /></svg>",
  },
  {
    name: "Floral Pattern (10)",
    type: "Floral Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='floral_pattern_10' patternUnits='userSpaceOnUse' width='100' height='100'><circle cx='30' cy='30' r='25' fill='blue' /><circle cx='70' cy='30' r='25' fill='blue' /><circle cx='50' cy='70' r='25' fill='lightblue' /><circle cx='30' cy='70' r='25' fill='lightblue' /><circle cx='70' cy='70' r='25' fill='lightblue' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#floral_pattern_10)' /></svg>",
  },
];

const paisleySVG = [
  {
    name: "Paisley Pattern (1)",
    type: "Paisley Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='paisley_pattern_1' patternUnits='userSpaceOnUse' width='100' height='100'><path d='M0 40C0 40 20 60 50 60C80 60 100 40 100 40C100 40 80 20 50 20C20 20 0 40 0 40Z' fill='purple' /><path d='M100 40C100 40 80 60 50 60C20 60 0 40 0 40C0 40 20 20 50 20C80 20 100 40 100 40Z' fill='pink' /><path d='M5 45C5 45 25 65 50 65C75 65 95 45 95 45C95 45 75 25 50 25C25 25 5 45 5 45Z' fill='yellow' /><path d='M95 45C95 45 75 65 50 65C25 65 5 45 5 45C5 45 25 25 50 25C75 25 95 45 95 45Z' fill='orange' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#paisley_pattern_1)' /></svg>",
  },
  {
    name: "Paisley Pattern (2)",
    type: "Paisley Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='paisley_pattern_2' patternUnits='userSpaceOnUse' width='100' height='100'><path d='M0 40C0 40 20 60 50 60C80 60 100 40 100 40C100 40 80 20 50 20C20 20 0 40 0 40Z' fill='blue' /><path d='M100 40C100 40 80 60 50 60C20 60 0 40 0 40C0 40 20 20 50 20C80 20 100 40 100 40Z' fill='lightblue' /><path d='M5 45C5 45 25 65 50 65C75 65 95 45 95 45C95 45 75 25 50 25C25 25 5 45 5 45Z' fill='green' /><path d='M95 45C95 45 75 65 50 65C25 65 5 45 5 45C5 45 25 25 50 25C75 25 95 45 95 45Z' fill='lightgreen' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#paisley_pattern_2)' /></svg>",
  },
  {
    name: "Paisley Pattern (3)",
    type: "Paisley Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='paisley_pattern_3' patternUnits='userSpaceOnUse' width='100' height='100'><path d='M0 40C0 40 20 60 50 60C80 60 100 40 100 40C100 40 80 20 50 20C20 20 0 40 0 40Z' fill='red' /><path d='M100 40C100 40 80 60 50 60C20 60 0 40 0 40C0 40 20 20 50 20C80 20 100 40 100 40Z' fill='orange' /><path d='M5 45C5 45 25 65 50 65C75 65 95 45 95 45C95 45 75 25 50 25C25 25 5 45 5 45Z' fill='yellow' /><path d='M95 45C95 45 75 65 50 65C25 65 5 45 5 45C5 45 25 25 50 25C75 25 95 45 95 45Z' fill='pink' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#paisley_pattern_3)' /></svg>",
  },
  {
    name: "Paisley Pattern (4)",
    type: "Paisley Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='paisley_pattern_4' patternUnits='userSpaceOnUse' width='100' height='100'><path d='M0 40C0 40 20 60 50 60C80 60 100 40 100 40C100 40 80 20 50 20C20 20 0 40 0 40Z' fill='pink' /><path d='M100 40C100 40 80 60 50 60C20 60 0 40 0 40C0 40 20 20 50 20C80 20 100 40 100 40Z' fill='purple' /><path d='M5 45C5 45 25 65 50 65C75 65 95 45 95 45C95 45 75 25 50 25C25 25 5 45 5 45Z' fill='orange' /><path d='M95 45C95 45 75 65 50 65C25 65 5 45 5 45C5 45 25 25 50 25C75 25 95 45 95 45Z' fill='yellow' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#paisley_pattern_4)' /></svg>",
  },
  {
    name: "Paisley Pattern (5)",
    type: "Paisley Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='paisley_pattern_5' patternUnits='userSpaceOnUse' width='100' height='100'><path d='M0 40C0 40 20 60 50 60C80 60 100 40 100 40C100 40 80 20 50 20C20 20 0 40 0 40Z' fill='green' /><path d='M100 40C100 40 80 60 50 60C20 60 0 40 0 40C0 40 20 20 50 20C80 20 100 40 100 40Z' fill='lightgreen' /><path d='M5 45C5 45 25 65 50 65C75 65 95 45 95 45C95 45 75 25 50 25C25 25 5 45 5 45Z' fill='red' /><path d='M95 45C95 45 75 65 50 65C25 65 5 45 5 45C5 45 25 25 50 25C75 25 95 45 95 45Z' fill='pink' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#paisley_pattern_5)' /></svg>",
  },
  {
    name: "Paisley Pattern (6)",
    type: "Paisley Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='paisley_pattern_6' patternUnits='userSpaceOnUse' width='100' height='100'><path d='M0 40C0 40 20 60 50 60C80 60 100 40 100 40C100 40 80 20 50 20C20 20 0 40 0 40Z' fill='lightblue' /><path d='M100 40C100 40 80 60 50 60C20 60 0 40 0 40C0 40 20 20 50 20C80 20 100 40 100 40Z' fill='blue' /><path d='M5 45C5 45 25 65 50 65C75 65 95 45 95 45C95 45 75 25 50 25C25 25 5 45 5 45Z' fill='yellow' /><path d='M95 45C95 45 75 65 50 65C25 65 5 45 5 45C5 45 25 25 50 25C75 25 95 45 95 45Z' fill='orange' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#paisley_pattern_6)' /></svg>",
  },
  {
    name: "Paisley Pattern (7)",
    type: "Paisley Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='paisley_pattern_7' patternUnits='userSpaceOnUse' width='100' height='100'><path d='M0 40C0 40 20 60 50 60C80 60 100 40 100 40C100 40 80 20 50 20C20 20 0 40 0 40Z' fill='yellow' /><path d='M100 40C100 40 80 60 50 60C20 60 0 40 0 40C0 40 20 20 50 20C80 20 100 40 100 40Z' fill='orange' /><path d='M5 45C5 45 25 65 50 65C75 65 95 45 95 45C95 45 75 25 50 25C25 25 5 45 5 45Z' fill='red' /><path d='M95 45C95 45 75 65 50 65C25 65 5 45 5 45C5 45 25 25 50 25C75 25 95 45 95 45Z' fill='pink' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#paisley_pattern_7)' /></svg>",
  },
  {
    name: "Paisley Pattern (8)",
    type: "Paisley Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='paisley_pattern_8' patternUnits='userSpaceOnUse' width='100' height='100'><path d='M0 40C0 40 20 60 50 60C80 60 100 40 100 40C100 40 80 20 50 20C20 20 0 40 0 40Z' fill='orange' /><path d='M100 40C100 40 80 60 50 60C20 60 0 40 0 40C0 40 20 20 50 20C80 20 100 40 100 40Z' fill='yellow' /><path d='M5 45C5 45 25 65 50 65C75 65 95 45 95 45C95 45 75 25 50 25C25 25 5 45 5 45Z' fill='pink' /><path d='M95 45C95 45 75 65 50 65C25 65 5 45 5 45C5 45 25 25 50 25C75 25 95 45 95 45Z' fill='red' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#paisley_pattern_8)' /></svg>",
  },
  {
    name: "Paisley Pattern (9)",
    type: "Paisley Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='paisley_pattern_9' patternUnits='userSpaceOnUse' width='100' height='100'><path d='M0 40C0 40 20 60 50 60C80 60 100 40 100 40C100 40 80 20 50 20C20 20 0 40 0 40Z' fill='blue' /><path d='M100 40C100 40 80 60 50 60C20 60 0 40 0 40C0 40 20 20 50 20C80 20 100 40 100 40Z' fill='lightblue' /><path d='M5 45C5 45 25 65 50 65C75 65 95 45 95 45C95 45 75 25 50 25C25 25 5 45 5 45Z' fill='red' /><path d='M95 45C95 45 75 65 50 65C25 65 5 45 5 45C5 45 25 25 50 25C75 25 95 45 95 45Z' fill='pink' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#paisley_pattern_9)' /></svg>",
  },
  {
    name: "Paisley Pattern (10)",
    type: "Paisley Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='paisley_pattern_10' patternUnits='userSpaceOnUse' width='100' height='100'><path d='M0 40C0 40 20 60 50 60C80 60 100 40 100 40C100 40 80 20 50 20C20 20 0 40 0 40Z' fill='yellow' /><path d='M100 40C100 40 80 60 50 60C20 60 0 40 0 40C0 40 20 20 50 20C80 20 100 40 100 40Z' fill='orange' /><path d='M5 45C5 45 25 65 50 65C75 65 95 45 95 45C95 45 75 25 50 25C25 25 5 45 5 45Z' fill='blue' /><path d='M95 45C95 45 75 65 50 65C25 65 5 45 5 45C5 45 25 25 50 25C75 25 95 45 95 45Z' fill='lightblue' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#paisley_pattern_10)' /></svg>",
  },
];

const herringboneSVG = [
  {
    name: "Herringbone Pattern (1)",
    type: "Herringbone Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='herringbone_pattern_1' patternUnits='userSpaceOnUse' width='30' height='30'><path d='M0 30L30 0L25 0L0 25Z' fill='gray' /><path d='M5 30L30 5L25 0L0 25L5 30Z' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#herringbone_pattern_1)' /></svg>",
  },
  {
    name: "Herringbone Pattern (2)",
    type: "Herringbone Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='herringbone_pattern_2' patternUnits='userSpaceOnUse' width='30' height='30'><path d='M0 30L30 0L25 0L0 25Z' fill='blue' /><path d='M5 30L30 5L25 0L0 25L5 30Z' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#herringbone_pattern_2)' /></svg>",
  },
  {
    name: "Herringbone Pattern (3)",
    type: "Herringbone Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='herringbone_pattern_3' patternUnits='userSpaceOnUse' width='30' height='30'><path d='M0 30L30 0L25 0L0 25Z' fill='green' /><path d='M5 30L30 5L25 0L0 25L5 30Z' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#herringbone_pattern_3)' /></svg>",
  },
  {
    name: "Herringbone Pattern (4)",
    type: "Herringbone Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='herringbone_pattern_4' patternUnits='userSpaceOnUse' width='30' height='30'><path d='M0 30L30 0L25 0L0 25Z' fill='red' /><path d='M5 30L30 5L25 0L0 25L5 30Z' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#herringbone_pattern_4)' /></svg>",
  },
  {
    name: "Herringbone Pattern (5)",
    type: "Herringbone Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='herringbone_pattern_5' patternUnits='userSpaceOnUse' width='30' height='30'><path d='M0 30L30 0L25 0L0 25Z' fill='purple' /><path d='M5 30L30 5L25 0L0 25L5 30Z' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#herringbone_pattern_5)' /></svg>",
  },
  {
    name: "Herringbone Pattern (6)",
    type: "Herringbone Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='herringbone_pattern_6' patternUnits='userSpaceOnUse' width='30' height='30'><path d='M0 30L30 0L25 0L0 25Z' fill='pink' /><path d='M5 30L30 5L25 0L0 25L5 30Z' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#herringbone_pattern_6)' /></svg>",
  },
  {
    name: "Herringbone Pattern (7)",
    type: "Herringbone Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='herringbone_pattern_7' patternUnits='userSpaceOnUse' width='30' height='30'><path d='M0 30L30 0L25 0L0 25Z' fill='orange' /><path d='M5 30L30 5L25 0L0 25L5 30Z' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#herringbone_pattern_7)' /></svg>",
  },
  {
    name: "Herringbone Pattern (8)",
    type: "Herringbone Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='herringbone_pattern_8' patternUnits='userSpaceOnUse' width='30' height='30'><path d='M0 30L30 0L25 0L0 25Z' fill='yellow' /><path d='M5 30L30 5L25 0L0 25L5 30Z' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#herringbone_pattern_8)' /></svg>",
  },
  {
    name: "Herringbone Pattern (9)",
    type: "Herringbone Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='herringbone_pattern_9' patternUnits='userSpaceOnUse' width='30' height='30'><path d='M0 30L30 0L25 0L0 25Z' fill='lightblue' /><path d='M5 30L30 5L25 0L0 25L5 30Z' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#herringbone_pattern_9)' /></svg>",
  },
  {
    name: "Herringbone Pattern (10)",
    type: "Herringbone Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='herringbone_pattern_10' patternUnits='userSpaceOnUse' width='30' height='30'><path d='M0 30L30 0L25 0L0 25Z' fill='lightgreen' /><path d='M5 30L30 5L25 0L0 25L5 30Z' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#herringbone_pattern_10)' /></svg>",
  },
];

const moroccanSVG = [
  {
    name: "Moroccan Tiles Pattern (1)",
    type: "Moroccan Tiles Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='moroccan_tiles_pattern_1' patternUnits='userSpaceOnUse' width='30' height='30'><rect x='0' y='0' width='30' height='30' fill='blue' /><rect x='0' y='0' width='15' height='15' fill='white' /><rect x='15' y='15' width='15' height='15' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#moroccan_tiles_pattern_1)' /></svg>",
  },
  {
    name: "Moroccan Tiles Pattern (2)",
    type: "Moroccan Tiles Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='moroccan_tiles_pattern_2' patternUnits='userSpaceOnUse' width='30' height='30'><rect x='0' y='0' width='30' height='30' fill='green' /><rect x='0' y='0' width='15' height='15' fill='white' /><rect x='15' y='15' width='15' height='15' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#moroccan_tiles_pattern_2)' /></svg>",
  },
  {
    name: "Moroccan Tiles Pattern (3)",
    type: "Moroccan Tiles Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='moroccan_tiles_pattern_3' patternUnits='userSpaceOnUse' width='30' height='30'><rect x='0' y='0' width='30' height='30' fill='red' /><rect x='0' y='0' width='15' height='15' fill='white' /><rect x='15' y='15' width='15' height='15' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#moroccan_tiles_pattern_3)' /></svg>",
  },
  {
    name: "Moroccan Tiles Pattern (4)",
    type: "Moroccan Tiles Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='moroccan_tiles_pattern_4' patternUnits='userSpaceOnUse' width='30' height='30'><rect x='0' y='0' width='30' height='30' fill='purple' /><rect x='0' y='0' width='15' height='15' fill='white' /><rect x='15' y='15' width='15' height='15' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#moroccan_tiles_pattern_4)' /></svg>",
  },
  {
    name: "Moroccan Tiles Pattern (5)",
    type: "Moroccan Tiles Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='moroccan_tiles_pattern_5' patternUnits='userSpaceOnUse' width='30' height='30'><rect x='0' y='0' width='30' height='30' fill='orange' /><rect x='0' y='0' width='15' height='15' fill='white' /><rect x='15' y='15' width='15' height='15' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#moroccan_tiles_pattern_5)' /></svg>",
  },
  {
    name: "Moroccan Tiles Pattern (6)",
    type: "Moroccan Tiles Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='moroccan_tiles_pattern_6' patternUnits='userSpaceOnUse' width='30' height='30'><rect x='0' y='0' width='30' height='30' fill='pink' /><rect x='0' y='0' width='15' height='15' fill='white' /><rect x='15' y='15' width='15' height='15' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#moroccan_tiles_pattern_6)' /></svg>",
  },
  {
    name: "Moroccan Tiles Pattern (7)",
    type: "Moroccan Tiles Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='moroccan_tiles_pattern_7' patternUnits='userSpaceOnUse' width='30' height='30'><rect x='0' y='0' width='30' height='30' fill='yellow' /><rect x='0' y='0' width='15' height='15' fill='white' /><rect x='15' y='15' width='15' height='15' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#moroccan_tiles_pattern_7)' /></svg>",
  },
  {
    name: "Moroccan Tiles Pattern (8)",
    type: "Moroccan Tiles Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='moroccan_tiles_pattern_8' patternUnits='userSpaceOnUse' width='30' height='30'><rect x='0' y='0' width='30' height='30' fill='green' /><rect x='0' y='0' width='15' height='15' fill='white' /><rect x='15' y='15' width='15' height='15' fill='green' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#moroccan_tiles_pattern_8)' /></svg>",
  },
  {
    name: "Moroccan Tiles Pattern (9)",
    type: "Moroccan Tiles Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='moroccan_tiles_pattern_9' patternUnits='userSpaceOnUse' width='30' height='30'><rect x='0' y='0' width='30' height='30' fill='lightblue' /><rect x='0' y='0' width='15' height='15' fill='white' /><rect x='15' y='15' width='15' height='15' fill='lightblue' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#moroccan_tiles_pattern_9)' /></svg>",
  },
  {
    name: "Moroccan Tiles Pattern (10)",
    type: "Moroccan Tiles Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='moroccan_tiles_pattern_10' patternUnits='userSpaceOnUse' width='30' height='30'><rect x='0' y='0' width='30' height='30' fill='purple' /><rect x='0' y='0' width='15' height='15' fill='white' /><rect x='15' y='15' width='15' height='15' fill='purple' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#moroccan_tiles_pattern_10)' /></svg>",
  },
];

const mandalaSVG = [
  {
    name: "Mandala Pattern (1)",
    type: "Mandala Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='mandala_pattern_1' patternUnits='userSpaceOnUse' width='60' height='60'><circle cx='30' cy='30' r='25' fill='orange' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#mandala_pattern_1)' /></svg>",
  },
  {
    name: "Mandala Pattern (2)",
    type: "Mandala Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='mandala_pattern_2' patternUnits='userSpaceOnUse' width='60' height='60'><circle cx='30' cy='30' r='25' fill='blue' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#mandala_pattern_2)' /></svg>",
  },
  {
    name: "Mandala Pattern (3)",
    type: "Mandala Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='mandala_pattern_3' patternUnits='userSpaceOnUse' width='60' height='60'><circle cx='30' cy='30' r='25' fill='green' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#mandala_pattern_3)' /></svg>",
  },
  {
    name: "Mandala Pattern (4)",
    type: "Mandala Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='mandala_pattern_4' patternUnits='userSpaceOnUse' width='60' height='60'><circle cx='30' cy='30' r='25' fill='purple' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#mandala_pattern_4)' /></svg>",
  },
  {
    name: "Mandala Pattern (5)",
    type: "Mandala Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='mandala_pattern_5' patternUnits='userSpaceOnUse' width='60' height='60'><circle cx='30' cy='30' r='25' fill='pink' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#mandala_pattern_5)' /></svg>",
  },
  {
    name: "Mandala Pattern (6)",
    type: "Mandala Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='mandala_pattern_6' patternUnits='userSpaceOnUse' width='60' height='60'><circle cx='30' cy='30' r='25' fill='yellow' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#mandala_pattern_6)' /></svg>",
  },
  {
    name: "Mandala Pattern (7)",
    type: "Mandala Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='mandala_pattern_7' patternUnits='userSpaceOnUse' width='60' height='60'><circle cx='30' cy='30' r='25' fill='lightblue' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#mandala_pattern_7)' /></svg>",
  },
  {
    name: "Mandala Pattern (8)",
    type: "Mandala Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='mandala_pattern_8' patternUnits='userSpaceOnUse' width='60' height='60'><circle cx='30' cy='30' r='25' fill='lightgreen' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#mandala_pattern_8)' /></svg>",
  },
  {
    name: "Mandala Pattern (9)",
    type: "Mandala Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='mandala_pattern_9' patternUnits='userSpaceOnUse' width='60' height='60'><circle cx='30' cy='30' r='25' fill='lightpink' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#mandala_pattern_9)' /></svg>",
  },
  {
    name: "Mandala Pattern (10)",
    type: "Mandala Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='mandala_pattern_10' patternUnits='userSpaceOnUse' width='60' height='60'><circle cx='30' cy='30' r='25' fill='lightyellow' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#mandala_pattern_10)' /></svg>",
  },
];

const escherSVG = [
  {
    name: "Escher-style Pattern (1)",
    type: "Escher-style Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='escher_pattern_1' patternUnits='userSpaceOnUse' width='100' height='100'><rect x='0' y='0' width='100' height='100' fill='white' /><line x1='0' y1='0' x2='100' y2='100' stroke='black' stroke-width='5' /><line x1='0' y1='100' x2='100' y2='0' stroke='black' stroke-width='5' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#escher_pattern_1)' /></svg>",
  },
  {
    name: "Escher-style Pattern (2)",
    type: "Escher-style Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='escher_pattern_2' patternUnits='userSpaceOnUse' width='100' height='100'><rect x='0' y='0' width='100' height='100' fill='lightblue' /><circle cx='50' cy='50' r='40' fill='white' /><circle cx='50' cy='50' r='30' fill='lightblue' /><circle cx='50' cy='50' r='20' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#escher_pattern_2)' /></svg>",
  },
  {
    name: "Escher-style Pattern (3)",
    type: "Escher-style Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='escher_pattern_3' patternUnits='userSpaceOnUse' width='100' height='100'><rect x='0' y='0' width='100' height='100' fill='orange' /><circle cx='50' cy='50' r='40' fill='white' /><circle cx='50' cy='50' r='30' fill='orange' /><circle cx='50' cy='50' r='20' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#escher_pattern_3)' /></svg>",
  },
  {
    name: "Escher-style Pattern (4)",
    type: "Escher-style Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='escher_pattern_4' patternUnits='userSpaceOnUse' width='100' height='100'><rect x='0' y='0' width='100' height='100' fill='pink' /><circle cx='50' cy='50' r='40' fill='white' /><circle cx='50' cy='50' r='30' fill='pink' /><circle cx='50' cy='50' r='20' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#escher_pattern_4)' /></svg>",
  },
  {
    name: "Escher-style Pattern (5)",
    type: "Escher-style Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='escher_pattern_5' patternUnits='userSpaceOnUse' width='100' height='100'><rect x='0' y='0' width='100' height='100' fill='lightgreen' /><circle cx='50' cy='50' r='40' fill='white' /><circle cx='50' cy='50' r='30' fill='lightgreen' /><circle cx='50' cy='50' r='20' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#escher_pattern_5)' /></svg>",
  },
  {
    name: "Escher-style Pattern (6)",
    type: "Escher-style Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='escher_pattern_6' patternUnits='userSpaceOnUse' width='100' height='100'><rect x='0' y='0' width='100' height='100' fill='lightpink' /><circle cx='50' cy='50' r='40' fill='white' /><circle cx='50' cy='50' r='30' fill='lightpink' /><circle cx='50' cy='50' r='20' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#escher_pattern_6)' /></svg>",
  },
  {
    name: "Escher-style Pattern (7)",
    type: "Escher-style Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='escher_pattern_7' patternUnits='userSpaceOnUse' width='100' height='100'><rect x='0' y='0' width='100' height='100' fill='lightblue' /><circle cx='50' cy='50' r='40' fill='white' /><circle cx='50' cy='50' r='30' fill='lightblue' /><circle cx='50' cy='50' r='20' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#escher_pattern_7)' /></svg>",
  },
  {
    name: "Escher-style Pattern (8)",
    type: "Escher-style Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='escher_pattern_8' patternUnits='userSpaceOnUse' width='100' height='100'><rect x='0' y='0' width='100' height='100' fill='yellow' /><circle cx='50' cy='50' r='40' fill='white' /><circle cx='50' cy='50' r='30' fill='yellow' /><circle cx='50' cy='50' r='20' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#escher_pattern_8)' /></svg>",
  },
  {
    name: "Escher-style Pattern (9)",
    type: "Escher-style Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='escher_pattern_9' patternUnits='userSpaceOnUse' width='100' height='100'><rect x='0' y='0' width='100' height='100' fill='lightyellow' /><circle cx='50' cy='50' r='40' fill='white' /><circle cx='50' cy='50' r='30' fill='lightyellow' /><circle cx='50' cy='50' r='20' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#escher_pattern_9)' /></svg>",
  },
  {
    name: "Escher-style Pattern (10)",
    type: "Escher-style Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='escher_pattern_10' patternUnits='userSpaceOnUse' width='100' height='100'><rect x='0' y='0' width='100' height='100' fill='lightgreen' /><circle cx='50' cy='50' r='40' fill='white' /><circle cx='50' cy='50' r='30' fill='lightgreen' /><circle cx='50' cy='50' r='20' fill='white' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#escher_pattern_10)' /></svg>",
  },
];

const celticSVG = [
  {
    name: "Celtic Knots Pattern (1)",
    type: "Celtic Knots Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='celtic_knots_pattern_1' patternUnits='userSpaceOnUse' width='100' height='100'><rect x='0' y='0' width='100' height='100' fill='white' /><path d='M0,50 Q25,0 50,50 Q75,100 100,50' fill='none' stroke='black' stroke-width='2' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#celtic_knots_pattern_1)' /></svg>",
  },
  {
    name: "Celtic Knots Pattern (2)",
    type: "Celtic Knots Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='celtic_knots_pattern_2' patternUnits='userSpaceOnUse' width='100' height='100'><rect x='0' y='0' width='100' height='100' fill='lightblue' /><path d='M0,50 Q25,0 50,50 Q75,100 100,50' fill='none' stroke='black' stroke-width='2' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#celtic_knots_pattern_2)' /></svg>",
  },
  {
    name: "Celtic Knots Pattern (3)",
    type: "Celtic Knots Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='celtic_knots_pattern_3' patternUnits='userSpaceOnUse' width='100' height='100'><rect x='0' y='0' width='100' height='100' fill='lightgreen' /><path d='M0,50 Q25,0 50,50 Q75,100 100,50' fill='none' stroke='black' stroke-width='2' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#celtic_knots_pattern_3)' /></svg>",
  },
  {
    name: "Celtic Knots Pattern (4)",
    type: "Celtic Knots Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='celtic_knots_pattern_4' patternUnits='userSpaceOnUse' width='100' height='100'><rect x='0' y='0' width='100' height='100' fill='lightpink' /><path d='M0,50 Q25,0 50,50 Q75,100 100,50' fill='none' stroke='black' stroke-width='2' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#celtic_knots_pattern_4)' /></svg>",
  },
  {
    name: "Celtic Knots Pattern (5)",
    type: "Celtic Knots Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='celtic_knots_pattern_5' patternUnits='userSpaceOnUse' width='100' height='100'><rect x='0' y='0' width='100' height='100' fill='yellow' /><path d='M0,50 Q25,0 50,50 Q75,100 100,50' fill='none' stroke='black' stroke-width='2' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#celtic_knots_pattern_5)' /></svg>",
  },
  {
    name: "Celtic Knots Pattern (6)",
    type: "Celtic Knots Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='celtic_knots_pattern_6' patternUnits='userSpaceOnUse' width='100' height='100'><rect x='0' y='0' width='100' height='100' fill='lightgreen' /><path d='M0,50 Q25,0 50,50 Q75,100 100,50' fill='none' stroke='black' stroke-width='2' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#celtic_knots_pattern_6)' /></svg>",
  },
  {
    name: "Celtic Knots Pattern (7)",
    type: "Celtic Knots Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='celtic_knots_pattern_7' patternUnits='userSpaceOnUse' width='100' height='100'><rect x='0' y='0' width='100' height='100' fill='lightpink' /><path d='M0,50 Q25,0 50,50 Q75,100 100,50' fill='none' stroke='black' stroke-width='2' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#celtic_knots_pattern_7)' /></svg>",
  },
  {
    name: "Celtic Knots Pattern (8)",
    type: "Celtic Knots Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='celtic_knots_pattern_8' patternUnits='userSpaceOnUse' width='100' height='100'><rect x='0' y='0' width='100' height='100' fill='yellow' /><path d='M0,50 Q25,0 50,50 Q75,100 100,50' fill='none' stroke='black' stroke-width='2' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#celtic_knots_pattern_8)' /></svg>",
  },
  {
    name: "Celtic Knots Pattern (9)",
    type: "Celtic Knots Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='celtic_knots_pattern_9' patternUnits='userSpaceOnUse' width='100' height='100'><rect x='0' y='0' width='100' height='100' fill='lightblue' /><path d='M0,50 Q25,0 50,50 Q75,100 100,50' fill='none' stroke='black' stroke-width='2' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#celtic_knots_pattern_9)' /></svg>",
  },
  {
    name: "Celtic Knots Pattern (10)",
    type: "Celtic Knots Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='celtic_knots_pattern_10' patternUnits='userSpaceOnUse' width='100' height='100'><rect x='0' y='0' width='100' height='100' fill='white' /><path d='M0,50 Q25,0 50,50 Q75,100 100,50' fill='none' stroke='black' stroke-width='2' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#celtic_knots_pattern_10)' /></svg>",
  },
];

const fractalSVG = [
  {
    name: "Fractals Pattern (1)",
    type: "Fractals Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='fractals_pattern_1' patternUnits='userSpaceOnUse' width='100' height='100'><rect x='0' y='0' width='100' height='100' fill='white' /><path d='M10,10 Q50,50 90,10 T50,90 T10,10' fill='none' stroke='black' stroke-width='1' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#fractals_pattern_1)' /></svg>",
  },
  {
    name: "Fractals Pattern (2)",
    type: "Fractals Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='fractals_pattern_2' patternUnits='userSpaceOnUse' width='100' height='100'><rect x='0' y='0' width='100' height='100' fill='lightblue' /><path d='M10,10 Q50,50 90,10 T50,90 T10,10' fill='none' stroke='black' stroke-width='1' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#fractals_pattern_2)' /></svg>",
  },
  {
    name: "Fractals Pattern (3)",
    type: "Fractals Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='fractals_pattern_3' patternUnits='userSpaceOnUse' width='100' height='100'><rect x='0' y='0' width='100' height='100' fill='lightgreen' /><path d='M10,10 Q50,50 90,10 T50,90 T10,10' fill='none' stroke='black' stroke-width='1' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#fractals_pattern_3)' /></svg>",
  },
  {
    name: "Fractals Pattern (4)",
    type: "Fractals Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='fractals_pattern_4' patternUnits='userSpaceOnUse' width='100' height='100'><rect x='0' y='0' width='100' height='100' fill='lightpink' /><path d='M10,10 Q50,50 90,10 T50,90 T10,10' fill='none' stroke='black' stroke-width='1' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#fractals_pattern_4)' /></svg>",
  },
  {
    name: "Fractals Pattern (5)",
    type: "Fractals Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='fractals_pattern_5' patternUnits='userSpaceOnUse' width='100' height='100'><rect x='0' y='0' width='100' height='100' fill='yellow' /><path d='M10,10 Q50,50 90,10 T50,90 T10,10' fill='none' stroke='black' stroke-width='1' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#fractals_pattern_5)' /></svg>",
  },
  {
    name: "Fractals Pattern (6)",
    type: "Fractals Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='fractals_pattern_6' patternUnits='userSpaceOnUse' width='100' height='100'><rect x='0' y='0' width='100' height='100' fill='lightgreen' /><path d='M10,10 Q50,50 90,10 T50,90 T10,10' fill='none' stroke='black' stroke-width='1' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#fractals_pattern_6)' /></svg>",
  },
  {
    name: "Fractals Pattern (7)",
    type: "Fractals Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='fractals_pattern_7' patternUnits='userSpaceOnUse' width='100' height='100'><rect x='0' y='0' width='100' height='100' fill='lightpink' /><path d='M10,10 Q50,50 90,10 T50,90 T10,10' fill='none' stroke='black' stroke-width='1' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#fractals_pattern_7)' /></svg>",
  },
  {
    name: "Fractals Pattern (8)",
    type: "Fractals Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='fractals_pattern_8' patternUnits='userSpaceOnUse' width='100' height='100'><rect x='0' y='0' width='100' height='100' fill='yellow' /><path d='M10,10 Q50,50 90,10 T50,90 T10,10' fill='none' stroke='black' stroke-width='1' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#fractals_pattern_8)' /></svg>",
  },
  {
    name: "Fractals Pattern (9)",
    type: "Fractals Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='fractals_pattern_9' patternUnits='userSpaceOnUse' width='100' height='100'><rect x='0' y='0' width='100' height='100' fill='lightblue' /><path d='M10,10 Q50,50 90,10 T50,90 T10,10' fill='none' stroke='black' stroke-width='1' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#fractals_pattern_9)' /></svg>",
  },
  {
    name: "Fractals Pattern (10)",
    type: "Fractals Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='fractals_pattern_10' patternUnits='userSpaceOnUse' width='100' height='100'><rect x='0' y='0' width='100' height='100' fill='white' /><path d='M10,10 Q50,50 90,10 T50,90 T10,10' fill='none' stroke='black' stroke-width='1' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#fractals_pattern_10)' /></svg>",
  },
];

const lissajousSVG = [
  {
    name: "Lissajous Curves Pattern (1)",
    type: "Lissajous Curves Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='lissajous_curves_pattern_1' patternUnits='userSpaceOnUse' width='100' height='100'><rect x='0' y='0' width='100' height='100' fill='white' /><path d='M0,50 Q50,0 100,50 T0,50 T50,100 T100,50' fill='none' stroke='black' stroke-width='1' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#lissajous_curves_pattern_1)' /></svg>",
  },
  {
    name: "Lissajous Curves Pattern (2)",
    type: "Lissajous Curves Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='lissajous_curves_pattern_2' patternUnits='userSpaceOnUse' width='100' height='100'><rect x='0' y='0' width='100' height='100' fill='lightblue' /><path d='M0,50 Q50,0 100,50 T0,50 T50,100 T100,50' fill='none' stroke='black' stroke-width='1' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#lissajous_curves_pattern_2)' /></svg>",
  },
  {
    name: "Lissajous Curves Pattern (3)",
    type: "Lissajous Curves Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='lissajous_curves_pattern_3' patternUnits='userSpaceOnUse' width='100' height='100'><rect x='0' y='0' width='100' height='100' fill='lightgreen' /><path d='M0,50 Q50,0 100,50 T0,50 T50,100 T100,50' fill='none' stroke='black' stroke-width='1' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#lissajous_curves_pattern_3)' /></svg>",
  },
  {
    name: "Lissajous Curves Pattern (4)",
    type: "Lissajous Curves Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='lissajous_curves_pattern_4' patternUnits='userSpaceOnUse' width='100' height='100'><rect x='0' y='0' width='100' height='100' fill='lightpink' /><path d='M0,50 Q50,0 100,50 T0,50 T50,100 T100,50' fill='none' stroke='black' stroke-width='1' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#lissajous_curves_pattern_4)' /></svg>",
  },
  {
    name: "Lissajous Curves Pattern (5)",
    type: "Lissajous Curves Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='lissajous_curves_pattern_5' patternUnits='userSpaceOnUse' width='100' height='100'><rect x='0' y='0' width='100' height='100' fill='yellow' /><path d='M0,50 Q50,0 100,50 T0,50 T50,100 T100,50' fill='none' stroke='black' stroke-width='1' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#lissajous_curves_pattern_5)' /></svg>",
  },
  {
    name: "Lissajous Curves Pattern (6)",
    type: "Lissajous Curves Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='lissajous_curves_pattern_6' patternUnits='userSpaceOnUse' width='100' height='100'><rect x='0' y='0' width='100' height='100' fill='lightgreen' /><path d='M0,50 Q50,0 100,50 T0,50 T50,100 T100,50' fill='none' stroke='black' stroke-width='1' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#lissajous_curves_pattern_6)' /></svg>",
  },
  {
    name: "Lissajous Curves Pattern (7)",
    type: "Lissajous Curves Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='lissajous_curves_pattern_8' patternUnits='userSpaceOnUse' width='100' height='100'><rect x='0' y='0' width='100' height='100' fill='yellow' /><path d='M0,50 Q50,0 100,50 T0,50 T50,100 T100,50' fill='none' stroke='black' stroke-width='1' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#lissajous_curves_pattern_8)' /></svg>",
  },
  {
    name: "Lissajous Curves Pattern (9)",
    type: "Lissajous Curves Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='lissajous_curves_pattern_9' patternUnits='userSpaceOnUse' width='100' height='100'><rect x='0' y='0' width='100' height='100' fill='lightblue' /><path d='M0,50 Q50,0 100,50 T0,50 T50,100 T100,50' fill='none' stroke='black' stroke-width='1' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#lissajous_curves_pattern_9)' /></svg>",
  },
  {
    name: "Lissajous Curves Pattern (10)",
    type: "Lissajous Curves Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='lissajous_curves_pattern_10' patternUnits='userSpaceOnUse' width='100' height='100'><rect x='0' y='0' width='100' height='100' fill='white' /><path d='M0,50 Q50,0 100,50 T0,50 T50,100 T100,50' fill='none' stroke='black' stroke-width='1' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#lissajous_curves_pattern_10)' /></svg>",
  },
];

const waveSVG = [
  {
    name: "Ocean Symphony",
    type: "Wave Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='ocean_symphony_pattern' patternUnits='userSpaceOnUse' width='30' height='20'><path d='M0 15 Q10 5 20 15 T30 15 V20 H0 Z M0 10 Q10 0 20 10 T30 10 V20 H0 Z M0 5 Q10 -5 20 5 T30 5 V20 H0 Z' fill='lightblue' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#ocean_symphony_pattern)' /></svg>",
  },
  {
    name: "Whimsical Waves",
    type: "Wave Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='whimsical_waves_pattern' patternUnits='userSpaceOnUse' width='30' height='20'><path d='M0 5 Q15 15 30 5 V20 H0 Z M0 10 Q15 20 30 10 V20 H0 Z M0 15 Q15 25 30 15 V20 H0 Z' fill='lightgreen' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#whimsical_waves_pattern)' /></svg>",
  },
  {
    name: "Serene Ripples",
    type: "Wave Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='serene_ripples_pattern' patternUnits='userSpaceOnUse' width='30' height='20'><path d='M0 5 Q10 0 20 5 T30 5 V20 H0 Z M0 10 Q10 5 20 10 T30 10 V20 H0 Z M0 15 Q10 10 20 15 T30 15 V20 H0 Z' fill='lightpink' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#serene_ripples_pattern)' /></svg>",
  },
  {
    name: "Wave Duet",
    type: "Wave Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='wave_duet_pattern' patternUnits='userSpaceOnUse' width='30' height='20'><path d='M0 5 Q15 -5 30 5 V20 H0 Z M0 10 Q15 0 30 10 V20 H0 Z' fill='lightgrey' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#wave_duet_pattern)' /></svg>",
  },
  {
    name: "Top Crests",
    type: "Wave Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='top_crests_pattern' patternUnits='userSpaceOnUse' width='20' height='10'><path d='M0 5 Q5 -5 10 5 T20 5 V10 H0 Z' fill='lightblue' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#top_crests_pattern)' /></svg>",
  },
  {
    name: "Left Waves",
    type: "Wave Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='left_waves_pattern' patternUnits='userSpaceOnUse' width='10' height='20'><path d='M5 0 Q-5 5 5 10 T5 20 H10 V0 Z' fill='lightpink' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#left_waves_pattern)' /></svg>",
  },
  {
    name: "Right Surges",
    type: "Wave Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='right_surges_pattern' patternUnits='userSpaceOnUse' width='10' height='20'><path d='M5 0 Q15 5 5 10 T5 20 H0 V0 Z' fill='lightgrey' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#right_surges_pattern)' /></svg>",
  },
  {
    name: "Corners Cascade",
    type: "Wave Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='corners_cascade_pattern' patternUnits='userSpaceOnUse' width='20' height='20'><path d='M0 0 Q10 5 0 10 L0 20 L20 20 V10 Q10 5 20 0 Z' fill='lightpink' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#corners_cascade_pattern)' /></svg>",
  },
  {
    name: "Ocean Waves",
    type: "Wave Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='ocean_waves_pattern' patternUnits='userSpaceOnUse' width='20' height='10'><path d='M0 5 Q5 0 10 5 T20 5 V10 H0 Z' fill='lightblue' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#ocean_waves_pattern)' /></svg>",
  },
  {
    name: "Mountain Peaks",
    type: "Wave Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='mountain_peaks_pattern' patternUnits='userSpaceOnUse' width='20' height='20'><path d='M0 10 Q5 0 10 10 T20 10 V20 H0 Z' fill='lightgrey' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#mountain_peaks_pattern)' /></svg>",
  },
  {
    name: "Moonlit Tides",
    type: "Wave Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='moonlit_tides_pattern' patternUnits='userSpaceOnUse' width='20' height='10'><path d='M0 5 Q5 10 10 5 T20 5 V10 H0 Z' fill='lightblue' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#moonlit_tides_pattern)' /></svg>",
  },
  {
    name: "Golden Surges",
    type: "Wave Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='golden_surges_pattern' patternUnits='userSpaceOnUse' width='20' height='20'><path d='M0 10 Q5 0 10 10 T20 10 V20 H0 Z' fill='gold' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#golden_surges_pattern)' /></svg>",
  },
  {
    name: "Lilac Swells",
    type: "Wave Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='lilac_swells_pattern' patternUnits='userSpaceOnUse' width='20' height='20'><path d='M0 10 Q5 20 10 10 T20 10 V20 H0 Z' fill='lightpurple' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#lilac_swells_pattern)' /></svg>",
  },
  {
    name: "Pastel Splash",
    type: "Wave Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='pastel_splash_pattern' patternUnits='userSpaceOnUse' width='20' height='10'><path d='M0 5 Q10 0 20 5 V10 H0 Z' fill='lightpink' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#pastel_splash_pattern)' /></svg>",
  },
  {
    name: "Aqua Serenity",
    type: "Wave Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='aqua_serenity_pattern' patternUnits='userSpaceOnUse' width='20' height='10'><path d='M0 5 Q10 10 20 5 V10 H0 Z' fill='lightblue' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#aqua_serenity_pattern)' /></svg>",
  },
];

const jigsawSVG = [
  {
    name: "Interlocking Squares",
    type: "Jigsaw Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='interlocking_squares_pattern' patternUnits='userSpaceOnUse' width='20' height='20'><rect x='0' y='0' width='10' height='10' fill='lightblue' /><rect x='10' y='10' width='10' height='10' fill='lightpink' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#interlocking_squares_pattern)' /></svg>",
  },
  {
    name: "Puzzle Blocks",
    type: "Jigsaw Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='puzzle_blocks_pattern' patternUnits='userSpaceOnUse' width='30' height='20'><rect x='0' y='0' width='10' height='20' fill='lightgreen' /><rect x='10' y='0' width='10' height='20' fill='lightgrey' /><rect x='20' y='0' width='10' height='20' fill='lightpink' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#puzzle_blocks_pattern)' /></svg>",
  },
  {
    name: "Colorful Connections",
    type: "Jigsaw Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='colorful_connections_pattern' patternUnits='userSpaceOnUse' width='20' height='20'><rect x='0' y='0' width='10' height='20' fill='lightblue' /><rect x='10' y='0' width='10' height='10' fill='lightgreen' /><rect x='10' y='10' width='10' height='10' fill='lightpink' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#colorful_connections_pattern)' /></svg>",
  },
  {
    name: "Geometric Puzzle",
    type: "Jigsaw Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='geometric_puzzle_pattern' patternUnits='userSpaceOnUse' width='20' height='20'><circle cx='5' cy='5' r='5' fill='lightblue' /><circle cx='15' cy='15' r='5' fill='lightpink' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#geometric_puzzle_pattern)' /></svg>",
  },
  {
    name: "Zigzag Tiles",
    type: "Jigsaw Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='zigzag_tiles_pattern' patternUnits='userSpaceOnUse' width='20' height='20'><path d='M0 0 L10 10 L20 0 L10 -10 Z' fill='lightgreen' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#zigzag_tiles_pattern)' /></svg>",
  },
  {
    name: "Diamond Array",
    type: "Jigsaw Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='diamond_array_pattern' patternUnits='userSpaceOnUse' width='20' height='20'><path d='M0 10 L10 0 L20 10 L10 20 Z' fill='lightgrey' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#diamond_array_pattern)' /></svg>",
  },
  {
    name: "Mixed Puzzles",
    type: "Jigsaw Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='mixed_puzzles_pattern' patternUnits='userSpaceOnUse' width='30' height='20'><rect x='0' y='0' width='10' height='20' fill='lightblue' /><rect x='10' y='0' width='20' height='20' fill='lightgreen' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#mixed_puzzles_pattern)' /></svg>",
  },
  {
    name: "Tetris Delight",
    type: "Jigsaw Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='tetris_delight_pattern' patternUnits='userSpaceOnUse' width='20' height='20'><rect x='0' y='0' width='10' height='10' fill='lightpink' /><rect x='10' y='0' width='10' height='10' fill='lightgreen' /><rect x='0' y='10' width='10' height='10' fill='lightblue' /><rect x='10' y='10' width='10' height='10' fill='lightgrey' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#tetris_delight_pattern)' /></svg>",
  },
  {
    name: "Patchwork Jigsaw",
    type: "Jigsaw Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='patchwork_jigsaw_pattern' patternUnits='userSpaceOnUse' width='30' height='20'><rect x='0' y='0' width='10' height='20' fill='lightblue' /><rect x='10' y='0' width='10' height='10' fill='lightpink' /><rect x='20' y='0' width='10' height='20' fill='lightgreen' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#patchwork_jigsaw_pattern)' /></svg>",
  },
  {
    name: "Kaleidoscope Connection",
    type: "Jigsaw Pattern",
    svg: "<svg width='100%' height='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='kaleidoscope_connection_pattern' patternUnits='userSpaceOnUse' width='20' height='20'><circle cx='10' cy='10' r='5' fill='lightgrey' /><rect x='0' y='0' width='10' height='10' fill='lightpink' /><rect x='10' y='10' width='10' height='10' fill='lightblue' /></pattern></defs><rect x='0' y='0' width='100%' height='100%' fill='url(#kaleidoscope_connection_pattern)' /></svg>",
  },
];

export const svg = [
  ...jigsawSVG,
  ...waveSVG,
  ...geometricSVG,
  ...stripesSVG,
  ...dotsSVG,
  ...checkerboardSVG,
  ...chevronSVG,
  ...floralSVG,
  ...paisleySVG,
  ...herringboneSVG,
  ...moroccanSVG,
  ...mandalaSVG,
  ...escherSVG,
  ...celticSVG,
  ...fractalSVG,
  ...lissajousSVG
];
