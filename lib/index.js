const axios = require('axios');

// Fonction utilitaire pour effectuer une requête GET vers Deezer
async function fetchDeezerData(url, params = {}) {
    try {
        const response = await axios.get(url, { params });
        return response.data;
    } catch (error) {
        console.error(error);
        return { error: 'Une erreur est survenue lors de la récupération des données de Deezer.' };
    }
}

// Fonctions pour chaque endpoint
async function search(query = "eminem") {
    return await fetchDeezerData("https://api.deezer.com/search", { q: query });
}

async function getAlbum(albumId = "302127") {
    return await fetchDeezerData(`https://api.deezer.com/album/${albumId}`);
}

async function getEditorial() {
    return await fetchDeezerData("https://api.deezer.com/editorial");
}

async function getChart() {
    return await fetchDeezerData("https://api.deezer.com/chart/0");
}

async function getArtist(artistId = "27") {
    return await fetchDeezerData(`https://api.deezer.com/artist/${artistId}`);
}

async function getTrack(trackId = "3135556") {
    return await fetchDeezerData(`https://api.deezer.com/track/${trackId}`);
}

async function getRadio() {
    return await fetchDeezerData("https://api.deezer.com/radio");
}

async function getPlaylist(playlistId = "908622995") {
    return await fetchDeezerData(`https://api.deezer.com/playlist/${playlistId}`);
}

async function getInfos() {
    return await fetchDeezerData("https://api.deezer.com/infos");
}

async function getGenre() {
    return await fetchDeezerData("https://api.deezer.com/genre");
}

async function getUser(userId = "5557228304") {
    return await fetchDeezerData(`https://api.deezer.com/user/${userId}`);
}

// Export des fonctions
module.exports = {
    search,
    getAlbum,
    getEditorial,
    getChart,
    getArtist,
    getTrack,
    getRadio,
    getPlaylist,
    getInfos,
    getGenre,
    getUser
};
// works
