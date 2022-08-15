compile_protos:
	protoc --go_out=. --go-grpc_out=. protos/*
	protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./web/src --ts_proto_opt=outputClientImpl=grpc-web protos/*

build_envoy:
	cd envoy && \
		docker build -t chat-grpc-envoy-go-envoy:1.0 .

run_server:
	go run server/api/api.go

run_envoy:
	docker run --network=host chat-grpc-envoy-go-envoy:1.0


