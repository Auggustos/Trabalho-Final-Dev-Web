var MongoClient = require('mongodb').MongoClient;

module.exports = function createDatabase() {
    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        console.log("Database created!");
        db.close();
    });

    var url = "mongodb://localhost:27017/";

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
        dbo.createCollection("reviews", function(err, res) {
            if (err) throw err;
            console.log("Collection created!");
            db.close();
        });
    });


    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("consoles");
        var gamesObj = [
            { nome: 'The Witcher 3: Wild Hunt', resumo: 'A nova missão do caçador de monstros é dada em tempos sombrios nos quais um misterioso exército conhecido como a "Caçada Selvagem" invade os Reinos do Norte, deixando apenas sangue e ruína por onde passa; parece que Geralt é a chave para os parar.', desenvolveror: 'CD Projekt, CD Projekt RED', genero: 'RPG eletrônico de ação, Mundo aberto', avaliacao: 9, console: 'xbox', isEnable: true },
            { nome: 'Grand Theft Auto V', resumo: 'O game GTa 5 se passa na cidade metropolitana de Los Santos e no condado de Blaine County, no sul do estado de San Andreas no ano de 2013, cinco anos após os acontecimentos de Grand Theft Auto IV e Grand Theft Auto Episodes From Liberty City, e 4 anos após Grand Theft Auto: Chinatown Wars. E pela primeira vez em toda saga GTA, este conta uma história com três protagonistas diferentes', desenvolveror: 'Rockstar', genero: 'Jogo eletrônico de ação e aventura, Tiro em primeira pessoa', avaliacao: 9, console: 'xbox', isEnable: true },
            { nome: 'Red Dead Redemption 2', resumo: 'Red Dead Redemption 2 é um dos maiores jogos já feitos pela Rockstar Games e um dos maiores jogos de todos os tempos. O game é uma recriação espantosa e deslumbrante do oeste selvagem, repleta de detalhes e atividades, incluindo caça, partidas de pôquer e mais. E claro, os personagens de Red Dead 2 marcaram as nossas memórias: Arthur Morgan, John Marston, Sadie e Dutch são personalidades vibrantes e complexas. Este game é nada mais e nada menos que uma obra de arte.', desenvolveror: 'Rockstar', genero: 'Ação-aventura', avaliacao: 9, console: 'xbox', isEnable: true },
            { nome: 'God of War', resumo: 'O game inova o mundo de Kratos com muita maestria ao abrir espaço para mudanças corajosas, ao mesmo tempo em que mantém a fidelidade às origens da série. Narrativa e gameplay andam lado a lado do começo ao fim, fazendo com que cada centímetro explorado seja gratificante. Tudo, desde a história principal até as missões secundárias, acrescentam algo para jornada de Kratos e Atreus. E claro, a variedade de inimigos, desafiadores quebra-cabeças e o prazeroso combate completam a experiência.', desenvolveror: 'SIE Santa Monica Studio', genero: 'Ação-aventura', avaliacao: 9, console: 'playstation', isEnable: true },
            { nome: 'The Last of Us Part II', resumo: 'A continuação de The Last of Us representa um auge para games focados na narrativa. A proposta é ambiciosa e bastante perigosa, já que The Last of Us 2 tira o jogador da zona de conforto e brinca com as nossas emoções durante todo o game. Mesmo que você não concorde com todas as decisões, é necessário pontuar que este é, provavelmente, o título mais complexo que a Naughty Dog já criou. Sabemos que o gameplay não é perfeito, mas a experiência brutal com Ellie é simplesmente única e inesquecível.', desenvolveror: 'Naughty Dog', genero: 'Ação-aventura', avaliacao: 9, console: 'playstation', isEnable: true },
            { nome: 'Bloodborne', resumo: 'Bloodborne é uma incrível, empolgante e desgastante viagem por um universo maravilhoso e macabro que nos faz sentir como se estivéssemos descendo em uma espiral de insanidade. A FromSoftware pegou a fórmula que construiu na série Souls e injetou nela um senso de pavor, fúria e urgência que formam uma experiência inesquecível. Há uma sensação incrível de realização em vencer seus combates e desafios, mesmo que o sacrifício para chegar até lá seja enorme.', desenvolveror: '	FromSoftware', genero: 'RPG eletrônico de ação', avaliacao: 9, console: 'playstation', isEnable: true },
            { nome: 'The Legend of Zelda: Breath of the Wild', resumo: ' oferece uma sensação incomparável de liberdade e escala na palma da sua mão. Ele conta uma história épica e nos ensina novas mecânicas por meio de uma versão lindamente arruinada de Hyrule. Este game ajuda a revigorar The Legend of Zelda de uma maneira que os fãs apenas tinham em sonho, colocando-o facilmente ao posto de número um em nossa lista (e em nossos corações).', desenvolveror: 'Nintendo Entertainment Planning & Development', genero: '	Ação-aventura', avaliacao: 9, console: 'switch', isEnable: true },
            { nome: 'Super Smash Bros. Ultimate', resumo: 'Super Smash Bros. Ultimate traz tudo -- tudo mesmo -- que você espera da série. Há muito conteúdo, muitos lutadores e muitos desafios em um pacote que é um baú da história dos games. E melhor, tudo bem balanceado e bonito. Você pode ter o caos que o game oferece ou pode escolher uma luta mais justa. Pode jogar o modo história ou pode ir para um desafio online. Pode escolher personagens de diversas franquias históricas e até ter um herói favorito da sua vida para jogar até cansar (o que não vai acontecer tão cedo). Inclusive, poder fazer isso em qualquer lugar é um dos trunfos do Switch.', desenvolveror: '	Bandai Namco Studios Sora', genero: 'Luta', avaliacao: 9, console: 'switch', isEnable: true },
            { nome: 'Super Mario Odyssey', resumo: 'Uma aula magistral em plataformas 3D, Super Mario Odyssey combina perfeitamente os melhores elementos de quase todos os games de Mario com todo um portfólio de novas mecânicas para criar algo que é tão nostálgico quanto corajoso. Novos jogadores vão adorar explorar os novos e vastos mundos, enquanto os mais experientes provavelmente vão querer coletar todos os colecionáveis e superar os desafios. Em resumo, Super Mario Odyssey é alegria pura e sublime e um dos melhores games de Super Mario já feitos.', desenvolveror: 'Nintendo Entertainment Planning & Development', genero: 'Plataforma', avaliacao: 9, console: 'switch', isEnable: true },
            { nome: 'Portal 2', resumo: 'Nenhum outro game cumpre tanto tão bem. O level design impecável, a personalidade encantadora, e sistemas de puzzles variados e excepcionais nos fazem sentir inteligentes só de resolvê-los. Além disso, a campanha cooperativa requer diferentes tipos de "inteligentes", que faz dela uma das melhores experiências multiplayer do mercado.', desenvolveror: 'Valve', genero: 'Quebra-cabeça Plataforma', avaliacao: 9, console: 'pc', isEnable: true },
            { nome: 'Minecraft', resumo: 'Minecraft é um dos melhores games sobre brincar com blocos. É excelente por diversas razões, mas a mais importante é que encoraja e permite um sentimento de maravilha de infância. A montanha no horizonte? Você pode cavar ali. Você pode fazer desta caverna a sua casa e cobri-la com lava para que fique sinistro. E então você pode explorar outras áreas e encontrar tesouro e lutar contra monstros.', desenvolveror: 'Mojang Studios', genero: 'Sandbox, sobrevivência', avaliacao: 9, console: 'pc', isEnable: true },
            { nome: 'Final Fantasy XIV', resumo: 'Fato é que Final Fantasy XIV sempre foi um MMORPG supremo, mas com a chegada da expansão Shadowbringers, o patamar do gênero foi elevado a outro nível. Seja uma de diversas raças disponíveis no jogo, e escolha a sua classe com base no sua preferência de gameplay.', desenvolveror: 'Square Enix', genero: 'MMORPG', avaliacao: 9, console: 'pc', isEnable: true },
        ];
        var reviewObj = [
            { nome: 'The Witcher 3: Wild Hunt', nota: 10, opiniao: "muito divertido", isEnable: true },
            { nome: 'Grand Theft Auto V', nota: 6, opiniao: "muito legal", isEnable: true },
            { nome: 'Red Dead Redemption 2', nota: 9, opiniao: "muito empolgante", isEnable: true },
            { nome: 'God of War', nota: 8, opiniao: "muito prazeroso", isEnable: true },
            { nome: 'The Last of Us Part II', nota: 9, opiniao: "muito feliz", isEnable: true },
            { nome: 'Bloodborne', nota: 9, opiniao: "muito bom", isEnable: true },
            { nome: 'The Legend of Zelda: Breath of the Wild', nota: 10, opiniao: "muito desafiador", isEnable: true },
            { nome: 'Super Smash Bros. Ultimate', nota: 7, opiniao: "muito complicado", isEnable: true },
            { nome: 'Super Mario Odyssey', nota: 9, opiniao: "muito bem desenhado", isEnable: true },
            { nome: 'Portal 2', nota: 7, opiniao: "muito boa a história", isEnable: true },
            { nome: 'Minecraft', nota: 10, opiniao: "muito viciante", isEnable: true },
            { nome: 'Final Fantasy XIV', nota: 10, opiniao: "tudo de bom", isEnable: true },
        ]

        dbo.collection("games").insertMany(gamesObj, function(err, res) {
            if (err) throw err;
            console.log("Number of documents inserted: " + res.insertedCount);
            db.close();
        });
        dbo.collection("reviews").insertMany(reviewObj, function(err, res) {
            if (err) throw err;
            console.log("Number of documents inserted: " + res.insertedCount);
            db.close();
        });
    });
}