import { CheckboxComp } from '../CheckboxComp';
import { map } from 'lodash';
import { Choice, ChoicesProps } from '../constants/types';
import './MultiSelect.css';

export const MultiSelect = (props: ChoicesProps) => {

  const { title, choices, current_value, setIsDirty } = props;
  return (
    <>
      <h2>{ title }</h2>
      <div className={'choices-container'}>
        {map(choices, (choice: Choice) => {
          return <CheckboxComp
            label={choice.value}
            isChecked={current_value.includes(choice.id)}
            setIsDirty={() => setIsDirty()}
          />
        })}
      </div>
    </>
  )
}
