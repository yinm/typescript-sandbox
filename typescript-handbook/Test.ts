import { StringValidator } from "./Validation"
import { ZipCodeValidator } from "./ZipCodeValidator"
import { LetterOnlyValidator } from "./LetterOnlyValidator"

let strings = ['Hello', '98852', '101']

let validators: { [s: string]: StringValidator } = {}
validators['ZIP code'] = new ZipCodeValidator()
validators['Letters only'] = new LetterOnlyValidator()

strings.forEach(s => {
  for (let name in validators) {
    console.log(`"${s}" - ${validators[name].isAcceptable(s) ? 'matches' : 'does not match'} ${name}`)
  }
})
