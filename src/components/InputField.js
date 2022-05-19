import React from 'react'

import Containers from './Containers';
import GridSize from './GridSize';
import Refineries from './Industrial';
import Power from './Power';
import Thrusters from './Thrusters';

const InputField = () => {
  return (
    <div className='card'>
        <GridSize />
        <Containers />
        <Refineries />
        <Power />
        <Thrusters />
    </div>
  )
}

export default InputField