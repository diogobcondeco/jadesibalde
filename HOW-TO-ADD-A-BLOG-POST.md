# Como publicar um novo artigo no blog

## 1. Abrir a pasta de artigos no GitHub
Aceda a:
`https://github.com/diogobcondeco/jadesibalde/tree/main/content/posts`

## 2. Criar um novo ficheiro
Clique em **"Add file"** (canto superior direito) → **"Create new file"**.

## 3. Dar um nome ao ficheiro
No campo do nome, escreva algo como:
`2026-10-15-titulo-do-artigo.md`

Regras simples:
- Sempre a terminar em `.md`
- Sem espaços nem acentos no nome do ficheiro (use hífens `-`)
- Começar pela data ajuda a manter os artigos organizados

## 4. Colar e preencher este modelo

```
---
title: "Título do artigo aqui"
date: "2026-10-15"
excerpt: "Um resumo curto (1-2 frases) que aparece na lista do blog."
---

Escreva aqui o conteúdo do artigo.

Pode usar Markdown:
- `## Subtítulo` para títulos de secção
- `**negrito**` e `*itálico*`
- `[texto do link](https://exemplo.com)` para links
```

Pode clicar no separador **"Preview"** no editor do GitHub para ver como o Markdown vai ficar formatado.

## 5. Imagens (opcional)
A forma mais simples: envie a imagem primeiro para a pasta `public/images` (mesmo processo — "Add file" → "Upload files"), depois no artigo escreva:
`![Descrição da imagem](/images/nome-da-imagem.jpg)`

## 6. Publicar
No fundo da página:
- Deixe selecionado **"Commit directly to the main branch"**
- Clique em **"Commit changes"**

## 7. Verificar o site
O site atualiza-se automaticamente cerca de 1 a 2 minutos depois do commit. Se não aparecer, aguarde um pouco e atualize a página.

---

### Nota para o Diogo
A tua parceira precisa de ser convidada como colaboradora do repositório para conseguir fazer commits diretamente:
**Settings → Collaborators and teams → Add people** → introduzir o username ou email dela no GitHub.
