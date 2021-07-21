export function fnFilters(games, filters) {

    if(filters !== undefined){

        var filteredGames = [];

        if(filters.genre){
            games.map(game =>(
                (game.genres)?    
                    game.genres.map(
                        genre =>{ 
                        if(genre.name === filters.genre)
                        filteredGames.push(game);
                    }):
                    game.genders.map(
                        genre =>{ 
                        if(genre.name === filters.genre)
                          filteredGames.push(game);
                    })    
            ));
        }
    


        if(filters.platform){
            
            games.map(game =>
            game.platforms.map(
                platform =>{ 
                if(!platform.platform){
                    if(platform.name === filters.platform)
                    filteredGames.push(game);   
                }else{
                    if(platform.platform.name === filters.platform)
                    filteredGames.push(game);
                }}));
        }

        if(filters.alphabet){
            if(filters.alphabet === 'AZ'){
                    filteredGames = games.sort(function(a, b) {
                        var textA = a.name;
                        var textB = b.name;
                        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                    });
            }else{
                filteredGames = games.sort(function(a, b) {
                    var textA = a.name;
                    var textB = b.name;
                    return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
                })
            }
        }

        if(filters.rating){
            if(filters.rating === 'ASC'){
                    filteredGames = games.sort(function(a, b) {
                        var textA = a.rating;
                        var textB = b.rating;
                        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                    });
            }else{
                filteredGames = games.sort(function(a, b) {
                    var textA = a.rating;
                    var textB = b.rating;
                    return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
                });
            }
        }

        
    }
    return filteredGames;
}