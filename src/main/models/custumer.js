export class Customer{
  constructor(obj) {
    obj = obj != null ? obj : {}
    this.nom = obj.nom != null ? obj.name : ''
    this.commandesId = obj.commandesId != null ? obj.commandesId : []
    this.total = obj.total != null ? obj.total : 0
  }
}