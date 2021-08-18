import { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';

import { map } from 'lodash';
import { TextField } from '../TextField';
import { SingleSelect } from '../SingleSelect';
import { MultiSelect } from '../MultiSelect';
import { Field } from '../constants/types';

import './DynamicForm.css';
import axios from 'axios';

export const DynamicForm = () => {
  const [fields, setFields] = useState<Field[]>([]);
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    axios.get('https://eleos-form.free.beeceptor.com/#').then((res) => {
      setFields(res.data.fields);
    })
  })

  const getComponentType = (props: Field, index: number) => {
    const { type, title, value, choices, current_value } = props;
    switch (type) {
      case 'text':
        return <TextField key={index} title={title} value={value!} setIsDirty={() => setIsDirty(true)}/>;
      case 'single_choice':
        return <SingleSelect
          key={index}
          title={title}
          choices={choices!}
          current_value={current_value! as string}
          setIsDirty={() => setIsDirty(true)}
        />;
      case 'multi_choice':
        return <MultiSelect
          key={index}
          title={title}
          choices={choices!}
          current_value={current_value as string[]}
          setIsDirty={() => setIsDirty(true)}/>;
      default:
        return <></>;
    }
  }
  return (
    <>
      <h1 className={'main-header'}> Welcome to your Dynamic Form</h1>
      {map(fields, (field: Field, index: number) => {
        return getComponentType(field, index);
      })}
      <div className={ 'container' }>
        <Button className={'save-button'} variant="contained" color="primary" disabled={!isDirty}>
          Save
        </Button>
      </div>
    </>
    );
}
