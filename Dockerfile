# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies (including devDependencies for build)
RUN npm ci

# Copy source
COPY . .

# Create react-refresh symlink for CRA (avoids ModuleScopePlugin error)
RUN mkdir -p src/node_modules && ln -sf ../../node_modules/react-refresh src/node_modules/react-refresh

# Build (CRA outputs to /app/build)
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy the build folder (CRA outputs to /app/build, not /app/outputs)
COPY --from=builder /app/build /usr/share/nginx/html

# Optional: fix permissions
RUN chown -R nginx:nginx /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
