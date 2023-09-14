---
sidebar_position: 0
---

# DB

## Clone

new clone db with every chain call

```go 
fmt.Printf("%p", db)          // #1
fmt.Printf("%p", db.Debug())  // #2
fmt.Printf("%p", db.Must())   // #3
```

## 影响行约束

will check the RowsAffected > 0  or Scan rows > 0

```go
db.Affect()
```

## 调试模式

```go
db.Debug()
```

## Trace ID

```go
db.WithTraceId("test")
```
