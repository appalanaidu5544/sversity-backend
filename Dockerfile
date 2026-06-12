FROM alpine:latest

# Set the PocketBase version matching your local instance
ARG PB_VERSION=0.38.1

# Install dependencies needed to download and extract PocketBase
RUN apk add --no-cache unzip ca-certificates

# Download and unzip the Linux version of PocketBase
ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /pb/

# Copy your local data and migrations into the container
COPY ./pb_data /pb/pb_data
COPY ./pb_migrations /pb/pb_migrations

# Expose the standard port and run PocketBase, binding it to Render's internal routing
EXPOSE 8080
CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8080"]