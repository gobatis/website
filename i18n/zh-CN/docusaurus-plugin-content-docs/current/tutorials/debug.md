---
sidebar_position: 4
---

# 调试


```go
db = db.WithTraceId("1")

ctx := batis.WrapTraceId(context.Backgroun(), "1")
db.WithContext(ctx).Insert()
```
