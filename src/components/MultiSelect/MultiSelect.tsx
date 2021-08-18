import { CheckboxComp } from '../CheckboxComp';
import { map } from 'lodash';
import { Choice, ChoicesProps } from '../constants/types';
import './MultiSelect.css';

export const MultiSelect = (props: ChoicesProps) => {

  const { title, choices, current_value, setIsDirty } = props;
  return (
    <>
      <h3>{ title }</h3>
      <div className={'choices-container'}>
        {map(choices, (choice: Choice, index: number) => {
          return <CheckboxComp
            label={choice.value}
            isChecked={current_value.includes(choice.id)}
            key={index}
            setIsDirty={() => setIsDirty()}
          />
        })}
      </div>
    </>
  )
}
