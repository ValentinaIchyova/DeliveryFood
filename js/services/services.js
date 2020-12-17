// ассинхронный код , не ждет другой. постим данные
const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });
    return await res.json();  
    // возвращается промис/ всегда продумывать как будет работать код и сколько по времени
};

async function getResource(url) {
    let res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
}

export {postData};
export {getResource};