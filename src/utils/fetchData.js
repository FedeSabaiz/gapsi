export const fetchUser = async () => {
    try {
        const response = await fetch('https://node-red-nxdup.mybluemix.net/visitor', {
            method: 'POST'
        });
        const res = await response.json();
        // console.log(res);
        return res;
    } catch (error) {
        console.error('No se completó la petición', error);
        
    }
}

export const fetchProduct = async ({categoria, pag}) => {
    try {
        const response = await fetch(`https://node-red-nxdup.mybluemix.net/productos/${categoria}/${pag}`, {
            method: 'GET'
        });
        const res = await response.json();
        return res;
    } catch (error) {
        console.log('No se pudo completar la petición', error);
        
    }
}