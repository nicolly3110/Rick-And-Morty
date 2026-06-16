const BASE_URL = 'https://rickandmortyapi.com/api';


 export async function buscarPersonagens(nome = '') {

    const response = await fetch(
        `${BASE_URL}/character/?name=${nome}`
    );

    const data = await response.json();
    
    console.log(data);
    return data;
}