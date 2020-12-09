var MongoClient = require('mongodb').MongoClient;

module.exports = function createDatabase() {
    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        console.log("Database created!");
        db.close();
    });


    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("consoles");
        dbo.createCollection("games", function(err, res) {
            if (err) throw err;
            console.log("Collection created!");
            db.close();
        });
    });


    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("consoles");
        var gamesObj = [
            { nome: 'The Witcher 3: Wild Hunt', resumo: 'A nova missão do caçador de monstros é dada em tempos sombrios nos quais um misterioso exército conhecido como a "Caçada Selvagem" invade os Reinos do Norte, deixando apenas sangue e ruína por onde passa; parece que Geralt é a chave para os parar.', desenvolvedor: 'CD Projekt, CD Projekt RED', genero: 'aventura', avaliacao: 9, console: 'xbox', url: 'https://imagens-trabalho-baldochi.s3.amazonaws.com/d5066f8b8758c29494fdfdc9003df206-the%20witcher.jpg' },
            { nome: 'Grand Theft Auto V', resumo: 'O game GTa 5 se passa na cidade metropolitana de Los Santos e no condado de Blaine County, no sul do estado de San Andreas no ano de 2013, cinco anos após os acontecimentos de Grand Theft Auto IV e Grand Theft Auto Episodes From Liberty City, e 4 anos após Grand Theft Auto: Chinatown Wars. E pela primeira vez em toda saga GTA, este conta uma história com três protagonistas diferentes', desenvolvedor: 'Rockstar', genero: 'ação', avaliacao: 9, console: 'xbox', url: 'https://imagens-trabalho-baldochi.s3.amazonaws.com/7d50900a372457961c1b2e1cc477e7f2-Grand_Theft_Auto_V_capa.png' },
            { nome: 'Red Dead Redemption 2', resumo: 'Red Dead Redemption 2 é um dos maiores jogos já feitos pela Rockstar Games e um dos maiores jogos de todos os tempos. O game é uma recriação espantosa e deslumbrante do oeste selvagem, repleta de detalhes e atividades, incluindo caça, partidas de pôquer e mais. E claro, os personagens de Red Dead 2 marcaram as nossas memórias: Arthur Morgan, John Marston, Sadie e Dutch são personalidades vibrantes e complexas. Este game é nada mais e nada menos que uma obra de arte.', desenvolvedor: 'Rockstar', genero: 'ação', avaliacao: 9, console: 'xbox', url: 'https://imagens-trabalho-baldochi.s3.amazonaws.com/cd205e274ad17cadbb572b759db45f86-Red%20Dead.png' },
            { nome: 'God of War', resumo: 'O game inova o mundo de Kratos com muita maestria ao abrir espaço para mudanças corajosas, ao mesmo tempo em que mantém a fidelidade às origens da série. Narrativa e gameplay andam lado a lado do começo ao fim, fazendo com que cada centímetro explorado seja gratificante. Tudo, desde a história principal até as missões secundárias, acrescentam algo para jornada de Kratos e Atreus. E claro, a variedade de inimigos, desafiadores quebra-cabeças e o prazeroso combate completam a experiência.', desenvolvedor: 'SIE Santa Monica Studio', genero: 'aventura', avaliacao: 9, console: 'playstation', url: 'https://imagens-trabalho-baldochi.s3.us-east-2.amazonaws.com/a9c43687141fc80cb3c5f5ef90f42463-god%20of%20war%204.jpg' },
            { nome: 'The Last of Us Part II', resumo: 'A continuação de The Last of Us representa um auge para games focados na narrativa. A proposta é ambiciosa e bastante perigosa, já que The Last of Us 2 tira o jogador da zona de conforto e brinca com as nossas emoções durante todo o game. Mesmo que você não concorde com todas as decisões, é necessário pontuar que este é, provavelmente, o título mais complexo que a Naughty Dog já criou. Sabemos que o gameplay não é perfeito, mas a experiência brutal com Ellie é simplesmente única e inesquecível.', desenvolvedor: 'Naughty Dog', genero: 'aventura', avaliacao: 9, console: 'playstation', url: 'https://imagens-trabalho-baldochi.s3.amazonaws.com/b3dc22325c535be7c31970a287dce14f-the%20last%20of%20us.png' },
            { nome: 'Bloodborne', resumo: 'Bloodborne é uma incrível, empolgante e desgastante viagem por um universo maravilhoso e macabro que nos faz sentir como se estivéssemos descendo em uma espiral de insanidade. A FromSoftware pegou a fórmula que construiu na série Souls e injetou nela um senso de pavor, fúria e urgência que formam uma experiência inesquecível. Há uma sensação incrível de realização em vencer seus combates e desafios, mesmo que o sacrifício para chegar até lá seja enorme.', desenvolvedor: '	FromSoftware', genero: 'RPG', avaliacao: 9, console: 'playstation', url: 'https://imagens-trabalho-baldochi.s3.us-east-2.amazonaws.com/38ae07b771321faaf993c0c912fe06c4-bloodborne.jpg' },
            { nome: 'The Legend of Zelda: Breath of the Wild', resumo: ' oferece uma sensação incomparável de liberdade e escala na palma da sua mão. Ele conta uma história épica e nos ensina novas mecânicas por meio de uma versão lindamente arruinada de Hyrule. Este game ajuda a revigorar The Legend of Zelda de uma maneira que os fãs apenas tinham em sonho, colocando-o facilmente ao posto de número um em nossa lista (e em nossos corações).', desenvolvedor: 'Nintendo Entertainment Planning & Development', genero: 'ação', avaliacao: 9, console: 'switch', url: 'https://imagens-trabalho-baldochi.s3.amazonaws.com/9fc82a34af8121cd936caf020f5c8d25-legend%20of%20zelda.jpg' },
            { nome: 'Super Smash Bros. Ultimate', resumo: 'Super Smash Bros. Ultimate traz tudo -- tudo mesmo -- que você espera da série. Há muito conteúdo, muitos lutadores e muitos desafios em um pacote que é um baú da história dos games. E melhor, tudo bem balanceado e bonito. Você pode ter o caos que o game oferece ou pode escolher uma luta mais justa. Pode jogar o modo história ou pode ir para um desafio online. Pode escolher personagens de diversas franquias históricas e até ter um herói favorito da sua vida para jogar até cansar (o que não vai acontecer tão cedo). Inclusive, poder fazer isso em qualquer lugar é um dos trunfos do Switch.', desenvolvedor: '	Bandai Namco Studios Sora', genero: 'ação', avaliacao: 9, console: 'switch', url: 'https://imagens-trabalho-baldochi.s3.amazonaws.com/9d9356a7634d3cdb6d06983bd0cb498c-super%20smash%20bros.jpg' },
            { nome: 'Super Mario Odyssey', resumo: 'Uma aula magistral em plataformas 3D, Super Mario Odyssey combina perfeitamente os melhores elementos de quase todos os games de Mario com todo um portfólio de novas mecânicas para criar algo que é tão nostálgico quanto corajoso. Novos jogadores vão adorar explorar os novos e vastos mundos, enquanto os mais experientes provavelmente vão querer coletar todos os colecionáveis e superar os desafios. Em resumo, Super Mario Odyssey é alegria pura e sublime e um dos melhores games de Super Mario já feitos.', desenvolvedor: 'Nintendo Entertainment Planning & Development', genero: 'aventura', avaliacao: 9, console: 'switch', url: 'https://imagens-trabalho-baldochi.s3.amazonaws.com/6d004219bf6cec4fdd344878c973c7a9-mario%20odysey.jpg' },
            { nome: 'Portal 2', resumo: 'Nenhum outro game cumpre tanto tão bem. O level design impecável, a personalidade encantadora, e sistemas de puzzles variados e excepcionais nos fazem sentir inteligentes só de resolvê-los. Além disso, a campanha cooperativa requer diferentes tipos de "inteligentes", que faz dela uma das melhores experiências multiplayer do mercado.', desenvolvedor: 'Valve', genero: 'aventura', avaliacao: 9, console: 'pc', url: 'https://imagens-trabalho-baldochi.s3.amazonaws.com/616b94f06dffd81171a76baa2d9ece16-portal%202.jpg' },
            { nome: 'Minecraft', resumo: 'Minecraft é um dos melhores games sobre brincar com blocos. É excelente por diversas razões, mas a mais importante é que encoraja e permite um sentimento de maravilha de infância. A montanha no horizonte? Você pode cavar ali. Você pode fazer desta caverna a sua casa e cobri-la com lava para que fique sinistro. E então você pode explorar outras áreas e encontrar tesouro e lutar contra monstros.', desenvolvedor: 'Mojang Studios', genero: 'simulação', avaliacao: 9, console: 'pc', url: 'https://imagens-trabalho-baldochi.s3.amazonaws.com/3e00cc673a9f73fbba575a77a4fb28b4-minecraft.png' },
            { nome: 'Final Fantasy XIV', resumo: 'Fato é que Final Fantasy XIV sempre foi um MMORPG supremo, mas com a chegada da expansão Shadowbringers, o patamar do gênero foi elevado a outro nível. Seja uma de diversas raças disponíveis no jogo, e escolha a sua classe com base no sua preferência de gameplay.', desenvolvedor: 'Square Enix', genero: 'RPG', avaliacao: 9, console: 'pc', url: 'https://imagens-trabalho-baldochi.s3.us-east-2.amazonaws.com/466b2d1b48bb3115c2dd79491ba390fa-final%20fantasy.jpg' },
        ];


        dbo.collection("games").insertMany(gamesObj, function(err, res) {
            if (err) throw err;
            console.log("Number of documents inserted: " + res.insertedCount);
            db.close();
        });

    });
}