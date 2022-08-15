compile_protos:
	protoc --go_out=. --go-grpc_out=. protos/*
	protoc --js_out=import_style=commonjs,binary:./web/src \
		--grpc-web_out=import_style=typescript,mode=grpcweb:./web/src protos/*

build_envoy:
	cd envoy && \
		docker build -t chat-grpc-envoy-go-envoy:1.0 .

build_api:
	cd api && env GOARCH=amd64 GOOS=linux go build -ldflags="-s -w" -o bin/api api.go && \
		docker build -t chat-grpc-envoy-go-api:1.0 .

run_envoy_and_server:
	docker-compose up
