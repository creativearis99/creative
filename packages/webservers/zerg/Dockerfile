FROM yurikrupnik/client-apps_lerna AS builder

#ARG distFolder=lib
#ARG modulePath=.
#ENV MODULE_PATH=$modulePath

#COPY . .$MODULE_PATH
COPY . ./packages/webservers/zerg
RUN npm run pi
RUN npm run build
RUN ls
FROM node:12-alpine
#
ARG port=8080
ENV PORT=$port
#
#ARG distFolder=dist
#ARG modulePath=.
#ENV DIST_FOLDER=$distFolder
#ENV MODULE_PATH=$modulePath
WORKDIR /usr/src/app
COPY --from=builder /app/packages/webservers/zerg/dist .
RUN ls
RUN npm install --only=production
#
EXPOSE 8080
#
CMD ["npm", "start"]
