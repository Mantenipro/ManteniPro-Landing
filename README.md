# GIT HUB

### EFECTUAR CAMBIOS

#### Revisa las ediciones y elabora una transacción de commit

~~~
$ git status
Enumera todos los archivos nuevos o modificados que se deben confirmar
~~~
~~~
$ git diff
Muestra las diferencias de archivos que no se han enviado aún al area de espera
~~~
~~~
$ git add [file]
Toma una instantánea del archivo para preparar la versión
~~~
~~~
$ git diff --staged
Muestra las diferencias del archivo entre el área de espera y la última versión del archivo
~~~

~~~
$ git reset [file]
Mueve el archivo del área de espera, pero preserva su contenido
~~~
~~~
$ git commit -m "[descriptive message]"

Registra las instantáneas del archivo permanentemente en el historial de versión
~~~

### CREAR REPOSITORIOS

#### Inicia un nuevo repositorio u obtiene uno de una URL existente
~~~
$ git init [project -name]
Crea un nuevo repositorio local con el nombre especificado
~~~
~~~
$ git clone [url]
Descarga un proyecto y toda su historia de versión
~~~

### CAMBIOS GRUPALES

#### Nombra una serie de commits y combina esfuerzos ya culminados

~~~
$ git branch
Enumera todas las ramas en el repositorio actual
~~~
~~~
$ git branch [branch-name]
Crea una nueva rama
~~~

~~~
$ git checkout [branch-name]
Cambia a la rama especificada y actualiza el directorio activo
~~~
~~~
$ git merge [branch]
Combina el historial de la rama especificada con la rama actual
~~~
~~~
$ git branch -d [branch-name]

Borra la rama especificada
~~~



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


