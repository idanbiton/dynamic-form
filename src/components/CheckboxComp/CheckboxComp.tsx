import { useState} from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';

type Props = {
  label: string;
  isChecked: boolean;
  setIsDirty: () => void;
}
export const CheckboxComp = (props: Props) => {
  const { isChecked, label, setIsDirty } = props;

  const [checked, setChecked] = useState<boolean>(isChecked);

  const handleChange = (event: any) => {
    setChecked( event.target.checked);
    setIsDirty();
  };
  return (
    <FormControlLabel
      control={<Checkbox checked={checked} onChange={handleChange} color={'primary'}/>}
      label={label}
    />);
}
