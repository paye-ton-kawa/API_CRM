const bd=require('../storage/bd')


// controller to get all customers
exports.getCustomers = (req, res) => {
  bd.query('SELECT * FROM public."Client" ', (err, rows) => {
    if (err) {
      console.error('Erreur lors de la récupération de la liste de produits : ', err);
      res.status(500).send('Erreur lors de la récupération de la liste de produits');
      return;
    }
    res.send(rows);
  });
};


// controller to get all products
exports.getCustomersById = (req, res) => {
  id=req.params.id;
  console.log(id)
  bd.query('SELECT * FROM public."Commande" WHERE "id_client"='+id+'ORDER BY id_client ASC ', (err, rows) => {
    if (err) {
      console.error('Erreur lors de la récupération de la liste des customers : ', err);
      res.status(500).send('Erreur lors de la récupération de la liste de liste des customers');
      return;
    }
    res.send(rows);
  });
};


// controller to get all products
exports.getProduitsByCustomerId = (req, res) => {
  id=req.params.id;
  bd.query('SELECT p.id_produit, p.nom,p.description,p.couleur,p.prix,p.stock FROM public."Commande" c JOIN public."Produit" p ON p.id_produit = ANY(c.id_produits) WHERE c.id_commande ='+id+'ORDER BY id_client ASC ', (err, rows) => {
    if (err) {
      console.error('Erreur lors de la récupération de la liste des customers : ', err);
      res.status(500).send('Erreur lors de la récupération de la liste de liste des customers');
      return;
    }
    res.send(rows);
  });
};
