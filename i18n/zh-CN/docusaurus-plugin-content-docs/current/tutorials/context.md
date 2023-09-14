---
sidebar_position: 1
---

# Context


## 包装事务

```go
ctx := batis.WithTx(context.Background(), db)
```

## 包装 Trace ID

```go
ctx := batis.WithTraceId(context.Background())
```

## 包装 Trace 模式

```go
ctx := batis.WithTraceMode(context.Background())
```

## 包装调试模式

```go
ctx := batis.WithDebugMode(context.Background())
```

