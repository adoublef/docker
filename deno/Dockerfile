ARG DENO_VERSION=1.37.0

FROM denoland/deno:${DENO_VERSION} AS build
WORKDIR /app

# USER deno

COPY deno.* deps.ts ./
RUN deno cache deps.ts

ADD . .

RUN deno cache main.ts

# ? --------------------------------

FROM gcr.io/distroless/cc AS final
WORKDIR /app

COPY --from=build /etc/passwd /etc/passwd
COPY --from=build /etc/group /etc/group

COPY --from=build --chown=deno:deno /deno-dir /root/.cache/deno
COPY --from=build --chown=deno:deno /usr/bin/deno deno

COPY . .

CMD ["./deno", "run", "-A", "--unstable", "main.ts"]

EXPOSE 8000