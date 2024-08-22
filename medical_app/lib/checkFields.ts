export type CheckFieldsType = {
  default: Function;
  config?: {};
  generateStaticParams?: Function;
  // other expected properties
};

export function checkFields<T>(data: T): void {
  // Ensure `data` type matches expected structure
}
