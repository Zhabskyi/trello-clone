export class List {
  static fromExisting(list) {
    const newList = new List(list);
    return Object.freeze(newList);
  }

  constructor(
    {
      id = '',
      name = '',
      closed = true,
      idBoard = '',
      pos = '',
      subscribed = false,
      cardIds = []
    }) {
    this.id = id;
    this.name = name;
    this.closed = closed;
    this.idBoard = idBoard;
    this.pos = pos;
    this.subscribed = subscribed;
    this.cardIds = cardIds;
  }

}

// id(pin): "5c9f7b2040d9ee5fc9bfcc00"
// name(pin): "`zx`x`zx"
// closed(pin): false
// idBoard(pin): "5c9f7b1ed34684232b4039c1"
// pos(pin): 65535
// subscribed(pin): false
// softLimit(pin): null
// cardIds(pin):
