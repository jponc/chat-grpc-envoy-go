package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"net"

	apipb "github.com/jponc/chat-grpc-envoy-go/compiled-protos/apipb"
	"google.golang.org/grpc"
)

var port = flag.Int("port", 50051, "The server port")

// server is used to implement api.ApiServer.
type server struct {
	apipb.UnimplementedApiServer
}

// Hello implements api.ApiServer
func (s *server) Hello(ctx context.Context, in *apipb.HelloRequest) (*apipb.HelloResponse, error) {
	log.Printf("Received: %v", in.GetName())
	return &apipb.HelloResponse{Message: "Hello " + in.GetName()}, nil
}

func main() {
	flag.Parse()
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", *port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	// Creates the gRPC server
	s := grpc.NewServer()

	// Register ApiServer into gRPC server
	apipb.RegisterApiServer(s, &server{})
	log.Printf("server listening at %v", lis.Addr())
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
