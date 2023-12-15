function validateForm() {
    var name = document.getElementById("name").value;
    var prenom = document.getElementById("prenom").value;
    var cin = document.getElementById("cin").value;
    var message = document.getElementById("message").value;

    if (/\d/.test(name)) {
        alert("Le champ du nom ne doit pas contenir de caractères numériques.");
        return false;
    }

    if (/\d/.test(prenom)) {
        alert("Le champ du prénom ne doit pas contenir de caractères numériques.");
        return false;
    }

    if (!/^\d+$/.test(cin)) {
        alert("Le champ du numéro de CIN ne doit contenir que des chiffres.");
        return false;
    }

    if (cin.length !== 8) {
        alert("Le numéro de CIN doit avoir exactement huit chiffres.");
        return false;
    }

    if (message === "") {
        alert("Veuillez saisir un message.");
        return false;
    }

    alert("Formulaire soumis avec succès !");
    return true;
}
