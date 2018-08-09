import React, { Component } from 'react';
import LatestProducts from './latestproducts';
import Service from './service';
import Brand from './brand';

class join extends Component {
  render() {
    return (
      <div>
        <Service />
        <LatestProducts />
        <Brand />
      </div>
    );
  }
}

export default join;