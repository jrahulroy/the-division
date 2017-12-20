export let pier93 = {
  "zones": [
    {
      "name": "Trash",
      "x":400,
      "y": 0,
      "bounds": [
        {"x": 0, "y": 0},
        {"x": 100, "y": 0},
        {"x": 100, "y": 100},
        {"x": 0, "y": 100}
      ],
      "pointsOfInterests": [

      ]
    },
    {
      "name": "Berges",
      "x":350,
      "y": 100,
      "bounds": [
        {"x": 0, "y": 0},
        {"x": 300, "y": 0},
        {"x": 300, "y": 100},
        {"x": 0, "y": 100}
      ],
      "pointsOfInterests": [
        {
          "type": "support",
          "x": 180,
          "y": 30,
          "cost": 1250
        },
        {
          "type": "door",
          "x": 200,
          "y": 70,
          "cost": 1250
        },{
          "type": "door",
          "x": 50,
          "y": 70,
          "cost": 1250
        }
      ]
    },
    {
      "name": "Warehouse",
        "x": 600,
        "y": 1100,
      "bounds": [
        {"x": 0, "y": 0},
        {"x": 100, "y": 0},
        {"x": 100, "y": 100},
        {"x": 0, "y": 100}
      ],
      "pointsOfInterests": [
        {
          "type": "door",
          "x": 50,
          "y": 0,
          "cost": 1250
        }
      ]
    }, {
      "name": "Pier",
      "x": 500,
      "y": 400,
      "bounds": [
        {"x": 0, "y": 0},
        {"x": 300, "y": 0},
        {"x": 300, "y": 700},
        {"x": 0, "y": 700}
      ],
      "pointsOfInterests": [
        {
          "type": "pulse",
          "x": 150,
          "y": 150,
          "cost": 500
        },
        {
          "type": "pulse",
          "x": 150,
          "y": 400,
          "cost": 500
        }
      ]
    }, {
      "name": "Delivery Dock",
      "x": 800,
      "y": 400,
      "bounds": [
        {"x": 0, "y": 0},
        {"x": 100, "y": 0},
        {"x": 100, "y": 500},
        {"x": 0, "y": 500}
      ],
      "pointsOfInterests": [
        {
          "type": "door",
          "x": 0,
          "y": 50,
          "cost": 1250
        },
        {
          "type": "door",
          "x": 0,
          "y": 150,
          "cost": 1250
        },
        {
          "type": "door",
          "x": 0,
          "y": 400,
          "cost": 1250
        }
      ]

    }, {
      "name": "The Showroom",
      "x": 900,
      "y": 500,
      "bounds": [
        {"x": 0, "y": 0},
        {"x": 200, "y": 0},
        {"x": 200, "y": 300},
        {"x": 0, "y": 300}
      ],
      "pointsOfInterests": [
        {
          "type": "door",
          "x": 0,
          "y": 50,
          "cost": 5000
        },
        {
          "type": "door",
          "x": 0,
          "y": 180,
          "cost": 5000
        },
        {
          "type": "support",
          "x": 100,
          "y": 50,
          "cost": 500
        },
        {
          "type": "turret",
          "x": 100,
          "y": 180,
          "cost": 500
        }
      ]
    }, {
      "name": "Shipping",
      "x": 200,
      "y": 400,
      "bounds": [
        {"x": 0, "y": 0},
        {"x": 300, "y": 0},
        {"x": 300, "y": 300},
        {"x": 0, "y": 300}
      ],
      "pointsOfInterests": [
        {
          "type": "door",
          "x": 250,
          "y": 150,
          "cost": 1250
        },
        {
          "type": "door",
          "x": 250,
          "y": 100,
          "cost": 1250
        },
        {
          "type": "support",
          "x": 70,
          "y": 100,
          "cost": 1250
        },
        {
          "type": "turret",
          "x": 170,
          "y": 100,
          "cost": 1250
        }

      ]
    }, {

      "name": "Staging",
      "x": 200,
      "y": 200,
      "bounds": [
        {"x": 0, "y": 0},
        {"x": 600, "y": 0},
        {"x": 600, "y": 200},
        {"x": 0, "y": 200}
      ],
      "pointsOfInterests": [
        {
          "type": "door",
          "x": 390,
          "y": 160,
          "cost": 1250
        },
        {
          "type": "door",
          "x": 480,
          "y": 160,
          "cost": 1250
        },
        {
          "type": "door",
          "x": 200,
          "y": 160,
          "cost": 1250
        },
        {
          "type": "turret",
          "x": 525,
          "y": 140,
          "cost": 500
        }
      ]
    }
  ]
};

