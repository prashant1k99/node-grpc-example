#!/bin/bash

PROTO_DIR=./proto

yarn proto-loader-gen-types --keep-case --longs=String --enums=String --defaults --oneofs --grpcLib=@grpc/grpc-js --outDir=${PROTO_DIR}/ ${PROTO_DIR}/*.proto