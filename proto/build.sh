#!/bin/bash

PROTO_DIR=./proto

yarn proto-loader-gen-types --keep-case --longs=String --enums=String --defaults --oneofs --grpcLib=@grpc/grpc-js --outDir=${PROTO_DIR}/ ${PROTO_DIR}/*.proto

mkdir -p ../client/proto

protoc -I=. ${PROTO_DIR}/*.proto \
  --js_out=import_style=commonjs,binary:../client/src \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:../client/src