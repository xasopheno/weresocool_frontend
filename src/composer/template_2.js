const template = `{ f: 270, l: 1, g: 1, p: 0 }

overtones = {
  O[
    (5/2, 0, 1/2, 0),
    (3/2, 2, 1, 1),
    (1/1, 0, 1, -1),
  ]
}

thing1 = {
  overtones |
  Sequence [
    AsIs,
    Tm 9/8,
    Tm 5/4,
  ] 
  | ModulateBy [
    Seq [Tm 1/2, Tm 3/4, Tm 1] | Repeat 7
  ]
}

thing2 = {
  Overlay [
    Tm 3, Ta 3 | Tm 3
  ]
  | Seq [Tm 1, Tm 5/6, Tm 7/8 | Length 1/3]
  | Tm 5/4
  > FitLength thing1
}

main = {
  Overlay [
    thing1, 
    thing2
  ]
  | Seq [Tm 1, Tm 7/8]
  | Repeat 4
}
`;

export default template;
