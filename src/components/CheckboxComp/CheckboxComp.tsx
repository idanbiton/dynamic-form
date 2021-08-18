import { useState} from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';

type Props = {
  label: string;
  isChecked: boolean
}
export const CheckboxComp = (props: Props) => {
  const { isChecked, label } = props;

  const [checked, setChecked] = useState<boolean>(isChecked);

  const handleChange = (event: any) => {
    setChecked( event.target.checked);
  };
  return (
    <FormControlLabel
      control={<Checkbox checked={checked} onChange={handleChange} color={'primary'}/>}
      label={label}
    />);
}
