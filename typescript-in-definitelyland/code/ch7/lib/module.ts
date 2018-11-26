import { randmizeString } from 'strutil'
import { happy } from 'strutil-extra'

randmizeString('TypeScript')
happy('TypeScript')

randmizeString('TypeScript', {
  i: 11,
  reverse: true
})

'TypeScript'.randomizeString()
'TypeScript'.happy()
