export class Products{
  constructor(obj) {
    obj = obj != null ? obj : {}
    this.produitsId = obj.produitsId != null ? obj.produitsId : ''
    this.nom = obj.nom != null ? obj.nom : ''
    this.prix = obj.prix != null ? obj.prix : 0
  }
}