#!/bin/bash

PROTO_DIR=./proto
OUTPUT_DIR=./client/src

mkdir -p $OUTPUT_DIR

yarn proto-loader-gen-types --keep-case --longs=String --enums=String --defaults --oneofs --grpcLib=@grpc/grpc-js --outDir=${PROTO_DIR}/ ${PROTO_DIR}/*.proto

protoc -I=. ${PROTO_DIR}/*.proto \
  --js_out=import_style=commonjs,binary:$OUTPUT_DIR \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:$OUTPUT_DIR