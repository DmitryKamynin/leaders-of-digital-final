import { JSXInternal } from "preact/src/jsx";

const numberValidation = (
  e: JSXInternal.TargetedEvent<HTMLInputElement, Event>,
  decimal?: boolean
): boolean => {
  return !!(
    e.target instanceof HTMLInputElement &&
    (decimal
      ? e.target.value.match(/^(\d*|\d+(\.|,)\d*)$/)
      : e.target.value.match(/^\d*$/)) &&
    !e.target.value.match(/^0\d/)
  );
};
export default numberValidation;
