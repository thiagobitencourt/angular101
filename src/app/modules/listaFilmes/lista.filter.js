function nomeFilter($filter) {
    const filter = $filter('filter');
    // Filtro que extende o filtro original
    return (arr, termoBusca) => {
        return filter(arr, { nome: termoBusca})
    }
}

function categoriaFilter() {
    return categoria => categoria.nome + ' -> ' + categoria.valor
}

export { categoriaFilter, nomeFilter };
