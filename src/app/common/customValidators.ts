import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function validateUsername( c: AbstractControl ): ValidationErrors | null {
  if ( c.value !== null && (c.value.length < 8 || c.value?.length > 20 ) ) {
    return { 'invalidUsername': true }
  }

  return null;
}

export function validatePasswordMatcher( field1: string, field2: string, errorString: string ): ValidatorFn {
  return ( c: AbstractControl ): ValidationErrors | null => {
    const field_1 = c.get(field1);
    const field_2 = c.get(field2);

    if ( field_1?.value !== field_2?.value && ( field_1?.touched && field_2?.touched ) ) {
      const error = { [errorString]: true }
      field_1.setErrors(error);
      field_2.setErrors(error);
      return error;
    }

    field_1?.setErrors(null);
    field_2?.setErrors(null);
    return null;
  }
}
