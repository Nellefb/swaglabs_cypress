/// <reference types="cypress" />

import productPage from "../pages/product_page";

export function validateProductSorting(type, direction) {

    cy.get(productPage.productItem).then(($items) => {

        // Para armaz. nomes dos produtos exibidos na tela (na ordem que está la)
        let displayedProducts = [];

        if (type === "name") {
            displayedProducts = [...$items].map(item =>
                item.querySelector(productPage.productName).innerText.trim()
            );
        }

        if (type === "price") {
            displayedProducts = [...$items].map(item =>
                parseFloat(
                    item.querySelector(productPage.productPrice)
                        .innerText
                        .replace("$", "")
                )
            );
        }

        //Cópia da lista para ordenar
        const sortedProducts = [...displayedProducts];

        // Ordenar a cópia
        if (type === "name") {
            sortedProducts.sort((a, b) => a.localeCompare(b));
        }

        if (type === "price") {
            sortedProducts.sort((a, b) => a - b);
        }

        // Se for direction decrescente, inverte a lista
        if (direction === "descending") {
            sortedProducts.reverse();
        }

        // Compara a ordem da tela com a ordem esperada
        expect(displayedProducts).to.deep.equal(sortedProducts);
    });
}