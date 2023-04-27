

export const daleFetch = () => {
    return fetch(`https://preplyinternal.cloud.looker.com/api/4.0/user`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer TOKEN`
        }
    })
}

export const daleLook = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer TOKEN");
    myHeaders.append("x-looker-appid", "TS-SDK 22.16");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://preplyinternal.cloud.looker.com//api/4.0/queries/slug/YtURw8jBM2Nilfc2Nhfyiv", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}