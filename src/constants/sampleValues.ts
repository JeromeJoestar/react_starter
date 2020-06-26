export type SampleValue = { [field: string]: string };

const SAMPLE_VALUES = {
  SAMPLE_1: "An example to return constants via function",
  SAMPLE_2: "This is not a strict way to implement this feature",
};

const getSampleValue = (key: string) => SAMPLE_VALUES[key];
