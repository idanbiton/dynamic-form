import { TextareaAutosize } from '@material-ui/core';
import './TextField.css';
type Props = {
  title: string;
  value: string
}
export const TextField = (props: Props) => {
  const { title, value } = props;

  return (
    <>
      <h2> {title} </h2>
      <TextareaAutosize className={'text-field'} defaultValue={value} minRows={3}/>
    </>
  )
}
