type Suit = 'Heart' | 'Diamond' | 'Club' | 'Spade'

let suit: Suit = 'Heart'
// suit = 'Joker'

type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
type Bool = true | false
type Falsy = false | 0 | '' | null | undefined

enum SuitEnum {
  Heart,
  Diamond,
  Club,
  Spade,
}
type RedSuit = SuitEnum.Heart | SuitEnum.Diamond

export { Suit, suit, Digit, Bool, Falsy, SuitEnum, RedSuit }
