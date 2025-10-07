import { formatDate } from "./date.service";

export type $EMPLOYEE = {
  id: string;
  name: string;
  lastName: string;
  email: string;
  birthDate: string;
  startDate: string;
  street: string;
  city: string;
  country: string;
  department: string;
  zipCode: string;
};

export const EMPLOYEE: $EMPLOYEE = {
  id: "",
  name: "",
  lastName: "",
  email: "",
  birthDate: "",
  startDate: "",
  street: "",
  city: "",
  country: "",
  department: "",
  zipCode: "",
};

/**
 * This function return the `model of data of an employee`
 * - - -
 * @param `...employee` type `Object`
 */
export function formatEMPLOYEE({ ...props }): $EMPLOYEE {
  return {
    id: crypto.randomUUID(),
    name: props.name,
    lastName: props.lastName,
    email: props.email,
    birthDate: formatDate(props.birthDate),
    startDate: formatDate(props.startDate),
    street: props.street,
    city: props.city,
    country: props.country,
    department: props.department,
    zipCode: props.zipCode,
  };
}
