FROM openjdk:21-jdk-oracle
VOLUME /tmp
COPY target/backend-0.0.1-SNAPSHOT.jar backend.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/backend.jar"]