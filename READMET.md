# DeezerAPI

A simple Nodejs wrapper for the Deezer API, allowing easy access to a variety of Deezer's endpoints to fetch data about artists, albums, tracks, playlists, and more.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
  - [Importing and Initializing](#importing-and-initializing)
  - [Search for an Artist](#search-for-an-artist)
  - [Get Album Information](#get-album-information)
  - [Get Editorial Information](#get-editorial-information)
  - [Get Chart Information](#get-chart-information)
  - [Get Artist Information](#get-artist-information)
  - [Get Track Information](#get-track-information)
  - [Get Radio Stations](#get-radio-stations)
  - [Get Playlist Information](#get-playlist-information)
  - [Get Deezer Information](#get-deezer-information)
  - [Get Genres](#get-genres)
  - [Get User Information](#get-user-information)
- [Author and Contact Information](#author-and-contact-information)
- [Support the Project](#support-the-project)

## Introduction

DeezerAPI is a simple yet powerful Nodejs wrapper for the Deezer API. It allows developers to easily access a wide range of endpoints provided by Deezer, enabling the retrieval of detailed information about artists, albums, tracks, playlists, and more. Whether you're building a music discovery app, analyzing musical trends, or just experimenting with the Deezer API, this module provides a convenient way to interact with Deezer's vast music database.

## Installation

To install the DeezerAPI module, simply use npm :

```sh
npm install deezer_api
```

## USAGE 

```javascript
const deezerAPI = require('deezer_api');

(async () => {
  const searchResults = await deezerAPI.search('eminem');
  console.log(searchResults);

  const album = await deezerAPI.getAlbum('302127');
  console.log(album);

  // Utilisez les autres fonctions de la même manière
})();
```

## API
`search(query = "eminem")`
Searches for a query in Deezer.

`getAlbum(albumId = "302127")`
Fetches album information by ID.

`getEditorial()`
Fetches Deezer editorial information.

`getChart()`
Fetches Deezer global charts.

`getArtist(artistId = "27")`
Fetches artist information by ID.

`getTrack(trackId = "3135556")`
Fetches track information by ID.

`getRadio()`
Fetches Deezer radio information.

`getPlaylist(playlistId = "908622995")`
Fetches playlist information by ID.

`getInfos()`
Fetches general Deezer information.

`getGenre()`
Fetches Deezer genre information.

`getUser(userId = "5557228304")`
Fetches user information by ID.



## Author and Contact Information

**Name and Author**: Åndry RL  
**Username**: andryerics  
**Website**: [andryerics.com](https://www.andryerics.com)  
**WhatsApp**: [+261347262824](https://wa.me/261347262824)  

## Support the Project

If you find this project useful and would like to support its development, you can buy me a coffee:

- **PayPal**: [andryerica1@gmail.com](https://www.paypal.com/donate?business=andryerica1@gmail.com&item_name=Support+DeezerAPI+Development&currency_code=USD)

Thank you for your support!


## License
ISC
