let root = document.documentElement;
root.style.setProperty('--background-color', '#deb522');
root.style.setProperty('--card-color', '#0c0b00');
root.style.setProperty('--text-color', '#ffffff');
root.style.setProperty('--card-margin', '10px');

document.body.style.backgroundColor = 'var(--background-color)';
document.body.style.color = 'var(--text-color)';

let movies = [
    {"title": "Superbad", "length": 118, "type": "Comedy", "year": 2007, "IMDB": 7.6, "poster": "https://m.media-amazon.com/images/M/MV5BNjk0MzdlZGEtNTRkOC00ZDRiLWJkYjAtMzUzYTRiNzk1YTViXkEyXkFqcGc@._V1_.jpg", "link": "https://www.imdb.com/title/tt0829482/"},
    {"title": "Inception", "length": 148, "type": "Sci-Fi", "year": 2010, "IMDB": 8.8, "poster": "https://m.media-amazon.com/images/I/912AErFSBHL._AC_UF894,1000_QL80_.jpg", "link": "https://www.imdb.com/title/tt1375666/"},
    {"title": "The Dark Knight", "length": 152, "type": "Action", "year": 2008, "IMDB": 9.0, "poster": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg", "link": "https://www.imdb.com/title/tt0468569/"},
    {"title": "Forrest Gump", "length": 142, "type": "Drama", "year": 1994, "IMDB": 8.8, "poster": "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", "link": "https://www.imdb.com/title/tt0109830/"},
    {"title": "The Matrix", "length": 136, "type": "Sci-Fi", "year": 1999, "IMDB": 8.7, "poster": "https://pics.filmaffinity.com/the_matrix-155050517-large.jpg", "link": "https://www.imdb.com/title/tt0133093/"},
    {"title": "Pulp Fiction", "length": 154, "type": "Crime", "year": 1994, "IMDB": 8.9, "poster": "https://pics.filmaffinity.com/Pulp_Fiction-210382116-large.jpg", "link": "https://www.imdb.com/title/tt0110912/"},
    {"title": "Toy Story", "length": 81, "type": "Comedy", "year": 1995, "IMDB": 8.3, "poster": "https://pics.filmaffinity.com/Toy_Story-626273371-large.jpg", "link": "https://www.imdb.com/title/tt0114709/"},
    {"title": "The Godfather", "length": 175, "type": "Crime", "year": 1972, "IMDB": 9.2, "poster": "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", "link": "https://www.imdb.com/title/tt0068646/"},
    {"title": "Titanic", "length": 195, "type": "Drama", "year": 1997, "IMDB": 7.9, "poster": "https://www.themoviedb.org/t/p/original/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg", "link": "https://www.imdb.com/title/tt0120338/"},
    {"title": "Interstellar", "length": 169, "type": "Sci-Fi", "year": 2014, "IMDB": 8.6, "poster": "https://www.themoviedb.org/t/p/original/nCbkOyOMTEwlEV0LtCOvCnwEONA.jpg", "link": "https://www.imdb.com/title/tt0816692/"},
    {"title": "Gladiator", "length": 155, "type": "Action", "year": 2000, "IMDB": 8.5, "poster": "https://m.media-amazon.com/images/I/81+sTg6ZZyL.jpg", "link": "https://www.imdb.com/title/tt0172495/"},
    {"title": "The Shawshank Redemption", "length": 142, "type": "Drama", "year": 1994, "IMDB": 9.3, "poster": "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", "link": "https://www.imdb.com/title/tt0111161/"},
    {"title": "The Silence of the Lambs", "length": 118, "type": "Thriller", "year": 1991, "IMDB": 8.6, "poster": "https://m.media-amazon.com/images/M/MV5BNDdhOGJhYzctYzYwZC00YmI2LWI0MjctYjg4ODdlMDExYjBlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", "link": "https://www.imdb.com/title/tt0102926/"},
    {"title": "Fight Club", "length": 139, "type": "Action", "year": 1999, "IMDB": 8.8, "poster": "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", "link": "https://www.imdb.com/title/tt0137523/"},
    {"title": "Get Out", "length": 104, "type": "Horror", "year": 2017, "IMDB": 7.7, "poster": "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_.jpg", "link": "https://www.imdb.com/title/tt5052448/"},
    {"title": "Mad Max: Fury Road", "length": 120, "type": "Action", "year": 2015, "IMDB": 8.1, "poster": "https://pics.filmaffinity.com/mad_max_fury_road-429261909-mmed.jpg", "link": "https://www.imdb.com/title/tt1392190/"},
    {"title": "La La Land", "length": 128, "type": "Romance", "year": 2016, "IMDB": 8.0, "poster": "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg", "link": "https://www.imdb.com/title/tt3783958/"},
    {"title": "Parasite", "length": 132, "type": "Thriller", "year": 2019, "IMDB": 8.5, "poster": "https://pics.filmaffinity.com/Paraasitos-406070218-large.jpg", "link": "https://www.imdb.com/title/tt6751668/"},
    {"title": "Her", "length": 126, "type": "Romance", "year": 2013, "IMDB": 8.0, "poster": "https://pics.filmaffinity.com/Her-481503906-large.jpg", "link": "https://www.imdb.com/title/tt1798709/"},
    {"title": "Joker", "length": 122, "type": "Crime", "year": 2019, "IMDB": 8.4, "poster": "https://pics.filmaffinity.com/Joker-790658206-mmed.jpg", "link": "https://www.imdb.com/title/tt7286456/"},
    {"title": "The Conjuring", "length": 112, "type": "Horror", "year": 2013, "IMDB": 7.5, "poster": "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_FMjpg_UX1000_.jpg", "link": "https://www.imdb.com/title/tt1457767/"},
    {"title": "Edge of Tomorrow", "length": 113, "type": "Sci-Fi", "year": 2014, "IMDB": 7.9, "poster": "https://m.media-amazon.com/images/M/MV5BMTc5OTk4MTM3M15BMl5BanBnXkFtZTgwODcxNjg3MDE@._V1_.jpg", "link": "https://www.imdb.com/title/tt1631867/"},
    {"title": "The Notebook", "length": 123, "type": "Romance", "year": 2004, "IMDB": 7.8, "poster": "https://pics.filmaffinity.com/El_diario_de_Noah-565006977-large.jpg", "link": "https://www.imdb.com/title/tt0332280/"},
    {"title": "The Hangover", "length": 100, "type": "Comedy", "year": 2009, "IMDB": 7.7, "poster": "https://upload.wikimedia.org/wikipedia/en/b/b9/Hangoverposter09.jpg", "link": "https://www.imdb.com/title/tt1119646/"},
    {"title": "Black Swan", "length": 108, "type": "Thriller", "year": 2010, "IMDB": 8.0, "poster": "https://m.media-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_FMjpg_UX1000_.jpg", "link": "https://www.imdb.com/title/tt0947798/"},
    {"title": "Shutter Island", "length": 138, "type": "Thriller", "year": 2010, "IMDB": 8.2, "poster": "https://m.media-amazon.com/images/M/MV5BN2FjNWExYzEtY2YzOC00YjNlLTllMTQtNmIwM2Q1YzBhOWM1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", "link": "https://www.imdb.com/title/tt1130884/"},
    {"title": "Deadpool", "length": 108, "type": "Action", "year": 2016, "IMDB": 8.0, "poster": "https://upload.wikimedia.org/wikipedia/en/2/23/Deadpool_%282016_poster%29.png", "link": "https://www.imdb.com/title/tt1431045/"},
    {"title": "The Departed", "length": 151, "type": "Crime", "year": 2006, "IMDB": 8.5, "poster": "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_FMjpg_UX1000_.jpg", "link": "https://www.imdb.com/title/tt0407887/"},
    {"title": "Jaws", "length": 124, "type": "Horror", "year": 1975, "IMDB": 8.1, "poster": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Jaws_movie_poster.jpg/1200px-Jaws_movie_poster.jpg", "link": "https://www.imdb.com/title/tt0073195/"},
    {"title": "Eternal Sunshine of the Spotless Mind", "length": 108, "type": "Romance", "year": 2004, "IMDB": 8.3, "poster": "https://pics.filmaffinity.com/aOlvaidate_de_mai-314689716-large.jpg", "link": "https://www.imdb.com/title/tt0338013/"},
    {"title": "Knives Out", "length": 130, "type": "Crime", "year": 2019, "IMDB": 7.9, "poster": "https://m.media-amazon.com/images/M/MV5BZmYxOTAxYjgtMWQ3NC00ZTFlLWJiYjMtOGNiMGIwZDMwNzEzXkEyXkFqcGc@._V1_.jpg", "link": "https://www.imdb.com/title/tt8946378/"},
    {"title": "The Revenant", "length": 156, "type": "Adventure", "year": 2015, "IMDB": 8.0, "poster": "https://m.media-amazon.com/images/M/MV5BYTgwNmQzZDctMjNmOS00OTExLTkwM2UtNzJmOTJhODFjOTdlXkEyXkFqcGc@._V1_.jpg", "link": "https://www.imdb.com/title/tt1663202/"},
    {"title": "Whiplash", "length": 106, "type": "Drama", "year": 2014, "IMDB": 8.5, "poster": "https://pics.filmaffinity.com/Whiplash-252123273-large.jpg", "link": "https://www.imdb.com/title/tt2582802/"},
    {"title": "The Grand Budapest Hotel", "length": 99, "type": "Comedy", "year": 2014, "IMDB": 8.1, "poster": "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_FMjpg_UX1000_.jpg", "link": "https://www.imdb.com/title/tt2278388/"},
    {"title": "1917", "length": 119, "type": "Drama", "year": 2019, "IMDB": 8.3, "poster": "https://pics.filmaffinity.com/1917-841470460-large.jpg", "link": "https://www.imdb.com/title/tt8579674/"},
    {"title": "The Social Network", "length": 120, "type": "Drama", "year": 2010, "IMDB": 7.7, "poster": "https://upload.wikimedia.org/wikipedia/en/8/8c/The_Social_Network_film_poster.png", "link": "https://www.imdb.com/title/tt1285016/"},
    {"title": "The Prestige", "length": 130, "type": "Mystery", "year": 2006, "IMDB": 8.5, "poster": "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_FMjpg_UX1000_.jpg", "link": "https://www.imdb.com/title/tt0482571/"},
    {"title": "Arrival", "length": 116, "type": "Sci-Fi", "year": 2016, "IMDB": 7.9, "poster": "https://m.media-amazon.com/images/I/61-6gLEy1hL._AC_UF1000,1000_QL80_.jpg", "link": "https://www.imdb.com/title/tt2543164/"},
    {"title": "Coco", "length": 105, "type": "Comedy", "year": 2017, "IMDB": 8.4, "poster": "https://m.media-amazon.com/images/M/MV5BMDIyM2E2NTAtMzlhNy00ZGUxLWI1NjgtZDY5MzhiMDc5NGU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", "link": "https://www.imdb.com/title/tt2380307/"},
    {"title": "The Truman Show", "length": 103, "type": "Drama", "year": 1998, "IMDB": 8.2, "poster": "https://pics.filmaffinity.com/the_truman_show-130091557-large.jpg", "link": "https://www.imdb.com/title/tt0120382/"},
    {"title": "Logan", "length": 137, "type": "Action", "year": 2017, "IMDB": 8.1, "poster": "https://pics.filmaffinity.com/Logan-528968427-large.jpg", "link": "https://www.imdb.com/title/tt3315342/"},
    {"title": "Crouching Tiger, Hidden Dragon", "length": 120, "type": "Adventure", "year": 2000, "IMDB": 7.9, "poster": "https://upload.wikimedia.org/wikipedia/en/2/27/Crouching_Tiger%2C_Hidden_Dragon_%28Chinese_poster%29.png", "link": "https://www.imdb.com/title/tt0190332/"},
    {"title": "The Imitation Game", "length": 113, "type": "Drama", "year": 2014, "IMDB": 8.0, "poster": "https://bifa.imgix.net/web/2018/10/MV5BOTgwMzFiMWYtZDhlNS00ODNkLWJiODAtZDVhNzgyNzJhYjQ4L2ltYWdlXkEyXkFqcGdeQXVyNzEzOTYxNTQ@._V1_SX1920.jpg?auto=compress%2Cformat&fit=scale&h=1145&ixlib=php-3.3.1&w=768&wpsize=md", "link": "https://www.imdb.com/title/tt2084970/"},
    {"title": "Birdman", "length": 119, "type": "Drama", "year": 2014, "IMDB": 7.7, "poster": "https://m.media-amazon.com/images/M/MV5BZTUzMDM4ZWYtMzQ4Ni00YTIxLWI5ZDMtMzU3MGU4NTVhODRlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", "link": "https://www.imdb.com/title/tt2562232/"},
    {"title": "Inside Out", "length": 95, "type": "Comedy", "year": 2015, "IMDB": 8.1, "poster": "https://upload.wikimedia.org/wikipedia/en/0/0a/Inside_Out_%282015_film%29_poster.jpg", "link": "https://www.imdb.com/title/tt2096673/"},
    {"title": "A Beautiful Mind", "length": 135, "type": "Drama", "year": 2001, "IMDB": 8.2, "poster": "https://m.media-amazon.com/images/M/MV5BNzljZTk5ZDgtZTQ1Zi00NTM4LThlOGUtZDk2MGM4NDQ4NWQyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", "link": "https://www.imdb.com/title/tt0268978/"},
    {"title": "Prisoners", "length": 153, "type": "Thriller", "year": 2013, "IMDB": 8.1, "poster": "https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_.jpg", "link": "https://www.imdb.com/title/tt1392214/"},
    {"title": "Gone Girl", "length": 149, "type": "Thriller", "year": 2014, "IMDB": 8.1, "poster": "https://m.media-amazon.com/images/S/pv-target-images/dd661ff9c3c8a2d2eb82d4a34d03a8e86c442e677ed97e5d59ced015fb0dd9f7.jpg", "link": "https://www.imdb.com/title/tt2267998/"},
    { "title": "Dead Poets Society", "length": 128, "type": "Drama", "year": 1989, "IMDB": 8.1, "poster": "https://snworksceo.imgix.net/cds/c6c85a28-de69-42ee-8bc6-af3c1f45fb55.sized-1000x1000.jpg?w=1000&dpr=2", "link": "https://www.imdb.com/title/tt0097165/" },
    {"title": "No Country for Old Men", "length": 122, "type": "Crime", "year": 2007, "IMDB": 8.2, "poster": "https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_FMjpg_UX1000_.jpg", "link": "https://www.imdb.com/title/tt0477348/"},
    {"title": "The Theory of Everything", "length": 123, "type": "Drama", "year": 2014, "IMDB": 7.7, "poster": "https://m.media-amazon.com/images/M/MV5BMTAwMTU4MDA3NDNeQTJeQWpwZ15BbWU4MDk4NTMxNTIx._V1_FMjpg_UX1000_.jpg", "link": "https://www.imdb.com/title/tt2980516/"},
    {"title": "The Wolf of Wall Street", "length": 180, "type": "Comedy", "year": 2013, "IMDB": 8.2, "poster": "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_.jpg", "link": "https://www.imdb.com/title/tt0993846/"},
    {"title": "Django Unchained", "length": 165, "type": "Western", "year": 2012, "IMDB": 8.5, "poster": "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg", "link": "https://www.imdb.com/title/tt1853728/"},
    {"title": "The Big Lebowski", "length": 117, "type": "Comedy", "year": 1998, "IMDB": 8.1, "poster": "https://pics.filmaffinity.com/El_gran_Lebowski-877217211-large.jpg", "link": "https://www.imdb.com/title/tt0118715/"},
    {"title": "Pan's Labyrinth", "length": 118, "type": "Fantasy", "year": 2006, "IMDB": 8.2, "poster": "https://m.media-amazon.com/images/M/MV5BOTc1NTAxMWItMWFlNy00MmU2LTkwMTMtNzMwOTg5OTQ5YTFiXkEyXkFqcGc@._V1_.jpg", "link": "https://www.imdb.com/title/tt0457430/"},
    {"title": "The Hunt", "length": 115, "type": "Drama", "year": 2012, "IMDB": 8.3, "poster": "https://m.media-amazon.com/images/M/MV5BMTg2NDg3ODg4NF5BMl5BanBnXkFtZTcwNzk3NTc3Nw@@._V1_.jpg", "link": "https://www.imdb.com/title/tt2106476/"},
    {"title": "Amélie", "length": 122, "type": "Romance", "year": 2001, "IMDB": 8.3, "poster": "https://pics.filmaffinity.com/Amaelie-848337470-large.jpg", "link": "https://www.imdb.com/title/tt0211915/"},
    {"title": "The Intouchables", "length": 112, "type": "Biography", "year": 2011, "IMDB": 8.5, "poster": "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_.jpg", "link": "https://www.imdb.com/title/tt1675434/"},
    {"title": "The Pianist", "length": 150, "type": "Biography", "year": 2002, "IMDB": 8.5, "poster": "https://m.media-amazon.com/images/M/MV5BMjEwNmEwYjgtNTk3ZC00NjljLTg5ZDctZTY3ZGQwZjRkZmQxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", "link": "https://www.imdb.com/title/tt0253474/"},
    {"title": "Snatch", "length": 104, "type": "Crime", "year": 2000, "IMDB": 8.2, "poster": "https://m.media-amazon.com/images/M/MV5BYzk5NjJkMTQtN2IyNC00YWM5LTlhZmMtNGI3MWNhMTU1YTc4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", "link": "https://www.imdb.com/title/tt0208092/"},
    {"title": "Oldboy", "length": 120, "type": "Mystery", "year": 2003, "IMDB": 8.4, "poster": "https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_FMjpg_UX1000_.jpg", "link": "https://www.imdb.com/title/tt0364569/"},
    {"title": "Trainspotting", "length": 93, "type": "Drama", "year": 1996, "IMDB": 8.1, "poster": "https://m.media-amazon.com/images/I/81AffwUAFIL.jpg", "link": "https://www.imdb.com/title/tt0117951/"},
    {"title": "Room", "length": 118, "type": "Drama", "year": 2015, "IMDB": 8.1, "poster": "https://pics.filmaffinity.com/La_habitaciaon-923468129-large.jpg", "link": "https://www.imdb.com/title/tt3170832/"},
    {"title": "A Clockwork Orange", "length": 136, "type": "Crime", "year": 1971, "IMDB": 8.3, "poster": "https://m.media-amazon.com/images/M/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@._V1_.jpg", "link": "https://www.imdb.com/title/tt0066921/"},
    {"title": "There Will Be Blood", "length": 158, "type": "Drama", "year": 2007, "IMDB": 8.2, "poster": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p171565_p_v8_aa.jpg", "link": "https://www.imdb.com/title/tt0469494/"},
    {"title": "Requiem for a Dream", "length": 102, "type": "Drama", "year": 2000, "IMDB": 8.3, "poster": "https://m.media-amazon.com/images/M/MV5BN2ZlMjIzZjctYzA2My00ZWYyLWI4ZjctMGI2NWYyNzFiZjAwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", "link": "https://www.imdb.com/title/tt0180093/"},
    {"title": "Memento", "length": 113, "type": "Mystery", "year": 2000, "IMDB": 8.4, "poster": "https://pics.filmaffinity.com/Memento-230609861-large.jpg", "link": "https://www.imdb.com/title/tt0209144/"},
    {"title": "The Florida Project", "length": 111, "type": "Drama", "year": 2017, "IMDB": 7.6, "poster": "https://upload.wikimedia.org/wikipedia/en/b/b2/The_Florida_Project.jpg", "link": "https://www.imdb.com/title/tt5649144/"},
    {"title": "Moonlight", "length": 111, "type": "Drama", "year": 2016, "IMDB": 7.4, "poster": "https://pics.filmaffinity.com/Moonlight-232276883-mmed.jpg", "link": "https://www.imdb.com/title/tt4975722/"},
    {"title": "The Lighthouse", "length": 109, "type": "Horror", "year": 2019, "IMDB": 7.5, "poster": "https://upload.wikimedia.org/wikipedia/en/2/2c/The_Lighthouse.jpeg", "link": "https://www.imdb.com/title/tt7984734/"},
    {"title": "The Banshees of Inisherin", "length": 114, "type": "Drama", "year": 2022, "IMDB": 7.7, "poster": "https://m.media-amazon.com/images/M/MV5BOTkzMWI4OTEtMTk0MS00MTUxLWI4NTYtYmRiNWM4Zjc1MGRhXkEyXkFqcGc@._V1_.jpg", "link": "https://www.imdb.com/title/tt11813216/"},
    {"title": "Everything Everywhere All at Once", "length": 139, "type": "Sci-Fi", "year": 2022, "IMDB": 7.9, "poster": "https://m.media-amazon.com/images/M/MV5BOWNmMzAzZmQtNDQ1NC00Nzk5LTkyMmUtNGI2N2NkOWM4MzEyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", "link": "https://www.imdb.com/title/tt6710474/"},
    {"title": "The Whale", "length": 117, "type": "Drama", "year": 2022, "IMDB": 7.7, "poster": "https://m.media-amazon.com/images/M/MV5BYmNhOWMyNTYtNTljNC00NTU3LWFiYmQtMDBhOGU5NWFhNGU5XkEyXkFqcGc@._V1_.jpg", "link": "https://www.imdb.com/title/tt13833688/"},
    {"title": "The Menu", "length": 106, "type": "Thriller", "year": 2022, "IMDB": 7.2, "poster": "https://m.media-amazon.com/images/M/MV5BN2Q0YWE1MjktODJlMi00NTRiLWI2ZTctZTAxNjkyODVjM2EyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", "link": "https://www.imdb.com/title/tt9764362/"},
    {"title": "Tár", "length": 158, "type": "Drama", "year": 2022, "IMDB": 7.5, "poster": "https://upload.wikimedia.org/wikipedia/en/1/19/T%C3%A1r_poster.jpg", "link": "https://www.imdb.com/title/tt14444726/"},
    {"title": "Aftersun", "length": 101, "type": "Drama", "year": 2022, "IMDB": 7.7, "poster": "https://www.framerated.co.uk/frwpcontent/uploads/2022/11/aftersun_poster.jpeg", "link": "https://www.imdb.com/title/tt19770238/"}
];

let container = document.createElement("div");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.justifyContent = "space-around";

for (let movie of movies) {
    let card = document.createElement("div");
    card.style.margin = "var(--card-margin)";
    card.style.width = "300px";
    card.style.backgroundColor = "var(--card-color)";
    card.style.color = "var(--text-color)";
    card.style.borderRadius = "8px";
    card.style.overflow = "hidden";

    let movieLink = document.createElement("a");
    movieLink.href = movie.link;
    movieLink.target = "_blank"; // Opens the link in a new tab

    let poster = document.createElement("img");
    poster.src = movie.poster;
    poster.style.width = "100%";
    poster.style.height = "auto";
    card.appendChild(movieLink);
    movieLink.appendChild(poster);

    let title = document.createElement("h3");
    title.innerText = movie.title;
    title.style.textAlign = "center";
    card.appendChild(title);

    let details = document.createElement("p");
    details.innerText = `Year: ${movie.year} \n Length: ${movie.length} mins \n IMDb: ${movie.IMDB} ⭐`;
    details.style.textAlign = "center";
    card.appendChild(details);

    container.appendChild(card);
}

document.body.appendChild(container);
