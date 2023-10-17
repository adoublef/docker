# Deno

This application tries to run a server instance using a [distroless docker image](https://github.com/GoogleContainerTools/distroless/blob/main/cc). This image should include the following packages:

- `libgcc1` and its dependencies
- `glibc`
- `libssl`

The error is as follows 

```bash
7 14:52:11 error: Uncaught TypeError: libc.so: cannot open shared object file: No such file or directory
2023-10-17 14:52:11     at Object.Module._extensions..node (node:module:780:24)
2023-10-17 14:52:11     at Module.load (node:module:658:32)
2023-10-17 14:52:11     at Function.Module._load (node:module:539:12)
2023-10-17 14:52:11     at Module.require (node:module:677:19)
2023-10-17 14:52:11     at require (node:module:791:16)
2023-10-17 14:52:11     at Object.<anonymous> (file:///root/.cache/deno/npm/registry.npmjs.org/libsql/0.1.29/index.js:33:24)
2023-10-17 14:52:11     at Object.<anonymous> (file:///root/.cache/deno/npm/registry.npmjs.org/libsql/0.1.29/index.js:322:4)
2023-10-17 14:52:11     at Module._compile (node:module:733:34)
2023-10-17 14:52:11     at Object.Module._extensions..js (node:module:747:10)
2023-10-17 14:52:11     at Module.load (node:module:658:32)
```

Inspecting the files inside the container I can see that there is a `lib/x84_6e-linux-gnu` directory that has a `libc.so` file that appears to point to `libc-2.31.so`