import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Choice, ChoicesProps } from '../constants/types';
import { map } from 'lodash';
import './SingleSelect.css';

export const SingleSelect = (props: ChoicesProps) => {

  const { title, choices, setIsDirty } = props;

  const [value, setValue] = useState(props.current_value);

  const handleChange = (event: any) => {
    setValue(event.target.value);
    setIsDirty();
  }

  return (
    <FormControl>
      <h3>{title}</h3>
      <RadioGroup value={value} onChange={handleChange}>
        <div className={'choices-container'}>
          {map(choices, (choice: Choice, index: number) => {
            return <FormControlLabel key={index} value={choice.id} control={<Radio color={'primary'}/>} label={choice.value} />
          })}
        </div>
      </RadioGroup>
    </FormControl>
  )
}
