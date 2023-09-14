---
sidebar_position: 5
---

# 删除

普通删除:

```go
batis.Delete("users", batis.Where("id = #{id}", batis.Param("id",1)))
```

限制删除 1 条记录:
```go
batis.Affect(1).Delete("users", batis.Where("id = #{id}", batis.Param("id",1)))
```

限制删除至少 1 条记录:

```go
batis.Affect("1+").Delete("users", batis.Where("id = #{id}", batis.Param("id",1)))
```
