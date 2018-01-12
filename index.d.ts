export interface IDataSetInstance {
  del: (attribute: string) => IDataSetInstance;
  get: (attribute: string) => IDataSetInstance;
  set: (attribute: string, value: string) => IDataSetInstance;
}

export interface IDatasetStatic {
  (node: HTMLElement): IDataSetInstance;
  (node: HTMLElement, value: string): string;
  (node: HTMLElement, attribute: string, value: string): undefined;
}

declare const dataset: IDatasetStatic;

export default dataset;
