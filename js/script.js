// Copyright (c) 2020 Shanea Jaromay All rights reserved
//
// Created by: Shanea Jaromay
// Created on: May 2025
// This file contains the JS functions for index.html

'use strict'

window.onload = function () {
  // this calculates volume of a sphere
  const params = new URLSearchParams(document.location.search)

  // input
  const radius = params.get('radius')
  console.log(radius)

  // process
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3)
  const dimension =
    '<ul>\n<li>Radius = ' +
    radius + 'mm'

  // output
  document.getElementById('dimension').innerHTML = dimension
  document.getElementById('volume').innerHTML = 'Your volume is' + volume.toFixed(2) + 'mm³'
}
