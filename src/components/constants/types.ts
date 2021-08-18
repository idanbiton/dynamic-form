export type Field = {
  key: string;
  title: string;
  type: string;
  value?: string;
  choices?: Choice[];
  current_value?: string | string[];
}

export type Choice = {
  id: string;
  value: string
}

export type ChoicesProps = {
  title: string;
  choices: Choice[];
  current_value: string | string[];
  setIsDirty: () => void;
}
