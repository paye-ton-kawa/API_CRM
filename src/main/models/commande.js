export class Commande{
  constructor(obj) {
    obj = obj != null ? obj : {}
    this.commandesId = obj.commandesId != null ? obj.commandesId : []
    this.produitsId = obj.produitsId != null ? obj.produitsId : []
  }
}