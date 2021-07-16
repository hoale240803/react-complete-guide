build-local:
	docker build \
		-t react-app-local \
		--build-arg CADDYFILE=Caddyfile.local \
		--build-arg BASE_URL=http://localhost:5000/api \
	 	-f Dockerfile.production .
build-dev:
	docker build -t react-app-production -f Dockerfile.dev .

build-production:
	docker build -t react-app-production -f Dockerfile.production .





###################

### 
build-local-xx:
	docker build \
		-t react-app-production:local \
		--build-arg CADDYFILE=Caddyfile.local \
		--build-arg BASE_URL=http://localhost:5000/api \
		-f Dockerfile.production .

###################

build-production-xx:
	docker build \
		-t react-app-production:production \
		--build-arg CADDYFILE=Caddyfile.production \
		--build-arg BASE_URL=https://mern.mysuperawesomesite.com/api \
		-f Dockerfile.production .


