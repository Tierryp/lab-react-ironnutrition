import { Divider, Input } from 'antd';
import { useState } from 'react';

const FoodForm = (props) => {
    return (
      <form>
        <Divider>Add Food Entry</Divider>

        <label>Name</label>
        <Input value={undefined} type="text" onChange={() => {}} />

        <label>Image</label>
        {<Input value={undefined} type="text" onChange={() => {}} />}

        <label>Calories</label>
        {<Input value={undefined} type="text" onChange={() => {}} />}

        <label>Servings</label>
        {<Input value={undefined} type="text" onChange={() => {}} />}

        <button type="submit">Create</button>
      </form>
    );



}

export default FoodForm