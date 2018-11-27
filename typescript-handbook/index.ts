import {StringValidator} from "./Validation"
import {numberRegexp} from "./ZipCodeValidator"

class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp
  }
}

export { ZipCodeValidator }
export { ZipCodeValidator as mainValidator }
