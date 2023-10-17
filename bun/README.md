# Bun

This application tries to run a server instance using a [distroless docker image](https://github.com/GoogleContainerTools/distroless/blob/main/cc). This image should include the following packages:

- `libgcc1` and its dependencies
- `glibc`
- `libssl`

Inspecting the files inside the container I can see that there is a `lib/x84_6e-linux-gnu` directory that has a `libc.so` file that appears to point to `libc-2.31.so`