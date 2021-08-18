import { TextareaAutosize } from '@material-ui/core';
import './TextField.css';
type Props = {
  title: string;
  value: string;
  setIsDirty: () => void;
}
export const TextField = (props: Props) => {
  const { title, value, setIsDirty } = props;

  return (
    <>
      <h3 className={'header'}> {title} </h3>
      <TextareaAutosize className={'text-field'} defaultValue={value} minRows={3} onChange={setIsDirty}/>
    </>
  )
}
