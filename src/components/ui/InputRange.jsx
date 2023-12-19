/* eslint-disable react/prop-types */
import { Range } from 'react-range';

import React from 'react';

const state = { values: [50] };
const InputRange = () => {
  return (
    <div>
      <Range
        step={0.1}
        min={0}
        max={100}
        values={this.state.values}
        onChange={(values) => this.setState({ values })}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '6px',
              width: '100%',
              backgroundColor: '#ccc',
            }}>
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '42px',
              width: '42px',
              backgroundColor: '#999',
            }}
          />
        )}
      />
    </div>
  );
};

export default InputRange;
