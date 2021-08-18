import { useState } from 'react';
import { Button } from '@material-ui/core';

import { data } from '../constants/data'
import { map } from 'lodash';
import { TextField } from '../TextField';
import { SingleSelect } from '../SingleSelect';
import { MultiSelect } from '../MultiSelect';
import { Choice } from '../constants/types';

import './DynamicForm.css';

type Field = {
  key: string;
  title: string;
  type: string;
  value?: string;
  choices?: Choice[];
  current_value?: string | string[];
}

export const DynamicForm = () => {

  const [fields] = useState<Field[]>(data);
  const [isDirty, setIsDirty] = useState(false);

  const getComponentType = (props: Field) => {
    const { type, title, value, choices, current_value } = props;
    switch (type) {
      case 'text':
        return <TextField title={title} value={value!} setIsDirty={() => setIsDirty(true)}/>;
      case 'single_choice':
        return <SingleSelect
          title={title}
          choices={choices!}
          current_value={current_value! as string}
          setIsDirty={() => setIsDirty(true)}
        />;
      case 'multi_choice':
        return <MultiSelect
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
      {map(fields, (field: Field) => {
        return getComponentType(field);
      })}
      <div className={ 'separator' }/>
      <Button className={'save-button'} variant="contained" color="primary" disabled={!isDirty}>
        Save
      </Button>
    </>
    );
}
