type PrimitiveField = {
  type: 'text' | 'number' | 'boolean'
};

type SelectField = {
  type: 'select'
  options: string[]
};

export type PlaygroundFieldType = PrimitiveField | SelectField;
