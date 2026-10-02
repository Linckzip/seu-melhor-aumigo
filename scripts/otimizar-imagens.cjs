const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const pastaImagens = path.join(__dirname, "..", "images");

async function otimizarImagem(caminhoEntrada) {

    const extensao = path.extname(caminhoEntrada).toLowerCase();

    if (![".jpg", ".jpeg"].includes(extensao)) {
        return;
    }

    const nomeArquivo = path.basename(
        caminhoEntrada,
        extensao
    );

    const pastaSaida = path.dirname(caminhoEntrada);

    const caminhoSaida = path.join(
        pastaSaida,
        `${nomeArquivo}.webp`
    );

    let larguraMaxima = 800;

    if (nomeArquivo.toLowerCase().includes("aumigo")) {
        larguraMaxima = 500;
    }

    await sharp(caminhoEntrada)
        .resize({
            width: larguraMaxima,
            fit: "inside",
            withoutEnlargement: true
        })
        .webp({
            quality: 80
        })
        .toFile(caminhoSaida);

    const tamanhoOriginal =
        fs.statSync(caminhoEntrada).size;

    const tamanhoNovo =
        fs.statSync(caminhoSaida).size;

    const reducao =
        ((tamanhoOriginal - tamanhoNovo) /
            tamanhoOriginal) * 100;

    console.log(`Imagem: ${path.relative(pastaImagens, caminhoEntrada)}`);
    console.log(
        `Original: ${(tamanhoOriginal / 1024).toFixed(2)} KB`
    );
    console.log(
        `WebP: ${(tamanhoNovo / 1024).toFixed(2)} KB`
    );
    console.log(
        `Redução: ${reducao.toFixed(2)}%`
    );
    console.log("-------------------------");
}

async function processarPasta(pasta) {

    const arquivos = fs.readdirSync(pasta);

    for (const arquivo of arquivos) {

        const caminho = path.join(pasta, arquivo);

        const informacoes = fs.statSync(caminho);

        if (informacoes.isDirectory()) {
            await processarPasta(caminho);
        } else {
            await otimizarImagem(caminho);
        }
    }
}

processarPasta(pastaImagens)
    .then(() => {
        console.log("Otimização das imagens concluída!");
    })
    .catch((erro) => {
        console.error("Erro ao otimizar as imagens:", erro);
        process.exit(1);
    });